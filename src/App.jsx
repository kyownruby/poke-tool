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

  function addMyPokemon(entry) {
    setMyPokemon(prev => [...prev, entry]);
  }

  function addOpponentPokemon(entry) {
    setOpponentPokemon(prev => [...prev, entry]);
  }

  function removeMyPokemon(index) {
    setMyPokemon(prev => prev.filter((_, i) => i !== index));
  }

  function removeOpponentPokemon(index) {
    setOpponentPokemon(prev => prev.filter((_, i) => i !== index));
  }

  const timeline = useMemo(
    () => buildTimeline(myPokemon, opponentPokemon, myRank, opponentRank),
    [myPokemon, opponentPokemon, myRank, opponentRank]
  );

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
              {myPokemon.map((entry, i) => (
                <div key={`my-${i}`} className="flex items-center gap-1 bg-[#E6F1FB] border border-[#378ADD] rounded-full px-3 py-1 text-sm">
                  <img src={entry.pokemon.sprite} alt="" className="w-5 h-5" />
                  <span className="text-[#2563EB] font-medium">{entry.pokemon.displayName}</span>
                  <button onClick={() => removeMyPokemon(i)} className="text-blue-400 hover:text-blue-600 ml-1">✕</button>
                </div>
              ))}
              {opponentPokemon.map((entry, i) => (
                <div key={`opp-${i}`} className="flex items-center gap-1 bg-[#FCEBEB] border border-[#E24B4A] rounded-full px-3 py-1 text-sm">
                  <img src={entry.pokemon.sprite} alt="" className="w-5 h-5" />
                  <span className="text-[#DC2626] font-medium">{entry.pokemon.displayName}</span>
                  <button onClick={() => removeOpponentPokemon(i)} className="text-red-400 hover:text-red-600 ml-1">✕</button>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <RankControl label="🔵 自分" rank={myRank} onRankChange={setMyRank} color="blue" />
              <RankControl label="🔴 相手" rank={opponentRank} onRankChange={setOpponentRank} color="red" />
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="font-bold text-sm text-gray-700 mb-3">素早さタイムライン（速い順）</h2>
              <Timeline patterns={timeline} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
