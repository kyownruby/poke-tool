import fs from 'fs';

async function fetchMoveHits(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${name}`);
  if (!res.ok) return null;
  const data = await res.json();
  return { minHits: data.meta?.min_hits, maxHits: data.meta?.max_hits };
}

async function main() {
  const f = fs.readFileSync('src/data/moveData.js', 'utf-8');
  const m = f.match(/const moveData = (\{[\s\S]*?\});/);
  const moveData = JSON.parse(m[1]);
  const names = Object.keys(moveData);

  // Find multi-hit candidates (known multi-hit moves)
  const BATCH = 5;
  let updated = 0;

  console.log(`Checking ${names.length} moves for multi-hit data...`);
  for (let i = 0; i < names.length; i += BATCH) {
    const batch = names.slice(i, i + BATCH);
    const results = await Promise.all(batch.map(async name => {
      try {
        const hits = await fetchMoveHits(name);
        return { name, hits };
      } catch { return { name, hits: null }; }
    }));
    for (const r of results) {
      if (r.hits?.minHits && r.hits?.maxHits) {
        moveData[r.name].minHits = r.hits.minHits;
        moveData[r.name].maxHits = r.hits.maxHits;
        updated++;
      }
    }
    process.stdout.write(`\r${Math.min(i + BATCH, names.length)}/${names.length}`);
    await new Promise(r => setTimeout(r, 200));
  }

  // Escalating power moves (special cases)
  if (moveData['triple-axel']) moveData['triple-axel'].escalating = [20, 40, 60];
  if (moveData['triple-kick']) moveData['triple-kick'].escalating = [10, 20, 30];

  const out = `const moveData = ${JSON.stringify(moveData, null, 2)};\n\nexport default moveData;\n`;
  fs.writeFileSync('src/data/moveData.js', out);
  console.log(`\nDone! Updated ${updated} multi-hit moves`);
}

main().catch(console.error);
