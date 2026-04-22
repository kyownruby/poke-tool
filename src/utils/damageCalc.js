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
  if (options.defSR) {
    const srEff = getTypeEffectiveness('rock', defender.types);
    const srDamage = Math.floor(hpStat * srEff / 8);
    effectiveHp = Math.max(1, hpStat - srDamage);
  }

  atkStat = applyRank(atkStat, atkRank);
  const defRank = options.defRank ?? 0;
  defStat = applyRank(defStat, defRank);

  let moveType = move.type;
  let movePower = move.power;

  // Charge: double electric move power
  if (options.atkCharged && moveType === 'electric') {
    movePower = movePower * 2;
  }

  // Ability: type-changing skills (Pixilate, etc.)
  const atkAbility = atkAbilities[atkAbilityKey];
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

  // Defender ability: check mold breaker
  const atkAbilityMoldBreaker = atkAbility?.effect?.moldBreaker;
  const defAbility = defAbilities[defAbilityKey];

  if (!atkAbilityMoldBreaker && defAbility) {
    // Immunity abilities
    if (defAbility.effect?.immune === moveType) {
      return { damages: [0], minDmg: 0, maxDmg: 0, minPct: '0.0', maxPct: '0.0',
        hpStat: calcStat(defender.stats.hp, hpAP, 1.0, true), koText: '無効', typeEff: 0, stab: 1, moveType, immune: true };
    }
    // Wonder Guard
    if (defAbility.effect?.wonderGuard && typeEff <= 1) {
      return { damages: [0], minDmg: 0, maxDmg: 0, minPct: '0.0', maxPct: '0.0',
        hpStat: calcStat(defender.stats.hp, hpAP, 1.0, true), koText: '無効', typeEff, stab: 1, moveType, immune: true };
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
  if (weather === 'sun' && moveType === 'fire') weatherMult = 1.5;
  if (weather === 'sun' && moveType === 'water') weatherMult = 0.5;
  if (weather === 'rain' && moveType === 'water') weatherMult = 1.5;
  if (weather === 'rain' && moveType === 'fire') weatherMult = 0.5;

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
  if (activeDefAbility?.effect?.fullHpHalf && options.defFullHp) defAbilityMult *= 0.5;
  if (activeDefAbility?.effect?.contactHalf && options.contactMove) defAbilityMult *= 0.5;
  if (activeDefAbility?.effect?.fireDouble && moveType === 'fire') defAbilityMult *= 2;

  // Defender item: resist berry
  let defItemMult = 1.0;
  if (defItem?.effect?.resistBerry === moveType && typeEff > 1) defItemMult = 0.5;

  // Protect: blocks damage
  if (options.defProtect) {
    return { damages: [0], minDmg: 0, maxDmg: 0, minPct: '0.0', maxPct: '0.0',
      hpStat: effectiveHp, koText: 'まもるで無効', typeEff, stab, moveType, immune: true };
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
    damages.push(dmg);
  }

  const minDmg = Math.min(...damages);
  const maxDmg = Math.max(...damages);
  const minPct = (minDmg / effectiveHp * 100).toFixed(1);
  const maxPct = (maxDmg / effectiveHp * 100).toFixed(1);

  // KO calculation (using effectiveHp for SR)
  let koText = '';
  if (maxDmg >= effectiveHp) {
    const koCount = damages.filter(d => d >= effectiveHp).length;
    if (koCount === 16) koText = '確定1発';
    else koText = `乱数1発 (${(koCount / 16 * 100).toFixed(1)}%)`;
  } else {
    const hitsNeeded = Math.ceil(effectiveHp / minDmg);
    const hitsMax = Math.ceil(effectiveHp / maxDmg);
    if (hitsNeeded === hitsMax) {
      koText = `確定${hitsNeeded}発`;
    } else {
      const koAtMin = damages.filter(d => d * hitsMax >= effectiveHp).length;
      koText = `乱数${hitsMax}発 (${(koAtMin / 16 * 100).toFixed(1)}%)`;
    }
  }

  return {
    damages,
    minDmg, maxDmg,
    minPct, maxPct,
    hpStat: effectiveHp,
    hpMax: hpStat,
    koText,
    typeEff,
    stab,
    moveType,
  };
}
