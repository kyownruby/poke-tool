import { useState, useMemo, useEffect } from 'react';
import PokemonSearch from './PokemonSearch';
import Timeline from './Timeline';
import { buildTimeline, applyRank } from '../utils/speedCalc';

const STORAGE_KEY = 'poke-tool-speed';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    s.hiddenPatterns = new Set(s.hiddenPatterns || []);
    return s;
  } catch { return null; }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...state,
      hiddenPatterns: [...state.hiddenPatterns],
    }));
  } catch {}
}

export default function SpeedTool() {
  const saved = loadState();
  const [myPokemon, setMyPokemon] = useState(saved?.myPokemon ?? []);
  const [opponentPokemon, setOpponentPokemon] = useState(saved?.opponentPokemon ?? []);
  const [hiddenPatterns, setHiddenPatterns] = useState(saved?.hiddenPatterns ?? new Set());
  const [rankOverrides, setRankOverrides] = useState(saved?.rankOverrides ?? {});
  const [paralysisOverrides, setParalysisOverrides] = useState(saved?.paralysisOverrides ?? {});

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
    const sameParams = existing &&
      existing.params.abilityPoints === entry.params.abilityPoints &&
      existing.params.speedMode === entry.params.speedMode &&
      existing.params.showScarf === entry.params.showScarf;
    if (sameParams) {
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

  function clearAll() {
    setMyPokemon([]);
    setOpponentPokemon([]);
    setHiddenPatterns(new Set());
    setRankOverrides({});
    setParalysisOverrides({});
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

  useEffect(() => {
    saveState({ myPokemon, opponentPokemon, hiddenPatterns, rankOverrides, paralysisOverrides });
  }, [myPokemon, opponentPokemon, hiddenPatterns, rankOverrides, paralysisOverrides]);

  return (
    <div className="space-y-6">
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
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-sm text-gray-700">素早さタイムライン（速い順）</h2>
              <button onClick={clearAll} className="text-xs text-red-400 hover:text-red-600 underline">
                すべて削除
              </button>
            </div>
            <Timeline patterns={timeline} onHide={hidePattern} onRankChange={setPatternRank} onToggleParalysis={toggleParalysis} />
          </div>
        </div>
      )}
    </div>
  );
}
