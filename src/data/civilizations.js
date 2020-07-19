const civilizationsData =
{
  "civilizations": [
    {
      "id": 1,
      "name": "Aztecs",
      "expansion": "The Conquerors",
      "army_type": "Infantry and Monk",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars"
      ],
      "team_bonus": "Relics generate +33% gold",
      "civilization_bonus": [
        "Villagers carry +5",
        "Military units created 15% faster",
        "+5 Monk hit points for each Monastery technology",
        "Loom free"
      ]
    },
    {
      "id": 2,
      "name": "Britons",
      "expansion": "Age of Kings",
      "army_type": "Foot Archer",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longbowman"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/yeomen"
      ],
      "team_bonus": "Archery Ranges work 20% faster",
      "civilization_bonus": [
        "Town Centers cost -50% wood upon reaching the Castle Age",
        "Foot archers (excluding Skirmishers) have +1 range in Castle Age and +1 in Imperial Age (for +2 total)",
        "Shepherds work 25% faster"
      ]
    },
    {
      "id": 3,
      "name": "Bizantines",
      "expansion": "Age of Kings",
      "army_type": "Defensive",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cataphract"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/logistica"
      ],
      "team_bonus": "Monks +50% heal speed",
      "civilization_bonus": [
        "Buildings (except gates) have +10% HP in Dark Age / +20% HP in Feudal Age  / +30% in Castle Age / +40% in Imperial Age",
        "Spearman skirmisher and camel lines cost 25% less",
        "Fire Ships attack 20% faster",
        "Imperial Age costs -33%",
        "Town Watch is free"
      ]
    },
    {
      "id": 4,
      "name": "Celts",
      "expansion": "Age of Kings",
      "army_type": "Infantry",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/woad_raider"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/furor_celtica"
      ],
      "team_bonus": "Siege Workshops work 20% faster",
      "civilization_bonus": [
        "Infantry moves 15% faster",
        "Lumberjacks work 15% faster",
        "Siege weapons reload 20% faster",
        "Sheep cannot be stolen if within one Celt unit's line of sight"
      ]
    },
    {
      "id": 5,
      "name": "Chinese",
      "expansion": "Age of Kings",
      "army_type": "Archer",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/chu_ko_nu"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/rocketry"
      ],
      "team_bonus": "Famrs provide +45 food",
      "civilization_bonus": [
        "Start game with 3 extra villagers but -50 wood and -200 food",
        "Technologies cost -10% in Feudal Age/ -15% in Castle Age/-20% in Imperial Age",
        "Town Centers support 10 population instead of 5",
        "Demolition Ships have +50% HP"
      ]
    },
    {
      "id": 6,
      "name": "Franks",
      "expansion": "Age of Kings",
      "army_type": "Cavalry",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/throwing_axeman"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/bearded_axe"
      ],
      "team_bonus": "Knights have +2 line of sight",
      "civilization_bonus": [
        "Castles are 25% cheaper",
        "Knights have +20% HP",
        "Farm upgrades are free (Mill is required to receive bonus)"
      ]
    },
    {
      "id": 7,
      "name": "Goths",
      "expansion": "Age of Kings",
      "army_type": "Infantry",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/huskarl"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/anarchy",
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/perfusion"
      ],
      "team_bonus": "Barracks operate 20% faster",
      "civilization_bonus": [
        "Infantry cost 35% less (starting in Feudal Age)",
        "Infantry have +1 attack against buildings",
        "Villagers have +5 attack versus wild boar",
        "Hunters carry +15 meat",
        "+10 to population limit in Imperial Age"
      ]
    },
    {
      "id": 8,
      "name": "Huns",
      "expansion": "The Conquerors",
      "army_type": "Cavalry",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/tarkan"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/atheism"
      ],
      "team_bonus": "Stables are 20% faster",
      "civilization_bonus": [
        "Houses are not required to support population",
        "Start game with -100 Wood",
        "Cavalry Archers cost -25% in Castle Age/ -30% in Imperial Age",
        "Trebuchets are 35% more accurate."
      ]
    },
    {
      "id": 9,
      "name": "Japanese",
      "expansion": "Age of Kings",
      "army_type": "Infantry",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/samurai"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/kataparuto"
      ],
      "team_bonus": "Galleys have +50% line of sight",
      "civilization_bonus": [
        "Fishing Ships have 2x HP and +2 pierce armor",
        "Fishing Ships work +5% faster in Dark Age/ +10% in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
        "Lumber Camps / Mining Camps / Mills are 50% cheaper",
        "Infantry attack 25% faster (starting in Feudal Age)"
      ]
    },
    {
      "id": 10,
      "name": "Koreans",
      "expansion": "The Conquerors",
      "army_type": "Tower and naval",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_wagon",
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/turtle_ship"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/shinkichon"
      ],
      "team_bonus": "Mangonel line has +1 range",
      "civilization_bonus": [
        "Villagers have +3 line of sight",
        "Stone miners work 20% faster",
        "Guard Tower and Keep upgrades are free",
        "Towers (except bombard towers) have +1 range in Castle Age/ +2 in Imperial Age"
      ]
    },
    {
      "id": 11,
      "name": "Mayans",
      "expansion": "The Conquerors",
      "army_type": "Archer",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/plumed_archer"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/el_dorado"
      ],
      "team_bonus": "Walls are 50% cheaper",
      "civilization_bonus": [
        "Start game with 1 extra villager but -50 food",
        "Natural resources last 20% longer",
        "Archers cost -10% in Feudal Age/ -20% in Castle Age/ -30% in Imperial Age"
      ]
    },
    {
      "id": 12,
      "name": "Mongols",
      "expansion": "Age of Kings",
      "army_type": "Cavalry Archer",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mangudai"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/drill"
      ],
      "team_bonus": "Scout line has +2 Line of sight",
      "civilization_bonus": [
        "Cavalry Archers reload 20% faster",
        "Light Cavalry and Hussars have +30% HP",
        "Hunters work 50% faster"
      ]
    },
    {
      "id": 13,
      "name": "Persians",
      "expansion": "Age of Kings",
      "army_type": "Cavalry",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_elephant"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/mahouts"
      ],
      "team_bonus": "Knights have +2 attack versus Archers",
      "civilization_bonus": [
        "Start game with +50 wood and food",
        "Town Center and Docks have 2x HP",
        "Town Centers and Docks operate +10% faster in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age"
      ]
    },
    {
      "id": 14,
      "name": "Saracens",
      "expansion": "Age of Kings",
      "army_type": "Camel and naval",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mameluke"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/zealotry"
      ],
      "team_bonus": "Foot archers have +2 attack bonus against buildings",
      "civilization_bonus": [
        "Market trade cost is only 5%",
        "Transport Ships have 2x HP and carry capacity",
        "Galleys attack 20% faster",
        "Cavalry Archers have +4 attack bonus against buildings"
      ]
    },
    {
      "id": 15,
      "name": "Spanish",
      "expansion": "The Conquerors",
      "army_type": "Gunpowder and Monk",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/conquistador",
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/missionary"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/supremacy"
      ],
      "team_bonus": "Trade units generate +33% Gold",
      "civilization_bonus": [
        "Villagers construct buildings 30% faster",
        "Blacksmith upgrades do not cost any gold",
        "Cannon Galleons benefit from Ballistics (less reload time and more accuracy)",
        "Hand Cannoneers and Bombard Cannons reload 15% faster"
      ]
    },
    {
      "id": 16,
      "name": "Teutons",
      "expansion": "Age of Kings",
      "army_type": "Infantry",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/teutonic_knight"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/crenellations"
      ],
      "team_bonus": "Units are more resistant to conversion",
      "civilization_bonus": [
        "Monks have 2x healing range",
        "Towers can garrison 2x units (more arrows)",
        "Murder Holes is free",
        "Farms cost 33% less",
        "Town Centers have +1 attack and +5 line of sight"
      ]
    },
    {
      "id": 17,
      "name": "Turks",
      "expansion": "Age of Kings",
      "army_type": "Gunpowder",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/janissary"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/artillery"
      ],
      "team_bonus": "Gunpowder units are created 20% faster",
      "civilization_bonus": [
        "Gunpowder Units have +25% HP",
        "Gunpowder technologies cost 50% less",
        "Chemistry is free",
        "Gold miners work 15% faster",
        "Light Cavalry and Hussar upgrades are free"
      ]
    },
    {
      "id": 18,
      "name": "Vikings",
      "expansion": "Age of Kings",
      "army_type": "Infantry and naval",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/berserk",
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longboat"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/berserkergang"
      ],
      "team_bonus": "Docks are 25% cheaper",
      "civilization_bonus": [
        "Warships cost 20% less",
        "Infantry have +10% HP in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
        "Wheelbarrow and Hand Cart are free"
      ]
    }
  ]
};

export default civilizationsData;