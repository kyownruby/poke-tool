// One-time script to fetch all Pokemon speed stats, abilities, and IDs from PokeAPI
// Output: src/data/pokemonData.js

const TOTAL = 1025;
const CONCURRENCY = 5;

async function fetchPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch pokemon ${id}: ${res.status}`);
  const data = await res.json();

  const speed = data.stats.find(s => s.stat.name === "speed").base_stat;
  const abilities = data.abilities.map(a => a.ability.name);

  return {
    id: data.id,
    name: data.name,
    speed,
    abilities,
  };
}

async function fetchBatch(ids) {
  const results = [];
  for (const id of ids) {
    try {
      const pokemon = await fetchPokemon(id);
      results.push(pokemon);
      process.stdout.write(`\rFetched ${id}/${TOTAL}`);
    } catch (e) {
      console.error(`\nError fetching ${id}: ${e.message}, retrying...`);
      await new Promise(r => setTimeout(r, 2000));
      try {
        const pokemon = await fetchPokemon(id);
        results.push(pokemon);
      } catch (e2) {
        console.error(`\nFailed again for ${id}: ${e2.message}`);
      }
    }
  }
  return results;
}

async function main() {
  console.log(`Fetching ${TOTAL} Pokemon from PokeAPI...`);

  const allIds = Array.from({ length: TOTAL }, (_, i) => i + 1);
  const batches = [];
  for (let i = 0; i < allIds.length; i += CONCURRENCY) {
    batches.push(allIds.slice(i, i + CONCURRENCY));
  }

  const allPokemon = [];
  for (const batch of batches) {
    const results = await Promise.all(batch.map(id => fetchPokemon(id).catch(async (e) => {
      console.error(`\nError ${id}: ${e.message}, retrying...`);
      await new Promise(r => setTimeout(r, 2000));
      return fetchPokemon(id);
    })));
    allPokemon.push(...results);
    // Small delay between batches to avoid rate limiting
    await new Promise(r => setTimeout(r, 200));
  }

  // Build the map: englishName -> { id, speed, abilities }
  const pokemonMap = {};
  for (const p of allPokemon) {
    pokemonMap[p.name] = {
      id: p.id,
      speed: p.speed,
      abilities: p.abilities,
    };
  }

  const output = `// Auto-generated Pokemon data (speed stats, abilities, IDs)
// Source: PokeAPI - ${new Date().toISOString()}
// Total: ${Object.keys(pokemonMap).length} Pokemon

const pokemonData = ${JSON.stringify(pokemonMap, null, 2)};

export default pokemonData;
`;

  const fs = await import('fs');
  fs.writeFileSync('src/data/pokemonData.js', output);
  console.log(`\nDone! Wrote ${Object.keys(pokemonMap).length} Pokemon to src/data/pokemonData.js`);
}

main().catch(console.error);
