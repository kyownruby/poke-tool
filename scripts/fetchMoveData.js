import fs from 'fs';

async function fetchPokemonMoves(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error(`pokemon ${name}: ${res.status}`);
  const data = await res.json();
  return data.moves.map(m => m.move.name);
}

async function fetchMoveData(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${name}`);
  if (!res.ok) throw new Error(`move ${name}: ${res.status}`);
  const data = await res.json();
  const jaName = data.names?.find(n => n.language.name === 'ja-Hrkt')?.name
    || data.names?.find(n => n.language.name === 'ja')?.name
    || data.name;
  const isPhysical = data.damage_class.name === 'physical';
  const nonContactPhysical = new Set([
    'earthquake','magnitude','bulldoze','bone-rush','bonemerang',
    'rock-slide','stone-edge','rock-tomb','rock-blast','rock-throw','rock-wrecker',
    'avalanche','icicle-spear','icicle-crash',
    'bullet-seed','razor-leaf','seed-bomb','petal-blizzard',
    'pin-missile','fell-stinger',
    'dragon-darts','scale-shot','poltergeist',
    'thousand-arrows','precipice-blades',
    'explosion','self-destruct','sacred-fire',
    'attack-order','aura-sphere',
    'metal-burst','foul-play',
  ]);
  const contactSpecial = new Set([
    'draining-kiss','petal-dance','grass-knot','infestation',
  ]);
  let contact;
  if (nonContactPhysical.has(data.name)) contact = false;
  else if (contactSpecial.has(data.name)) contact = true;
  else contact = isPhysical;
  return {
    name: jaName,
    power: data.power,
    type: data.type.name,
    damageClass: data.damage_class.name,
    contact,
  };
}

async function main() {
  const dataFile = fs.readFileSync('src/data/pokemonData.js', 'utf-8');
  const dataMatch = dataFile.match(/const pokemonData = (\{[\s\S]*?\});/);
  const pokemonData = JSON.parse(dataMatch[1]);
  const pokemonNames = Object.keys(pokemonData);

  console.log(`Fetching moves for ${pokemonNames.length} Pokemon...`);

  const pokemonMoves = {};
  const allMoveNames = new Set();
  const BATCH = 3;

  for (let i = 0; i < pokemonNames.length; i += BATCH) {
    const batch = pokemonNames.slice(i, i + BATCH);
    const results = await Promise.all(batch.map(async name => {
      try {
        const moves = await fetchPokemonMoves(name);
        return { name, moves };
      } catch (e) {
        console.error(`\nFailed: ${name} (${e.message})`);
        return { name, moves: [] };
      }
    }));
    for (const r of results) {
      pokemonMoves[r.name] = r.moves;
      r.moves.forEach(m => allMoveNames.add(m));
    }
    process.stdout.write(`\rPokemon: ${Math.min(i + BATCH, pokemonNames.length)}/${pokemonNames.length}`);
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\nFetching data for ${allMoveNames.size} unique moves...`);
  const moveList = [...allMoveNames];
  const moveData = {};

  for (let i = 0; i < moveList.length; i += BATCH) {
    const batch = moveList.slice(i, i + BATCH);
    const results = await Promise.all(batch.map(async name => {
      try {
        const data = await fetchMoveData(name);
        return { name, data };
      } catch (e) {
        console.error(`\nFailed move: ${name}`);
        return null;
      }
    }));
    for (const r of results) {
      if (r) moveData[r.name] = r.data;
    }
    process.stdout.write(`\rMoves: ${Math.min(i + BATCH, moveList.length)}/${moveList.length}`);
    await new Promise(r => setTimeout(r, 200));
  }

  const movesOut = `const pokemonMoves = ${JSON.stringify(pokemonMoves, null, 2)};\n\nexport default pokemonMoves;\n`;
  fs.writeFileSync('src/data/pokemonMoves.js', movesOut);

  const moveDataOut = `const moveData = ${JSON.stringify(moveData, null, 2)};\n\nexport default moveData;\n`;
  fs.writeFileSync('src/data/moveData.js', moveDataOut);

  console.log(`\nDone! ${Object.keys(pokemonMoves).length} Pokemon, ${Object.keys(moveData).length} moves`);
}

main().catch(console.error);
