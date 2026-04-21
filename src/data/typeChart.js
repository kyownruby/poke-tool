const TYPES = ['normal','fire','water','electric','grass','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'];

const chart = {
  normal:   [1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1,1,.5,1],
  fire:     [1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1,2,1],
  water:    [1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1,1,1],
  electric: [1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5,1,1,1],
  grass:    [1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5,1,.5,1],
  ice:      [1,.5,.5,1,2,.5,1,1,2,2,1,1,1,1,2,1,.5,1],
  fighting: [2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1,2,2,.5],
  poison:   [1,1,1,1,2,1,1,.5,.5,1,1,1,.5,.5,1,1,0,2],
  ground:   [1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1,1,2,1],
  flying:   [1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1,1,.5,1],
  psychic:  [1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1,0,.5,1],
  bug:      [1,.5,1,1,2,1,.5,.5,1,.5,2,1,1,.5,1,2,.5,.5],
  rock:     [1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1,1,.5,1],
  ghost:    [0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,.5,1,1],
  dragon:   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,.5,0],
  dark:     [1,1,1,1,1,1,.5,1,1,1,2,1,1,2,1,.5,1,.5],
  steel:    [1,.5,.5,.5,1,2,1,1,1,1,1,1,2,1,1,1,.5,2],
  fairy:    [1,.5,1,1,1,1,2,.5,1,1,1,1,1,1,2,2,.5,1],
};

export function getTypeEffectiveness(atkType, defTypes) {
  const atkIdx = TYPES.indexOf(atkType);
  if (atkIdx === -1) return 1;
  let mult = 1;
  for (const dt of defTypes) {
    const defIdx = TYPES.indexOf(dt);
    if (defIdx === -1) continue;
    mult *= chart[atkType][defIdx];
  }
  return mult;
}

export { TYPES };
