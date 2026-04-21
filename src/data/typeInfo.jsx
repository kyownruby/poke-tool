const TYPE_INFO = {
  normal:   { ja: 'ノーマル', color: 'bg-gray-300 text-gray-800' },
  fire:     { ja: 'ほのお', color: 'bg-red-500 text-white' },
  water:    { ja: 'みず', color: 'bg-blue-500 text-white' },
  electric: { ja: 'でんき', color: 'bg-yellow-400 text-yellow-900' },
  grass:    { ja: 'くさ', color: 'bg-green-500 text-white' },
  ice:      { ja: 'こおり', color: 'bg-cyan-300 text-cyan-900' },
  fighting: { ja: 'かくとう', color: 'bg-orange-700 text-white' },
  poison:   { ja: 'どく', color: 'bg-purple-500 text-white' },
  ground:   { ja: 'じめん', color: 'bg-amber-600 text-white' },
  flying:   { ja: 'ひこう', color: 'bg-indigo-300 text-indigo-900' },
  psychic:  { ja: 'エスパー', color: 'bg-pink-500 text-white' },
  bug:      { ja: 'むし', color: 'bg-lime-500 text-white' },
  rock:     { ja: 'いわ', color: 'bg-yellow-700 text-white' },
  ghost:    { ja: 'ゴースト', color: 'bg-purple-800 text-white' },
  dragon:   { ja: 'ドラゴン', color: 'bg-indigo-700 text-white' },
  dark:     { ja: 'あく', color: 'bg-gray-700 text-white' },
  steel:    { ja: 'はがね', color: 'bg-gray-400 text-gray-800' },
  fairy:    { ja: 'フェアリー', color: 'bg-pink-300 text-pink-900' },
};

export function getTypeName(en) {
  return TYPE_INFO[en]?.ja ?? en;
}

export function getTypeColor(en) {
  return TYPE_INFO[en]?.color ?? 'bg-gray-200 text-gray-700';
}

export function TypeBadge({ type }) {
  return (
    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${getTypeColor(type)}`}>
      {getTypeName(type)}
    </span>
  );
}

export default TYPE_INFO;
