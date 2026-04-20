import { useState, useMemo } from 'react';
import PokemonSearch from './components/PokemonSearch';
import Timeline from './components/Timeline';
import RankControl from './components/RankControl';
import { buildTimeline } from './utils/speedCalc';

function App() {
  const [myPokemon, setMyPokemon] = useState([]);
  const [opponentPokemon, setOpponentPokemon] = useState([]);
  const [myRank, setMyRank] = useState(0);
  const [opponentRank, setOpponentRank] = useState(0);
  const [hiddenPatterns, setHiddenPatterns] = useState(new Set());

  function addMyPokemon(entry) {
    const dup = myPokemon.some(e =>
      e.pokemon.displayName === entry.pokemon.displayName &&
      e.params.nature === entry.params.nature &&
      e.params.abilityPoints === entry.params.abilityPoints &&
      e.params.scarf === entry.params.scarf
    );
    if (dup) return;
    setMyPokemon(prev => [...prev, entry]);
  }

  function addOpponentPokemon(entry) {
    if (opponentPokemon.some(e => e.pokemon.displayName === entry.pokemon.displayName)) return;
    setOpponentPokemon(prev => [...prev, entry]);
  }

  function removeMyPokemonByName(name) {
    setMyPokemon(prev => prev.filter(e => e.pokemon.displayName !== name));
    setHiddenPatterns(new Set());
  }

  function removeOpponentPokemonByName(name) {
    setOpponentPokemon(prev => prev.filter(e => e.pokemon.displayName !== name));
    setHiddenPatterns(new Set());
  }

  function hidePattern(key) {
    setHiddenPatterns(prev => new Set(prev).add(key));
  }

  function restoreAllPatterns() {
    setHiddenPatterns(new Set());
  }

  const timeline = useMemo(() => {
    const all = buildTimeline(myPokemon, opponentPokemon, myRank, opponentRank);
    return all.filter(p => !hiddenPatterns.has(p.patternId));
  }, [myPokemon, opponentPokemon, myRank, opponentRank, hiddenPatterns]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold text-gray-800">
            ⚡ ポケモンチャンピオンズ 素早さ比較ツール
          </h1>
          <p className="text-xs text-gray-500 mt-1">Lv.50 / 個体値31固定 / 能力ポイント0〜32</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PokemonSearch side="mine" onAdd={addMyPokemon} />
          <PokemonSearch side="opponent" onAdd={addOpponentPokemon} />
        </div>

        {(myPokemon.length > 0 || opponentPokemon.length > 0) && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {[...new Map(myPokemon.map(e => [e.pokemon.displayName, e])).values()].map(entry => {
                const name = entry.pokemon.displayName;
                return (
                  <div key={`my-${name}`} className="flex items-center gap-1 bg-[#E6F1FB] border border-[#378ADD] rounded-full px-3 py-1 text-sm">
                    <img src={entry.pokemon.sprite} alt="" className="w-5 h-5" />
                    <span className="text-[#2563EB] font-medium">{name}</span>
                    <button onClick={() => removeMyPokemonByName(name)} className="text-blue-400 hover:text-blue-600 ml-1">✕</button>
                  </div>
                );
              })}
              {[...new Map(opponentPokemon.map(e => [e.pokemon.displayName, e])).values()].map(entry => {
                const name = entry.pokemon.displayName;
                return (
                  <div key={`opp-${name}`} className="flex items-center gap-1 bg-[#FCEBEB] border border-[#E24B4A] rounded-full px-3 py-1 text-sm">
                    <img src={entry.pokemon.sprite} alt="" className="w-5 h-5" />
                    <span className="text-[#DC2626] font-medium">{name}</span>
                    <button onClick={() => removeOpponentPokemonByName(name)} className="text-red-400 hover:text-red-600 ml-1">✕</button>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <RankControl label="🔵 自分" rank={myRank} onRankChange={setMyRank} color="blue" />
              <RankControl label="🔴 相手" rank={opponentRank} onRankChange={setOpponentRank} color="red" />
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-sm text-gray-700">素早さタイムライン（速い順）</h2>
                {hiddenPatterns.size > 0 && (
                  <button onClick={restoreAllPatterns} className="text-xs text-gray-500 hover:text-gray-700 underline">
                    非表示を全て復元 ({hiddenPatterns.size}件)
                  </button>
                )}
              </div>
              <Timeline patterns={timeline} onHide={hidePattern} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
