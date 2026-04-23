import fs from 'fs';

const EMPTY = ['pidgeot','raichu','alakazam','victreebel','gyarados','jolteon','snorlax',
               'alakazam-mega','victreebel-mega','typhlosion','ampharos','meowstic-mega','starmie'];

async function fetchMoves(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error(`${name}: ${res.status}`);
  const data = await res.json();
  return data.moves.map(m => m.move.name);
}

async function main() {
  const f = fs.readFileSync('src/data/pokemonMoves.js', 'utf-8');
  const m = f.match(/const pokemonMoves = (\{[\s\S]*?\});/);
  const moves = JSON.parse(m[1]);

  for (const name of EMPTY) {
    try {
      const list = await fetchMoves(name);
      moves[name] = list;
      console.log(name + ': ' + list.length + ' moves');
    } catch (e) {
      console.error(name + ': FAILED', e.message);
    }
    await new Promise(r => setTimeout(r, 300));
  }

  const out = `const pokemonMoves = ${JSON.stringify(moves, null, 2)};\n\nexport default pokemonMoves;\n`;
  fs.writeFileSync('src/data/pokemonMoves.js', out);
  console.log('\nDone!');
}

main();
