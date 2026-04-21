import { useState, useMemo, useEffect } from 'react';
import PokemonSearch from './components/PokemonSearch';
import Timeline from './components/Timeline';
import { buildTimeline, applyRank } from './utils/speedCalc';

function App() {
  const [myPokemon, setMyPokemon] = useState([]);
  const [opponentPokemon, setOpponentPokemon] = useState([]);
  const [hiddenPatterns, setHiddenPatterns] = useState(new Set());
  const [rankOverrides, setRankOverrides] = useState({});
  const [paralysisOverrides, setParalysisOverrides] = useState({});

  function clearOverrides(prefix) {
    setHiddenPatterns(prev => {
      const next = new Set(prev);
      for (const key of next) { if (key.startsWith(prefix)) next.delete(key); }
      return next;
    });
    setRankOverrides(prev => {
      const next = { ...prev };
      for (const key of Object.keys(next)) { if (key.startsWith(prefix)) delete next[key]; }
      return next;
    });
    setParalysisOverrides(prev => {
      const next = { ...prev };
      for (const key of Object.keys(next)) { if (key.startsWith(prefix)) delete next[key]; }
      return next;
    });
  }

  function addMyPokemon(entry) {
    const name = entry.pokemon.displayName;
    const dup = myPokemon.some(e =>
      e.pokemon.displayName === name &&
      e.params.nature === entry.params.nature &&
      e.params.abilityPoints === entry.params.abilityPoints &&
      e.params.scarf === entry.params.scarf
    );
    if (dup) {
      clearOverrides(`mine-${name}-${entry.params.nature}-${entry.params.abilityPoints}-${entry.params.scarf}`);
      return;
    }
    setMyPokemon(prev => [...prev, entry]);
  }

  function addOpponentPokemon(entry) {
    const name = entry.pokemon.displayName;
    const existing = opponentPokemon.find(e => e.pokemon.displayName === name);
    if (existing && existing.params.abilityPoints === entry.params.abilityPoints) {
      clearOverrides(`opp-${name}-`);
      return;
    }
    if (existing) {
      setOpponentPokemon(prev => prev.map(e => e.pokemon.displayName === name ? entry : e));
      clearOverrides(`opp-${name}-`);
      return;
    }
    setOpponentPokemon(prev => [...prev, entry]);
  }

  function removeMyPokemonByName(name) {
    setMyPokemon(prev => prev.filter(e => e.pokemon.displayName !== name));
    clearOverrides(`mine-${name}-`);
  }

  function removeOpponentPokemonByName(name) {
    setOpponentPokemon(prev => prev.filter(e => e.pokemon.displayName !== name));
    clearOverrides(`opp-${name}-`);
  }

  function hidePattern(key) {
    setHiddenPatterns(prev => new Set(prev).add(key));
  }

  function setPatternRank(patternId, rank) {
    setRankOverrides(prev => ({ ...prev, [patternId]: rank }));
  }

  function toggleParalysis(patternId) {
    setParalysisOverrides(prev => ({ ...prev, [patternId]: !prev[patternId] }));
  }

  const timeline = useMemo(() => {
    const all = buildTimeline(myPokemon, opponentPokemon);
    const withMods = all.map(p => {
      const rank = rankOverrides[p.patternId] ?? 0;
      const paralysis = paralysisOverrides[p.patternId] ?? false;
      let finalStat = applyRank(p.stat, rank);
      if (paralysis) finalStat = Math.floor(finalStat * 0.5);
      return { ...p, rank, paralysis, finalStat };
    });
    withMods.sort((a, b) => b.finalStat - a.finalStat);
    return withMods.filter(p => !hiddenPatterns.has(p.patternId));
  }, [myPokemon, opponentPokemon, hiddenPatterns, rankOverrides, paralysisOverrides]);

  useEffect(() => {
    if (hiddenPatterns.size === 0) return;
    const allPatterns = buildTimeline(myPokemon, opponentPokemon);
    const groups = new Map();
    for (const p of allPatterns) {
      const key = `${p.side}-${p.pokemonName}`;
      if (!groups.has(key)) groups.set(key, { side: p.side, name: p.pokemonName, ids: [] });
      groups.get(key).ids.push(p.patternId);
    }
    for (const g of groups.values()) {
      if (g.ids.every(id => hiddenPatterns.has(id))) {
        const prefix = `${g.side === 'mine' ? 'mine' : 'opp'}-${g.name}-`;
        if (g.side === 'mine') {
          setMyPokemon(prev => prev.filter(e => e.pokemon.displayName !== g.name));
        } else {
          setOpponentPokemon(prev => prev.filter(e => e.pokemon.displayName !== g.name));
        }
        clearOverrides(prefix);
      }
    }
  }, [hiddenPatterns, myPokemon, opponentPokemon]);

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

            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="font-bold text-sm text-gray-700 mb-3">素早さタイムライン（速い順）</h2>
              <Timeline patterns={timeline} onHide={hidePattern} onRankChange={setPatternRank} onToggleParalysis={toggleParalysis} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
