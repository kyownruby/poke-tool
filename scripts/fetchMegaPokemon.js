import fs from 'fs';

// Fetches all Mega Evolution and Primal form Pokemon from PokeAPI
// and appends them to src/data/pokemonData.js and src/data/pokemonNames.js

async function fetchPokemon(nameOrId) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  if (!res.ok) throw new Error(`pokemon ${nameOrId}: ${res.status}`);
  return res.json();
}

async function fetchForm(nameOrId) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${nameOrId}`);
  if (!res.ok) throw new Error(`form ${nameOrId}: ${res.status}`);
  return res.json();
}

async function fetchSpecies(nameOrId) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameOrId}`);
  if (!res.ok) throw new Error(`species ${nameOrId}: ${res.status}`);
  return res.json();
}

// Get Japanese name for a specific form (mega/primal)
function getJapaneseFormName(formData, speciesData) {
  const japaneseSpeciesName = speciesData.names.find(
    n => n.language.name === 'ja' || n.language.name === 'ja-Hrkt'
  )?.name;

  const formSuffix = formData.name.split('-').slice(1).join('-');

  // Primal forms: always use species name for uniqueness
  if (formSuffix === 'primal') return `ゲンシ${japaneseSpeciesName}`;

  // Mega forms: try form_names first, fallback to constructed name
  const japaneseFormName = formData.form_names?.find(
    n => n.language.name === 'ja' || n.language.name === 'ja-Hrkt'
  )?.name;

  if (formSuffix.startsWith('mega')) {
    const suffix = formSuffix.replace(/^mega-?/, '').trim();
    const constructed = suffix
      ? `メガ${japaneseSpeciesName}${suffix.toUpperCase()}`
      : `メガ${japaneseSpeciesName}`;
    // Use form_names if it looks reasonable (starts with メガ), else use constructed
    return (japaneseFormName && japaneseFormName.startsWith('メガ'))
      ? japaneseFormName
      : constructed;
  }

  return japaneseFormName || `${japaneseSpeciesName} (${formSuffix})`;
}

async function main() {
  console.log('Fetching all Pokemon forms list...');
  const formsListRes = await fetch('https://pokeapi.co/api/v2/pokemon-form?limit=2000');
  const formsList = await formsListRes.json();

  const megaForms = formsList.results.filter(f =>
    f.name.includes('-mega') || f.name.endsWith('-primal')
  );

  console.log(`Found ${megaForms.length} Mega/Primal forms`);

  const newPokemonData = {};
  const newPokemonNames = {};

  let i = 0;
  for (const form of megaForms) {
    i++;
    try {
      const formData = await fetchForm(form.name);
      const pokemonData = await fetchPokemon(form.name);
      const speciesData = await fetchSpecies(formData.pokemon.name.split('-')[0]);

      const speed = pokemonData.stats.find(s => s.stat.name === 'speed').base_stat;
      const abilities = pokemonData.abilities.map(a => a.ability.name);
      const japaneseName = getJapaneseFormName(formData, speciesData);

      newPokemonData[form.name] = {
        id: pokemonData.id,
        speed,
        abilities,
      };
      newPokemonNames[japaneseName] = form.name;

      process.stdout.write(`\r[${i}/${megaForms.length}] ${form.name} -> ${japaneseName} (spd: ${speed})`);
      await new Promise(r => setTimeout(r, 150));
    } catch (e) {
      console.error(`\nError ${form.name}: ${e.message}`);
    }
  }

  console.log('\n\nMerging with existing data...');

  // Load existing pokemonData.js
  const existingDataFile = fs.readFileSync('src/data/pokemonData.js', 'utf-8');
  const existingDataMatch = existingDataFile.match(/const pokemonData = ({[\s\S]*?});/);
  const existingData = JSON.parse(existingDataMatch[1]);

  // Load existing pokemonNames.js
  const existingNamesFile = fs.readFileSync('src/data/pokemonNames.js', 'utf-8');
  const existingNamesMatch = existingNamesFile.match(/const pokemonNames = ({[\s\S]*?});/);
  const existingNames = JSON.parse(existingNamesMatch[1]);

  const mergedData = { ...existingData, ...newPokemonData };
  const mergedNames = { ...existingNames, ...newPokemonNames };

  const dataOutput = `// Auto-generated Pokemon data (speed stats, abilities, IDs)
// Source: PokeAPI - ${new Date().toISOString()}
// Total: ${Object.keys(mergedData).length} Pokemon (including Mega/Primal forms)

const pokemonData = ${JSON.stringify(mergedData, null, 2)};

export default pokemonData;
`;
  fs.writeFileSync('src/data/pokemonData.js', dataOutput);

  const namesOutput = `const pokemonNames = ${JSON.stringify(mergedNames, null, 2)};\n\nexport default pokemonNames;\n`;
  fs.writeFileSync('src/data/pokemonNames.js', namesOutput);

  console.log(`Done! Added ${Object.keys(newPokemonData).length} Mega/Primal forms`);
  console.log(`Total: ${Object.keys(mergedData).length} Pokemon`);
}

main().catch(console.error);
