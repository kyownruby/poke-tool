import fs from 'fs';

const TOTAL = 1025;
const BATCH = 5;

async function fetchSpecies(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  if (!res.ok) throw new Error(`species ${id}: ${res.status}`);
  const data = await res.json();
  const ja = data.names.find(n => n.language.name === 'ja')?.name
    || data.names.find(n => n.language.name === 'ja-Hrkt')?.name;
  return { id, english: data.name, japanese: ja };
}

async function main() {
  const mapping = {};
  for (let i = 1; i <= TOTAL; i += BATCH) {
    const ids = Array.from({ length: Math.min(BATCH, TOTAL - i + 1) }, (_, k) => i + k);
    const results = await Promise.all(ids.map(async id => {
      try { return await fetchSpecies(id); }
      catch (e) {
        await new Promise(r => setTimeout(r, 2000));
        return await fetchSpecies(id);
      }
    }));
    for (const r of results) {
      if (r.japanese) mapping[r.japanese] = r.english;
    }
    process.stdout.write(`\r${Math.min(i + BATCH - 1, TOTAL)}/${TOTAL}`);
    await new Promise(r => setTimeout(r, 200));
  }
  const out = `const pokemonNames = ${JSON.stringify(mapping, null, 2)};\n\nexport default pokemonNames;\n`;
  fs.writeFileSync('src/data/pokemonNames.js', out);
  console.log(`\nDone! ${Object.keys(mapping).length} entries`);
}

main();
