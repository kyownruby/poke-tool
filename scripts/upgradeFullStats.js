import fs from 'fs';

async function fetchPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error(`${name}: ${res.status}`);
  const data = await res.json();
  return {
    id: data.id,
    types: data.types.map(t => t.type.name),
    stats: {
      hp: data.stats.find(s => s.stat.name === 'hp').base_stat,
      attack: data.stats.find(s => s.stat.name === 'attack').base_stat,
      defense: data.stats.find(s => s.stat.name === 'defense').base_stat,
      spAtk: data.stats.find(s => s.stat.name === 'special-attack').base_stat,
      spDef: data.stats.find(s => s.stat.name === 'special-defense').base_stat,
      speed: data.stats.find(s => s.stat.name === 'speed').base_stat,
    },
    abilities: data.abilities.map(a => a.ability.name),
  };
}

async function main() {
  const existingFile = fs.readFileSync('src/data/pokemonData.js', 'utf-8');
  const existingMatch = existingFile.match(/const pokemonData = (\{[\s\S]*?\});/);
  const existingData = JSON.parse(existingMatch[1]);
  const names = Object.keys(existingData);

  console.log(`Upgrading ${names.length} Pokemon with full stats + types...`);

  const newData = {};
  const BATCH = 5;
  for (let i = 0; i < names.length; i += BATCH) {
    const batch = names.slice(i, i + BATCH);
    const results = await Promise.all(batch.map(async name => {
      try { return { name, data: await fetchPokemon(name) }; }
      catch (e) {
        console.error(`\nFailed: ${name} (${e.message}), retrying...`);
        await new Promise(r => setTimeout(r, 2000));
        try { return { name, data: await fetchPokemon(name) }; }
        catch (e2) {
          console.error(`\nFailed again: ${name}`);
          return { name, data: existingData[name] };
        }
      }
    }));
    for (const r of results) newData[r.name] = r.data;
    process.stdout.write(`\r${Math.min(i + BATCH, names.length)}/${names.length}`);
    await new Promise(r => setTimeout(r, 200));
  }

  const out = `const pokemonData = ${JSON.stringify(newData, null, 2)};\n\nexport default pokemonData;\n`;
  fs.writeFileSync('src/data/pokemonData.js', out);
  console.log(`\nDone! ${Object.keys(newData).length} Pokemon with full stats`);
}

main().catch(console.error);
