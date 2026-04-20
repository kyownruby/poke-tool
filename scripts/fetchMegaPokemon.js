import fs from 'fs';

// Official Mega Evolution Pokemon from Pokemon Champions (game8.jp/pokemon-champions/763000)
const OFFICIAL_MEGA_FORMS = [
  'venusaur-mega', 'charizard-mega-x', 'charizard-mega-y', 'blastoise-mega',
  'beedrill-mega', 'pidgeot-mega', 'clefable-mega', 'alakazam-mega',
  'victreebel-mega', 'slowbro-mega', 'gengar-mega', 'kangaskhan-mega',
  'pinsir-mega', 'gyarados-mega', 'aerodactyl-mega', 'starmie-mega',
  'dragonite-mega', 'meganium-mega', 'feraligatr-mega', 'ampharos-mega',
  'scizor-mega', 'heracross-mega', 'houndoom-mega', 'tyranitar-mega',
  'steelix-mega', 'skarmory-mega', 'sableye-mega', 'gardevoir-mega',
  'aggron-mega', 'medicham-mega', 'manectric-mega', 'sharpedo-mega',
  'camerupt-mega', 'altaria-mega', 'banette-mega', 'absol-mega',
  'glalie-mega', 'salamence-mega', 'garchomp-mega', 'lucario-mega',
  'abomasnow-mega', 'gallade-mega', 'audino-mega', 'lopunny-mega',
  'froslass-mega', 'emboar-mega', 'excadrill-mega', 'chandelure-mega',
  'chesnaught-mega', 'delphox-mega', 'greninja-mega', 'floette-mega',
  'hawlucha-mega', 'crabominable-mega', 'drampa-mega', 'chimecho-mega',
  'golurk-mega', 'meowstic-mega', 'glimmora-mega', 'scovillain-mega',
];

async function fetchPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error(`pokemon ${name}: ${res.status}`);
  return res.json();
}

async function fetchForm(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${name}`);
  if (!res.ok) throw new Error(`form ${name}: ${res.status}`);
  return res.json();
}

async function fetchSpecies(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  if (!res.ok) throw new Error(`species ${name}: ${res.status}`);
  return res.json();
}

function getJapaneseFormName(formData, speciesData) {
  const japaneseSpeciesName = speciesData.names.find(
    n => n.language.name === 'ja' || n.language.name === 'ja-Hrkt'
  )?.name;

  const japaneseFormName = formData.form_names?.find(
    n => n.language.name === 'ja' || n.language.name === 'ja-Hrkt'
  )?.name;

  if (japaneseFormName && japaneseFormName.startsWith('メガ')) return japaneseFormName;

  const formSuffix = formData.name.split('-').slice(1).join('-');
  const suffix = formSuffix.replace(/^mega-?/, '').trim();
  return suffix
    ? `メガ${japaneseSpeciesName}${suffix.toUpperCase()}`
    : `メガ${japaneseSpeciesName}`;
}

async function main() {
  const total = OFFICIAL_MEGA_FORMS.length;
  console.log(`Fetching ${total} official Mega Pokemon...`);

  const newPokemonData = {};
  const newPokemonNames = {};

  for (let i = 0; i < total; i++) {
    const name = OFFICIAL_MEGA_FORMS[i];
    try {
      const [pokemonRes, formData] = await Promise.all([fetchPokemon(name), fetchForm(name)]);
      const baseName = name.split('-')[0];
      const speciesData = await fetchSpecies(baseName);

      const speed = pokemonRes.stats.find(s => s.stat.name === 'speed').base_stat;
      const abilities = pokemonRes.abilities.map(a => a.ability.name);
      const japaneseName = getJapaneseFormName(formData, speciesData);

      newPokemonData[name] = { id: pokemonRes.id, speed, abilities };
      newPokemonNames[japaneseName] = name;

      process.stdout.write(`\r[${i + 1}/${total}] ${name} -> ${japaneseName} (spd: ${speed})`);
      await new Promise(r => setTimeout(r, 150));
    } catch (e) {
      console.error(`\nError ${name}: ${e.message}`);
    }
  }

  console.log('\n\nMerging with existing data...');

  const existingDataFile = fs.readFileSync('src/data/pokemonData.js', 'utf-8');
  const existingDataMatch = existingDataFile.match(/const pokemonData = ({[\s\S]*?});/);
  const existingData = JSON.parse(existingDataMatch[1]);

  const existingNamesFile = fs.readFileSync('src/data/pokemonNames.js', 'utf-8');
  const existingNamesMatch = existingNamesFile.match(/const pokemonNames = ({[\s\S]*?});/);
  const existingNames = JSON.parse(existingNamesMatch[1]);

  const mergedData = { ...existingData, ...newPokemonData };
  const mergedNames = { ...existingNames, ...newPokemonNames };

  const dataOutput = `// Auto-generated Pokemon data (speed stats, abilities, IDs)
// Source: PokeAPI - ${new Date().toISOString()}
// Total: ${Object.keys(mergedData).length} Pokemon (including Mega forms)

const pokemonData = ${JSON.stringify(mergedData, null, 2)};

export default pokemonData;
`;
  fs.writeFileSync('src/data/pokemonData.js', dataOutput);

  const namesOutput = `const pokemonNames = ${JSON.stringify(mergedNames, null, 2)};\n\nexport default pokemonNames;\n`;
  fs.writeFileSync('src/data/pokemonNames.js', namesOutput);

  console.log(`Done! Added ${Object.keys(newPokemonData).length} Mega forms`);
  console.log(`Total: ${Object.keys(mergedData).length} Pokemon`);
}

main().catch(console.error);
