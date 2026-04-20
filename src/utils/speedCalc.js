export const SPEED_ABILITIES = {
  'swift-swim': { label: 'すいすい', multiplier: 2 },
  'chlorophyll': { label: 'ようりょくそ', multiplier: 2 },
  'sand-rush': { label: 'すなかき', multiplier: 2 },
  'slush-rush': { label: 'ゆきかき', multiplier: 2 },
  'quick-feet': { label: 'はやあし', multiplier: 1.5 },
  'unburden': { label: 'かるわざ', multiplier: 2 },
  'surge-surfer': { label: 'サーフテール', multiplier: 2 },
};

export const RANK_MULTIPLIERS = {
  6: 4.0, 5: 3.5, 4: 3.0, 3: 2.5, 2: 2.0, 1: 1.5, 0: 1.0,
  '-1': 0.67, '-2': 0.5, '-3': 0.4, '-4': 0.33, '-5': 0.28, '-6': 0.25,
};

export function calcSpeedStat(baseSpeed, abilityPoints, natureMod) {
  const inner = Math.floor((baseSpeed * 2 + 31 + abilityPoints * 2) * 50 / 100) + 5;
  return Math.floor(inner * natureMod);
}

export function applyScarf(stat) {
  return Math.floor(stat * 1.5);
}

export function applyAbilityMultiplier(stat, multiplier) {
  return Math.floor(stat * multiplier);
}

export function applyRank(stat, rank) {
  const mult = RANK_MULTIPLIERS[rank] ?? 1.0;
  return Math.floor(stat * mult);
}

export function generateMyPatterns(pokemon, params) {
  const { nature, abilityPoints, scarf } = params;
  const isMega = pokemon.englishName?.includes('-mega');
  const base = calcSpeedStat(pokemon.speed, abilityPoints, nature);
  const useScarf = scarf && !isMega;
  const label = useScarf ? 'スカーフ' : '通常';
  return [{ pokemonName: pokemon.displayName, sprite: pokemon.sprite, stat: useScarf ? applyScarf(base) : base, label, side: 'mine', scarf: useScarf }];
}

export function generateOpponentPatterns(pokemon) {
  const isMega = pokemon.englishName?.includes('-mega');
  const basePositive = calcSpeedStat(pokemon.speed, 32, 1.1);
  const baseNeutral = calcSpeedStat(pokemon.speed, 32, 1.0);
  const patterns = [];

  patterns.push({ label: '補正あり', stat: basePositive, scarf: false, abilityMult: null });
  patterns.push({ label: '補正なし', stat: baseNeutral, scarf: false, abilityMult: null });

  if (!isMega) {
    patterns.push({ label: 'スカーフ(補正あり)', stat: applyScarf(basePositive), scarf: true, abilityMult: null });
    patterns.push({ label: 'スカーフ(補正なし)', stat: applyScarf(baseNeutral), scarf: true, abilityMult: null });
  }

  const speedAbilities = pokemon.abilities
    .filter(a => SPEED_ABILITIES[a])
    .map(a => ({ name: a, ...SPEED_ABILITIES[a] }));

  for (const ab of speedAbilities) {
    patterns.push({
      label: `${ab.label}発動(補正あり)`,
      stat: applyAbilityMultiplier(basePositive, ab.multiplier),
      scarf: false,
      abilityMult: ab.multiplier,
    });
    patterns.push({
      label: `${ab.label}発動(補正なし)`,
      stat: applyAbilityMultiplier(baseNeutral, ab.multiplier),
      scarf: false,
      abilityMult: ab.multiplier,
    });
    if (!isMega) {
      patterns.push({
        label: `スカーフ＋${ab.label}(補正あり)`,
        stat: applyAbilityMultiplier(applyScarf(basePositive), ab.multiplier),
        scarf: true,
        abilityMult: ab.multiplier,
      });
      patterns.push({
        label: `スカーフ＋${ab.label}(補正なし)`,
        stat: applyAbilityMultiplier(applyScarf(baseNeutral), ab.multiplier),
        scarf: true,
        abilityMult: ab.multiplier,
      });
    }
  }

  return patterns.map(p => ({
    pokemonName: pokemon.displayName,
    sprite: pokemon.sprite,
    side: 'opponent',
    ...p,
  }));
}

export function buildTimeline(myPokemonList, opponentPokemonList, myRank, opponentRank) {
  const allPatterns = [];
  let idCounter = 0;

  for (const [ei, entry] of myPokemonList.entries()) {
    const patterns = generateMyPatterns(entry.pokemon, entry.params);
    for (const [pi, p] of patterns.entries()) {
      allPatterns.push({ ...p, finalStat: applyRank(p.stat, myRank), patternId: `m${ei}-${pi}` });
    }
  }

  for (const [ei, entry] of opponentPokemonList.entries()) {
    const patterns = generateOpponentPatterns(entry.pokemon);
    for (const [pi, p] of patterns.entries()) {
      allPatterns.push({ ...p, finalStat: applyRank(p.stat, opponentRank), patternId: `o${ei}-${pi}` });
    }
  }

  allPatterns.sort((a, b) => b.finalStat - a.finalStat);
  return allPatterns;
}
