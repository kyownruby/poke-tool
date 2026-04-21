import fs from 'fs';

const CHAMPIONS_POKEMON = {
  // === Gen 1 ===
  "フシギバナ":"venusaur","リザードン":"charizard","カメックス":"blastoise",
  "スピアー":"beedrill","ピジョット":"pidgeot","アーボック":"arbok",
  "ピカチュウ":"pikachu","ライチュウ":"raichu","ピクシー":"clefable",
  "キュウコン":"ninetales","ウインディ":"arcanine","フーディン":"alakazam",
  "カイリキー":"machamp","ウツボット":"victreebel","ヤドラン":"slowbro",
  "ゲンガー":"gengar","ガルーラ":"kangaskhan","スターミー":"starmie",
  "カイロス":"pinsir","ケンタロス":"tauros","ギャラドス":"gyarados",
  "メタモン":"ditto","シャワーズ":"vaporeon","サンダース":"jolteon",
  "ブースター":"flareon","プテラ":"aerodactyl","カビゴン":"snorlax",
  "カイリュー":"dragonite",
  // Gen 1 Regional
  "アローラライチュウ":"raichu-alola","アローラキュウコン":"ninetales-alola",
  "ヒスイウインディ":"arcanine-hisui","ガラルヤドラン":"slowbro-galar",
  "パルデアケンタロス":"tauros-paldea-combat-breed",
  // Gen 1 Mega
  "メガフシギバナ":"venusaur-mega","メガリザードンX":"charizard-mega-x",
  "メガリザードンY":"charizard-mega-y","メガカメックス":"blastoise-mega",
  "メガスピアー":"beedrill-mega","メガピジョット":"pidgeot-mega",
  "メガピクシー":"clefable-mega","メガフーディン":"alakazam-mega",
  "メガウツボット":"victreebel-mega","メガヤドラン":"slowbro-mega",
  "メガゲンガー":"gengar-mega","メガガルーラ":"kangaskhan-mega",
  "メガスターミー":"starmie-mega","メガカイロス":"pinsir-mega",
  "メガギャラドス":"gyarados-mega","メガプテラ":"aerodactyl-mega",
  "メガカイリュー":"dragonite-mega",
  // === Gen 2 ===
  "メガニウム":"meganium","バクフーン":"typhlosion","オーダイル":"feraligatr",
  "アリアドス":"ariados","デンリュウ":"ampharos","マリルリ":"azumarill",
  "ニョロトノ":"politoed","エーフィ":"espeon","ブラッキー":"umbreon",
  "ヤドキング":"slowking","フォレトス":"forretress","ハガネール":"steelix",
  "ハッサム":"scizor","ヘラクロス":"heracross","エアームド":"skarmory",
  "ヘルガー":"houndoom","バンギラス":"tyranitar",
  // Gen 2 Regional
  "ヒスイバクフーン":"typhlosion-hisui",
  // Gen 2 Mega
  "メガメガニウム":"meganium-mega","メガオーダイル":"feraligatr-mega",
  "メガデンリュウ":"ampharos-mega","メガハガネール":"steelix-mega",
  "メガハッサム":"scizor-mega","メガヘラクロス":"heracross-mega",
  "メガエアームド":"skarmory-mega","メガヘルガー":"houndoom-mega",
  "メガバンギラス":"tyranitar-mega",
  // === Gen 3 ===
  "ペリッパー":"pelipper","サーナイト":"gardevoir","ヤミラビ":"sableye",
  "ボスゴドラ":"aggron","チャーレム":"medicham","ライボルト":"manectric",
  "サメハダー":"sharpedo","バクーダ":"camerupt","コータス":"torkoal",
  "チルタリス":"altaria","ミロカロス":"milotic","ポワルン":"castform",
  "ジュペッタ":"banette","チリーン":"chimecho","アブソル":"absol",
  "オニゴーリ":"glalie",
  // Gen 3 Mega
  "メガサーナイト":"gardevoir-mega","メガヤミラミ":"sableye-mega",
  "メガボスゴドラ":"aggron-mega","メガチャーレム":"medicham-mega",
  "メガライボルト":"manectric-mega","メガサメハダー":"sharpedo-mega",
  "メガバクーダ":"camerupt-mega","メガチルタリス":"altaria-mega",
  "メガジュペッタ":"banette-mega","メガチリーン":"chimecho-mega",
  "メガアブソル":"absol-mega","メガオニゴーリ":"glalie-mega",
  // === Gen 4 ===
  "ドダイトス":"torterra","ゴウカザル":"infernape","エンペルト":"empoleon",
  "レントラー":"luxray","ロズレイド":"roserade","ラムパルド":"rampardos",
  "トリデプス":"bastiodon","ミミロップ":"lopunny","ミカルゲ":"spiritomb",
  "ガブリアス":"garchomp","ルカリオ":"lucario","カバルドン":"hippowdon",
  "ドクロッグ":"toxicroak","ユキノオー":"abomasnow","マニューラ":"weavile",
  "ドサイドン":"rhyperior","リーフィア":"leafeon","グレイシア":"glaceon",
  "グライオン":"gliscor","マンムー":"mamoswine","エルレイド":"gallade",
  "ユキメノコ":"froslass","ロトム":"rotom",
  // Gen 4 Forms
  "ヒートロトム":"rotom-heat","ウォッシュロトム":"rotom-wash",
  "フロストロトム":"rotom-frost","スピンロトム":"rotom-fan",
  "カットロトム":"rotom-mow",
  // Gen 4 Mega
  "メガミミロップ":"lopunny-mega","メガガブリアス":"garchomp-mega",
  "メガルカリオ":"lucario-mega","メガユキノオー":"abomasnow-mega",
  "メガエルレイド":"gallade-mega","メガユキメノコ":"froslass-mega",
  // === Gen 5 ===
  "ジャローダ":"serperior","エンブオー":"emboar","ダイケンキ":"samurott",
  "ミルホッグ":"watchog","レパルダス":"liepard","ヤナッキー":"simisage",
  "バオッキー":"simisear","ヒヤッキー":"simipour","ドリュウズ":"excadrill",
  "タブンネ":"audino","ローブシン":"conkeldurr","エルフーン":"whimsicott",
  "ワルビアル":"krookodile","デスカーン":"cofagrigus","ダストダス":"garbodor",
  "ゾロアーク":"zoroark","ランクルス":"reuniclus","バイバニラ":"vanilluxe",
  "エモンガ":"emolga","シャンデラ":"chandelure","ツンベアー":"beartic",
  "マッギョ":"stunfisk","ゴルーグ":"golurk","サザンドラ":"hydreigon",
  "ウルガモス":"volcarona",
  // Gen 5 Regional
  "ヒスイダイケンキ":"samurott-hisui","ヒスイゾロアーク":"zoroark-hisui",
  "ガラルマッギョ":"stunfisk-galar",
  // Gen 5 Mega
  "メガエンブオー":"emboar-mega","メガドリュウズ":"excadrill-mega",
  "メガタブンネ":"audino-mega","メガシャンデラ":"chandelure-mega",
  "メガゴルーグ":"golurk-mega",
  // === Gen 6 ===
  "ブリガロン":"chesnaught","マフォクシー":"delphox","ゲッコウガ":"greninja",
  "ホルード":"diggersby","ファイアロー":"talonflame","ビビヨン":"vivillon",
  "フラエッテ":"floette","フラージェス":"florges","ゴロンダ":"pangoro",
  "トリミアン":"furfrou","ニャオニクス♂":"meowstic-male","ニャオニクス♀":"meowstic-female","ギルガルド":"aegislash-shield",
  "フレフワン":"aromatisse","ペロリーム":"slurpuff","ブロスター":"clawitzer",
  "エレザード":"heliolisk","ガチゴラス":"tyrantrum","アマルルガ":"aurorus",
  "ニンフィア":"sylveon","ルチャブル":"hawlucha","デデンネ":"dedenne",
  "ヌメルゴン":"goodra","クレッフィ":"klefki","オーロット":"trevenant",
  "パンプジン":"gourgeist-average","クレベース":"avalugg","オンバーン":"noivern",
  // Gen 6 Regional
  "ヒスイヌメルゴン":"goodra-hisui","ヒスイクレベース":"avalugg-hisui",
  // Gen 6 Mega
  "メガブリガロン":"chesnaught-mega","メガマフォクシー":"delphox-mega",
  "メガゲッコウガ":"greninja-mega","メガフラエッテ":"floette-mega",
  "メガニャオニクス":"meowstic-mega","メガルチャブル":"hawlucha-mega",
  // === Gen 7 ===
  "ジュナイパー":"decidueye","ガオガエン":"incineroar","アシレーヌ":"primarina",
  "ドデカバシ":"toucannon","ケケンカニ":"crabominable",
  "ドヒドイデ":"toxapex","バンバドロ":"mudsdale","オニシズクモ":"araquanid",
  "エンニュート":"salazzle","アマージョ":"tsareena","ヤレユータン":"oranguru",
  "ナゲツケサル":"passimian","ミミッキュ":"mimikyu-disguised","ジジーロン":"drampa",
  "ジャラランガ":"kommo-o",
  // Gen 7 Regional
  "ヒスイジュナイパー":"decidueye-hisui",
  "真昼ルガルガン":"lycanroc-midday","真夜中ルガルガン":"lycanroc-midnight",
  "黄昏ルガルガン":"lycanroc-dusk",
  // Gen 7 Mega
  "メガケケンカニ":"crabominable-mega","メガジジーロン":"drampa-mega",
  "メガスコヴィラン":"scovillain-mega",
  // === Gen 8 ===
  "アーマーガア":"corviknight","アップリュー":"flapple","タルップル":"appletun",
  "サダイジャ":"sandaconda","ポットデス":"polteageist","ブリムオン":"hatterene",
  "バリコオル":"mr-rime","デスバーン":"runerigus","マホイップ":"alcremie",
  "モルペコ":"morpeko-full-belly","ドラパルト":"dragapult",
  // === Gen 9 ===
  "マスカーニャ":"meowscarada","ラウドボーン":"skeledirge","ウェーニバル":"quaquaval",
  "イッカネズミ":"maushold-family-of-four","キョジオーン":"garganacl","グレンアルマ":"armarouge",
  "ソウブレイズ":"ceruledge","ハラバリー":"bellibolt","スコヴィラン":"scovillain",
  "クエスパトラ":"espathra","デカヌチャン":"tinkaton","イルカマン":"palafin-zero",
  "ミミズズ":"orthworm","キラフロル":"glimmora","リキキリン":"farigiraf",
  "ドドゲザン":"kingambit","ヤバソチャ":"sinistcha","ブリジュラス":"archaludon",
  "カミツオロチ":"hydrapple",
  // Gen 9 Regional
  "ケンタロス(ブレイズ)":"tauros-paldea-blaze-breed",
  "ケンタロス(ウォーター)":"tauros-paldea-aqua-breed",
  // Gen 9 Mega
  "メガキラフロル":"glimmora-mega",
  // === Legends Arceus ===
  "アヤシシ":"wyrdeer","バサギリ":"kleavor","イダイトウ♂":"basculegion-male","イダイトウ♀":"basculegion-female",
  "オオニューラ":"sneasler",
};

async function fetchPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error(`${name}: ${res.status}`);
  const data = await res.json();
  return {
    id: data.id,
    speed: data.stats.find(s => s.stat.name === 'speed').base_stat,
    abilities: data.abilities.map(a => a.ability.name),
  };
}

async function main() {
  const entries = Object.entries(CHAMPIONS_POKEMON);
  console.log(`Total Champions Pokemon: ${entries.length}`);

  // Load existing base data (1025 Pokemon)
  const existingFile = fs.readFileSync('src/data/pokemonData.js', 'utf-8');
  const existingMatch = existingFile.match(/const pokemonData = ({[\s\S]*?});/);
  const existingData = JSON.parse(existingMatch[1]);

  const newData = {};
  const newNames = {};
  const toFetch = [];

  for (const [ja, en] of entries) {
    if (existingData[en]) {
      newData[en] = existingData[en];
      newNames[ja] = en;
    } else {
      toFetch.push([ja, en]);
    }
  }

  console.log(`Already have: ${Object.keys(newData).length}`);
  console.log(`Need to fetch: ${toFetch.length}`);

  const BATCH = 3;
  for (let i = 0; i < toFetch.length; i += BATCH) {
    const batch = toFetch.slice(i, i + BATCH);
    const results = await Promise.all(batch.map(async ([ja, en]) => {
      try {
        const data = await fetchPokemon(en);
        return { ja, en, data, ok: true };
      } catch (e) {
        console.error(`\nFailed: ${en} (${e.message})`);
        return { ja, en, ok: false };
      }
    }));
    for (const r of results) {
      if (r.ok) {
        newData[r.en] = r.data;
        newNames[r.ja] = r.en;
        process.stdout.write(`\r[${i + 1}/${toFetch.length}] ${r.en} (spd:${r.data.speed})`);
      }
    }
    await new Promise(r => setTimeout(r, 300));
  }

  const dataOut = `const pokemonData = ${JSON.stringify(newData, null, 2)};\n\nexport default pokemonData;\n`;
  fs.writeFileSync('src/data/pokemonData.js', dataOut);

  const namesOut = `const pokemonNames = ${JSON.stringify(newNames, null, 2)};\n\nexport default pokemonNames;\n`;
  fs.writeFileSync('src/data/pokemonNames.js', namesOut);

  console.log(`\n\nDone! Total: ${Object.keys(newData).length} Pokemon`);
  console.log(`Names: ${Object.keys(newNames).length} entries`);
}

main().catch(console.error);
