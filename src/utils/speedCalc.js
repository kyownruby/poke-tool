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
  return [{
    pokemonName: pokemon.displayName, sprite: pokemon.sprite,
    baseSpeed: pokemon.speed,
    stat: useScarf ? applyScarf(base) : base,
    label: '通常', side: 'mine', scarf: useScarf,
    natureMod: nature, abilityPoints,
  }];
}

export function generateOpponentPatterns(pokemon) {
  const isMega = pokemon.englishName?.includes('-mega');
  const basePositive = calcSpeedStat(pokemon.speed, 32, 1.1);
  const baseNeutral = calcSpeedStat(pokemon.speed, 32, 1.0);
  const patterns = [];

  const base = { abilityPoints: 32, abilityMult: null };
  patterns.push({ ...base, label: '通常', stat: basePositive, scarf: false, natureMod: 1.1 });
  patterns.push({ ...base, label: '通常', stat: baseNeutral, scarf: false, natureMod: 1.0 });

  if (!isMega) {
    patterns.push({ ...base, label: '通常', stat: applyScarf(basePositive), scarf: true, natureMod: 1.1 });
    patterns.push({ ...base, label: '通常', stat: applyScarf(baseNeutral), scarf: true, natureMod: 1.0 });
  }

  const speedAbilities = pokemon.abilities
    .filter(a => SPEED_ABILITIES[a])
    .map(a => ({ name: a, ...SPEED_ABILITIES[a] }));

  for (const ab of speedAbilities) {
    patterns.push({
      ...base, label: `${ab.label}発動`, natureMod: 1.1,
      stat: applyAbilityMultiplier(basePositive, ab.multiplier),
      scarf: false, abilityMult: ab.multiplier,
    });
    patterns.push({
      ...base, label: `${ab.label}発動`, natureMod: 1.0,
      stat: applyAbilityMultiplier(baseNeutral, ab.multiplier),
      scarf: false, abilityMult: ab.multiplier,
    });
    if (!isMega) {
      patterns.push({
        ...base, label: `${ab.label}発動`, natureMod: 1.1,
        stat: applyAbilityMultiplier(applyScarf(basePositive), ab.multiplier),
        scarf: true, abilityMult: ab.multiplier,
      });
      patterns.push({
        ...base, label: `${ab.label}発動`, natureMod: 1.0,
        stat: applyAbilityMultiplier(applyScarf(baseNeutral), ab.multiplier),
        scarf: true, abilityMult: ab.multiplier,
      });
    }
  }

  return patterns.map(p => ({
    pokemonName: pokemon.displayName,
    sprite: pokemon.sprite,
    baseSpeed: pokemon.speed,
    side: 'opponent',
    ...p,
  }));
}

export function buildTimeline(myPokemonList, opponentPokemonList) {
  const allPatterns = [];

  for (const entry of myPokemonList) {
    const patterns = generateMyPatterns(entry.pokemon, entry.params);
    for (const p of patterns) {
      const patternId = `mine-${p.pokemonName}-${p.natureMod}-${p.abilityPoints}-${p.scarf}`;
      allPatterns.push({ ...p, patternId });
    }
  }

  for (const entry of opponentPokemonList) {
    const patterns = generateOpponentPatterns(entry.pokemon);
    for (const p of patterns) {
      const patternId = `opp-${p.pokemonName}-${p.label}-${p.natureMod}-${p.scarf}`;
      allPatterns.push({ ...p, patternId });
    }
  }

  return allPatterns;
}
