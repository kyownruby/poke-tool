export default function Timeline({ patterns }) {
  if (patterns.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8 text-sm">
        ポケモンを追加すると、ここに素早さ比較が表示されるよ
      </div>
    );
  }

  let prevStat = null;

  return (
    <div className="space-y-1">
      {patterns.map((p, i) => {
        const isMine = p.side === 'mine';
        const bg = isMine ? 'bg-[#E6F1FB] border-[#378ADD]' : 'bg-[#FCEBEB] border-[#E24B4A]';
        const textColor = isMine ? 'text-[#2563EB]' : 'text-[#DC2626]';
        const icon = isMine ? '🔵' : '🔴';
        const samePrev = prevStat === p.finalStat;
        prevStat = p.finalStat;

        return (
          <div key={`${p.pokemonName}-${p.label}-${i}`}>
            {samePrev && (
              <div className="text-center text-xs text-yellow-600 font-bold py-0.5">
                ⚡ 同速 ⚡
              </div>
            )}
            <div className={`flex items-center gap-3 px-4 py-2 rounded-lg border-l-4 ${bg}`}>
              <span className="text-base">{icon}</span>
              <img src={p.sprite} alt="" className="w-8 h-8 -my-1" />
              <span className={`font-bold text-sm min-w-[5rem] ${textColor}`}>{p.pokemonName}</span>
              <span className="text-xs text-gray-500 min-w-[10rem]">{p.label}</span>
              <span className="ml-auto text-right">
                <span className="text-xs text-gray-400">実数値: </span>
                <span className={`font-mono font-bold text-lg ${textColor}`}>{p.finalStat}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
