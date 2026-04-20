export default function Timeline({ patterns, onHide }) {
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
              <span className={`font-bold text-sm min-w-[5rem] ${textColor}`}>
                {p.pokemonName}
                <span className="text-[10px] text-gray-400 font-normal ml-1">({p.baseSpeed})</span>
              </span>
              <div className="flex flex-wrap items-center gap-1 min-w-[14rem]">
                <span className="text-xs text-gray-500">{p.label}</span>
                {p.natureMod != null && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${p.natureMod > 1 ? 'bg-red-100 text-red-600' : p.natureMod < 1 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                    {p.natureMod > 1 ? '↑補正' : p.natureMod < 1 ? '↓補正' : '補正なし'}
                  </span>
                )}
                {p.abilityPoints != null && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-600">
                    P:{p.abilityPoints}
                  </span>
                )}
                {p.scarf && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-600">
                    スカーフ
                  </span>
                )}
              </div>
              <span className="ml-auto flex items-center gap-2">
                <span className="text-right">
                  <span className="text-xs text-gray-400">実数値: </span>
                  <span className={`font-mono font-bold text-lg ${textColor}`}>{p.finalStat}</span>
                </span>
                <button
                  onClick={() => onHide(p.patternId)}
                  className="text-gray-300 hover:text-gray-500 text-sm leading-none"
                  title="この行を非表示"
                >✕</button>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
