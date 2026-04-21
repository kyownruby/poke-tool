export const attackerAbilities = {
  'guts':        { label: 'こんじょう', effect: { condition: 'status', stat: 'attack', mult: 1.5 } },
  'hustle':      { label: 'はりきり', effect: { stat: 'attack', mult: 1.5 } },
  'sheer-force': { label: 'ちからずく', effect: { condition: 'hasSecondary', power: 1.3 } },
  'reckless':    { label: 'すてみ', effect: { condition: 'recoil', power: 1.2 } },
  'analytic':    { label: 'アナライズ', effect: { condition: 'lastMove', power: 1.3 } },
  'technician':  { label: 'テクニシャン', effect: { condition: 'lowPower', power: 1.5 } },
  'adaptability': { label: 'てきおうりょく', effect: { stabOverride: 2.0 } },
  'pixilate':    { label: 'フェアリースキン', effect: { typeChange: 'fairy', power: 1.2 } },
  'aerilate':    { label: 'スカイスキン', effect: { typeChange: 'flying', power: 1.2 } },
  'refrigerate': { label: 'フリーズスキン', effect: { typeChange: 'ice', power: 1.2 } },
  'normalize':   { label: 'ノーマルスキン', effect: { typeChangeAll: 'normal' } },
  'flare-boost': { label: 'ねつぼうそう', effect: { condition: 'burned', stat: 'spAtk', mult: 1.5 } },
};

export const defenderAbilities = {
  'fluffy':       { label: 'もふもふ', effect: { contactHalf: true, fireDouble: true } },
  'fur-coat':     { label: 'ファーコート', effect: { physicalHalf: true } },
  'prism-armor':  { label: 'プリズムアーマー', effect: { superEffectiveReduce: 0.75 } },
  'filter':       { label: 'フィルター', effect: { superEffectiveReduce: 0.75 } },
  'solid-rock':   { label: 'ハードロック', effect: { superEffectiveReduce: 0.75 } },
  'multiscale':   { label: 'マルチスケイル', effect: { fullHpHalf: true } },
  'ice-scales':   { label: 'こおりのりんぷん', effect: { specialHalf: true } },
};
