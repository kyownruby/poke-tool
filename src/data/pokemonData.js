const pokemonData = {
  "venusaur": {
    "id": 3,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "spAtk": 100,
      "spDef": 100,
      "speed": 80
    },
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "weight": 100
  },
  "charizard": {
    "id": 6,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "spAtk": 109,
      "spDef": 85,
      "speed": 100
    },
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "weight": 90.5
  },
  "blastoise": {
    "id": 9,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "spAtk": 85,
      "spDef": 105,
      "speed": 78
    },
    "abilities": [
      "torrent",
      "rain-dish"
    ],
    "weight": 85.5
  },
  "beedrill": {
    "id": 15,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "spAtk": 45,
      "spDef": 80,
      "speed": 75
    },
    "abilities": [
      "swarm",
      "sniper"
    ],
    "weight": 29.5
  },
  "pidgeot": {
    "id": 18,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "spAtk": 70,
      "spDef": 70,
      "speed": 101
    },
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "weight": 39.5
  },
  "arbok": {
    "id": 24,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "spAtk": 65,
      "spDef": 79,
      "speed": 80
    },
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "weight": 65
  },
  "pikachu": {
    "id": 25,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "spAtk": 50,
      "spDef": 50,
      "speed": 90
    },
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "weight": 6
  },
  "raichu": {
    "id": 26,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "spAtk": 90,
      "spDef": 80,
      "speed": 110
    },
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "weight": 30
  },
  "clefable": {
    "id": 36,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "spAtk": 95,
      "spDef": 90,
      "speed": 60
    },
    "abilities": [
      "cute-charm",
      "magic-guard",
      "unaware"
    ],
    "weight": 40
  },
  "ninetales": {
    "id": 38,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "spAtk": 81,
      "spDef": 100,
      "speed": 100
    },
    "abilities": [
      "flash-fire",
      "drought"
    ],
    "weight": 19.9
  },
  "arcanine": {
    "id": 59,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "spAtk": 100,
      "spDef": 80,
      "speed": 95
    },
    "abilities": [
      "intimidate",
      "flash-fire",
      "justified"
    ],
    "weight": 155
  },
  "alakazam": {
    "id": 65,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "spAtk": 135,
      "spDef": 95,
      "speed": 120
    },
    "abilities": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "weight": 48
  },
  "machamp": {
    "id": 68,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "spAtk": 65,
      "spDef": 85,
      "speed": 55
    },
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "weight": 130
  },
  "victreebel": {
    "id": 71,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "spAtk": 100,
      "spDef": 70,
      "speed": 70
    },
    "abilities": [
      "chlorophyll",
      "gluttony"
    ],
    "weight": 15.5
  },
  "slowbro": {
    "id": 80,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "spAtk": 100,
      "spDef": 80,
      "speed": 30
    },
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "weight": 78.5
  },
  "gengar": {
    "id": 94,
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "spAtk": 130,
      "spDef": 75,
      "speed": 110
    },
    "abilities": [
      "cursed-body"
    ],
    "weight": 40.5
  },
  "kangaskhan": {
    "id": 115,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "spAtk": 40,
      "spDef": 80,
      "speed": 90
    },
    "abilities": [
      "early-bird",
      "scrappy",
      "inner-focus"
    ],
    "weight": 80
  },
  "starmie": {
    "id": 121,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "spAtk": 100,
      "spDef": 85,
      "speed": 115
    },
    "abilities": [
      "illuminate",
      "natural-cure",
      "analytic"
    ],
    "weight": 80
  },
  "pinsir": {
    "id": 127,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "spAtk": 55,
      "spDef": 70,
      "speed": 85
    },
    "abilities": [
      "hyper-cutter",
      "mold-breaker",
      "moxie"
    ],
    "weight": 55
  },
  "tauros": {
    "id": 128,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "spAtk": 40,
      "spDef": 70,
      "speed": 110
    },
    "abilities": [
      "intimidate",
      "anger-point",
      "sheer-force"
    ],
    "weight": 88.4
  },
  "gyarados": {
    "id": 130,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "spAtk": 60,
      "spDef": 100,
      "speed": 81
    },
    "abilities": [
      "intimidate",
      "moxie"
    ],
    "weight": 235
  },
  "ditto": {
    "id": 132,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "spAtk": 48,
      "spDef": 48,
      "speed": 48
    },
    "abilities": [
      "limber",
      "imposter"
    ],
    "weight": 4
  },
  "vaporeon": {
    "id": 134,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "spAtk": 110,
      "spDef": 95,
      "speed": 65
    },
    "abilities": [
      "water-absorb",
      "hydration"
    ],
    "weight": 29
  },
  "jolteon": {
    "id": 135,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "spAtk": 110,
      "spDef": 95,
      "speed": 130
    },
    "abilities": [
      "volt-absorb",
      "quick-feet"
    ],
    "weight": 24.5
  },
  "flareon": {
    "id": 136,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "spAtk": 95,
      "spDef": 110,
      "speed": 65
    },
    "abilities": [
      "flash-fire",
      "guts"
    ],
    "weight": 25
  },
  "aerodactyl": {
    "id": 142,
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "spAtk": 60,
      "spDef": 75,
      "speed": 130
    },
    "abilities": [
      "rock-head",
      "pressure",
      "unnerve"
    ],
    "weight": 59
  },
  "snorlax": {
    "id": 143,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "spAtk": 65,
      "spDef": 110,
      "speed": 30
    },
    "abilities": [
      "immunity",
      "thick-fat",
      "gluttony"
    ],
    "weight": 460
  },
  "dragonite": {
    "id": 149,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "spAtk": 100,
      "spDef": 100,
      "speed": 80
    },
    "abilities": [
      "inner-focus",
      "multiscale"
    ],
    "weight": 210
  },
  "venusaur-mega": {
    "id": 10033,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 123,
      "spAtk": 122,
      "spDef": 120,
      "speed": 80
    },
    "abilities": [
      "thick-fat"
    ],
    "weight": 155.5
  },
  "charizard-mega-x": {
    "id": 10034,
    "types": [
      "fire",
      "dragon"
    ],
    "stats": {
      "hp": 78,
      "attack": 130,
      "defense": 111,
      "spAtk": 130,
      "spDef": 85,
      "speed": 100
    },
    "abilities": [
      "tough-claws"
    ],
    "weight": 110.5
  },
  "charizard-mega-y": {
    "id": 10035,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 104,
      "defense": 78,
      "spAtk": 159,
      "spDef": 115,
      "speed": 100
    },
    "abilities": [
      "drought"
    ],
    "weight": 100.5
  },
  "blastoise-mega": {
    "id": 10036,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 103,
      "defense": 120,
      "spAtk": 135,
      "spDef": 115,
      "speed": 78
    },
    "abilities": [
      "mega-launcher"
    ],
    "weight": 101.1
  },
  "beedrill-mega": {
    "id": 10090,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 150,
      "defense": 40,
      "spAtk": 15,
      "spDef": 80,
      "speed": 145
    },
    "abilities": [
      "adaptability"
    ],
    "weight": 40.5
  },
  "pidgeot-mega": {
    "id": 10073,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 80,
      "spAtk": 135,
      "spDef": 80,
      "speed": 121
    },
    "abilities": [
      "no-guard"
    ],
    "weight": 50.5
  },
  "clefable-mega": {
    "id": 10278,
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 93,
      "spAtk": 135,
      "spDef": 110,
      "speed": 70
    },
    "abilities": [
      "magic-bounce"
    ],
    "weight": 42.3
  },
  "alakazam-mega": {
    "id": 10037,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 65,
      "spAtk": 175,
      "spDef": 105,
      "speed": 150
    },
    "abilities": [
      "trace"
    ],
    "weight": 48
  },
  "victreebel-mega": {
    "id": 10279,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 85,
      "spAtk": 135,
      "spDef": 95,
      "speed": 70
    },
    "abilities": [
      "innards-out"
    ],
    "weight": 125.5
  },
  "slowbro-mega": {
    "id": 10071,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 180,
      "spAtk": 130,
      "spDef": 80,
      "speed": 30
    },
    "abilities": [
      "shell-armor"
    ],
    "weight": 120
  },
  "gengar-mega": {
    "id": 10038,
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 80,
      "spAtk": 170,
      "spDef": 95,
      "speed": 130
    },
    "abilities": [
      "shadow-tag"
    ],
    "weight": 40.5
  },
  "kangaskhan-mega": {
    "id": 10039,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 105,
      "attack": 125,
      "defense": 100,
      "spAtk": 60,
      "spDef": 100,
      "speed": 100
    },
    "abilities": [
      "parental-bond"
    ],
    "weight": 100
  },
  "starmie-mega": {
    "id": 10280,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 105,
      "spAtk": 130,
      "spDef": 105,
      "speed": 120
    },
    "abilities": [
      "huge-power"
    ],
    "weight": 80
  },
  "pinsir-mega": {
    "id": 10040,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 155,
      "defense": 120,
      "spAtk": 65,
      "spDef": 90,
      "speed": 105
    },
    "abilities": [
      "aerilate"
    ],
    "weight": 59
  },
  "gyarados-mega": {
    "id": 10041,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 155,
      "defense": 109,
      "spAtk": 70,
      "spDef": 130,
      "speed": 81
    },
    "abilities": [
      "mold-breaker"
    ],
    "weight": 305
  },
  "aerodactyl-mega": {
    "id": 10042,
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 135,
      "defense": 85,
      "spAtk": 70,
      "spDef": 95,
      "speed": 150
    },
    "abilities": [
      "tough-claws"
    ],
    "weight": 79
  },
  "dragonite-mega": {
    "id": 10281,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 91,
      "attack": 124,
      "defense": 115,
      "spAtk": 145,
      "spDef": 125,
      "speed": 100
    },
    "abilities": [
      "multiscale"
    ],
    "weight": 290
  },
  "meganium": {
    "id": 154,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "spAtk": 83,
      "spDef": 100,
      "speed": 80
    },
    "abilities": [
      "overgrow",
      "leaf-guard"
    ],
    "weight": 100.5
  },
  "typhlosion": {
    "id": 157,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "spAtk": 109,
      "spDef": 85,
      "speed": 100
    },
    "abilities": [
      "blaze",
      "flash-fire"
    ],
    "weight": 79.5
  },
  "feraligatr": {
    "id": 160,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "spAtk": 79,
      "spDef": 83,
      "speed": 78
    },
    "abilities": [
      "torrent",
      "sheer-force"
    ],
    "weight": 88.8
  },
  "ariados": {
    "id": 168,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "spAtk": 60,
      "spDef": 70,
      "speed": 40
    },
    "abilities": [
      "swarm",
      "insomnia",
      "sniper"
    ],
    "weight": 33.5
  },
  "ampharos": {
    "id": 181,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "spAtk": 115,
      "spDef": 90,
      "speed": 55
    },
    "abilities": [
      "static",
      "plus"
    ],
    "weight": 61.5
  },
  "azumarill": {
    "id": 184,
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "spAtk": 60,
      "spDef": 80,
      "speed": 50
    },
    "abilities": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "weight": 28.5
  },
  "politoed": {
    "id": 186,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "spAtk": 90,
      "spDef": 100,
      "speed": 70
    },
    "abilities": [
      "water-absorb",
      "damp",
      "drizzle"
    ],
    "weight": 33.9
  },
  "espeon": {
    "id": 196,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "spAtk": 130,
      "spDef": 95,
      "speed": 110
    },
    "abilities": [
      "synchronize",
      "magic-bounce"
    ],
    "weight": 26.5
  },
  "umbreon": {
    "id": 197,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "spAtk": 60,
      "spDef": 130,
      "speed": 65
    },
    "abilities": [
      "synchronize",
      "inner-focus"
    ],
    "weight": 27
  },
  "slowking": {
    "id": 199,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "spAtk": 100,
      "spDef": 110,
      "speed": 30
    },
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "weight": 79.5
  },
  "forretress": {
    "id": 205,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "spAtk": 60,
      "spDef": 60,
      "speed": 40
    },
    "abilities": [
      "sturdy",
      "overcoat"
    ],
    "weight": 125.8
  },
  "steelix": {
    "id": 208,
    "types": [
      "steel",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "spAtk": 55,
      "spDef": 65,
      "speed": 30
    },
    "abilities": [
      "rock-head",
      "sturdy",
      "sheer-force"
    ],
    "weight": 400
  },
  "scizor": {
    "id": 212,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "spAtk": 55,
      "spDef": 80,
      "speed": 65
    },
    "abilities": [
      "swarm",
      "technician",
      "light-metal"
    ],
    "weight": 118
  },
  "heracross": {
    "id": 214,
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "spAtk": 40,
      "spDef": 95,
      "speed": 85
    },
    "abilities": [
      "swarm",
      "guts",
      "moxie"
    ],
    "weight": 54
  },
  "skarmory": {
    "id": 227,
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "spAtk": 40,
      "spDef": 70,
      "speed": 70
    },
    "abilities": [
      "keen-eye",
      "sturdy",
      "weak-armor"
    ],
    "weight": 50.5
  },
  "houndoom": {
    "id": 229,
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "spAtk": 110,
      "spDef": 80,
      "speed": 95
    },
    "abilities": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ],
    "weight": 35
  },
  "tyranitar": {
    "id": 248,
    "types": [
      "rock",
      "dark"
    ],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "spAtk": 95,
      "spDef": 100,
      "speed": 61
    },
    "abilities": [
      "sand-stream",
      "unnerve"
    ],
    "weight": 202
  },
  "meganium-mega": {
    "id": 10282,
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 115,
      "spAtk": 143,
      "spDef": 115,
      "speed": 80
    },
    "abilities": [
      "mega-sol"
    ],
    "weight": 201
  },
  "feraligatr-mega": {
    "id": 10283,
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 85,
      "attack": 160,
      "defense": 125,
      "spAtk": 89,
      "spDef": 93,
      "speed": 78
    },
    "abilities": [
      "dragonize"
    ],
    "weight": 108.8
  },
  "ampharos-mega": {
    "id": 10045,
    "types": [
      "electric",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 105,
      "spAtk": 165,
      "spDef": 110,
      "speed": 45
    },
    "abilities": [
      "mold-breaker"
    ],
    "weight": 61.5
  },
  "steelix-mega": {
    "id": 10072,
    "types": [
      "steel",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 230,
      "spAtk": 55,
      "spDef": 95,
      "speed": 30
    },
    "abilities": [
      "sand-force"
    ],
    "weight": 740
  },
  "scizor-mega": {
    "id": 10046,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 150,
      "defense": 140,
      "spAtk": 65,
      "spDef": 100,
      "speed": 75
    },
    "abilities": [
      "technician"
    ],
    "weight": 125
  },
  "heracross-mega": {
    "id": 10047,
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 185,
      "defense": 115,
      "spAtk": 40,
      "spDef": 105,
      "speed": 75
    },
    "abilities": [
      "skill-link"
    ],
    "weight": 62.5
  },
  "skarmory-mega": {
    "id": 10284,
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 140,
      "defense": 110,
      "spAtk": 40,
      "spDef": 100,
      "speed": 110
    },
    "abilities": [
      "stalwart"
    ],
    "weight": 40.4
  },
  "houndoom-mega": {
    "id": 10048,
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 90,
      "spAtk": 140,
      "spDef": 90,
      "speed": 115
    },
    "abilities": [
      "solar-power"
    ],
    "weight": 49.5
  },
  "tyranitar-mega": {
    "id": 10049,
    "types": [
      "rock",
      "dark"
    ],
    "stats": {
      "hp": 100,
      "attack": 164,
      "defense": 150,
      "spAtk": 95,
      "spDef": 120,
      "speed": 71
    },
    "abilities": [
      "sand-stream"
    ],
    "weight": 255
  },
  "pelipper": {
    "id": 279,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "spAtk": 95,
      "spDef": 70,
      "speed": 65
    },
    "abilities": [
      "keen-eye",
      "drizzle",
      "rain-dish"
    ],
    "weight": 28
  },
  "gardevoir": {
    "id": 282,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "spAtk": 125,
      "spDef": 115,
      "speed": 80
    },
    "abilities": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "weight": 48.4
  },
  "sableye": {
    "id": 302,
    "types": [
      "dark",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "spAtk": 65,
      "spDef": 65,
      "speed": 50
    },
    "abilities": [
      "keen-eye",
      "stall",
      "prankster"
    ],
    "weight": 11
  },
  "aggron": {
    "id": 306,
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "spAtk": 60,
      "spDef": 60,
      "speed": 50
    },
    "abilities": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "weight": 360
  },
  "medicham": {
    "id": 308,
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "spAtk": 60,
      "spDef": 75,
      "speed": 80
    },
    "abilities": [
      "pure-power",
      "telepathy"
    ],
    "weight": 31.5
  },
  "manectric": {
    "id": 310,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "spAtk": 105,
      "spDef": 60,
      "speed": 105
    },
    "abilities": [
      "static",
      "lightning-rod",
      "minus"
    ],
    "weight": 40.2
  },
  "sharpedo": {
    "id": 319,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "spAtk": 95,
      "spDef": 40,
      "speed": 95
    },
    "abilities": [
      "rough-skin",
      "speed-boost"
    ],
    "weight": 88.8
  },
  "camerupt": {
    "id": 323,
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "spAtk": 105,
      "spDef": 75,
      "speed": 40
    },
    "abilities": [
      "magma-armor",
      "solid-rock",
      "anger-point"
    ],
    "weight": 220
  },
  "torkoal": {
    "id": 324,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "spAtk": 85,
      "spDef": 70,
      "speed": 20
    },
    "abilities": [
      "white-smoke",
      "drought",
      "shell-armor"
    ],
    "weight": 80.4
  },
  "altaria": {
    "id": 334,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "spAtk": 70,
      "spDef": 105,
      "speed": 80
    },
    "abilities": [
      "natural-cure",
      "cloud-nine"
    ],
    "weight": 20.6
  },
  "milotic": {
    "id": 350,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "spAtk": 100,
      "spDef": 125,
      "speed": 81
    },
    "abilities": [
      "marvel-scale",
      "competitive",
      "cute-charm"
    ],
    "weight": 162
  },
  "castform": {
    "id": 351,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "spAtk": 70,
      "spDef": 70,
      "speed": 70
    },
    "abilities": [
      "forecast"
    ],
    "weight": 0.8
  },
  "banette": {
    "id": 354,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "spAtk": 83,
      "spDef": 63,
      "speed": 65
    },
    "abilities": [
      "insomnia",
      "frisk",
      "cursed-body"
    ],
    "weight": 12.5
  },
  "chimecho": {
    "id": 358,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "spAtk": 95,
      "spDef": 90,
      "speed": 65
    },
    "abilities": [
      "levitate"
    ],
    "weight": 1
  },
  "absol": {
    "id": 359,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "spAtk": 75,
      "spDef": 60,
      "speed": 75
    },
    "abilities": [
      "pressure",
      "super-luck",
      "justified"
    ],
    "weight": 47
  },
  "glalie": {
    "id": 362,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "spAtk": 80,
      "spDef": 80,
      "speed": 80
    },
    "abilities": [
      "inner-focus",
      "ice-body",
      "moody"
    ],
    "weight": 256.5
  },
  "gardevoir-mega": {
    "id": 10051,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 68,
      "attack": 85,
      "defense": 65,
      "spAtk": 165,
      "spDef": 135,
      "speed": 100
    },
    "abilities": [
      "pixilate"
    ],
    "weight": 48.4
  },
  "sableye-mega": {
    "id": 10066,
    "types": [
      "dark",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 125,
      "spAtk": 85,
      "spDef": 115,
      "speed": 20
    },
    "abilities": [
      "magic-bounce"
    ],
    "weight": 161
  },
  "aggron-mega": {
    "id": 10053,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 140,
      "defense": 230,
      "spAtk": 60,
      "spDef": 80,
      "speed": 50
    },
    "abilities": [
      "filter"
    ],
    "weight": 395
  },
  "medicham-mega": {
    "id": 10054,
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 85,
      "spAtk": 80,
      "spDef": 85,
      "speed": 100
    },
    "abilities": [
      "pure-power"
    ],
    "weight": 31.5
  },
  "manectric-mega": {
    "id": 10055,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 80,
      "spAtk": 135,
      "spDef": 80,
      "speed": 135
    },
    "abilities": [
      "intimidate"
    ],
    "weight": 44
  },
  "sharpedo-mega": {
    "id": 10070,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 140,
      "defense": 70,
      "spAtk": 110,
      "spDef": 65,
      "speed": 105
    },
    "abilities": [
      "strong-jaw"
    ],
    "weight": 130.3
  },
  "camerupt-mega": {
    "id": 10087,
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 100,
      "spAtk": 145,
      "spDef": 105,
      "speed": 20
    },
    "abilities": [
      "sheer-force"
    ],
    "weight": 320.5
  },
  "altaria-mega": {
    "id": 10067,
    "types": [
      "dragon",
      "fairy"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 110,
      "spAtk": 110,
      "spDef": 105,
      "speed": 80
    },
    "abilities": [
      "pixilate"
    ],
    "weight": 20.6
  },
  "banette-mega": {
    "id": 10056,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 64,
      "attack": 165,
      "defense": 75,
      "spAtk": 93,
      "spDef": 83,
      "speed": 75
    },
    "abilities": [
      "prankster"
    ],
    "weight": 13
  },
  "chimecho-mega": {
    "id": 10306,
    "types": [
      "psychic",
      "steel"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 110,
      "spAtk": 135,
      "spDef": 120,
      "speed": 65
    },
    "abilities": [
      "levitate"
    ],
    "weight": 8
  },
  "absol-mega": {
    "id": 10057,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 65,
      "attack": 150,
      "defense": 60,
      "spAtk": 115,
      "spDef": 60,
      "speed": 115
    },
    "abilities": [
      "magic-bounce"
    ],
    "weight": 49
  },
  "glalie-mega": {
    "id": 10074,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 80,
      "spAtk": 120,
      "spDef": 80,
      "speed": 100
    },
    "abilities": [
      "refrigerate"
    ],
    "weight": 350.2
  },
  "torterra": {
    "id": 389,
    "types": [
      "grass",
      "ground"
    ],
    "stats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "spAtk": 75,
      "spDef": 85,
      "speed": 56
    },
    "abilities": [
      "overgrow",
      "shell-armor"
    ],
    "weight": 310
  },
  "infernape": {
    "id": 392,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "spAtk": 104,
      "spDef": 71,
      "speed": 108
    },
    "abilities": [
      "blaze",
      "iron-fist"
    ],
    "weight": 55
  },
  "empoleon": {
    "id": 395,
    "types": [
      "water",
      "steel"
    ],
    "stats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "spAtk": 111,
      "spDef": 101,
      "speed": 60
    },
    "abilities": [
      "torrent",
      "competitive"
    ],
    "weight": 84.5
  },
  "luxray": {
    "id": 405,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "spAtk": 95,
      "spDef": 79,
      "speed": 70
    },
    "abilities": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "weight": 42
  },
  "roserade": {
    "id": 407,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "spAtk": 125,
      "spDef": 105,
      "speed": 90
    },
    "abilities": [
      "natural-cure",
      "poison-point",
      "technician"
    ],
    "weight": 14.5
  },
  "rampardos": {
    "id": 409,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "spAtk": 65,
      "spDef": 50,
      "speed": 58
    },
    "abilities": [
      "mold-breaker",
      "sheer-force"
    ],
    "weight": 102.5
  },
  "bastiodon": {
    "id": 411,
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "spAtk": 47,
      "spDef": 138,
      "speed": 30
    },
    "abilities": [
      "sturdy",
      "soundproof"
    ],
    "weight": 149.5
  },
  "lopunny": {
    "id": 428,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "spAtk": 54,
      "spDef": 96,
      "speed": 105
    },
    "abilities": [
      "cute-charm",
      "klutz",
      "limber"
    ],
    "weight": 33.3
  },
  "spiritomb": {
    "id": 442,
    "types": [
      "ghost",
      "dark"
    ],
    "stats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "spAtk": 92,
      "spDef": 108,
      "speed": 35
    },
    "abilities": [
      "pressure",
      "infiltrator"
    ],
    "weight": 108
  },
  "garchomp": {
    "id": 445,
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "spAtk": 80,
      "spDef": 85,
      "speed": 102
    },
    "abilities": [
      "sand-veil",
      "rough-skin"
    ],
    "weight": 95
  },
  "lucario": {
    "id": 448,
    "types": [
      "fighting",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "spAtk": 115,
      "spDef": 70,
      "speed": 90
    },
    "abilities": [
      "steadfast",
      "inner-focus",
      "justified"
    ],
    "weight": 54
  },
  "hippowdon": {
    "id": 450,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "spAtk": 68,
      "spDef": 72,
      "speed": 47
    },
    "abilities": [
      "sand-stream",
      "sand-force"
    ],
    "weight": 300
  },
  "toxicroak": {
    "id": 454,
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "spAtk": 86,
      "spDef": 65,
      "speed": 85
    },
    "abilities": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ],
    "weight": 44.4
  },
  "abomasnow": {
    "id": 460,
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "spAtk": 92,
      "spDef": 85,
      "speed": 60
    },
    "abilities": [
      "snow-warning",
      "soundproof"
    ],
    "weight": 135.5
  },
  "weavile": {
    "id": 461,
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "spAtk": 45,
      "spDef": 85,
      "speed": 125
    },
    "abilities": [
      "pressure",
      "pickpocket"
    ],
    "weight": 34
  },
  "rhyperior": {
    "id": 464,
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "spAtk": 55,
      "spDef": 55,
      "speed": 40
    },
    "abilities": [
      "lightning-rod",
      "solid-rock",
      "reckless"
    ],
    "weight": 282.8
  },
  "leafeon": {
    "id": 470,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "spAtk": 60,
      "spDef": 65,
      "speed": 95
    },
    "abilities": [
      "leaf-guard",
      "chlorophyll"
    ],
    "weight": 25.5
  },
  "glaceon": {
    "id": 471,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "spAtk": 130,
      "spDef": 95,
      "speed": 65
    },
    "abilities": [
      "snow-cloak",
      "ice-body"
    ],
    "weight": 25.9
  },
  "gliscor": {
    "id": 472,
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "spAtk": 45,
      "spDef": 75,
      "speed": 95
    },
    "abilities": [
      "hyper-cutter",
      "sand-veil",
      "poison-heal"
    ],
    "weight": 42.5
  },
  "mamoswine": {
    "id": 473,
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "spAtk": 70,
      "spDef": 60,
      "speed": 80
    },
    "abilities": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "weight": 291
  },
  "gallade": {
    "id": 475,
    "types": [
      "psychic",
      "fighting"
    ],
    "stats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "spAtk": 65,
      "spDef": 115,
      "speed": 80
    },
    "abilities": [
      "steadfast",
      "sharpness",
      "justified"
    ],
    "weight": 52
  },
  "froslass": {
    "id": 478,
    "types": [
      "ice",
      "ghost"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "spAtk": 80,
      "spDef": 70,
      "speed": 110
    },
    "abilities": [
      "snow-cloak",
      "cursed-body"
    ],
    "weight": 26.6
  },
  "rotom": {
    "id": 479,
    "types": [
      "electric",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "spAtk": 95,
      "spDef": 77,
      "speed": 91
    },
    "abilities": [
      "levitate"
    ],
    "weight": 0.3
  },
  "lopunny-mega": {
    "id": 10088,
    "types": [
      "normal",
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 136,
      "defense": 94,
      "spAtk": 54,
      "spDef": 96,
      "speed": 135
    },
    "abilities": [
      "scrappy"
    ],
    "weight": 28.3
  },
  "garchomp-mega": {
    "id": 10058,
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 170,
      "defense": 115,
      "spAtk": 120,
      "spDef": 95,
      "speed": 92
    },
    "abilities": [
      "sand-force"
    ],
    "weight": 95
  },
  "lucario-mega": {
    "id": 10059,
    "types": [
      "fighting",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 145,
      "defense": 88,
      "spAtk": 140,
      "spDef": 70,
      "speed": 112
    },
    "abilities": [
      "adaptability"
    ],
    "weight": 57.5
  },
  "abomasnow-mega": {
    "id": 10060,
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 132,
      "defense": 105,
      "spAtk": 132,
      "spDef": 105,
      "speed": 30
    },
    "abilities": [
      "snow-warning"
    ],
    "weight": 185
  },
  "gallade-mega": {
    "id": 10068,
    "types": [
      "psychic",
      "fighting"
    ],
    "stats": {
      "hp": 68,
      "attack": 165,
      "defense": 95,
      "spAtk": 65,
      "spDef": 115,
      "speed": 110
    },
    "abilities": [
      "inner-focus"
    ],
    "weight": 56.4
  },
  "froslass-mega": {
    "id": 10285,
    "types": [
      "ice",
      "ghost"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "spAtk": 140,
      "spDef": 100,
      "speed": 120
    },
    "abilities": [
      "snow-warning"
    ],
    "weight": 29.6
  },
  "serperior": {
    "id": 497,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "spAtk": 75,
      "spDef": 95,
      "speed": 113
    },
    "abilities": [
      "overgrow",
      "contrary"
    ],
    "weight": 63
  },
  "emboar": {
    "id": 500,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "spAtk": 100,
      "spDef": 65,
      "speed": 65
    },
    "abilities": [
      "blaze",
      "reckless"
    ],
    "weight": 150
  },
  "samurott": {
    "id": 503,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "spAtk": 108,
      "spDef": 70,
      "speed": 70
    },
    "abilities": [
      "torrent",
      "shell-armor"
    ],
    "weight": 94.6
  },
  "watchog": {
    "id": 505,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "spAtk": 60,
      "spDef": 69,
      "speed": 77
    },
    "abilities": [
      "illuminate",
      "keen-eye",
      "analytic"
    ],
    "weight": 27
  },
  "liepard": {
    "id": 510,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "spAtk": 88,
      "spDef": 50,
      "speed": 106
    },
    "abilities": [
      "limber",
      "unburden",
      "prankster"
    ],
    "weight": 37.5
  },
  "simisage": {
    "id": 512,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "spAtk": 98,
      "spDef": 63,
      "speed": 101
    },
    "abilities": [
      "gluttony",
      "overgrow"
    ],
    "weight": 30.5
  },
  "simisear": {
    "id": 514,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "spAtk": 98,
      "spDef": 63,
      "speed": 101
    },
    "abilities": [
      "gluttony",
      "blaze"
    ],
    "weight": 28
  },
  "simipour": {
    "id": 516,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "spAtk": 98,
      "spDef": 63,
      "speed": 101
    },
    "abilities": [
      "gluttony",
      "torrent"
    ],
    "weight": 29
  },
  "excadrill": {
    "id": 530,
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "spAtk": 50,
      "spDef": 65,
      "speed": 88
    },
    "abilities": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ],
    "weight": 40.4
  },
  "audino": {
    "id": 531,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "spAtk": 60,
      "spDef": 86,
      "speed": 50
    },
    "abilities": [
      "healer",
      "regenerator",
      "klutz"
    ],
    "weight": 31
  },
  "conkeldurr": {
    "id": 534,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "spAtk": 55,
      "spDef": 65,
      "speed": 45
    },
    "abilities": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "weight": 87
  },
  "whimsicott": {
    "id": 547,
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "spAtk": 77,
      "spDef": 75,
      "speed": 116
    },
    "abilities": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ],
    "weight": 6.6
  },
  "krookodile": {
    "id": 553,
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "spAtk": 65,
      "spDef": 70,
      "speed": 92
    },
    "abilities": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "weight": 96.3
  },
  "cofagrigus": {
    "id": 563,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "spAtk": 95,
      "spDef": 105,
      "speed": 30
    },
    "abilities": [
      "mummy"
    ],
    "weight": 76.5
  },
  "garbodor": {
    "id": 569,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "spAtk": 60,
      "spDef": 82,
      "speed": 75
    },
    "abilities": [
      "stench",
      "weak-armor",
      "aftermath"
    ],
    "weight": 107.3
  },
  "zoroark": {
    "id": 571,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "spAtk": 120,
      "spDef": 60,
      "speed": 105
    },
    "abilities": [
      "illusion"
    ],
    "weight": 81.1
  },
  "reuniclus": {
    "id": 579,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "spAtk": 125,
      "spDef": 85,
      "speed": 30
    },
    "abilities": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "weight": 20.1
  },
  "vanilluxe": {
    "id": 584,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "spAtk": 110,
      "spDef": 95,
      "speed": 79
    },
    "abilities": [
      "ice-body",
      "snow-warning",
      "weak-armor"
    ],
    "weight": 57.5
  },
  "emolga": {
    "id": 587,
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "spAtk": 75,
      "spDef": 60,
      "speed": 103
    },
    "abilities": [
      "static",
      "motor-drive"
    ],
    "weight": 5
  },
  "chandelure": {
    "id": 609,
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "spAtk": 145,
      "spDef": 90,
      "speed": 80
    },
    "abilities": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "weight": 34.3
  },
  "beartic": {
    "id": 614,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "spAtk": 70,
      "spDef": 80,
      "speed": 50
    },
    "abilities": [
      "snow-cloak",
      "slush-rush",
      "swift-swim"
    ],
    "weight": 260
  },
  "stunfisk": {
    "id": 618,
    "types": [
      "ground",
      "electric"
    ],
    "stats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "spAtk": 81,
      "spDef": 99,
      "speed": 32
    },
    "abilities": [
      "static",
      "limber",
      "sand-veil"
    ],
    "weight": 11
  },
  "golurk": {
    "id": 623,
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "spAtk": 55,
      "spDef": 80,
      "speed": 55
    },
    "abilities": [
      "iron-fist",
      "klutz",
      "no-guard"
    ],
    "weight": 330
  },
  "hydreigon": {
    "id": 635,
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "spAtk": 125,
      "spDef": 90,
      "speed": 98
    },
    "abilities": [
      "levitate"
    ],
    "weight": 160
  },
  "volcarona": {
    "id": 637,
    "types": [
      "bug",
      "fire"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "spAtk": 135,
      "spDef": 105,
      "speed": 100
    },
    "abilities": [
      "flame-body",
      "swarm"
    ],
    "weight": 46
  },
  "emboar-mega": {
    "id": 10286,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 110,
      "attack": 148,
      "defense": 75,
      "spAtk": 110,
      "spDef": 110,
      "speed": 75
    },
    "abilities": [
      "mold-breaker"
    ],
    "weight": 180.3
  },
  "excadrill-mega": {
    "id": 10287,
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 110,
      "attack": 165,
      "defense": 100,
      "spAtk": 65,
      "spDef": 65,
      "speed": 103
    },
    "abilities": [
      "piercing-drill"
    ],
    "weight": 60
  },
  "audino-mega": {
    "id": 10069,
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 126,
      "spAtk": 80,
      "spDef": 126,
      "speed": 50
    },
    "abilities": [
      "healer"
    ],
    "weight": 32
  },
  "chandelure-mega": {
    "id": 10291,
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 110,
      "spAtk": 175,
      "spDef": 110,
      "speed": 90
    },
    "abilities": [
      "infiltrator"
    ],
    "weight": 69.6
  },
  "golurk-mega": {
    "id": 10313,
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 89,
      "attack": 159,
      "defense": 105,
      "spAtk": 70,
      "spDef": 105,
      "speed": 55
    },
    "abilities": [
      "unseen-fist"
    ],
    "weight": 330
  },
  "chesnaught": {
    "id": 652,
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "spAtk": 74,
      "spDef": 75,
      "speed": 64
    },
    "abilities": [
      "overgrow",
      "bulletproof"
    ],
    "weight": 90
  },
  "delphox": {
    "id": 655,
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "spAtk": 114,
      "spDef": 100,
      "speed": 104
    },
    "abilities": [
      "blaze",
      "magician"
    ],
    "weight": 39
  },
  "greninja": {
    "id": 658,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "spAtk": 103,
      "spDef": 71,
      "speed": 122
    },
    "abilities": [
      "torrent",
      "protean"
    ],
    "weight": 40
  },
  "diggersby": {
    "id": 660,
    "types": [
      "normal",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "spAtk": 50,
      "spDef": 77,
      "speed": 78
    },
    "abilities": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ],
    "weight": 42.4
  },
  "talonflame": {
    "id": 663,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "spAtk": 74,
      "spDef": 69,
      "speed": 126
    },
    "abilities": [
      "flame-body",
      "gale-wings"
    ],
    "weight": 24.5
  },
  "vivillon": {
    "id": 666,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "spAtk": 90,
      "spDef": 50,
      "speed": 89
    },
    "abilities": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ],
    "weight": 17
  },
  "floette": {
    "id": 670,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "spAtk": 75,
      "spDef": 98,
      "speed": 52
    },
    "abilities": [
      "flower-veil",
      "symbiosis"
    ],
    "weight": 0.9
  },
  "florges": {
    "id": 671,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "spAtk": 112,
      "spDef": 154,
      "speed": 75
    },
    "abilities": [
      "flower-veil",
      "symbiosis"
    ],
    "weight": 10
  },
  "pangoro": {
    "id": 675,
    "types": [
      "fighting",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "spAtk": 69,
      "spDef": 71,
      "speed": 58
    },
    "abilities": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ],
    "weight": 136
  },
  "furfrou": {
    "id": 676,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "spAtk": 65,
      "spDef": 90,
      "speed": 102
    },
    "abilities": [
      "fur-coat"
    ],
    "weight": 28
  },
  "meowstic-male": {
    "id": 678,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "spAtk": 83,
      "spDef": 81,
      "speed": 104
    },
    "abilities": [
      "keen-eye",
      "infiltrator",
      "prankster"
    ],
    "weight": 8.5
  },
  "meowstic-female": {
    "id": 10025,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "spAtk": 83,
      "spDef": 81,
      "speed": 104
    },
    "abilities": [
      "keen-eye",
      "infiltrator",
      "competitive"
    ],
    "weight": 8.5
  },
  "aegislash-shield": {
    "id": 681,
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "spAtk": 50,
      "spDef": 140,
      "speed": 60
    },
    "abilities": [
      "stance-change"
    ],
    "weight": 53
  },
  "aegislash-blade": {
    "id": 10026,
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 140,
      "defense": 50,
      "spAtk": 140,
      "spDef": 50,
      "speed": 60
    },
    "abilities": [
      "stance-change"
    ],
    "weight": 53
  },
  "aromatisse": {
    "id": 683,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "spAtk": 99,
      "spDef": 89,
      "speed": 29
    },
    "abilities": [
      "healer",
      "aroma-veil"
    ],
    "weight": 15.5
  },
  "slurpuff": {
    "id": 685,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "spAtk": 85,
      "spDef": 75,
      "speed": 72
    },
    "abilities": [
      "sweet-veil",
      "unburden"
    ],
    "weight": 5
  },
  "clawitzer": {
    "id": 693,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "spAtk": 120,
      "spDef": 89,
      "speed": 59
    },
    "abilities": [
      "mega-launcher"
    ],
    "weight": 35.3
  },
  "heliolisk": {
    "id": 695,
    "types": [
      "electric",
      "normal"
    ],
    "stats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "spAtk": 109,
      "spDef": 94,
      "speed": 109
    },
    "abilities": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ],
    "weight": 21
  },
  "tyrantrum": {
    "id": 697,
    "types": [
      "rock",
      "dragon"
    ],
    "stats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "spAtk": 69,
      "spDef": 59,
      "speed": 71
    },
    "abilities": [
      "strong-jaw",
      "rock-head"
    ],
    "weight": 270
  },
  "aurorus": {
    "id": 699,
    "types": [
      "rock",
      "ice"
    ],
    "stats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "spAtk": 99,
      "spDef": 92,
      "speed": 58
    },
    "abilities": [
      "refrigerate",
      "snow-warning"
    ],
    "weight": 225
  },
  "sylveon": {
    "id": 700,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "spAtk": 110,
      "spDef": 130,
      "speed": 60
    },
    "abilities": [
      "cute-charm",
      "pixilate"
    ],
    "weight": 23.5
  },
  "hawlucha": {
    "id": 701,
    "types": [
      "fighting",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "spAtk": 74,
      "spDef": 63,
      "speed": 118
    },
    "abilities": [
      "limber",
      "unburden",
      "mold-breaker"
    ],
    "weight": 21.5
  },
  "dedenne": {
    "id": 702,
    "types": [
      "electric",
      "fairy"
    ],
    "stats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "spAtk": 81,
      "spDef": 67,
      "speed": 101
    },
    "abilities": [
      "cheek-pouch",
      "pickup",
      "plus"
    ],
    "weight": 2.2
  },
  "goodra": {
    "id": 706,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "spAtk": 110,
      "spDef": 150,
      "speed": 80
    },
    "abilities": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "weight": 150.5
  },
  "klefki": {
    "id": 707,
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "spAtk": 80,
      "spDef": 87,
      "speed": 75
    },
    "abilities": [
      "prankster",
      "magician"
    ],
    "weight": 3
  },
  "trevenant": {
    "id": 709,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "spAtk": 65,
      "spDef": 82,
      "speed": 56
    },
    "abilities": [
      "natural-cure",
      "frisk",
      "harvest"
    ],
    "weight": 71
  },
  "gourgeist-average": {
    "id": 711,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "spAtk": 58,
      "spDef": 75,
      "speed": 84
    },
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "weight": 12.5
  },
  "avalugg": {
    "id": 713,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "spAtk": 44,
      "spDef": 46,
      "speed": 28
    },
    "abilities": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ],
    "weight": 505
  },
  "noivern": {
    "id": 715,
    "types": [
      "flying",
      "dragon"
    ],
    "stats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "spAtk": 97,
      "spDef": 80,
      "speed": 123
    },
    "abilities": [
      "frisk",
      "infiltrator",
      "telepathy"
    ],
    "weight": 85
  },
  "chesnaught-mega": {
    "id": 10292,
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 137,
      "defense": 172,
      "spAtk": 74,
      "spDef": 115,
      "speed": 44
    },
    "abilities": [
      "bulletproof"
    ],
    "weight": 90
  },
  "delphox-mega": {
    "id": 10293,
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "spAtk": 159,
      "spDef": 125,
      "speed": 134
    },
    "abilities": [
      "levitate"
    ],
    "weight": 39
  },
  "greninja-mega": {
    "id": 10294,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 72,
      "attack": 125,
      "defense": 77,
      "spAtk": 133,
      "spDef": 81,
      "speed": 142
    },
    "abilities": [
      "protean"
    ],
    "weight": 40
  },
  "floette-mega": {
    "id": 10296,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 74,
      "attack": 85,
      "defense": 87,
      "spAtk": 155,
      "spDef": 148,
      "speed": 102
    },
    "abilities": [
      "fairy-aura"
    ],
    "weight": 100.8
  },
  "meowstic-mega": {
    "id": 10314,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "spAtk": 143,
      "spDef": 101,
      "speed": 124
    },
    "abilities": [
      "trace"
    ],
    "weight": 10.1
  },
  "hawlucha-mega": {
    "id": 10300,
    "types": [
      "fighting",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 137,
      "defense": 100,
      "spAtk": 74,
      "spDef": 93,
      "speed": 118
    },
    "abilities": [
      "no-guard"
    ],
    "weight": 25
  },
  "decidueye": {
    "id": 724,
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "spAtk": 100,
      "spDef": 100,
      "speed": 70
    },
    "abilities": [
      "overgrow",
      "long-reach"
    ],
    "weight": 36.6
  },
  "incineroar": {
    "id": 727,
    "types": [
      "fire",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "spAtk": 80,
      "spDef": 90,
      "speed": 60
    },
    "abilities": [
      "blaze",
      "intimidate"
    ],
    "weight": 83
  },
  "primarina": {
    "id": 730,
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "spAtk": 126,
      "spDef": 116,
      "speed": 60
    },
    "abilities": [
      "torrent",
      "liquid-voice"
    ],
    "weight": 44
  },
  "toucannon": {
    "id": 733,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "spAtk": 75,
      "spDef": 75,
      "speed": 60
    },
    "abilities": [
      "keen-eye",
      "skill-link",
      "sheer-force"
    ],
    "weight": 26
  },
  "crabominable": {
    "id": 740,
    "types": [
      "fighting",
      "ice"
    ],
    "stats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "spAtk": 62,
      "spDef": 67,
      "speed": 43
    },
    "abilities": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ],
    "weight": 180
  },
  "toxapex": {
    "id": 748,
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "spAtk": 53,
      "spDef": 142,
      "speed": 35
    },
    "abilities": [
      "merciless",
      "limber",
      "regenerator"
    ],
    "weight": 14.5
  },
  "mudsdale": {
    "id": 750,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "spAtk": 55,
      "spDef": 85,
      "speed": 35
    },
    "abilities": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ],
    "weight": 920
  },
  "araquanid": {
    "id": 752,
    "types": [
      "water",
      "bug"
    ],
    "stats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "spAtk": 50,
      "spDef": 132,
      "speed": 42
    },
    "abilities": [
      "water-bubble",
      "water-absorb"
    ],
    "weight": 82
  },
  "salazzle": {
    "id": 758,
    "types": [
      "poison",
      "fire"
    ],
    "stats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "spAtk": 111,
      "spDef": 60,
      "speed": 117
    },
    "abilities": [
      "corrosion",
      "oblivious"
    ],
    "weight": 22.2
  },
  "tsareena": {
    "id": 763,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "spAtk": 50,
      "spDef": 98,
      "speed": 72
    },
    "abilities": [
      "leaf-guard",
      "queenly-majesty",
      "sweet-veil"
    ],
    "weight": 21.4
  },
  "oranguru": {
    "id": 765,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "spAtk": 90,
      "spDef": 110,
      "speed": 60
    },
    "abilities": [
      "inner-focus",
      "telepathy",
      "symbiosis"
    ],
    "weight": 76
  },
  "passimian": {
    "id": 766,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "spAtk": 40,
      "spDef": 60,
      "speed": 80
    },
    "abilities": [
      "receiver",
      "defiant"
    ],
    "weight": 82.8
  },
  "mimikyu-disguised": {
    "id": 778,
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "spAtk": 50,
      "spDef": 105,
      "speed": 96
    },
    "abilities": [
      "disguise"
    ],
    "weight": 0.7
  },
  "drampa": {
    "id": 780,
    "types": [
      "normal",
      "dragon"
    ],
    "stats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "spAtk": 135,
      "spDef": 91,
      "speed": 36
    },
    "abilities": [
      "berserk",
      "sap-sipper",
      "cloud-nine"
    ],
    "weight": 185
  },
  "kommo-o": {
    "id": 784,
    "types": [
      "dragon",
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "spAtk": 100,
      "spDef": 105,
      "speed": 85
    },
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "weight": 78.2
  },
  "lycanroc-midday": {
    "id": 745,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "spAtk": 55,
      "spDef": 65,
      "speed": 112
    },
    "abilities": [
      "keen-eye",
      "sand-rush",
      "steadfast"
    ],
    "weight": 25
  },
  "crabominable-mega": {
    "id": 10315,
    "types": [
      "fighting",
      "ice"
    ],
    "stats": {
      "hp": 97,
      "attack": 157,
      "defense": 122,
      "spAtk": 62,
      "spDef": 107,
      "speed": 33
    },
    "abilities": [
      "iron-fist"
    ],
    "weight": 252.8
  },
  "drampa-mega": {
    "id": 10302,
    "types": [
      "normal",
      "dragon"
    ],
    "stats": {
      "hp": 78,
      "attack": 85,
      "defense": 110,
      "spAtk": 160,
      "spDef": 116,
      "speed": 36
    },
    "abilities": [
      "berserk"
    ],
    "weight": 240.5
  },
  "scovillain-mega": {
    "id": 10320,
    "types": [
      "grass",
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 138,
      "defense": 85,
      "spAtk": 138,
      "spDef": 85,
      "speed": 75
    },
    "abilities": [
      "spicy-spray"
    ],
    "weight": 22
  },
  "corviknight": {
    "id": 823,
    "types": [
      "flying",
      "steel"
    ],
    "stats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "spAtk": 53,
      "spDef": 85,
      "speed": 67
    },
    "abilities": [
      "pressure",
      "unnerve",
      "mirror-armor"
    ],
    "weight": 75
  },
  "flapple": {
    "id": 841,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "spAtk": 95,
      "spDef": 60,
      "speed": 70
    },
    "abilities": [
      "ripen",
      "gluttony",
      "hustle"
    ],
    "weight": 1
  },
  "appletun": {
    "id": 842,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "spAtk": 100,
      "spDef": 80,
      "speed": 30
    },
    "abilities": [
      "ripen",
      "gluttony",
      "thick-fat"
    ],
    "weight": 13
  },
  "sandaconda": {
    "id": 844,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "spAtk": 65,
      "spDef": 70,
      "speed": 71
    },
    "abilities": [
      "sand-spit",
      "shed-skin",
      "sand-veil"
    ],
    "weight": 65.5
  },
  "polteageist": {
    "id": 855,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "spAtk": 134,
      "spDef": 114,
      "speed": 70
    },
    "abilities": [
      "weak-armor",
      "cursed-body"
    ],
    "weight": 0.4
  },
  "hatterene": {
    "id": 858,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "spAtk": 136,
      "spDef": 103,
      "speed": 29
    },
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ],
    "weight": 5.1
  },
  "mr-rime": {
    "id": 866,
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "spAtk": 110,
      "spDef": 100,
      "speed": 70
    },
    "abilities": [
      "tangled-feet",
      "screen-cleaner",
      "ice-body"
    ],
    "weight": 58.2
  },
  "runerigus": {
    "id": 867,
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "spAtk": 50,
      "spDef": 105,
      "speed": 30
    },
    "abilities": [
      "wandering-spirit"
    ],
    "weight": 66.6
  },
  "alcremie": {
    "id": 869,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "spAtk": 110,
      "spDef": 121,
      "speed": 64
    },
    "abilities": [
      "sweet-veil",
      "aroma-veil"
    ],
    "weight": 0.5
  },
  "morpeko-full-belly": {
    "id": 877,
    "types": [
      "electric",
      "dark"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "spAtk": 70,
      "spDef": 58,
      "speed": 97
    },
    "abilities": [
      "hunger-switch"
    ],
    "weight": 3
  },
  "dragapult": {
    "id": 887,
    "types": [
      "dragon",
      "ghost"
    ],
    "stats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "spAtk": 100,
      "spDef": 75,
      "speed": 142
    },
    "abilities": [
      "clear-body",
      "infiltrator",
      "cursed-body"
    ],
    "weight": 50
  },
  "meowscarada": {
    "id": 908,
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "spAtk": 81,
      "spDef": 70,
      "speed": 123
    },
    "abilities": [
      "overgrow",
      "protean"
    ],
    "weight": 31.2
  },
  "skeledirge": {
    "id": 911,
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 104,
      "attack": 75,
      "defense": 100,
      "spAtk": 110,
      "spDef": 75,
      "speed": 66
    },
    "abilities": [
      "blaze",
      "unaware"
    ],
    "weight": 326.5
  },
  "quaquaval": {
    "id": 914,
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 80,
      "spAtk": 85,
      "spDef": 75,
      "speed": 85
    },
    "abilities": [
      "torrent",
      "moxie"
    ],
    "weight": 61.9
  },
  "maushold-family-of-four": {
    "id": 925,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "spAtk": 65,
      "spDef": 75,
      "speed": 111
    },
    "abilities": [
      "friend-guard",
      "cheek-pouch",
      "technician"
    ],
    "weight": 2.3
  },
  "garganacl": {
    "id": 934,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 130,
      "spAtk": 45,
      "spDef": 90,
      "speed": 35
    },
    "abilities": [
      "purifying-salt",
      "sturdy",
      "clear-body"
    ],
    "weight": 240
  },
  "armarouge": {
    "id": 936,
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "spAtk": 125,
      "spDef": 80,
      "speed": 75
    },
    "abilities": [
      "flash-fire",
      "weak-armor"
    ],
    "weight": 85
  },
  "ceruledge": {
    "id": 937,
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 80,
      "spAtk": 60,
      "spDef": 100,
      "speed": 85
    },
    "abilities": [
      "flash-fire",
      "weak-armor"
    ],
    "weight": 62
  },
  "bellibolt": {
    "id": 939,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 109,
      "attack": 64,
      "defense": 91,
      "spAtk": 103,
      "spDef": 83,
      "speed": 45
    },
    "abilities": [
      "electromorphosis",
      "static",
      "damp"
    ],
    "weight": 113
  },
  "scovillain": {
    "id": 952,
    "types": [
      "grass",
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "spAtk": 108,
      "spDef": 65,
      "speed": 75
    },
    "abilities": [
      "chlorophyll",
      "insomnia",
      "moody"
    ],
    "weight": 15
  },
  "espathra": {
    "id": 956,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 60,
      "spAtk": 101,
      "spDef": 60,
      "speed": 105
    },
    "abilities": [
      "opportunist",
      "frisk",
      "speed-boost"
    ],
    "weight": 90
  },
  "tinkaton": {
    "id": 959,
    "types": [
      "fairy",
      "steel"
    ],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "spAtk": 70,
      "spDef": 105,
      "speed": 94
    },
    "abilities": [
      "mold-breaker",
      "own-tempo",
      "pickpocket"
    ],
    "weight": 112.8
  },
  "palafin-zero": {
    "id": 964,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "spAtk": 53,
      "spDef": 62,
      "speed": 100
    },
    "abilities": [
      "zero-to-hero"
    ],
    "weight": 60.2
  },
  "orthworm": {
    "id": 968,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 145,
      "spAtk": 60,
      "spDef": 55,
      "speed": 65
    },
    "abilities": [
      "earth-eater",
      "sand-veil"
    ],
    "weight": 310
  },
  "glimmora": {
    "id": 970,
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "spAtk": 130,
      "spDef": 81,
      "speed": 86
    },
    "abilities": [
      "toxic-debris",
      "corrosion"
    ],
    "weight": 45
  },
  "farigiraf": {
    "id": 981,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 120,
      "attack": 90,
      "defense": 70,
      "spAtk": 110,
      "spDef": 70,
      "speed": 60
    },
    "abilities": [
      "cud-chew",
      "armor-tail",
      "sap-sipper"
    ],
    "weight": 160
  },
  "kingambit": {
    "id": 983,
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "spAtk": 60,
      "spDef": 85,
      "speed": 50
    },
    "abilities": [
      "defiant",
      "supreme-overlord",
      "pressure"
    ],
    "weight": 120
  },
  "sinistcha": {
    "id": 1013,
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "spAtk": 121,
      "spDef": 80,
      "speed": 70
    },
    "abilities": [
      "hospitality",
      "heatproof"
    ],
    "weight": 2.2
  },
  "archaludon": {
    "id": 1018,
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "spAtk": 125,
      "spDef": 65,
      "speed": 85
    },
    "abilities": [
      "stamina",
      "sturdy",
      "stalwart"
    ],
    "weight": 60
  },
  "hydrapple": {
    "id": 1019,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "spAtk": 120,
      "spDef": 80,
      "speed": 44
    },
    "abilities": [
      "supersweet-syrup",
      "regenerator",
      "sticky-hold"
    ],
    "weight": 93
  },
  "glimmora-mega": {
    "id": 10321,
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 83,
      "attack": 90,
      "defense": 105,
      "spAtk": 150,
      "spDef": 96,
      "speed": 101
    },
    "abilities": [
      "adaptability"
    ],
    "weight": 77
  },
  "wyrdeer": {
    "id": 899,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "spAtk": 105,
      "spDef": 75,
      "speed": 65
    },
    "abilities": [
      "intimidate",
      "frisk",
      "sap-sipper"
    ],
    "weight": 95.1
  },
  "kleavor": {
    "id": 900,
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "spAtk": 45,
      "spDef": 70,
      "speed": 85
    },
    "abilities": [
      "swarm",
      "sheer-force",
      "sharpness"
    ],
    "weight": 89
  },
  "basculegion-male": {
    "id": 902,
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "spAtk": 80,
      "spDef": 75,
      "speed": 78
    },
    "abilities": [
      "swift-swim",
      "adaptability",
      "mold-breaker"
    ],
    "weight": 110
  },
  "basculegion-female": {
    "id": 10248,
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 120,
      "attack": 92,
      "defense": 65,
      "spAtk": 100,
      "spDef": 75,
      "speed": 78
    },
    "abilities": [
      "swift-swim",
      "adaptability",
      "mold-breaker"
    ],
    "weight": 110
  },
  "sneasler": {
    "id": 903,
    "types": [
      "fighting",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "spAtk": 40,
      "spDef": 80,
      "speed": 120
    },
    "abilities": [
      "pressure",
      "unburden",
      "poison-touch"
    ],
    "weight": 43
  },
  "raichu-alola": {
    "id": 10100,
    "types": [
      "electric",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 50,
      "spAtk": 95,
      "spDef": 85,
      "speed": 110
    },
    "abilities": [
      "surge-surfer"
    ],
    "weight": 21
  },
  "ninetales-alola": {
    "id": 10104,
    "types": [
      "ice",
      "fairy"
    ],
    "stats": {
      "hp": 73,
      "attack": 67,
      "defense": 75,
      "spAtk": 81,
      "spDef": 100,
      "speed": 109
    },
    "abilities": [
      "snow-cloak",
      "snow-warning"
    ],
    "weight": 19.9
  },
  "arcanine-hisui": {
    "id": 10230,
    "types": [
      "fire",
      "rock"
    ],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 80,
      "spAtk": 95,
      "spDef": 80,
      "speed": 90
    },
    "abilities": [
      "intimidate",
      "flash-fire",
      "rock-head"
    ],
    "weight": 168
  },
  "slowbro-galar": {
    "id": 10165,
    "types": [
      "poison",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 95,
      "spAtk": 100,
      "spDef": 70,
      "speed": 30
    },
    "abilities": [
      "quick-draw",
      "own-tempo",
      "regenerator"
    ],
    "weight": 70.5
  },
  "slowking-galar": {
    "id": 10164,
    "types": [
      "poison",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 80,
      "spAtk": 110,
      "spDef": 110,
      "speed": 30
    },
    "abilities": [
      "own-tempo",
      "regenerator"
    ],
    "weight": 36
  },
  "tauros-paldea-combat-breed": {
    "id": 10250,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "spAtk": 30,
      "spDef": 70,
      "speed": 100
    },
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ],
    "weight": 115
  },
  "typhlosion-hisui": {
    "id": 10233,
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 73,
      "attack": 84,
      "defense": 78,
      "spAtk": 119,
      "spDef": 85,
      "speed": 95
    },
    "abilities": [
      "blaze",
      "frisk"
    ],
    "weight": 69.8
  },
  "rotom-heat": {
    "id": 10008,
    "types": [
      "electric",
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "spAtk": 105,
      "spDef": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "weight": 0.3
  },
  "rotom-wash": {
    "id": 10009,
    "types": [
      "electric",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "spAtk": 105,
      "spDef": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "weight": 0.3
  },
  "rotom-frost": {
    "id": 10010,
    "types": [
      "electric",
      "ice"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "spAtk": 105,
      "spDef": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "weight": 0.3
  },
  "rotom-fan": {
    "id": 10011,
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "spAtk": 105,
      "spDef": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "weight": 0.3
  },
  "rotom-mow": {
    "id": 10012,
    "types": [
      "electric",
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "spAtk": 105,
      "spDef": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "weight": 0.3
  },
  "samurott-hisui": {
    "id": 10236,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 90,
      "attack": 108,
      "defense": 80,
      "spAtk": 100,
      "spDef": 65,
      "speed": 85
    },
    "abilities": [
      "torrent",
      "sharpness"
    ],
    "weight": 58.2
  },
  "zoroark-hisui": {
    "id": 10239,
    "types": [
      "normal",
      "ghost"
    ],
    "stats": {
      "hp": 55,
      "attack": 100,
      "defense": 60,
      "spAtk": 125,
      "spDef": 60,
      "speed": 110
    },
    "abilities": [
      "illusion"
    ],
    "weight": 73
  },
  "stunfisk-galar": {
    "id": 10180,
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 109,
      "attack": 81,
      "defense": 99,
      "spAtk": 66,
      "spDef": 84,
      "speed": 32
    },
    "abilities": [
      "mimicry"
    ],
    "weight": 20.5
  },
  "goodra-hisui": {
    "id": 10242,
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 100,
      "spAtk": 110,
      "spDef": 150,
      "speed": 60
    },
    "abilities": [
      "sap-sipper",
      "shell-armor",
      "gooey"
    ],
    "weight": 334.1
  },
  "avalugg-hisui": {
    "id": 10243,
    "types": [
      "ice",
      "rock"
    ],
    "stats": {
      "hp": 95,
      "attack": 127,
      "defense": 184,
      "spAtk": 34,
      "spDef": 36,
      "speed": 38
    },
    "abilities": [
      "strong-jaw",
      "ice-body",
      "sturdy"
    ],
    "weight": 262.4
  },
  "decidueye-hisui": {
    "id": 10244,
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 112,
      "defense": 80,
      "spAtk": 95,
      "spDef": 95,
      "speed": 60
    },
    "abilities": [
      "overgrow",
      "scrappy"
    ],
    "weight": 37
  },
  "lycanroc-midnight": {
    "id": 10126,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 75,
      "spAtk": 55,
      "spDef": 75,
      "speed": 82
    },
    "abilities": [
      "keen-eye",
      "vital-spirit",
      "no-guard"
    ],
    "weight": 25
  },
  "lycanroc-dusk": {
    "id": 10152,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 75,
      "attack": 117,
      "defense": 65,
      "spAtk": 55,
      "spDef": 65,
      "speed": 110
    },
    "abilities": [
      "tough-claws"
    ],
    "weight": 25
  },
  "tauros-paldea-blaze-breed": {
    "id": 10251,
    "types": [
      "fighting",
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "spAtk": 30,
      "spDef": 70,
      "speed": 100
    },
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ],
    "weight": 85
  },
  "tauros-paldea-aqua-breed": {
    "id": 10252,
    "types": [
      "fighting",
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "spAtk": 30,
      "spDef": 70,
      "speed": 100
    },
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ],
    "weight": 110
  }
};

export default pokemonData;
