import { useState, useMemo, useEffect, useRef } from 'react';
import pokemonNames from '../data/pokemonNames';
import pokemonData from '../data/pokemonData';
import pokemonMovesList from '../data/pokemonMoves';
import moveDataMap from '../data/moveData';
import items from '../data/items';
import { attackerAbilities, defenderAbilities } from '../data/damageAbilities';
import abilityNames from '../data/abilityNames';
import { getTypeName, getTypeColor, TypeBadge } from '../data/typeInfo.jsx';
import { calculateDamage, calcStat } from '../utils/damageCalc';

const allEntries = Object.entries(pokemonNames);

function ItemSelector({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = items.find(i => i.key === value) ?? items[0];

  useEffect(() => {
    function handleClick(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const topLevel = items.filter(i => !i.category);
  const typeBoost = items.filter(i => i.category === 'typeBoost');
  const resistBerry = items.filter(i => i.category === 'resistBerry');

  function pick(key) { onChange(key); setOpen(false); }

  return (
    <div ref={ref} className="relative inline-block">
      <button type="button" onClick={() => setOpen(o => !o)}
        className="border border-gray-300 rounded px-2 py-0.5 text-xs w-[140px] text-left flex items-center justify-between gap-1 bg-white hover:bg-gray-50">
        <span className="truncate">{current.label}</span>
        <span className="text-gray-400 text-[10px]">▼</span>
      </button>
      {open && (
        <ul className="absolute z-20 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg max-h-72 overflow-y-auto min-w-[220px]">
          {topLevel.map(i => (
            <li key={i.key} onClick={() => pick(i.key)}
              className={`px-3 py-1 cursor-pointer text-xs hover:bg-gray-100 ${i.key === value ? 'bg-blue-50' : ''}`}>
              {i.label}
            </li>
          ))}
          <li className="px-3 py-0.5 text-[10px] text-gray-500 bg-gray-100 font-semibold">タイプ強化（ダメージ×1.2）</li>
          {typeBoost.map(i => (
            <li key={i.key} onClick={() => pick(i.key)}
              className={`px-3 py-1 cursor-pointer text-xs hover:bg-gray-100 flex items-center justify-between gap-2 ${i.key === value ? 'bg-blue-50' : ''}`}>
              <span>{i.label}</span>
              <span className="flex items-center gap-1 text-gray-500">
                <TypeBadge type={i.effect.typeBoost} />
                <span>×1.2</span>
              </span>
            </li>
          ))}
          <li className="px-3 py-0.5 text-[10px] text-gray-500 bg-gray-100 font-semibold">半減きのみ</li>
          {resistBerry.map(i => (
            <li key={i.key} onClick={() => pick(i.key)}
              className={`px-3 py-1 cursor-pointer text-xs hover:bg-gray-100 flex items-center justify-between gap-2 ${i.key === value ? 'bg-blue-50' : ''}`}>
              <span>{i.label}</span>
              <span className="flex items-center gap-1 text-gray-500">
                <TypeBadge type={i.effect.resistBerry} />
                <span>半減</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

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
          <span className="flex gap-1">{pokemon.types?.map(t => <TypeBadge key={t} type={t} />)}</span>
        </div>
      )}
    </div>
  );
}

function StatInput({ label, value, onChange, nature, onNatureChange, rank, onRankChange, realStat }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="font-bold w-12">{label}</span>
      {realStat != null && (
        <span className="font-mono font-bold text-gray-700 w-8 text-right">{realStat}</span>
      )}
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
  const [defAP, setDefAP] = useState(saved?.defAP ?? 0);
  const [spDefNature, setSpDefNature] = useState(saved?.spDefNature ?? 1.0);
  const [spDefAP, setSpDefAP] = useState(saved?.spDefAP ?? 0);
  const [hpAP, setHpAP] = useState(saved?.hpAP ?? 0);
  const [defRank, setDefRank] = useState(saved?.defRank ?? 0);
  const [spDefRank, setSpDefRank] = useState(saved?.spDefRank ?? 0);
  const [atkItemKey, setAtkItemKey] = useState(saved?.atkItemKey ?? 'none');
  const [defItemKey, setDefItemKey] = useState(saved?.defItemKey ?? 'none');
  const [atkAbilityKey, setAtkAbilityKey] = useState(saved?.atkAbilityKey ?? '');
  const [defAbilityKey, setDefAbilityKey] = useState(saved?.defAbilityKey ?? '');
  const [defFullHp, setDefFullHp] = useState(saved?.defFullHp ?? true);
  const [defDisguise, setDefDisguise] = useState(saved?.defDisguise ?? true);
  const [defStatus, setDefStatus] = useState(saved?.defStatus ?? false);
  const [weather, setWeather] = useState(saved?.weather ?? 'none');
  const [field, setField] = useState(saved?.field ?? 'none');
  const [atkBurned, setAtkBurned] = useState(saved?.atkBurned ?? false);
  const [atkLowHp, setAtkLowHp] = useState(saved?.atkLowHp ?? false);
  const [atkCharged, setAtkCharged] = useState(saved?.atkCharged ?? false);
  const [atkCrit, setAtkCrit] = useState(saved?.atkCrit ?? false);
  const [atkHpPct, setAtkHpPct] = useState(saved?.atkHpPct ?? 100);
  const [defProtect, setDefProtect] = useState(saved?.defProtect ?? false);
  const [defScreen, setDefScreen] = useState(saved?.defScreen ?? false);
  const [defRoost, setDefRoost] = useState(saved?.defRoost ?? false);
  const [defSR, setDefSR] = useState(saved?.defSR ?? false);
  const [moveQuery, setMoveQuery] = useState('');
  const [moveData, setMoveData] = useState(saved?.moveData ?? null);
  const [moveSuggestions, setMoveSuggestions] = useState([]);
  const [showMoveSuggestions, setShowMoveSuggestions] = useState(false);
  const [moveSelectedIndex, setMoveSelectedIndex] = useState(-1);
  const [showAllMoves, setShowAllMoves] = useState(false);
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
        atkBurned, atkCharged, atkCrit, atkHpPct, atkLowHp, defProtect, defScreen, defRoost, defSR, defFullHp, defDisguise, defStatus,
      }));
    } catch {}
  }, [attacker, defender, atkNature, atkAP, atkRank, defNature, defAP, spDefNature, spDefAP, hpAP, defRank, spDefRank, atkItemKey, defItemKey, atkAbilityKey, defAbilityKey, weather, field, moveData, atkBurned, atkCharged, atkCrit, atkHpPct, defProtect, defScreen, defRoost, defSR, defFullHp, defDisguise, defStatus, atkLowHp]);

  const availableMoves = useMemo(() => {
    if (showAllMoves) {
      return Object.entries(moveDataMap)
        .map(([en, d]) => ({ en, ...d }))
        .filter(m => m.damageClass !== 'status' && m.power);
    }
    if (!attacker?.englishName) return [];
    const baseName = attacker.englishName.replace(/-mega(-[a-z])?$/, '');
    const ownMoves = pokemonMovesList[attacker.englishName] ?? [];
    const baseMoves = baseName !== attacker.englishName ? (pokemonMovesList[baseName] ?? []) : [];
    const moveNames = [...new Set([...ownMoves, ...baseMoves])];
    return moveNames
      .filter(m => moveDataMap[m])
      .map(m => ({ en: m, ...moveDataMap[m] }))
      .filter(m => m.damageClass !== 'status' && m.power);
  }, [attacker, showAllMoves]);

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
    setMoveData({ ...move, englishName: move.en, damage_class: move.damageClass });
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
      options: {
        defRank: moveData?.damage_class === 'special' ? spDefRank : defRank,
        atkBurned, atkCharged, atkCrit, atkHpPct, atkLowHp, defProtect, defScreen, defRoost, defSR, defFullHp, defDisguise, defStatus,
      },
    });
  }, [attacker, defender, moveData, atkNature, atkAP, atkRank, defNature, defAP, spDefNature, spDefAP, hpAP, weather, field, atkItem, defItem, atkAbilityKey, defAbilityKey, defRank, spDefRank, atkBurned, atkCharged, atkCrit, atkHpPct, defProtect, defScreen, defRoost, defSR, defFullHp, defDisguise, defStatus, atkLowHp]);

  const atkAbilityOptions = attacker?.abilities ?? [];
  const defAbilityOptions = defender?.abilities ?? [];

  function swapSides() {
    const prevAtk = attacker, prevDef = defender;
    const prevAtkItem = atkItemKey, prevDefItem = defItemKey;
    const prevAtkAbility = atkAbilityKey, prevDefAbility = defAbilityKey;
    setAttacker(prevDef);
    setDefender(prevAtk);
    setAtkItemKey(prevDefItem);
    setDefItemKey(prevAtkItem);
    setAtkAbilityKey(prevDefAbility);
    setDefAbilityKey(prevAtkAbility);
    setMoveData(null);
    setMoveQuery('');
    setAtkNature(1.1); setAtkAP(32); setAtkRank(0);
    setDefNature(1.0); setDefAP(0); setSpDefNature(1.0); setSpDefAP(0);
    setHpAP(0); setDefRank(0); setSpDefRank(0);
    setAtkBurned(false); setAtkCharged(false); setAtkLowHp(false);
    setDefProtect(false); setDefScreen(false); setDefRoost(false); setDefSR(false); setDefFullHp(true);
  }

  return (
    <div className="space-y-4">
      {attacker && defender && (
        <div className="flex justify-center">
          <button onClick={swapSides} className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold px-4 py-1.5 rounded-lg text-xs">
            ⇄ 攻守交代
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Attacker */}
        <div className="space-y-2">
          <PokemonSelector label="🔵 攻撃側" color="blue" pokemon={attacker} onChange={p => { setAttacker(p); setAtkAbilityKey(p.abilities?.[0] ?? ''); setAtkItemKey(p.englishName?.includes('-mega') ? 'mega-stone' : atkItemKey); setMoveData(null); setMoveQuery(''); }} />
          {attacker && (
            <div className="bg-white rounded-xl border border-gray-200 p-3 space-y-2">
              <StatInput label={moveData?.damage_class === 'special' ? '特攻' : '攻撃'}
                value={atkAP} onChange={setAtkAP} nature={atkNature} onNatureChange={setAtkNature}
                rank={atkRank} onRankChange={setAtkRank}
                realStat={attacker ? calcStat(moveData?.damage_class === 'special' ? attacker.stats.spAtk : attacker.stats.attack, atkAP, atkNature) : null} />
              <div className="flex flex-wrap gap-2 text-xs">
                <label className="flex items-center gap-1">
                  持ち物:
                  <ItemSelector value={atkItemKey} onChange={setAtkItemKey} />
                </label>
                <label className="flex items-center gap-1">
                  特性:
                  <select value={atkAbilityKey} onChange={e => setAtkAbilityKey(e.target.value)} className="border rounded px-1 py-0.5 text-xs">
                    <option value="">なし</option>
                    {atkAbilityOptions.map(a => <option key={a} value={a}>{abilityNames[a] ?? a}</option>)}
                  </select>
                </label>
                {attackerAbilities[atkAbilityKey]?.effect?.lowHpTypeBoost && (
                  <label className="flex items-center gap-1.5">
                    <input type="checkbox" checked={atkLowHp} onChange={e => setAtkLowHp(e.target.checked)} />
                    HP1/3以下
                  </label>
                )}
              </div>
              <div className="flex flex-wrap gap-3 text-xs">
                <label className="flex items-center gap-1.5">
                  <input type="checkbox" checked={atkBurned} onChange={e => setAtkBurned(e.target.checked)} />
                  やけど
                </label>
                <label className="flex items-center gap-1.5">
                  <input type="checkbox" checked={atkCharged} onChange={e => setAtkCharged(e.target.checked)} />
                  じゅうでん
                </label>
                <label className="flex items-center gap-1.5">
                  <input type="checkbox" checked={atkCrit} onChange={e => setAtkCrit(e.target.checked)} />
                  急所
                </label>
                {['eruption','water-spout','reversal','flail'].includes(moveData?.englishName) && (
                  <label className="flex items-center gap-1.5">
                    HP:
                    <input type="range" min={1} max={100} value={atkHpPct} onChange={e => setAtkHpPct(Number(e.target.value))}
                      className="w-20" />
                    <span className="font-mono w-10 text-right">{atkHpPct}%</span>
                  </label>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Defender */}
        <div className="space-y-2">
          <PokemonSelector label="🔴 防御側" color="red" pokemon={defender} onChange={p => { setDefender(p); const ab = p.abilities?.[0] ?? ''; setDefAbilityKey(ab); setDefFullHp(ab === 'multiscale'); setDefDisguise(ab === 'disguise'); setDefItemKey(p.englishName?.includes('-mega') ? 'mega-stone' : defItemKey); }} />
          {defender && (
            <div className="bg-white rounded-xl border border-gray-200 p-3 space-y-2">
              <StatInput label="HP" value={hpAP} onChange={setHpAP}
                realStat={defender ? calcStat(defender.stats.hp, hpAP, 1.0, true) : null} />
              <StatInput label={moveData?.damage_class === 'special' ? '特防' : '防御'}
                value={moveData?.damage_class === 'special' ? spDefAP : defAP}
                onChange={moveData?.damage_class === 'special' ? setSpDefAP : setDefAP}
                nature={moveData?.damage_class === 'special' ? spDefNature : defNature}
                onNatureChange={moveData?.damage_class === 'special' ? setSpDefNature : setDefNature}
                rank={moveData?.damage_class === 'special' ? spDefRank : defRank}
                onRankChange={moveData?.damage_class === 'special' ? setSpDefRank : setDefRank}
                realStat={defender ? calcStat(
                  moveData?.damage_class === 'special' ? defender.stats.spDef : defender.stats.defense,
                  moveData?.damage_class === 'special' ? spDefAP : defAP,
                  moveData?.damage_class === 'special' ? spDefNature : defNature
                ) : null} />
              <div className="flex flex-wrap gap-2 text-xs">
                <label className="flex items-center gap-1">
                  持ち物:
                  <ItemSelector value={defItemKey} onChange={setDefItemKey} />
                </label>
                <label className="flex items-center gap-1">
                  特性:
                  <select value={defAbilityKey} onChange={e => { setDefAbilityKey(e.target.value); if (e.target.value === 'multiscale') setDefFullHp(true); if (e.target.value === 'disguise') setDefDisguise(true); }} className="border rounded px-1 py-0.5 text-xs">
                    <option value="">なし</option>
                    {defAbilityOptions.map(a => <option key={a} value={a}>{abilityNames[a] ?? a}</option>)}
                  </select>
                </label>
                {defAbilityKey === 'multiscale' && (
                  <label className="flex items-center gap-1.5">
                    <input type="checkbox" checked={defFullHp} onChange={e => setDefFullHp(e.target.checked)} />
                    HP満タン
                  </label>
                )}
                {defAbilityKey === 'disguise' && (
                  <label className="flex items-center gap-1.5">
                    <input type="checkbox" checked={defDisguise} onChange={e => setDefDisguise(e.target.checked)} />
                    ばけのかわ残
                  </label>
                )}
                {defAbilityKey === 'marvel-scale' && (
                  <label className="flex items-center gap-1.5">
                    <input type="checkbox" checked={defStatus} onChange={e => setDefStatus(e.target.checked)} />
                    状態異常
                  </label>
                )}
              </div>
              <div className="flex flex-wrap gap-3 text-xs">
                <label className="flex items-center gap-1.5">
                  <input type="checkbox" checked={defProtect} onChange={e => setDefProtect(e.target.checked)} />
                  まもる
                </label>
                <label className="flex items-center gap-1.5">
                  <input type="checkbox" checked={defScreen} onChange={e => setDefScreen(e.target.checked)} />
                  壁
                </label>
                <label className="flex items-center gap-1.5">
                  <input type="checkbox" checked={defRoost} onChange={e => setDefRoost(e.target.checked)} />
                  はねやすめ
                </label>
                <label className="flex items-center gap-1.5">
                  <input type="checkbox" checked={defSR} onChange={e => setDefSR(e.target.checked)} />
                  ステロ
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Move Input */}
      {attacker && defender && (
        <div ref={moveRef} className="bg-white rounded-xl border border-gray-200 p-3 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm">技</h3>
            <label className="flex items-center gap-1.5 text-xs text-gray-600">
              <input type="checkbox" checked={showAllMoves} onChange={e => setShowAllMoves(e.target.checked)} />
              全技から検索
            </label>
          </div>
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
                    <span className="flex items-center gap-1 text-xs"><TypeBadge type={m.type} /><span className="text-gray-400">威力{m.power ?? '—'} / {m.damageClass === 'physical' ? '物理' : '特殊'}</span></span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {moveData && (() => {
            const effType = result?.moveType ?? moveData.type;
            const effPower = result?.movePower ?? moveData.power;
            const changed = effType !== moveData.type || effPower !== moveData.power;
            return (
              <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                <span className="font-bold">{moveData.name}</span>
                <TypeBadge type={effType} />
                <span>威力: {changed ? <><s className="text-gray-300">{moveData.power}</s> → <span className="font-bold text-gray-800">{effPower}</span></> : (moveData.power ?? '—')}</span>
                <span>{moveData.damage_class === 'physical' ? '物理' : moveData.damage_class === 'special' ? '特殊' : '変化'}</span>
              </div>
            );
          })()}

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
            <span className="flex items-center gap-1">タイプ相性: ×{result.typeEff} <TypeBadge type={result.moveType} /> {result.stab > 1 ? '/ タイプ一致' : ''}</span>
          </div>
          {result.srDamage > 0 && (
            <div className="text-xs text-gray-500 bg-gray-50 rounded p-2 space-y-0.5">
              <div>ステロダメージ: {result.srDamage} ({(result.srDamage / result.hpMax * 100).toFixed(1)}%)</div>
              <div>技ダメージ: {result.minDmg}〜{result.maxDmg}</div>
              <div className="font-bold text-gray-700">合計: {result.srDamage + result.minDmg}〜{result.srDamage + result.maxDmg}
                <span className="font-normal text-gray-500 ml-1">
                  ({((result.srDamage + result.minDmg) / result.hpMax * 100).toFixed(1)}%〜{((result.srDamage + result.maxDmg) / result.hpMax * 100).toFixed(1)}%)
                </span>
              </div>
            </div>
          )}
          {!result.srDamage && (
            <div className="text-lg font-bold text-gray-800">
              ダメージ: {result.minDmg}〜{result.maxDmg}
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({result.minPct}%〜{result.maxPct}%)
              </span>
            </div>
          )}
          {result.multiHit && (
            <div className="text-xs text-gray-500 bg-gray-50 rounded p-2 space-y-0.5">
              <div>1発: {result.multiHit.perHitMin}〜{result.multiHit.perHitMax}</div>
              <div className="font-bold text-gray-700">
                ×{result.multiHit.minHits === result.multiHit.maxHits
                  ? `${result.multiHit.minHits}回`
                  : `${result.multiHit.minHits}〜${result.multiHit.maxHits}回`}
                合計: {result.multiHit.totalMin}〜{result.multiHit.totalMax}
                <span className="font-normal text-gray-500 ml-1">
                  ({result.multiHit.totalMinPct}%〜{result.multiHit.totalMaxPct}%)
                </span>
              </div>
            </div>
          )}
          <div className={`text-sm font-bold ${result.koText.includes('確定1発') ? 'text-red-600' : 'text-gray-700'}`}>
            {result.koText}
          </div>
          {result.disguiseActive && (
            <div className="text-xs text-gray-500">ばけのかわ: 1発目無効＋1/8 HP損失を加味</div>
          )}
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
            HP実数値: {result.hpMax}{result.srDamage > 0 && ` (ステロ後: ${result.hpStat})`}
          </div>
        </div>
      )}
    </div>
  );
}
