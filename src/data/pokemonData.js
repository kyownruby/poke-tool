const pokemonData = {
  "venusaur": {
    "id": 3,
    "speed": 80,
    "abilities": [
      "overgrow",
      "chlorophyll"
    ]
  },
  "charizard": {
    "id": 6,
    "speed": 100,
    "abilities": [
      "blaze",
      "solar-power"
    ]
  },
  "blastoise": {
    "id": 9,
    "speed": 78,
    "abilities": [
      "torrent",
      "rain-dish"
    ]
  },
  "beedrill": {
    "id": 15,
    "speed": 75,
    "abilities": [
      "swarm",
      "sniper"
    ]
  },
  "pidgeot": {
    "id": 18,
    "speed": 101,
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ]
  },
  "arbok": {
    "id": 24,
    "speed": 80,
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ]
  },
  "pikachu": {
    "id": 25,
    "speed": 90,
    "abilities": [
      "static",
      "lightning-rod"
    ]
  },
  "raichu": {
    "id": 26,
    "speed": 110,
    "abilities": [
      "static",
      "lightning-rod"
    ]
  },
  "clefable": {
    "id": 36,
    "speed": 60,
    "abilities": [
      "cute-charm",
      "magic-guard",
      "unaware"
    ]
  },
  "ninetales": {
    "id": 38,
    "speed": 100,
    "abilities": [
      "flash-fire",
      "drought"
    ]
  },
  "arcanine": {
    "id": 59,
    "speed": 95,
    "abilities": [
      "intimidate",
      "flash-fire",
      "justified"
    ]
  },
  "alakazam": {
    "id": 65,
    "speed": 120,
    "abilities": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ]
  },
  "machamp": {
    "id": 68,
    "speed": 55,
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ]
  },
  "victreebel": {
    "id": 71,
    "speed": 70,
    "abilities": [
      "chlorophyll",
      "gluttony"
    ]
  },
  "slowbro": {
    "id": 80,
    "speed": 30,
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ]
  },
  "gengar": {
    "id": 94,
    "speed": 110,
    "abilities": [
      "cursed-body"
    ]
  },
  "kangaskhan": {
    "id": 115,
    "speed": 90,
    "abilities": [
      "early-bird",
      "scrappy",
      "inner-focus"
    ]
  },
  "starmie": {
    "id": 121,
    "speed": 115,
    "abilities": [
      "illuminate",
      "natural-cure",
      "analytic"
    ]
  },
  "pinsir": {
    "id": 127,
    "speed": 85,
    "abilities": [
      "hyper-cutter",
      "mold-breaker",
      "moxie"
    ]
  },
  "tauros": {
    "id": 128,
    "speed": 110,
    "abilities": [
      "intimidate",
      "anger-point",
      "sheer-force"
    ]
  },
  "gyarados": {
    "id": 130,
    "speed": 81,
    "abilities": [
      "intimidate",
      "moxie"
    ]
  },
  "ditto": {
    "id": 132,
    "speed": 48,
    "abilities": [
      "limber",
      "imposter"
    ]
  },
  "vaporeon": {
    "id": 134,
    "speed": 65,
    "abilities": [
      "water-absorb",
      "hydration"
    ]
  },
  "jolteon": {
    "id": 135,
    "speed": 130,
    "abilities": [
      "volt-absorb",
      "quick-feet"
    ]
  },
  "flareon": {
    "id": 136,
    "speed": 65,
    "abilities": [
      "flash-fire",
      "guts"
    ]
  },
  "aerodactyl": {
    "id": 142,
    "speed": 130,
    "abilities": [
      "rock-head",
      "pressure",
      "unnerve"
    ]
  },
  "snorlax": {
    "id": 143,
    "speed": 30,
    "abilities": [
      "immunity",
      "thick-fat",
      "gluttony"
    ]
  },
  "dragonite": {
    "id": 149,
    "speed": 80,
    "abilities": [
      "inner-focus",
      "multiscale"
    ]
  },
  "venusaur-mega": {
    "id": 10033,
    "speed": 80,
    "abilities": [
      "thick-fat"
    ]
  },
  "charizard-mega-x": {
    "id": 10034,
    "speed": 100,
    "abilities": [
      "tough-claws"
    ]
  },
  "charizard-mega-y": {
    "id": 10035,
    "speed": 100,
    "abilities": [
      "drought"
    ]
  },
  "blastoise-mega": {
    "id": 10036,
    "speed": 78,
    "abilities": [
      "mega-launcher"
    ]
  },
  "beedrill-mega": {
    "id": 10090,
    "speed": 145,
    "abilities": [
      "adaptability"
    ]
  },
  "pidgeot-mega": {
    "id": 10073,
    "speed": 121,
    "abilities": [
      "no-guard"
    ]
  },
  "clefable-mega": {
    "id": 10278,
    "speed": 70,
    "abilities": [
      "magic-bounce"
    ]
  },
  "alakazam-mega": {
    "id": 10037,
    "speed": 150,
    "abilities": [
      "trace"
    ]
  },
  "victreebel-mega": {
    "id": 10279,
    "speed": 70,
    "abilities": [
      "innards-out"
    ]
  },
  "slowbro-mega": {
    "id": 10071,
    "speed": 30,
    "abilities": [
      "shell-armor"
    ]
  },
  "gengar-mega": {
    "id": 10038,
    "speed": 130,
    "abilities": [
      "shadow-tag"
    ]
  },
  "kangaskhan-mega": {
    "id": 10039,
    "speed": 100,
    "abilities": [
      "parental-bond"
    ]
  },
  "starmie-mega": {
    "id": 10280,
    "speed": 120,
    "abilities": [
      "huge-power"
    ]
  },
  "pinsir-mega": {
    "id": 10040,
    "speed": 105,
    "abilities": [
      "aerilate"
    ]
  },
  "gyarados-mega": {
    "id": 10041,
    "speed": 81,
    "abilities": [
      "mold-breaker"
    ]
  },
  "aerodactyl-mega": {
    "id": 10042,
    "speed": 150,
    "abilities": [
      "tough-claws"
    ]
  },
  "dragonite-mega": {
    "id": 10281,
    "speed": 100,
    "abilities": [
      "multiscale"
    ]
  },
  "meganium": {
    "id": 154,
    "speed": 80,
    "abilities": [
      "overgrow",
      "leaf-guard"
    ]
  },
  "typhlosion": {
    "id": 157,
    "speed": 100,
    "abilities": [
      "blaze",
      "flash-fire"
    ]
  },
  "feraligatr": {
    "id": 160,
    "speed": 78,
    "abilities": [
      "torrent",
      "sheer-force"
    ]
  },
  "ariados": {
    "id": 168,
    "speed": 40,
    "abilities": [
      "swarm",
      "insomnia",
      "sniper"
    ]
  },
  "ampharos": {
    "id": 181,
    "speed": 55,
    "abilities": [
      "static",
      "plus"
    ]
  },
  "azumarill": {
    "id": 184,
    "speed": 50,
    "abilities": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ]
  },
  "politoed": {
    "id": 186,
    "speed": 70,
    "abilities": [
      "water-absorb",
      "damp",
      "drizzle"
    ]
  },
  "espeon": {
    "id": 196,
    "speed": 110,
    "abilities": [
      "synchronize",
      "magic-bounce"
    ]
  },
  "umbreon": {
    "id": 197,
    "speed": 65,
    "abilities": [
      "synchronize",
      "inner-focus"
    ]
  },
  "slowking": {
    "id": 199,
    "speed": 30,
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ]
  },
  "forretress": {
    "id": 205,
    "speed": 40,
    "abilities": [
      "sturdy",
      "overcoat"
    ]
  },
  "steelix": {
    "id": 208,
    "speed": 30,
    "abilities": [
      "rock-head",
      "sturdy",
      "sheer-force"
    ]
  },
  "scizor": {
    "id": 212,
    "speed": 65,
    "abilities": [
      "swarm",
      "technician",
      "light-metal"
    ]
  },
  "heracross": {
    "id": 214,
    "speed": 85,
    "abilities": [
      "swarm",
      "guts",
      "moxie"
    ]
  },
  "skarmory": {
    "id": 227,
    "speed": 70,
    "abilities": [
      "keen-eye",
      "sturdy",
      "weak-armor"
    ]
  },
  "houndoom": {
    "id": 229,
    "speed": 95,
    "abilities": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ]
  },
  "tyranitar": {
    "id": 248,
    "speed": 61,
    "abilities": [
      "sand-stream",
      "unnerve"
    ]
  },
  "meganium-mega": {
    "id": 10282,
    "speed": 80,
    "abilities": [
      "mega-sol"
    ]
  },
  "feraligatr-mega": {
    "id": 10283,
    "speed": 78,
    "abilities": [
      "dragonize"
    ]
  },
  "ampharos-mega": {
    "id": 10045,
    "speed": 45,
    "abilities": [
      "mold-breaker"
    ]
  },
  "steelix-mega": {
    "id": 10072,
    "speed": 30,
    "abilities": [
      "sand-force"
    ]
  },
  "scizor-mega": {
    "id": 10046,
    "speed": 75,
    "abilities": [
      "technician"
    ]
  },
  "heracross-mega": {
    "id": 10047,
    "speed": 75,
    "abilities": [
      "skill-link"
    ]
  },
  "skarmory-mega": {
    "id": 10284,
    "speed": 110,
    "abilities": [
      "stalwart"
    ]
  },
  "houndoom-mega": {
    "id": 10048,
    "speed": 115,
    "abilities": [
      "solar-power"
    ]
  },
  "tyranitar-mega": {
    "id": 10049,
    "speed": 71,
    "abilities": [
      "sand-stream"
    ]
  },
  "pelipper": {
    "id": 279,
    "speed": 65,
    "abilities": [
      "keen-eye",
      "drizzle",
      "rain-dish"
    ]
  },
  "gardevoir": {
    "id": 282,
    "speed": 80,
    "abilities": [
      "synchronize",
      "trace",
      "telepathy"
    ]
  },
  "sableye": {
    "id": 302,
    "speed": 50,
    "abilities": [
      "keen-eye",
      "stall",
      "prankster"
    ]
  },
  "aggron": {
    "id": 306,
    "speed": 50,
    "abilities": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ]
  },
  "medicham": {
    "id": 308,
    "speed": 80,
    "abilities": [
      "pure-power",
      "telepathy"
    ]
  },
  "manectric": {
    "id": 310,
    "speed": 105,
    "abilities": [
      "static",
      "lightning-rod",
      "minus"
    ]
  },
  "sharpedo": {
    "id": 319,
    "speed": 95,
    "abilities": [
      "rough-skin",
      "speed-boost"
    ]
  },
  "camerupt": {
    "id": 323,
    "speed": 40,
    "abilities": [
      "magma-armor",
      "solid-rock",
      "anger-point"
    ]
  },
  "torkoal": {
    "id": 324,
    "speed": 20,
    "abilities": [
      "white-smoke",
      "drought",
      "shell-armor"
    ]
  },
  "altaria": {
    "id": 334,
    "speed": 80,
    "abilities": [
      "natural-cure",
      "cloud-nine"
    ]
  },
  "milotic": {
    "id": 350,
    "speed": 81,
    "abilities": [
      "marvel-scale",
      "competitive",
      "cute-charm"
    ]
  },
  "castform": {
    "id": 351,
    "speed": 70,
    "abilities": [
      "forecast"
    ]
  },
  "banette": {
    "id": 354,
    "speed": 65,
    "abilities": [
      "insomnia",
      "frisk",
      "cursed-body"
    ]
  },
  "chimecho": {
    "id": 358,
    "speed": 65,
    "abilities": [
      "levitate"
    ]
  },
  "absol": {
    "id": 359,
    "speed": 75,
    "abilities": [
      "pressure",
      "super-luck",
      "justified"
    ]
  },
  "glalie": {
    "id": 362,
    "speed": 80,
    "abilities": [
      "inner-focus",
      "ice-body",
      "moody"
    ]
  },
  "gardevoir-mega": {
    "id": 10051,
    "speed": 100,
    "abilities": [
      "pixilate"
    ]
  },
  "sableye-mega": {
    "id": 10066,
    "speed": 20,
    "abilities": [
      "magic-bounce"
    ]
  },
  "aggron-mega": {
    "id": 10053,
    "speed": 50,
    "abilities": [
      "filter"
    ]
  },
  "medicham-mega": {
    "id": 10054,
    "speed": 100,
    "abilities": [
      "pure-power"
    ]
  },
  "manectric-mega": {
    "id": 10055,
    "speed": 135,
    "abilities": [
      "intimidate"
    ]
  },
  "sharpedo-mega": {
    "id": 10070,
    "speed": 105,
    "abilities": [
      "strong-jaw"
    ]
  },
  "camerupt-mega": {
    "id": 10087,
    "speed": 20,
    "abilities": [
      "sheer-force"
    ]
  },
  "altaria-mega": {
    "id": 10067,
    "speed": 80,
    "abilities": [
      "pixilate"
    ]
  },
  "banette-mega": {
    "id": 10056,
    "speed": 75,
    "abilities": [
      "prankster"
    ]
  },
  "chimecho-mega": {
    "id": 10306,
    "speed": 65,
    "abilities": [
      "levitate"
    ]
  },
  "absol-mega": {
    "id": 10057,
    "speed": 115,
    "abilities": [
      "magic-bounce"
    ]
  },
  "glalie-mega": {
    "id": 10074,
    "speed": 100,
    "abilities": [
      "refrigerate"
    ]
  },
  "torterra": {
    "id": 389,
    "speed": 56,
    "abilities": [
      "overgrow",
      "shell-armor"
    ]
  },
  "infernape": {
    "id": 392,
    "speed": 108,
    "abilities": [
      "blaze",
      "iron-fist"
    ]
  },
  "empoleon": {
    "id": 395,
    "speed": 60,
    "abilities": [
      "torrent",
      "competitive"
    ]
  },
  "luxray": {
    "id": 405,
    "speed": 70,
    "abilities": [
      "rivalry",
      "intimidate",
      "guts"
    ]
  },
  "roserade": {
    "id": 407,
    "speed": 90,
    "abilities": [
      "natural-cure",
      "poison-point",
      "technician"
    ]
  },
  "rampardos": {
    "id": 409,
    "speed": 58,
    "abilities": [
      "mold-breaker",
      "sheer-force"
    ]
  },
  "bastiodon": {
    "id": 411,
    "speed": 30,
    "abilities": [
      "sturdy",
      "soundproof"
    ]
  },
  "lopunny": {
    "id": 428,
    "speed": 105,
    "abilities": [
      "cute-charm",
      "klutz",
      "limber"
    ]
  },
  "spiritomb": {
    "id": 442,
    "speed": 35,
    "abilities": [
      "pressure",
      "infiltrator"
    ]
  },
  "garchomp": {
    "id": 445,
    "speed": 102,
    "abilities": [
      "sand-veil",
      "rough-skin"
    ]
  },
  "lucario": {
    "id": 448,
    "speed": 90,
    "abilities": [
      "steadfast",
      "inner-focus",
      "justified"
    ]
  },
  "hippowdon": {
    "id": 450,
    "speed": 47,
    "abilities": [
      "sand-stream",
      "sand-force"
    ]
  },
  "toxicroak": {
    "id": 454,
    "speed": 85,
    "abilities": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ]
  },
  "abomasnow": {
    "id": 460,
    "speed": 60,
    "abilities": [
      "snow-warning",
      "soundproof"
    ]
  },
  "weavile": {
    "id": 461,
    "speed": 125,
    "abilities": [
      "pressure",
      "pickpocket"
    ]
  },
  "rhyperior": {
    "id": 464,
    "speed": 40,
    "abilities": [
      "lightning-rod",
      "solid-rock",
      "reckless"
    ]
  },
  "leafeon": {
    "id": 470,
    "speed": 95,
    "abilities": [
      "leaf-guard",
      "chlorophyll"
    ]
  },
  "glaceon": {
    "id": 471,
    "speed": 65,
    "abilities": [
      "snow-cloak",
      "ice-body"
    ]
  },
  "gliscor": {
    "id": 472,
    "speed": 95,
    "abilities": [
      "hyper-cutter",
      "sand-veil",
      "poison-heal"
    ]
  },
  "mamoswine": {
    "id": 473,
    "speed": 80,
    "abilities": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ]
  },
  "gallade": {
    "id": 475,
    "speed": 80,
    "abilities": [
      "steadfast",
      "sharpness",
      "justified"
    ]
  },
  "froslass": {
    "id": 478,
    "speed": 110,
    "abilities": [
      "snow-cloak",
      "cursed-body"
    ]
  },
  "rotom": {
    "id": 479,
    "speed": 91,
    "abilities": [
      "levitate"
    ]
  },
  "lopunny-mega": {
    "id": 10088,
    "speed": 135,
    "abilities": [
      "scrappy"
    ]
  },
  "garchomp-mega": {
    "id": 10058,
    "speed": 92,
    "abilities": [
      "sand-force"
    ]
  },
  "lucario-mega": {
    "id": 10059,
    "speed": 112,
    "abilities": [
      "adaptability"
    ]
  },
  "abomasnow-mega": {
    "id": 10060,
    "speed": 30,
    "abilities": [
      "snow-warning"
    ]
  },
  "gallade-mega": {
    "id": 10068,
    "speed": 110,
    "abilities": [
      "inner-focus"
    ]
  },
  "froslass-mega": {
    "id": 10285,
    "speed": 120,
    "abilities": [
      "snow-warning"
    ]
  },
  "serperior": {
    "id": 497,
    "speed": 113,
    "abilities": [
      "overgrow",
      "contrary"
    ]
  },
  "emboar": {
    "id": 500,
    "speed": 65,
    "abilities": [
      "blaze",
      "reckless"
    ]
  },
  "samurott": {
    "id": 503,
    "speed": 70,
    "abilities": [
      "torrent",
      "shell-armor"
    ]
  },
  "watchog": {
    "id": 505,
    "speed": 77,
    "abilities": [
      "illuminate",
      "keen-eye",
      "analytic"
    ]
  },
  "liepard": {
    "id": 510,
    "speed": 106,
    "abilities": [
      "limber",
      "unburden",
      "prankster"
    ]
  },
  "simisage": {
    "id": 512,
    "speed": 101,
    "abilities": [
      "gluttony",
      "overgrow"
    ]
  },
  "simisear": {
    "id": 514,
    "speed": 101,
    "abilities": [
      "gluttony",
      "blaze"
    ]
  },
  "simipour": {
    "id": 516,
    "speed": 101,
    "abilities": [
      "gluttony",
      "torrent"
    ]
  },
  "excadrill": {
    "id": 530,
    "speed": 88,
    "abilities": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ]
  },
  "audino": {
    "id": 531,
    "speed": 50,
    "abilities": [
      "healer",
      "regenerator",
      "klutz"
    ]
  },
  "conkeldurr": {
    "id": 534,
    "speed": 45,
    "abilities": [
      "guts",
      "sheer-force",
      "iron-fist"
    ]
  },
  "whimsicott": {
    "id": 547,
    "speed": 116,
    "abilities": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ]
  },
  "krookodile": {
    "id": 553,
    "speed": 92,
    "abilities": [
      "intimidate",
      "moxie",
      "anger-point"
    ]
  },
  "cofagrigus": {
    "id": 563,
    "speed": 30,
    "abilities": [
      "mummy"
    ]
  },
  "garbodor": {
    "id": 569,
    "speed": 75,
    "abilities": [
      "stench",
      "weak-armor",
      "aftermath"
    ]
  },
  "zoroark": {
    "id": 571,
    "speed": 105,
    "abilities": [
      "illusion"
    ]
  },
  "reuniclus": {
    "id": 579,
    "speed": 30,
    "abilities": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ]
  },
  "vanilluxe": {
    "id": 584,
    "speed": 79,
    "abilities": [
      "ice-body",
      "snow-warning",
      "weak-armor"
    ]
  },
  "emolga": {
    "id": 587,
    "speed": 103,
    "abilities": [
      "static",
      "motor-drive"
    ]
  },
  "chandelure": {
    "id": 609,
    "speed": 80,
    "abilities": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ]
  },
  "beartic": {
    "id": 614,
    "speed": 50,
    "abilities": [
      "snow-cloak",
      "slush-rush",
      "swift-swim"
    ]
  },
  "stunfisk": {
    "id": 618,
    "speed": 32,
    "abilities": [
      "static",
      "limber",
      "sand-veil"
    ]
  },
  "golurk": {
    "id": 623,
    "speed": 55,
    "abilities": [
      "iron-fist",
      "klutz",
      "no-guard"
    ]
  },
  "hydreigon": {
    "id": 635,
    "speed": 98,
    "abilities": [
      "levitate"
    ]
  },
  "volcarona": {
    "id": 637,
    "speed": 100,
    "abilities": [
      "flame-body",
      "swarm"
    ]
  },
  "emboar-mega": {
    "id": 10286,
    "speed": 75,
    "abilities": [
      "mold-breaker"
    ]
  },
  "excadrill-mega": {
    "id": 10287,
    "speed": 103,
    "abilities": [
      "piercing-drill"
    ]
  },
  "audino-mega": {
    "id": 10069,
    "speed": 50,
    "abilities": [
      "healer"
    ]
  },
  "chandelure-mega": {
    "id": 10291,
    "speed": 90,
    "abilities": [
      "infiltrator"
    ]
  },
  "golurk-mega": {
    "id": 10313,
    "speed": 55,
    "abilities": [
      "unseen-fist"
    ]
  },
  "chesnaught": {
    "id": 652,
    "speed": 64,
    "abilities": [
      "overgrow",
      "bulletproof"
    ]
  },
  "delphox": {
    "id": 655,
    "speed": 104,
    "abilities": [
      "blaze",
      "magician"
    ]
  },
  "greninja": {
    "id": 658,
    "speed": 122,
    "abilities": [
      "torrent",
      "protean"
    ]
  },
  "diggersby": {
    "id": 660,
    "speed": 78,
    "abilities": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ]
  },
  "talonflame": {
    "id": 663,
    "speed": 126,
    "abilities": [
      "flame-body",
      "gale-wings"
    ]
  },
  "vivillon": {
    "id": 666,
    "speed": 89,
    "abilities": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ]
  },
  "floette": {
    "id": 10061,
    "speed": 92,
    "abilities": [
      "flower-veil",
      "symbiosis"
    ]
  },
  "florges": {
    "id": 671,
    "speed": 75,
    "abilities": [
      "flower-veil",
      "symbiosis"
    ]
  },
  "pangoro": {
    "id": 675,
    "speed": 58,
    "abilities": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ]
  },
  "furfrou": {
    "id": 676,
    "speed": 102,
    "abilities": [
      "fur-coat"
    ]
  },
  "meowstic-male": {
    "id": 678,
    "speed": 104,
    "abilities": [
      "keen-eye",
      "infiltrator",
      "prankster"
    ]
  },
  "meowstic-female": {
    "id": 10025,
    "speed": 104,
    "abilities": [
      "keen-eye",
      "infiltrator",
      "competitive"
    ]
  },
  "aegislash-shield": {
    "id": 681,
    "speed": 60,
    "abilities": [
      "stance-change"
    ]
  },
  "aromatisse": {
    "id": 683,
    "speed": 29,
    "abilities": [
      "healer",
      "aroma-veil"
    ]
  },
  "slurpuff": {
    "id": 685,
    "speed": 72,
    "abilities": [
      "sweet-veil",
      "unburden"
    ]
  },
  "clawitzer": {
    "id": 693,
    "speed": 59,
    "abilities": [
      "mega-launcher"
    ]
  },
  "heliolisk": {
    "id": 695,
    "speed": 109,
    "abilities": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ]
  },
  "tyrantrum": {
    "id": 697,
    "speed": 71,
    "abilities": [
      "strong-jaw",
      "rock-head"
    ]
  },
  "aurorus": {
    "id": 699,
    "speed": 58,
    "abilities": [
      "refrigerate",
      "snow-warning"
    ]
  },
  "sylveon": {
    "id": 700,
    "speed": 60,
    "abilities": [
      "cute-charm",
      "pixilate"
    ]
  },
  "hawlucha": {
    "id": 701,
    "speed": 118,
    "abilities": [
      "limber",
      "unburden",
      "mold-breaker"
    ]
  },
  "dedenne": {
    "id": 702,
    "speed": 101,
    "abilities": [
      "cheek-pouch",
      "pickup",
      "plus"
    ]
  },
  "goodra": {
    "id": 706,
    "speed": 80,
    "abilities": [
      "sap-sipper",
      "hydration",
      "gooey"
    ]
  },
  "klefki": {
    "id": 707,
    "speed": 75,
    "abilities": [
      "prankster",
      "magician"
    ]
  },
  "trevenant": {
    "id": 709,
    "speed": 56,
    "abilities": [
      "natural-cure",
      "frisk",
      "harvest"
    ]
  },
  "gourgeist-average": {
    "id": 711,
    "speed": 84,
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ]
  },
  "avalugg": {
    "id": 713,
    "speed": 28,
    "abilities": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ]
  },
  "noivern": {
    "id": 715,
    "speed": 123,
    "abilities": [
      "frisk",
      "infiltrator",
      "telepathy"
    ]
  },
  "chesnaught-mega": {
    "id": 10292,
    "speed": 44,
    "abilities": [
      "bulletproof"
    ]
  },
  "delphox-mega": {
    "id": 10293,
    "speed": 134,
    "abilities": [
      "levitate"
    ]
  },
  "greninja-mega": {
    "id": 10294,
    "speed": 142,
    "abilities": [
      "protean"
    ]
  },
  "floette-mega": {
    "id": 10296,
    "speed": 102,
    "abilities": [
      "fairy-aura"
    ]
  },
  "meowstic-mega": {
    "id": 10314,
    "speed": 124,
    "abilities": [
      "trace"
    ]
  },
  "hawlucha-mega": {
    "id": 10300,
    "speed": 118,
    "abilities": [
      "no-guard"
    ]
  },
  "decidueye": {
    "id": 724,
    "speed": 70,
    "abilities": [
      "overgrow",
      "long-reach"
    ]
  },
  "incineroar": {
    "id": 727,
    "speed": 60,
    "abilities": [
      "blaze",
      "intimidate"
    ]
  },
  "primarina": {
    "id": 730,
    "speed": 60,
    "abilities": [
      "torrent",
      "liquid-voice"
    ]
  },
  "toucannon": {
    "id": 733,
    "speed": 60,
    "abilities": [
      "keen-eye",
      "skill-link",
      "sheer-force"
    ]
  },
  "crabominable": {
    "id": 740,
    "speed": 43,
    "abilities": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ]
  },
  "toxapex": {
    "id": 748,
    "speed": 35,
    "abilities": [
      "merciless",
      "limber",
      "regenerator"
    ]
  },
  "mudsdale": {
    "id": 750,
    "speed": 35,
    "abilities": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ]
  },
  "araquanid": {
    "id": 752,
    "speed": 42,
    "abilities": [
      "water-bubble",
      "water-absorb"
    ]
  },
  "salazzle": {
    "id": 758,
    "speed": 117,
    "abilities": [
      "corrosion",
      "oblivious"
    ]
  },
  "tsareena": {
    "id": 763,
    "speed": 72,
    "abilities": [
      "leaf-guard",
      "queenly-majesty",
      "sweet-veil"
    ]
  },
  "oranguru": {
    "id": 765,
    "speed": 60,
    "abilities": [
      "inner-focus",
      "telepathy",
      "symbiosis"
    ]
  },
  "passimian": {
    "id": 766,
    "speed": 80,
    "abilities": [
      "receiver",
      "defiant"
    ]
  },
  "mimikyu-disguised": {
    "id": 778,
    "speed": 96,
    "abilities": [
      "disguise"
    ]
  },
  "drampa": {
    "id": 780,
    "speed": 36,
    "abilities": [
      "berserk",
      "sap-sipper",
      "cloud-nine"
    ]
  },
  "kommo-o": {
    "id": 784,
    "speed": 85,
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ]
  },
  "lycanroc-midday": {
    "id": 745,
    "speed": 112,
    "abilities": [
      "keen-eye",
      "sand-rush",
      "steadfast"
    ]
  },
  "crabominable-mega": {
    "id": 10315,
    "speed": 33,
    "abilities": [
      "iron-fist"
    ]
  },
  "drampa-mega": {
    "id": 10302,
    "speed": 36,
    "abilities": [
      "berserk"
    ]
  },
  "scovillain-mega": {
    "id": 10320,
    "speed": 75,
    "abilities": [
      "spicy-spray"
    ]
  },
  "corviknight": {
    "id": 823,
    "speed": 67,
    "abilities": [
      "pressure",
      "unnerve",
      "mirror-armor"
    ]
  },
  "flapple": {
    "id": 841,
    "speed": 70,
    "abilities": [
      "ripen",
      "gluttony",
      "hustle"
    ]
  },
  "appletun": {
    "id": 842,
    "speed": 30,
    "abilities": [
      "ripen",
      "gluttony",
      "thick-fat"
    ]
  },
  "sandaconda": {
    "id": 844,
    "speed": 71,
    "abilities": [
      "sand-spit",
      "shed-skin",
      "sand-veil"
    ]
  },
  "polteageist": {
    "id": 855,
    "speed": 70,
    "abilities": [
      "weak-armor",
      "cursed-body"
    ]
  },
  "hatterene": {
    "id": 858,
    "speed": 29,
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ]
  },
  "mr-rime": {
    "id": 866,
    "speed": 70,
    "abilities": [
      "tangled-feet",
      "screen-cleaner",
      "ice-body"
    ]
  },
  "runerigus": {
    "id": 867,
    "speed": 30,
    "abilities": [
      "wandering-spirit"
    ]
  },
  "alcremie": {
    "id": 869,
    "speed": 64,
    "abilities": [
      "sweet-veil",
      "aroma-veil"
    ]
  },
  "morpeko-full-belly": {
    "id": 877,
    "speed": 97,
    "abilities": [
      "hunger-switch"
    ]
  },
  "dragapult": {
    "id": 887,
    "speed": 142,
    "abilities": [
      "clear-body",
      "infiltrator",
      "cursed-body"
    ]
  },
  "meowscarada": {
    "id": 908,
    "speed": 123,
    "abilities": [
      "overgrow",
      "protean"
    ]
  },
  "skeledirge": {
    "id": 911,
    "speed": 66,
    "abilities": [
      "blaze",
      "unaware"
    ]
  },
  "quaquaval": {
    "id": 914,
    "speed": 85,
    "abilities": [
      "torrent",
      "moxie"
    ]
  },
  "maushold-family-of-four": {
    "id": 925,
    "speed": 111,
    "abilities": [
      "friend-guard",
      "cheek-pouch",
      "technician"
    ]
  },
  "garganacl": {
    "id": 934,
    "speed": 35,
    "abilities": [
      "purifying-salt",
      "sturdy",
      "clear-body"
    ]
  },
  "armarouge": {
    "id": 936,
    "speed": 75,
    "abilities": [
      "flash-fire",
      "weak-armor"
    ]
  },
  "ceruledge": {
    "id": 937,
    "speed": 85,
    "abilities": [
      "flash-fire",
      "weak-armor"
    ]
  },
  "bellibolt": {
    "id": 939,
    "speed": 45,
    "abilities": [
      "electromorphosis",
      "static",
      "damp"
    ]
  },
  "scovillain": {
    "id": 952,
    "speed": 75,
    "abilities": [
      "chlorophyll",
      "insomnia",
      "moody"
    ]
  },
  "espathra": {
    "id": 956,
    "speed": 105,
    "abilities": [
      "opportunist",
      "frisk",
      "speed-boost"
    ]
  },
  "tinkaton": {
    "id": 959,
    "speed": 94,
    "abilities": [
      "mold-breaker",
      "own-tempo",
      "pickpocket"
    ]
  },
  "palafin-zero": {
    "id": 964,
    "speed": 100,
    "abilities": [
      "zero-to-hero"
    ]
  },
  "orthworm": {
    "id": 968,
    "speed": 65,
    "abilities": [
      "earth-eater",
      "sand-veil"
    ]
  },
  "glimmora": {
    "id": 970,
    "speed": 86,
    "abilities": [
      "toxic-debris",
      "corrosion"
    ]
  },
  "farigiraf": {
    "id": 981,
    "speed": 60,
    "abilities": [
      "cud-chew",
      "armor-tail",
      "sap-sipper"
    ]
  },
  "kingambit": {
    "id": 983,
    "speed": 50,
    "abilities": [
      "defiant",
      "supreme-overlord",
      "pressure"
    ]
  },
  "sinistcha": {
    "id": 1013,
    "speed": 70,
    "abilities": [
      "hospitality",
      "heatproof"
    ]
  },
  "archaludon": {
    "id": 1018,
    "speed": 85,
    "abilities": [
      "stamina",
      "sturdy",
      "stalwart"
    ]
  },
  "hydrapple": {
    "id": 1019,
    "speed": 44,
    "abilities": [
      "supersweet-syrup",
      "regenerator",
      "sticky-hold"
    ]
  },
  "glimmora-mega": {
    "id": 10321,
    "speed": 101,
    "abilities": [
      "adaptability"
    ]
  },
  "wyrdeer": {
    "id": 899,
    "speed": 65,
    "abilities": [
      "intimidate",
      "frisk",
      "sap-sipper"
    ]
  },
  "kleavor": {
    "id": 900,
    "speed": 85,
    "abilities": [
      "swarm",
      "sheer-force",
      "sharpness"
    ]
  },
  "basculegion-male": {
    "id": 902,
    "speed": 78,
    "abilities": [
      "swift-swim",
      "adaptability",
      "mold-breaker"
    ]
  },
  "basculegion-female": {
    "id": 10248,
    "speed": 78,
    "abilities": [
      "swift-swim",
      "adaptability",
      "mold-breaker"
    ]
  },
  "sneasler": {
    "id": 903,
    "speed": 120,
    "abilities": [
      "pressure",
      "unburden",
      "poison-touch"
    ]
  },
  "raichu-alola": {
    "id": 10100,
    "speed": 110,
    "abilities": [
      "surge-surfer"
    ]
  },
  "ninetales-alola": {
    "id": 10104,
    "speed": 109,
    "abilities": [
      "snow-cloak",
      "snow-warning"
    ]
  },
  "arcanine-hisui": {
    "id": 10230,
    "speed": 90,
    "abilities": [
      "intimidate",
      "flash-fire",
      "rock-head"
    ]
  },
  "slowbro-galar": {
    "id": 10165,
    "speed": 30,
    "abilities": [
      "quick-draw",
      "own-tempo",
      "regenerator"
    ]
  },
  "tauros-paldea-combat-breed": {
    "id": 10250,
    "speed": 100,
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ]
  },
  "typhlosion-hisui": {
    "id": 10233,
    "speed": 95,
    "abilities": [
      "blaze",
      "frisk"
    ]
  },
  "rotom-heat": {
    "id": 10008,
    "speed": 86,
    "abilities": [
      "levitate"
    ]
  },
  "rotom-wash": {
    "id": 10009,
    "speed": 86,
    "abilities": [
      "levitate"
    ]
  },
  "rotom-frost": {
    "id": 10010,
    "speed": 86,
    "abilities": [
      "levitate"
    ]
  },
  "rotom-fan": {
    "id": 10011,
    "speed": 86,
    "abilities": [
      "levitate"
    ]
  },
  "rotom-mow": {
    "id": 10012,
    "speed": 86,
    "abilities": [
      "levitate"
    ]
  },
  "samurott-hisui": {
    "id": 10236,
    "speed": 85,
    "abilities": [
      "torrent",
      "sharpness"
    ]
  },
  "zoroark-hisui": {
    "id": 10239,
    "speed": 110,
    "abilities": [
      "illusion"
    ]
  },
  "stunfisk-galar": {
    "id": 10180,
    "speed": 32,
    "abilities": [
      "mimicry"
    ]
  },
  "goodra-hisui": {
    "id": 10242,
    "speed": 60,
    "abilities": [
      "sap-sipper",
      "shell-armor",
      "gooey"
    ]
  },
  "avalugg-hisui": {
    "id": 10243,
    "speed": 38,
    "abilities": [
      "strong-jaw",
      "ice-body",
      "sturdy"
    ]
  },
  "decidueye-hisui": {
    "id": 10244,
    "speed": 60,
    "abilities": [
      "overgrow",
      "scrappy"
    ]
  },
  "lycanroc-midnight": {
    "id": 10126,
    "speed": 82,
    "abilities": [
      "keen-eye",
      "vital-spirit",
      "no-guard"
    ]
  },
  "lycanroc-dusk": {
    "id": 10152,
    "speed": 110,
    "abilities": [
      "tough-claws"
    ]
  },
  "tauros-paldea-blaze-breed": {
    "id": 10251,
    "speed": 100,
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ]
  },
  "tauros-paldea-aqua-breed": {
    "id": 10252,
    "speed": 100,
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ]
  }
};

export default pokemonData;
