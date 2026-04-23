import fs from 'fs';

const MISSING_MOVES = [
  'make-it-rain', 'ruination', 'collision-course', 'electro-drift',
  'hyper-drill', 'mighty-cleave', 'malignant-chain', 'thunderclap',
];

async function fetchMoveData(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${name}`);
  if (!res.ok) throw new Error(`${name}: ${res.status}`);
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
    'ruination',
  ]);
  const contactSpecial = new Set(['draining-kiss','petal-dance','grass-knot','infestation']);
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
    minHits: data.meta?.min_hits ?? undefined,
    maxHits: data.meta?.max_hits ?? undefined,
  };
}

async function main() {
  const f = fs.readFileSync('src/data/moveData.js', 'utf-8');
  const m = f.match(/const moveData = (\{[\s\S]*?\});/);
  const moveData = JSON.parse(m[1]);

  for (const name of MISSING_MOVES) {
    try {
      const data = await fetchMoveData(name);
      // Clean up undefined fields
      if (data.minHits === undefined) delete data.minHits;
      if (data.maxHits === undefined) delete data.maxHits;
      moveData[name] = data;
      console.log(name, '→', data.name, `(${data.type}, ${data.power})`);
    } catch (e) {
      console.error(`Failed: ${name}`, e.message);
    }
    await new Promise(r => setTimeout(r, 200));
  }

  const out = `const moveData = ${JSON.stringify(moveData, null, 2)};\n\nexport default moveData;\n`;
  fs.writeFileSync('src/data/moveData.js', out);
  console.log('\nDone!');
}

main();
