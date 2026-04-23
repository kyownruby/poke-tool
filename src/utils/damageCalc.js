import { getTypeEffectiveness } from '../data/typeChart';

const RANK_MULTS = {
  6:8/2, 5:7/2, 4:6/2, 3:5/2, 2:4/2, 1:3/2, 0:2/2,
  '-1':2/3, '-2':2/4, '-3':2/5, '-4':2/6, '-5':2/7, '-6':2/8,
};

export function calcStat(base, abilityPoints, natureMod, isHp = false) {
  if (isHp) {
    return Math.floor((base * 2 + 31 + abilityPoints * 2) * 50 / 100) + 50 + 10;
  }
  const inner = Math.floor((base * 2 + 31 + abilityPoints * 2) * 50 / 100) + 5;
  return Math.floor(inner * natureMod);
}

function applyRank(stat, rank) {
  const mult = RANK_MULTS[rank] ?? 1;
  return Math.floor(stat * mult);
}

export function calculateDamage({
  attacker, defender, move,
  atkNature = 1.0, atkAP = 32, atkRank = 0,
  defNature = 1.0, defAP = 32, hpAP = 32,
  weather = 'none', field = 'none',
  atkItem = null, defItem = null,
  atkAbilityKey = null, defAbilityKey = null,
  atkAbilities = {}, defAbilities = {},
  options = {},
}) {
  if (!attacker || !defender || !move || !move.power) return null;

  const isPhysical = move.damage_class === 'physical';
  const atkBaseStat = isPhysical ? attacker.stats.attack : attacker.stats.spAtk;
  const defBaseStat = isPhysical ? defender.stats.defense : defender.stats.spDef;

  // Roost: remove flying type temporarily
  const defenderTypes = options.defRoost
    ? defender.types.filter(t => t !== 'flying')
    : defender.types;

  let atkStat = calcStat(atkBaseStat, atkAP, atkNature);
  let defStat = calcStat(defBaseStat, defAP, defNature);
  const hpStat = calcStat(defender.stats.hp, hpAP, 1.0, true);

  // Stealth Rock: calculate HP after SR damage
  let effectiveHp = hpStat;
  let srDamage = 0;
  if (options.defSR) {
    const srEff = getTypeEffectiveness('rock', defender.types);
    srDamage = Math.floor(hpStat * srEff / 8);
    effectiveHp = Math.max(1, hpStat - srDamage);
  }

  atkStat = applyRank(atkStat, atkRank);
  const defRank = options.defRank ?? 0;
  defStat = applyRank(defStat, defRank);

  // Effective weather (mega-sol forces sun)
  const atkAbility = atkAbilities[atkAbilityKey];
  const effectiveWeather = atkAbility?.effect?.permanentSun ? 'sun' : weather;

  // Weather: defensive stat boosts
  if (effectiveWeather === 'sand' && !isPhysical && defender.types.includes('rock')) {
    defStat = Math.floor(defStat * 1.5);
  }
  if (effectiveWeather === 'snow' && isPhysical && defender.types.includes('ice')) {
    defStat = Math.floor(defStat * 1.5);
  }

  let moveType = move.type;
  let movePower = move.power;

  // Weather Ball: type and power change based on weather
  if (move.englishName === 'weather-ball' && effectiveWeather !== 'none') {
    movePower = 100;
    const weatherTypeMap = { sun: 'fire', rain: 'water', sand: 'rock', snow: 'ice' };
    moveType = weatherTypeMap[effectiveWeather] || moveType;
  }

  // Knock Off: 1.5x power if defender has an item (not Mega)
  const defIsMega = defender.englishName?.includes('-mega');
  const knockOffBoosted = move.englishName === 'knock-off' && defItem?.key !== 'none' && defItem && !defIsMega;
  if (knockOffBoosted) {
    movePower = Math.floor(movePower * 1.5);
  }

  // Poltergeist: fails if defender has no item (Mega always has Mega Stone)
  if (move.englishName === 'poltergeist' && (!defItem || defItem.key === 'none') && !defIsMega) {
    return { damages: [0], minDmg: 0, maxDmg: 0, minPct: '0.0', maxPct: '0.0',
      hpStat: effectiveHp, hpMax: hpStat, srDamage: 0, multiHit: null,
      koText: '失敗（持ち物なし）', typeEff: 0, stab: 1, moveType, movePower, immune: true };
  }

  // Charge: double electric move power
  if (options.atkCharged && moveType === 'electric') {
    movePower = movePower * 2;
  }

  if (atkAbility?.effect?.typeChange && moveType === 'normal') {
    moveType = atkAbility.effect.typeChange;
    movePower = Math.floor(movePower * atkAbility.effect.power);
  }
  if (atkAbility?.effect?.typeChangeAll) {
    moveType = atkAbility.effect.typeChangeAll;
  }

  // Ability: stat boosts
  if (atkAbility?.effect?.stat === 'attack' && isPhysical && !atkAbility.effect.condition) {
    atkStat = Math.floor(atkStat * atkAbility.effect.mult);
  }
  if (atkAbility?.effect?.stat === 'attack' && isPhysical && atkAbility.effect.condition === 'status' && options.atkStatus) {
    atkStat = Math.floor(atkStat * atkAbility.effect.mult);
  }
  if (atkAbility?.effect?.stat === 'spAtk' && !isPhysical && atkAbility.effect.condition === 'burned' && options.atkBurned) {
    atkStat = Math.floor(atkStat * atkAbility.effect.mult);
  }

  // Ability: power boosts
  if (atkAbility?.effect?.condition === 'lowPower' && movePower <= 60) {
    movePower = Math.floor(movePower * atkAbility.effect.power);
  }
  if (atkAbility?.effect?.condition === 'lastMove' && options.lastMove) {
    movePower = Math.floor(movePower * atkAbility.effect.power);
  }
  if (atkAbility?.effect?.condition === 'hasSecondary' && options.hasSecondary) {
    movePower = Math.floor(movePower * atkAbility.effect.power);
  }
  if (atkAbility?.effect?.condition === 'recoil' && options.recoilMove) {
    movePower = Math.floor(movePower * atkAbility.effect.power);
  }
  if (atkAbility?.effect?.lowHpTypeBoost === moveType && options.atkLowHp) {
    movePower = Math.floor(movePower * atkAbility.effect.power);
  }

  // Item: stat boosts
  if (atkItem?.effect?.stat === 'attack' && isPhysical) {
    atkStat = Math.floor(atkStat * atkItem.effect.mult);
  }
  if (atkItem?.effect?.stat === 'spAtk' && !isPhysical) {
    atkStat = Math.floor(atkStat * atkItem.effect.mult);
  }
  if (atkItem?.effect?.stat === 'both') {
    atkStat = Math.floor(atkStat * atkItem.effect.mult);
  }

  // Burn
  if (isPhysical && options.atkBurned && atkAbilityKey !== 'guts') {
    atkStat = Math.floor(atkStat * 0.5);
  }

  // Base damage
  const baseDamage = Math.floor(Math.floor(Math.floor(2 * 50 / 5 + 2) * movePower * atkStat / defStat) / 50 + 2);

  // Type effectiveness
  let typeEff = getTypeEffectiveness(moveType, defenderTypes);

  // Scrappy: Normal/Fighting can hit Ghost
  if (atkAbility?.effect?.scrappy && typeEff === 0 && (moveType === 'normal' || moveType === 'fighting')) {
    const nonGhostTypes = defenderTypes.filter(t => t !== 'ghost');
    typeEff = nonGhostTypes.length > 0 ? getTypeEffectiveness(moveType, nonGhostTypes) : 1;
  }

  // Defender ability: check mold breaker
  const atkAbilityMoldBreaker = atkAbility?.effect?.moldBreaker;
  const defAbility = defAbilities[defAbilityKey];

  if (!atkAbilityMoldBreaker && defAbility) {
    // Immunity abilities
    if (defAbility.effect?.immune === moveType) {
      return { damages: [0], minDmg: 0, maxDmg: 0, minPct: '0.0', maxPct: '0.0',
        hpStat: calcStat(defender.stats.hp, hpAP, 1.0, true), koText: '無効', typeEff: 0, stab: 1, moveType, movePower, immune: true };
    }
    // Wonder Guard
    if (defAbility.effect?.wonderGuard && typeEff <= 1) {
      return { damages: [0], minDmg: 0, maxDmg: 0, minPct: '0.0', maxPct: '0.0',
        hpStat: calcStat(defender.stats.hp, hpAP, 1.0, true), koText: '無効', typeEff, stab: 1, moveType, movePower, immune: true };
    }
    // Dry Skin fire weakness
    if (defAbility.effect?.fireWeakness && moveType === 'fire') {
      typeEff *= defAbility.effect.fireWeakness;
    }
    // Thick Fat / Heatproof
    if (defAbility.effect?.resistType?.includes(moveType)) {
      typeEff *= defAbility.effect.mult;
    }
  }

  // STAB
  let stab = 1.0;
  if (attacker.types.includes(moveType)) {
    stab = atkAbility?.effect?.stabOverride ?? 1.5;
  }

  // Weather
  let weatherMult = 1.0;
  if (effectiveWeather === 'sun' && moveType === 'fire') weatherMult = 1.5;
  if (effectiveWeather === 'sun' && moveType === 'water') weatherMult = 0.5;
  if (effectiveWeather === 'rain' && moveType === 'water') weatherMult = 1.5;
  if (effectiveWeather === 'rain' && moveType === 'fire') weatherMult = 0.5;

  // Field
  let fieldMult = 1.0;
  if (field === 'electric' && moveType === 'electric') fieldMult = 1.3;
  if (field === 'grassy' && moveType === 'grass') fieldMult = 1.3;
  if (field === 'psychic' && moveType === 'psychic') fieldMult = 1.3;
  if (field === 'misty' && moveType === 'dragon') fieldMult = 0.5;

  // Item: damage multipliers
  let itemMult = 1.0;
  if (atkItem?.effect?.damage) itemMult = atkItem.effect.damage;
  if (atkItem?.effect?.typeBoost === moveType) itemMult = atkItem.effect.mult;
  if (atkItem?.effect?.superEffective && typeEff > 1) itemMult = atkItem.effect.superEffective;
  if (atkItem?.effect?.punchMove && options.punchMove) itemMult = atkItem.effect.punchMove;

  // Defender ability: damage modifiers (skip if mold breaker)
  let defAbilityMult = 1.0;
  const activeDefAbility = atkAbilityMoldBreaker ? null : defAbility;
  if (activeDefAbility?.effect?.physicalHalf && isPhysical) defAbilityMult *= 0.5;
  if (activeDefAbility?.effect?.specialHalf && !isPhysical) defAbilityMult *= 0.5;
  if (activeDefAbility?.effect?.superEffectiveReduce && typeEff > 1) defAbilityMult *= defAbility.effect.superEffectiveReduce;
  const hasMultiscale = activeDefAbility?.effect?.fullHpHalf && options.defFullHp;
  if (hasMultiscale) defAbilityMult *= 0.5;
  if (activeDefAbility?.effect?.contactHalf && options.contactMove) defAbilityMult *= 0.5;
  if (activeDefAbility?.effect?.fireDouble && moveType === 'fire') defAbilityMult *= 2;

  // Defender item: resist berry
  let defItemMult = 1.0;
  if (defItem?.effect?.resistBerry === moveType && typeEff > 1) defItemMult = 0.5;

  // Protect: blocks damage
  // Protect (piercing-drill: contact moves deal ×0.25 through Protect)
  let protectMult = 1.0;
  if (options.defProtect) {
    if (atkAbility?.effect?.protectPierce && move.contact) {
      protectMult = 0.25;
    } else {
      return { damages: [0], minDmg: 0, maxDmg: 0, minPct: '0.0', maxPct: '0.0',
        hpStat: effectiveHp, koText: 'まもるで無効', typeEff, stab, moveType, movePower, immune: true };
    }
  }

  // Reflect / Light Screen
  let screenMult = 1.0;
  if (options.defScreen) {
    screenMult = 0.5;
  }

  // Calculate 16 damage rolls
  const damages = [];
  for (let roll = 85; roll <= 100; roll++) {
    let dmg = baseDamage;
    dmg = Math.floor(dmg * weatherMult);
    dmg = Math.floor(dmg * fieldMult);
    dmg = Math.floor(dmg * screenMult);
    dmg = Math.floor(dmg * stab);
    dmg = Math.floor(dmg * typeEff);
    dmg = Math.floor(dmg * itemMult);
    dmg = Math.floor(dmg * defAbilityMult);
    dmg = Math.floor(dmg * defItemMult);
    dmg = Math.floor(dmg * roll / 100);
    dmg = Math.floor(dmg * protectMult);
    damages.push(dmg);
  }

  const minDmg = Math.min(...damages);
  const maxDmg = Math.max(...damages);
  const minPct = (minDmg / effectiveHp * 100).toFixed(1);
  const maxPct = (maxDmg / effectiveHp * 100).toFixed(1);

  // Multi-hit: compute per-hit damage without Multiscale for 2nd+ hits
  const defAbilityMultNoMS = hasMultiscale ? defAbilityMult / 0.5 : defAbilityMult;
  function calcHitDamage(power, abilityMult) {
    const bd = Math.floor(Math.floor(Math.floor(2 * 50 / 5 + 2) * power * atkStat / defStat) / 50 + 2);
    const dmgs = [];
    for (let roll = 85; roll <= 100; roll++) {
      let dmg = bd;
      dmg = Math.floor(dmg * weatherMult);
      dmg = Math.floor(dmg * fieldMult);
      dmg = Math.floor(dmg * screenMult);
      dmg = Math.floor(dmg * stab);
      dmg = Math.floor(dmg * typeEff);
      dmg = Math.floor(dmg * itemMult);
      dmg = Math.floor(dmg * abilityMult);
      dmg = Math.floor(dmg * defItemMult);
      dmg = Math.floor(dmg * roll / 100);
      dmg = Math.floor(dmg * protectMult);
      dmgs.push(dmg);
    }
    return dmgs;
  }

  let multiHit = null;
  const minHits = move.minHits;
  const maxHits = move.maxHits;

  if (move.escalating) {
    const escalatingDamages = move.escalating.map((power, i) =>
      calcHitDamage(power, i === 0 ? defAbilityMult : defAbilityMultNoMS)
    );
    const totalMin = escalatingDamages.reduce((sum, d) => sum + Math.min(...d), 0);
    const totalMax = escalatingDamages.reduce((sum, d) => sum + Math.max(...d), 0);
    multiHit = {
      hits: move.escalating.length,
      minHits: move.escalating.length,
      maxHits: move.escalating.length,
      perHitMin: minDmg,
      perHitMax: maxDmg,
      totalMin,
      totalMax,
      totalMinPct: (totalMin / effectiveHp * 100).toFixed(1),
      totalMaxPct: (totalMax / effectiveHp * 100).toFixed(1),
      escalating: true,
    };
  } else if (minHits && maxHits) {
    const noMSdmgs = hasMultiscale ? calcHitDamage(movePower, defAbilityMultNoMS) : null;
    const noMSmin = noMSdmgs ? Math.min(...noMSdmgs) : minDmg;
    const noMSmax = noMSdmgs ? Math.max(...noMSdmgs) : maxDmg;
    const totalMin = minDmg + noMSmin * (minHits - 1);
    const totalMax = maxDmg + noMSmax * (maxHits - 1);
    multiHit = {
      minHits,
      maxHits,
      perHitMin: minDmg,
      perHitMax: maxDmg,
      totalMin,
      totalMax,
      totalMinPct: (totalMin / effectiveHp * 100).toFixed(1),
      totalMaxPct: (totalMax / effectiveHp * 100).toFixed(1),
    };
  }

  // KO calculation (use multi-hit total if applicable)
  const koMinDmg = multiHit ? multiHit.totalMin : minDmg;
  const koMaxDmg = multiHit ? multiHit.totalMax : maxDmg;

  // For Knock Off: 2nd+ hits use normal power (item already gone)
  let knockOffNormalMin = koMinDmg, knockOffNormalMax = koMaxDmg;
  if (knockOffBoosted) {
    const normalPower = move.power;
    const normalDmgs = calcHitDamage(normalPower, defAbilityMult);
    knockOffNormalMin = Math.min(...normalDmgs);
    knockOffNormalMax = Math.max(...normalDmgs);
  }

  const healBerry = defItem?.effect?.healBerry;
  const focusSashActive = defItem?.key === 'focus-sash';
  const hasLeftovers = defItem?.effect?.leftovers;

  function simulateKO(firstDmg, restDmg, hp) {
    // Simulate HP loss turn by turn with berry heal, focus sash, leftovers
    let currentHp = hp;
    let berryUsed = false;
    let sashUsed = false;
    let turns = 0;
    while (currentHp > 0 && turns < 50) {
      const dmg = turns === 0 ? firstDmg : restDmg;
      const fullHp = currentHp === hp;
      let newHp = currentHp - dmg;
      // Focus Sash: survives one-shot from full HP
      if (focusSashActive && !sashUsed && fullHp && newHp <= 0) {
        newHp = 1;
        sashUsed = true;
      }
      currentHp = newHp;
      turns++;
      if (currentHp <= 0) break;
      // Healing berry: triggers when HP ≤ 50%
      if (healBerry && !berryUsed && currentHp <= Math.floor(hp / 2)) {
        const healAmount = healBerry === 'sitrus' ? Math.floor(hp / 4) : 10;
        currentHp = Math.min(hp, currentHp + healAmount);
        berryUsed = true;
      }
      // Leftovers: heal 1/16 max HP each turn end
      if (hasLeftovers) {
        currentHp = Math.min(hp, currentHp + Math.floor(hp / 16));
      }
    }
    return turns;
  }

  function countTurnsToKO(firstMin, firstMax, restMin, restMax, hp) {
    const turnsMax = simulateKO(firstMax, restMax, hp);
    const turnsMin = simulateKO(firstMin, restMin, hp);
    return [turnsMax, turnsMin];
  }

  const [turnsMax, turnsNeeded] = countTurnsToKO(koMinDmg, koMaxDmg, knockOffNormalMin, knockOffNormalMax, effectiveHp);
  let koText = turnsNeeded === turnsMax
    ? `確定${turnsNeeded}発`
    : `確定${turnsNeeded}発、乱数${turnsMax}発`;

  return {
    damages,
    minDmg, maxDmg,
    minPct, maxPct,
    hpStat: effectiveHp,
    hpMax: hpStat,
    srDamage,
    multiHit,
    koText,
    typeEff,
    stab,
    moveType,
    movePower,
  };
}
