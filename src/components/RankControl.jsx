export default function RankControl({ label, rank, onRankChange, color }) {
  const bg = color === 'blue' ? 'bg-[#378ADD]' : 'bg-[#E24B4A]';
  const bgLight = color === 'blue' ? 'bg-[#E6F1FB]' : 'bg-[#FCEBEB]';

  return (
    <div className={`flex items-center gap-2 ${bgLight} rounded-lg px-3 py-2`}>
      <span className="text-sm font-bold">{label}</span>
      <span className="text-xs text-gray-500">素早さランク:</span>
      <button
        onClick={() => onRankChange(Math.max(-6, rank - 1))}
        disabled={rank <= -6}
        className={`${bg} text-white w-7 h-7 rounded font-bold text-lg leading-none disabled:opacity-30`}
      >−</button>
      <span className="font-mono font-bold w-8 text-center text-sm">
        {rank >= 0 ? `+${rank}` : rank}
      </span>
      <button
        onClick={() => onRankChange(Math.min(6, rank + 1))}
        disabled={rank >= 6}
        className={`${bg} text-white w-7 h-7 rounded font-bold text-lg leading-none disabled:opacity-30`}
      >＋</button>
    </div>
  );
}
