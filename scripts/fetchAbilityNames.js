import fs from 'fs';

async function fetchAbility(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/ability/${name}`);
  if (!res.ok) throw new Error(`${name}: ${res.status}`);
  const data = await res.json();
  const ja = data.names?.find(n => n.language.name === 'ja-Hrkt')?.name
    || data.names?.find(n => n.language.name === 'ja')?.name
    || name;
  return ja;
}

async function main() {
  const dataFile = fs.readFileSync('src/data/pokemonData.js', 'utf-8');
  const dataMatch = dataFile.match(/const pokemonData = (\{[\s\S]*?\});/);
  const pokemonData = JSON.parse(dataMatch[1]);

  const allAbilities = new Set();
  for (const p of Object.values(pokemonData)) {
    p.abilities?.forEach(a => allAbilities.add(a));
  }

  console.log(`Fetching ${allAbilities.size} unique abilities...`);
  const abilityNames = {};
  const list = [...allAbilities];
  const BATCH = 5;

  for (let i = 0; i < list.length; i += BATCH) {
    const batch = list.slice(i, i + BATCH);
    const results = await Promise.all(batch.map(async name => {
      try { return { name, ja: await fetchAbility(name) }; }
      catch (e) { console.error(`\nFailed: ${name}`); return { name, ja: name }; }
    }));
    for (const r of results) abilityNames[r.name] = r.ja;
    process.stdout.write(`\r${Math.min(i + BATCH, list.length)}/${list.length}`);
    await new Promise(r => setTimeout(r, 200));
  }

  const out = `const abilityNames = ${JSON.stringify(abilityNames, null, 2)};\n\nexport default abilityNames;\n`;
  fs.writeFileSync('src/data/abilityNames.js', out);
  console.log(`\nDone! ${Object.keys(abilityNames).length} abilities`);
}

main().catch(console.error);
