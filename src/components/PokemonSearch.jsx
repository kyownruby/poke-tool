import { useState, useRef, useEffect } from 'react';
import pokemonNames from '../data/pokemonNames';
import pokemonData from '../data/pokemonData';

const allEntries = Object.entries(pokemonNames);

function getSpriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export default function PokemonSearch({ side, onAdd }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [nature, setNature] = useState(1.1);
  const [abilityPoints, setAbilityPoints] = useState(32);
  const [scarf, setScarf] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function toKatakana(str) {
    return str.replace(/[ぁ-ゖ]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60));
  }

  function handleInput(value) {
    setQuery(value);
    if (!value.trim()) { setSuggestions([]); return; }
    const lower = value.toLowerCase();
    const kata = toKatakana(value);
    const matches = allEntries
      .filter(([ja, en]) => ja.includes(kata) || en.includes(lower));
    setSuggestions(matches);
    setShowSuggestions(true);
  }

  function resolvePokemon(jaName, enName) {
    const data = pokemonData[enName];
    if (!data) return null;
    return {
      displayName: jaName,
      englishName: enName,
      speed: data.speed,
      abilities: data.abilities,
      sprite: getSpriteUrl(data.id),
    };
  }

  function handleSelect(jaName, enName) {
    setQuery(jaName);
    setShowSuggestions(false);
    setSuggestions([]);
  }

  function handleAdd() {
    const entry = allEntries.find(([ja]) => ja === query);
    let pokemon;
    if (entry) {
      pokemon = resolvePokemon(entry[0], entry[1]);
    } else {
      const lower = query.toLowerCase();
      const data = pokemonData[lower];
      if (data) {
        const jaEntry = allEntries.find(([, en]) => en === lower);
        pokemon = resolvePokemon(jaEntry ? jaEntry[0] : query, lower);
      }
    }
    if (!pokemon) return;

    if (side === 'mine') {
      onAdd({ pokemon, params: { nature, abilityPoints, scarf } });
    } else {
      onAdd({ pokemon, params: { abilityPoints } });
    }
  }

  const isMine = side === 'mine';
  const borderColor = isMine ? 'border-[#378ADD]' : 'border-[#E24B4A]';
  const bgColor = isMine ? 'bg-[#E6F1FB]' : 'bg-[#FCEBEB]';
  const btnColor = isMine ? 'bg-[#378ADD] hover:bg-[#2a6fbf]' : 'bg-[#E24B4A] hover:bg-[#c93d3c]';

  return (
    <div ref={wrapperRef} className={`border-2 ${borderColor} ${bgColor} rounded-xl p-4 space-y-3`}>
      <h3 className="font-bold text-sm">{isMine ? '🔵 自分のポケモン' : '🔴 相手のポケモン'}</h3>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={e => handleInput(e.target.value)}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          placeholder="ポケモン名を入力（日本語 or 英語）"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-lg max-h-64 overflow-y-auto">
            {suggestions.map(([ja, en]) => (
              <li
                key={en}
                onClick={() => handleSelect(ja, en)}
                className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer text-sm"
              >
                <img src={getSpriteUrl(pokemonData[en]?.id)} alt="" className="w-6 h-6" />
                <span className="font-medium">{ja}</span>
                <span className="text-gray-400 text-xs">({en})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap gap-3 items-center text-sm">
        {isMine && (
          <label className="flex items-center gap-1">
            性格:
            <select value={nature} onChange={e => setNature(Number(e.target.value))} className="border rounded px-2 py-1">
              <option value={1.1}>プラス (×1.1)</option>
              <option value={1.0}>なし (×1.0)</option>
              <option value={0.9}>マイナス (×0.9)</option>
            </select>
          </label>
        )}
        <label className="flex items-center gap-1">
          能力P:
          <input
            type="number" min={0} max={32} value={abilityPoints}
            onChange={e => setAbilityPoints(Math.min(32, Math.max(0, Number(e.target.value))))}
            className="border rounded px-2 py-1 w-16 text-center"
          />
        </label>
        {isMine && (
          <label className="flex items-center gap-1.5">
            <input type="checkbox" checked={scarf} onChange={e => setScarf(e.target.checked)} />
            こだわりスカーフ
          </label>
        )}
      </div>

      <button onClick={handleAdd} className={`${btnColor} text-white font-bold px-4 py-2 rounded-lg text-sm w-full`}>
        追加
      </button>
    </div>
  );
}
