import { useState, useMemo, useEffect, useRef } from 'react';
import pokemonNames from '../data/pokemonNames';
import pokemonData from '../data/pokemonData';
import pokemonMovesList from '../data/pokemonMoves';
import moveDataMap from '../data/moveData';
import items from '../data/items';
import { attackerAbilities, defenderAbilities } from '../data/damageAbilities';
import { calculateDamage } from '../utils/damageCalc';

const allEntries = Object.entries(pokemonNames);

function toKatakana(str) {
  return str.replace(/[ぁ-ゖ]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60));
}

function getSpriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function PokemonSelector({ label, color, pokemon, onChange }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) { if (ref.current && !ref.current.contains(e.target)) setShow(false); }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleInput(v) {
    setQuery(v);
    if (!v.trim()) { setSuggestions([]); return; }
    const lower = v.toLowerCase();
    const kata = toKatakana(v);
    setSuggestions(allEntries.filter(([ja, en]) => ja.includes(kata) || en.includes(lower)));
    setSelectedIndex(-1);
    setShow(true);
  }

  function handleSelect(ja, en) {
    const data = pokemonData[en];
    if (!data) return;
    setQuery(ja);
    setShow(false);
    setSuggestions([]);
    onChange({ displayName: ja, englishName: en, ...data, sprite: getSpriteUrl(data.id) });
  }

  function handleKeyDown(e) {
    if (!show || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex(prev => Math.max(prev - 1, 0)); }
    else if (e.key === 'Enter' && selectedIndex >= 0) { e.preventDefault(); handleSelect(...suggestions[selectedIndex]); }
  }

  const borderColor = color === 'blue' ? 'border-[#378ADD]' : 'border-[#E24B4A]';
  const bgColor = color === 'blue' ? 'bg-[#E6F1FB]' : 'bg-[#FCEBEB]';

  return (
    <div ref={ref} className={`border-2 ${borderColor} ${bgColor} rounded-xl p-3 space-y-2`}>
      <h3 className="font-bold text-sm">{label}</h3>
      <div className="relative">
        <input type="text" value={query} onChange={e => handleInput(e.target.value)} onKeyDown={handleKeyDown}
          onFocus={() => suggestions.length > 0 && setShow(true)}
          placeholder="ポケモン名" className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
        {show && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-lg max-h-48 overflow-y-auto">
            {suggestions.map(([ja, en], idx) => (
              <li key={en} onClick={() => handleSelect(ja, en)}
                className={`flex items-center gap-2 px-3 py-1 cursor-pointer text-sm ${idx === selectedIndex ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                <img src={getSpriteUrl(pokemonData[en]?.id)} alt="" className="w-5 h-5" />
                <span className="font-medium">{ja}</span>
                <span className="text-gray-400 text-xs">({en})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {pokemon && (
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <img src={pokemon.sprite} alt="" className="w-8 h-8" />
          <span className="font-bold">{pokemon.displayName}</span>
          <span className="text-gray-400">{pokemon.types?.join('/')}</span>
        </div>
      )}
    </div>
  );
}

function StatInput({ label, value, onChange, nature, onNatureChange, rank, onRankChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="font-bold w-12">{label}</span>
      {onNatureChange && (
        <select value={nature} onChange={e => onNatureChange(Number(e.target.value))} className="border rounded px-1 py-0.5 text-xs">
          <option value={1.1}>↑補正</option>
          <option value={1.0}>補正なし</option>
          <option value={0.9}>↓補正</option>
        </select>
      )}
      <label className="flex items-center gap-1">
        P:
        <input type="number" min={0} max={32} value={value} onChange={e => onChange(Math.min(32, Math.max(0, Number(e.target.value))))}
          className="border rounded px-1 py-0.5 w-12 text-center text-xs" />
      </label>
      {onRankChange && (
        <div className="flex items-center gap-0.5">
          <button onClick={() => onRankChange(Math.max(-6, rank - 1))} disabled={rank <= -6}
            className="w-4 h-4 rounded bg-gray-200 text-gray-600 text-[10px] font-bold leading-none disabled:opacity-30">−</button>
          <span className={`font-mono text-[10px] w-5 text-center font-bold ${rank > 0 ? 'text-orange-500' : rank < 0 ? 'text-cyan-500' : 'text-gray-400'}`}>
            {rank >= 0 ? `+${rank}` : rank}
          </span>
          <button onClick={() => onRankChange(Math.min(6, rank + 1))} disabled={rank >= 6}
            className="w-4 h-4 rounded bg-gray-200 text-gray-600 text-[10px] font-bold leading-none disabled:opacity-30">＋</button>
        </div>
      )}
    </div>
  );
}

const STORAGE_KEY = 'poke-tool-damage';

export default function DamageCalc() {
  const saved = (() => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { return null; } })();

  const [attacker, setAttacker] = useState(saved?.attacker ?? null);
  const [defender, setDefender] = useState(saved?.defender ?? null);
  const [atkNature, setAtkNature] = useState(saved?.atkNature ?? 1.1);
  const [atkAP, setAtkAP] = useState(saved?.atkAP ?? 32);
  const [atkRank, setAtkRank] = useState(saved?.atkRank ?? 0);
  const [defNature, setDefNature] = useState(saved?.defNature ?? 1.0);
  const [defAP, setDefAP] = useState(saved?.defAP ?? 32);
  const [spDefNature, setSpDefNature] = useState(saved?.spDefNature ?? 1.0);
  const [spDefAP, setSpDefAP] = useState(saved?.spDefAP ?? 32);
  const [hpAP, setHpAP] = useState(saved?.hpAP ?? 32);
  const [defRank, setDefRank] = useState(saved?.defRank ?? 0);
  const [spDefRank, setSpDefRank] = useState(saved?.spDefRank ?? 0);
  const [atkItemKey, setAtkItemKey] = useState(saved?.atkItemKey ?? 'none');
  const [defItemKey, setDefItemKey] = useState(saved?.defItemKey ?? 'none');
  const [atkAbilityKey, setAtkAbilityKey] = useState(saved?.atkAbilityKey ?? '');
  const [defAbilityKey, setDefAbilityKey] = useState(saved?.defAbilityKey ?? '');
  const [weather, setWeather] = useState(saved?.weather ?? 'none');
  const [field, setField] = useState(saved?.field ?? 'none');
  const [moveQuery, setMoveQuery] = useState('');
  const [moveData, setMoveData] = useState(saved?.moveData ?? null);
  const [moveSuggestions, setMoveSuggestions] = useState([]);
  const [showMoveSuggestions, setShowMoveSuggestions] = useState(false);
  const [moveSelectedIndex, setMoveSelectedIndex] = useState(-1);
  const [showDamages, setShowDamages] = useState(false);
  const moveRef = useRef(null);

  useEffect(() => {
    function handleClick(e) { if (moveRef.current && !moveRef.current.contains(e.target)) setShowMoveSuggestions(false); }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        attacker, defender, atkNature, atkAP, atkRank, defNature, defAP, spDefNature, spDefAP, hpAP, defRank, spDefRank,
        atkItemKey, defItemKey, atkAbilityKey, defAbilityKey, weather, field, moveData,
      }));
    } catch {}
  }, [attacker, defender, atkNature, atkAP, atkRank, defNature, defAP, spDefNature, spDefAP, hpAP, defRank, spDefRank, atkItemKey, defItemKey, atkAbilityKey, defAbilityKey, weather, field, moveData]);

  const availableMoves = useMemo(() => {
    if (!attacker?.englishName) return [];
    const moveNames = pokemonMovesList[attacker.englishName] ?? [];
    return moveNames
      .filter(m => moveDataMap[m])
      .map(m => ({ en: m, ...moveDataMap[m] }))
      .filter(m => m.damageClass !== 'status' && m.power);
  }, [attacker]);

  function handleMoveInput(value) {
    setMoveQuery(value);
    if (!value.trim()) { setMoveSuggestions([]); return; }
    const kata = toKatakana(value);
    const lower = value.toLowerCase();
    const matches = availableMoves.filter(m =>
      m.name.includes(value) || toKatakana(m.name).includes(kata) || m.en.includes(lower)
    );
    setMoveSuggestions(matches);
    setMoveSelectedIndex(-1);
    setShowMoveSuggestions(true);
  }

  function selectMove(move) {
    setMoveData({ name: move.name, englishName: move.en, power: move.power, type: move.type, damage_class: move.damageClass });
    setMoveQuery(move.name);
    setShowMoveSuggestions(false);
    setMoveSuggestions([]);
  }

  function handleMoveKeyDown(e) {
    if (!showMoveSuggestions || moveSuggestions.length === 0) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setMoveSelectedIndex(prev => Math.min(prev + 1, moveSuggestions.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setMoveSelectedIndex(prev => Math.max(prev - 1, 0)); }
    else if (e.key === 'Enter' && moveSelectedIndex >= 0) { e.preventDefault(); selectMove(moveSuggestions[moveSelectedIndex]); }
  }

  const atkItem = items.find(i => i.key === atkItemKey) ?? null;
  const defItem = items.find(i => i.key === defItemKey) ?? null;

  const result = useMemo(() => {
    if (!attacker || !defender || !moveData?.power) return null;
    return calculateDamage({
      attacker, defender, move: moveData,
      atkNature, atkAP, atkRank,
      defNature: moveData?.damage_class === 'special' ? spDefNature : defNature,
      defAP: moveData?.damage_class === 'special' ? spDefAP : defAP,
      hpAP,
      weather, field,
      atkItem, defItem,
      atkAbilityKey, defAbilityKey,
      atkAbilities: attackerAbilities,
      defAbilities: defenderAbilities,
      options: { defRank: moveData?.damage_class === 'special' ? spDefRank : defRank },
    });
  }, [attacker, defender, moveData, atkNature, atkAP, atkRank, defNature, defAP, spDefNature, spDefAP, hpAP, weather, field, atkItem, defItem, atkAbilityKey, defAbilityKey, defRank, spDefRank]);

  const atkAbilityOptions = attacker?.abilities?.filter(a => attackerAbilities[a]) ?? [];
  const defAbilityOptions = defender?.abilities?.filter(a => defenderAbilities[a]) ?? [];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Attacker */}
        <div className="space-y-2">
          <PokemonSelector label="🔵 攻撃側" color="blue" pokemon={attacker} onChange={p => { setAttacker(p); setAtkAbilityKey(''); setMoveData(null); setMoveQuery(''); }} />
          {attacker && (
            <div className="bg-white rounded-xl border border-gray-200 p-3 space-y-2">
              <StatInput label={moveData?.damage_class === 'special' ? '特攻' : '攻撃'}
                value={atkAP} onChange={setAtkAP} nature={atkNature} onNatureChange={setAtkNature}
                rank={atkRank} onRankChange={setAtkRank} />
              <div className="flex flex-wrap gap-2 text-xs">
                <label className="flex items-center gap-1">
                  持ち物:
                  <select value={atkItemKey} onChange={e => setAtkItemKey(e.target.value)} className="border rounded px-1 py-0.5 text-xs max-w-[140px]">
                    {items.map(i => <option key={i.key} value={i.key}>{i.label}</option>)}
                  </select>
                </label>
                {atkAbilityOptions.length > 0 && (
                  <label className="flex items-center gap-1">
                    特性:
                    <select value={atkAbilityKey} onChange={e => setAtkAbilityKey(e.target.value)} className="border rounded px-1 py-0.5 text-xs">
                      <option value="">なし</option>
                      {atkAbilityOptions.map(a => <option key={a} value={a}>{attackerAbilities[a].label}</option>)}
                    </select>
                  </label>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Defender */}
        <div className="space-y-2">
          <PokemonSelector label="🔴 防御側" color="red" pokemon={defender} onChange={p => { setDefender(p); setDefAbilityKey(''); }} />
          {defender && (
            <div className="bg-white rounded-xl border border-gray-200 p-3 space-y-2">
              <StatInput label="HP" value={hpAP} onChange={setHpAP} />
              <StatInput label="防御"
                value={defAP} onChange={setDefAP} nature={defNature} onNatureChange={setDefNature}
                rank={defRank} onRankChange={setDefRank} />
              <StatInput label="特防"
                value={spDefAP} onChange={setSpDefAP} nature={spDefNature} onNatureChange={setSpDefNature}
                rank={spDefRank} onRankChange={setSpDefRank} />
              <div className="flex flex-wrap gap-2 text-xs">
                <label className="flex items-center gap-1">
                  持ち物:
                  <select value={defItemKey} onChange={e => setDefItemKey(e.target.value)} className="border rounded px-1 py-0.5 text-xs max-w-[140px]">
                    {items.map(i => <option key={i.key} value={i.key}>{i.label}</option>)}
                  </select>
                </label>
                {defAbilityOptions.length > 0 && (
                  <label className="flex items-center gap-1">
                    特性:
                    <select value={defAbilityKey} onChange={e => setDefAbilityKey(e.target.value)} className="border rounded px-1 py-0.5 text-xs">
                      <option value="">なし</option>
                      {defAbilityOptions.map(a => <option key={a} value={a}>{defenderAbilities[a].label}</option>)}
                    </select>
                  </label>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Move Input */}
      {attacker && defender && (
        <div ref={moveRef} className="bg-white rounded-xl border border-gray-200 p-3 space-y-2">
          <h3 className="font-bold text-sm">技</h3>
          <div className="relative">
            <input type="text" value={moveQuery}
              onChange={e => handleMoveInput(e.target.value)}
              onKeyDown={handleMoveKeyDown}
              onFocus={() => moveSuggestions.length > 0 && setShowMoveSuggestions(true)}
              placeholder="技名を入力（日本語 or 英語）"
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
            {showMoveSuggestions && moveSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-lg max-h-48 overflow-y-auto">
                {moveSuggestions.map((m, idx) => (
                  <li key={m.en} onClick={() => selectMove(m)}
                    className={`flex items-center justify-between px-3 py-1 cursor-pointer text-sm ${idx === moveSelectedIndex ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                    <span className="font-medium">{m.name}</span>
                    <span className="text-gray-400 text-xs">{m.type} / 威力{m.power ?? '—'} / {m.damageClass === 'physical' ? '物理' : '特殊'}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {moveData && (
            <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
              <span className="font-bold">{moveData.name}</span>
              <span>タイプ: {moveData.type}</span>
              <span>威力: {moveData.power ?? '—'}</span>
              <span>分類: {moveData.damage_class === 'physical' ? '物理' : moveData.damage_class === 'special' ? '特殊' : '変化'}</span>
            </div>
          )}

          {/* Weather & Field */}
          <div className="flex flex-wrap gap-3 text-xs">
            <label className="flex items-center gap-1">
              天候:
              <select value={weather} onChange={e => setWeather(e.target.value)} className="border rounded px-1 py-0.5 text-xs">
                <option value="none">なし</option>
                <option value="sun">晴れ</option>
                <option value="rain">雨</option>
                <option value="sand">砂嵐</option>
                <option value="snow">雪</option>
              </select>
            </label>
            <label className="flex items-center gap-1">
              フィールド:
              <select value={field} onChange={e => setField(e.target.value)} className="border rounded px-1 py-0.5 text-xs">
                <option value="none">なし</option>
                <option value="electric">エレキ</option>
                <option value="grassy">グラス</option>
                <option value="psychic">サイコ</option>
                <option value="misty">ミスト</option>
              </select>
            </label>
          </div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
          <h3 className="font-bold text-sm text-gray-700">
            {attacker.displayName} の {moveData.name} → {defender.displayName}
          </h3>
          <div className="text-xs text-gray-500">
            タイプ相性: ×{result.typeEff} {result.stab > 1 ? '/ タイプ一致' : ''}
          </div>
          <div className="text-lg font-bold text-gray-800">
            ダメージ: {result.minDmg}〜{result.maxDmg}
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({result.minPct}%〜{result.maxPct}%)
            </span>
          </div>
          <div className={`text-sm font-bold ${result.koText.includes('確定1発') ? 'text-red-600' : 'text-gray-700'}`}>
            {result.koText}
          </div>
          <div className="text-right">
            <button onClick={() => setShowDamages(!showDamages)} className="text-xs text-gray-400 hover:text-gray-600 underline">
              {showDamages ? '乱数を閉じる' : '全16通りを表示'}
            </button>
          </div>
          {showDamages && (
            <div className="text-xs text-gray-500 font-mono">
              {result.damages.map((d, i) => `${85 + i}%: ${d}`).join(' / ')}
            </div>
          )}
          <div className="text-xs text-gray-400">
            HP実数値: {result.hpStat}
          </div>
        </div>
      )}
    </div>
  );
}
