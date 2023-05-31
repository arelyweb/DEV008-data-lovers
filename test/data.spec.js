import { filterData, contarTipoPokemon, calcularPaginas, cortarArrayPokemones } from '../src/data.js';


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it("debe retornar el resultado igual a la busqueda por nombre", () => {
    expect(filterData("pikachu")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'pikachu'
        })
      ])
    )
  });
  it("debe retornar el resultado parecido de la busqueda por nombre", () => {
    expect(filterData("ivys")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'ivysaur'
        })
      ])
    )
  });
  it("debe retornar el resultado igual de la busqueda por numero", () => {
    expect(filterData("076")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          num: '076'
        })
      ])
    )
  });
});

describe('contarTipoPokemon', () => {
  it('is a function', () => {
    expect(typeof contarTipoPokemon).toBe('function');
  });
  it("retorna el conteo de tipo de pokemon ", () => {
    expect(contarTipoPokemon()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          tipoPokemon: 'grass',
          total: 24
        })
      ])
    )
  });
});

describe('calcularPaginas', () => {
  it('is a function', () => {
    expect(typeof calcularPaginas).toBe('function');
  });
  it("retorna el numero de paginas", () => {
    expect(calcularPaginas(250, 10)).toBe(25)
  });
});

describe('cortarArrayPokemones', () => {
  it('is a function', () => {
    expect(typeof cortarArrayPokemones).toBe('function');
  });
  it("retorna la parte del array especifica", () => {
    const arraypokemones = [
      {
        "num": "011",
        "name": "metapod",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
        "img": "https://www.serebii.net/pokemongo/pokemon/011.png",
        "size": {
          "height": "0.71 m",
          "weight": "9.9 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "bug"
        ],
        "encounter": {
          "base-flee-rate": "0.09",
          "base-capture-rate": "0.25"
        },
        "spawn-chance": "0.187",
        "stats": {
          "base-attack": "45",
          "base-defense": "80",
          "base-stamina": "137",
          "max-cp": "450",
          "max-hp": "120"
        },
        "resistant": [
          "grass",
          "fighting",
          "ground"
        ],
        "weaknesses": [
          "fire",
          "flying",
          "rock"
        ],
        "quick-move": [
          {
            "name": "bug bite",
            "type": "bug",
            "base-damage": "5",
            "energy": "6",
            "move-duration-seg": "0.5"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "struggle",
            "type": "normal",
            "base-damage": "35",
            "energy": "-33",
            "move-duration-seg": "2.2"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "caterpie candy",
          "next-evolution": [
            {
              "num": "012",
              "name": "butterfree",
              "candy-cost": "50"
            }
          ],
          "prev-evolution": [
            {
              "num": "010",
              "name": "caterpie",
              "candy-cost": "12"
            }
          ]
        }
      },
      {
        "num": "012",
        "name": "butterfree",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
        "img": "https://www.serebii.net/pokemongo/pokemon/012.png",
        "size": {
          "height": "1.09 m",
          "weight": "32.0 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "bug",
          "flying"
        ],
        "encounter": {
          "base-flee-rate": "0.06",
          "base-capture-rate": "0.125"
        },
        "spawn-chance": "0.022",
        "stats": {
          "base-attack": "167",
          "base-defense": "137",
          "base-stamina": "155",
          "max-cp": "1827",
          "max-hp": "134"
        },
        "resistant": [
          "grass",
          "fighting",
          "ground",
          "bug"
        ],
        "weaknesses": [
          "fire",
          "electric",
          "ice",
          "flying",
          "rock"
        ],
        "quick-move": [
          {
            "name": "confusion",
            "type": "psychic",
            "base-damage": "20",
            "energy": "15",
            "move-duration-seg": "1.6"
          },
          {
            "name": "struggle bug",
            "type": "bug",
            "base-damage": "15",
            "energy": "15",
            "move-duration-seg": "1.5"
          },
          {
            "name": "bug bite",
            "type": "bug",
            "base-damage": "5",
            "energy": "6",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "bug buzz",
            "type": "bug",
            "base-damage": "90",
            "energy": "-50",
            "move-duration-seg": "3.7"
          },
          {
            "name": "psychic",
            "type": "psychic",
            "base-damage": "100",
            "energy": "-100",
            "move-duration-seg": "2.8"
          },
          {
            "name": "signal beam",
            "type": "bug",
            "base-damage": "75",
            "energy": "-50",
            "move-duration-seg": "2.9"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "caterpie candy",
          "prev-evolution": [
            {
              "num": "011",
              "name": "metapod",
              "candy-cost": "50",
              "prev-evolution": [
                {
                  "num": "010",
                  "name": "caterpie",
                  "candy-cost": "12"
                }
              ]
            }
          ]
        }
      },
      {
        "num": "013",
        "name": "weedle",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
        "img": "https://www.serebii.net/pokemongo/pokemon/013.png",
        "size": {
          "height": "0.30 m",
          "weight": "3.2 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "bug",
          "poison"
        ],
        "encounter": {
          "base-flee-rate": "0.2",
          "base-capture-rate": "0.5"
        },
        "spawn-chance": "7.12",
        "stats": {
          "base-attack": "63",
          "base-defense": "50",
          "base-stamina": "120",
          "max-cp": "456",
          "max-hp": "106"
        },
        "resistant": [
          "grass",
          "fighting",
          "poison",
          "bug",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "flying",
          "psychic",
          "rock"
        ],
        "quick-move": [
          {
            "name": "bug bite",
            "type": "bug",
            "base-damage": "5",
            "energy": "6",
            "move-duration-seg": "0.5"
          },
          {
            "name": "poison sting",
            "type": "poison",
            "base-damage": "5",
            "energy": "7",
            "move-duration-seg": "0.6"
          }
        ],
        "special-attack": [
          {
            "name": "struggle",
            "type": "normal",
            "base-damage": "35",
            "energy": "-33",
            "move-duration-seg": "2.2"
          }
        ],
        "egg": "2 km",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "weedle candy",
          "next-evolution": [
            {
              "num": "014",
              "name": "kakuna",
              "candy-cost": "12",
              "next-evolution": [
                {
                  "num": "015",
                  "name": "beedrill",
                  "candy-cost": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "num": "014",
        "name": "kakuna",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
        "img": "https://www.serebii.net/pokemongo/pokemon/014.png",
        "size": {
          "height": "0.61 m",
          "weight": "10.0 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "bug",
          "poison"
        ],
        "encounter": {
          "base-flee-rate": "0.09",
          "base-capture-rate": "0.25"
        },
        "spawn-chance": "0.44",
        "stats": {
          "base-attack": "46",
          "base-defense": "75",
          "base-stamina": "128",
          "max-cp": "432",
          "max-hp": "113"
        },
        "resistant": [
          "grass",
          "fighting",
          "poison",
          "bug",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "flying",
          "psychic",
          "rock"
        ],
        "quick-move": [
          {
            "name": "bug bite",
            "type": "bug",
            "base-damage": "5",
            "energy": "6",
            "move-duration-seg": "0.5"
          },
          {
            "name": "poison sting",
            "type": "poison",
            "base-damage": "5",
            "energy": "7",
            "move-duration-seg": "0.6"
          }
        ],
        "special-attack": [
          {
            "name": "struggle",
            "type": "normal",
            "base-damage": "35",
            "energy": "-33",
            "move-duration-seg": "2.2"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "weedle candy",
          "next-evolution": [
            {
              "num": "015",
              "name": "beedrill",
              "candy-cost": "50"
            }
          ],
          "prev-evolution": [
            {
              "num": "013",
              "name": "weedle",
              "candy-cost": "12"
            }
          ]
        }
      },
      {
        "num": "015",
        "name": "beedrill",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Beedrill is extremely territorial. No one should ever approach its nest-this is for their own safety. If angered, they will attack in a furious swarm.",
        "img": "https://www.serebii.net/pokemongo/pokemon/015.png",
        "size": {
          "height": "0.99 m",
          "weight": "29.5 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "bug",
          "poison"
        ],
        "encounter": {
          "base-flee-rate": "0.06",
          "base-capture-rate": "0.125"
        },
        "spawn-chance": "0.051",
        "stats": {
          "base-attack": "169",
          "base-defense": "130",
          "base-stamina": "163",
          "max-cp": "1846",
          "max-hp": "140"
        },
        "resistant": [
          "grass",
          "fighting",
          "poison",
          "bug",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "flying",
          "psychic",
          "rock"
        ],
        "quick-move": [
          {
            "name": "poison jab",
            "type": "poison",
            "base-damage": "10",
            "energy": "7",
            "move-duration-seg": "0.8"
          },
          {
            "name": "infestation",
            "type": "bug",
            "base-damage": "10",
            "energy": "14",
            "move-duration-seg": "1.1"
          },
          {
            "name": "bug bite",
            "type": "bug",
            "base-damage": "5",
            "energy": "6",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "sludge bomb",
            "type": "poison",
            "base-damage": "80",
            "energy": "-50",
            "move-duration-seg": "2.3"
          },
          {
            "name": "aerial ace",
            "type": "flying",
            "base-damage": "55",
            "energy": "-33",
            "move-duration-seg": "2.4"
          },
          {
            "name": "x scissor",
            "type": "water",
            "base-damage": "50",
            "energy": "-100",
            "move-duration-seg": "4.7"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "weedle candy",
          "prev-evolution": [
            {
              "num": "014",
              "name": "kakuna",
              "candy-cost": "50",
              "prev-evolution": [
                {
                  "num": "013",
                  "name": "weedle",
                  "candy-cost": "12"
                }
              ]
            }
          ]
        }
      },
      {
        "num": "016",
        "name": "pidgey",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
        "img": "https://www.serebii.net/pokemongo/pokemon/016.png",
        "size": {
          "height": "0.30 m",
          "weight": "1.8 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "normal",
          "flying"
        ],
        "encounter": {
          "base-flee-rate": "0.2",
          "base-capture-rate": "0.5"
        },
        "spawn-chance": "15.98",
        "stats": {
          "base-attack": "85",
          "base-defense": "73",
          "base-stamina": "120",
          "max-cp": "680",
          "max-hp": "106"
        },
        "resistant": [
          "grass",
          "ground",
          "bug",
          "ghost"
        ],
        "weaknesses": [
          "electric",
          "rock"
        ],
        "quick-move": [
          {
            "name": "quick attack",
            "type": "normal",
            "base-damage": "8",
            "energy": "10",
            "move-duration-seg": "0.8"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "twister",
            "type": "dragon",
            "base-damage": "45",
            "energy": "-33",
            "move-duration-seg": "2.8"
          },
          {
            "name": "aerial ace",
            "type": "flying",
            "base-damage": "55",
            "energy": "-33",
            "move-duration-seg": "2.4"
          },
          {
            "name": "air cutter",
            "type": "flying",
            "base-damage": "60",
            "energy": "-50",
            "move-duration-seg": "2.7"
          }
        ],
        "egg": "2 km",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "pidgey candy",
          "next-evolution": [
            {
              "num": "017",
              "name": "pidgeotto",
              "candy-cost": "12",
              "next-evolution": [
                {
                  "num": "018",
                  "name": "pidgeot",
                  "candy-cost": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "num": "017",
        "name": "pidgeotto",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
        "img": "https://www.serebii.net/pokemongo/pokemon/017.png",
        "size": {
          "height": "1.09 m",
          "weight": "30.0 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "normal",
          "flying"
        ],
        "encounter": {
          "base-flee-rate": "0.09",
          "base-capture-rate": "0.25"
        },
        "spawn-chance": "1.02",
        "stats": {
          "base-attack": "117",
          "base-defense": "105",
          "base-stamina": "160",
          "max-cp": "1194",
          "max-hp": "138"
        },
        "resistant": [
          "grass",
          "ground",
          "bug",
          "ghost"
        ],
        "weaknesses": [
          "electric",
          "rock"
        ],
        "quick-move": [
          {
            "name": "wing attack",
            "type": "flying",
            "base-damage": "8",
            "energy": "9",
            "move-duration-seg": "0.8"
          },
          {
            "name": "steel wing",
            "type": "steel",
            "base-damage": "11",
            "energy": "6",
            "move-duration-seg": "0.8"
          }
        ],
        "special-attack": [
          {
            "name": "twister",
            "type": "dragon",
            "base-damage": "45",
            "energy": "-33",
            "move-duration-seg": "2.8"
          },
          {
            "name": "aerial ace",
            "type": "flying",
            "base-damage": "55",
            "energy": "-33",
            "move-duration-seg": "2.4"
          },
          {
            "name": "air cutter",
            "type": "flying",
            "base-damage": "60",
            "energy": "-50",
            "move-duration-seg": "2.7"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "pidgey candy",
          "next-evolution": [
            {
              "num": "018",
              "name": "pidgeot",
              "candy-cost": "50"
            }
          ],
          "prev-evolution": [
            {
              "num": "016",
              "name": "pidgey",
              "candy-cost": "12"
            }
          ]
        }
      },
      {
        "num": "018",
        "name": "pidgeot",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "This Pokémon has a dazzling plumage of beautifullyglossy feathers. Many Trainers are captivated by thestriking beauty of the feathers on its head, compellingthem to choose Pidgeot as their Pokémon.",
        "img": "https://www.serebii.net/pokemongo/pokemon/018.png",
        "size": {
          "height": "1.50 m",
          "weight": "39.5 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "normal",
          "flying"
        ],
        "encounter": {
          "base-flee-rate": "0.06",
          "base-capture-rate": "0.125"
        },
        "spawn-chance": "0.13",
        "stats": {
          "base-attack": "166",
          "base-defense": "154",
          "base-stamina": "195",
          "max-cp": "2129",
          "max-hp": "165"
        },
        "resistant": [
          "grass",
          "ground",
          "bug",
          "ghost"
        ],
        "weaknesses": [
          "electric",
          "rock"
        ],
        "quick-move": [
          {
            "name": "steel wing",
            "type": "steel",
            "base-damage": "11",
            "energy": "6",
            "move-duration-seg": "0.8"
          },
          {
            "name": "air slash",
            "type": "flying",
            "base-damage": "14",
            "energy": "10",
            "move-duration-seg": "1.2"
          },
          {
            "name": "wing attack",
            "type": "flying",
            "base-damage": "8",
            "energy": "9",
            "move-duration-seg": "0.8"
          }
        ],
        "special-attack": [
          {
            "name": "hurricane",
            "type": "flying",
            "base-damage": "110",
            "energy": "-100",
            "move-duration-seg": "2.7"
          },
          {
            "name": "aerial ace",
            "type": "flying",
            "base-damage": "55",
            "energy": "-33",
            "move-duration-seg": "2.4"
          },
          {
            "name": "brave bird",
            "type": "flying",
            "base-damage": "90",
            "energy": "-100",
            "move-duration-seg": "2"
          },
          {
            "name": "air cutter",
            "type": "flying",
            "base-damage": "60",
            "energy": "-50",
            "move-duration-seg": "2.7"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "pidgey candy",
          "prev-evolution": [
            {
              "num": "017",
              "name": "pidgeotto",
              "candy-cost": "50",
              "prev-evolution": [
                {
                  "num": "016",
                  "name": "pidgey",
                  "candy-cost": "12"
                }
              ]
            }
          ]
        }
      },
      {
        "num": "019",
        "name": "rattata",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives-it will make its nest anywhere.",
        "img": "https://www.serebii.net/pokemongo/pokemon/019.png",
        "size": {
          "height": "0.30 m",
          "weight": "3.5 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "normal"
        ],
        "encounter": {
          "base-flee-rate": "0.2",
          "base-capture-rate": "0.5"
        },
        "spawn-chance": "13.05",
        "stats": {
          "base-attack": "103",
          "base-defense": "70",
          "base-stamina": "102",
          "max-cp": "734",
          "max-hp": "92"
        },
        "resistant": [
          "ghost"
        ],
        "weaknesses": [
          "fighting"
        ],
        "quick-move": [
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          },
          {
            "name": "quick attack",
            "type": "normal",
            "base-damage": "8",
            "energy": "10",
            "move-duration-seg": "0.8"
          }
        ],
        "special-attack": [
          {
            "name": "dig",
            "type": "ground",
            "base-damage": "100",
            "energy": "-50",
            "move-duration-seg": "4.7"
          },
          {
            "name": "hyper fang",
            "type": "normal",
            "base-damage": "80",
            "energy": "-50",
            "move-duration-seg": "2.5"
          },
          {
            "name": "body slam",
            "type": "normal",
            "base-damage": "50",
            "energy": "-33",
            "move-duration-seg": "1.9"
          }
        ],
        "egg": "2 km",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "rattata candy",
          "next-evolution": [
            {
              "num": "020",
              "name": "raticate",
              "candy-cost": "25"
            }
          ]
        }
      },
      {
        "num": "020",
        "name": "raticate",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
        "img": "https://www.serebii.net/pokemongo/pokemon/020.png",
        "size": {
          "height": "0.71 m",
          "weight": "18.5 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "normal"
        ],
        "encounter": {
          "base-flee-rate": "0.07",
          "base-capture-rate": "0.2"
        },
        "spawn-chance": "0.41",
        "stats": {
          "base-attack": "161",
          "base-defense": "139",
          "base-stamina": "146",
          "max-cp": "1730",
          "max-hp": "127"
        },
        "resistant": [
          "ghost"
        ],
        "weaknesses": [
          "fighting"
        ],
        "quick-move": [
          {
            "name": "bite",
            "type": "dark",
            "base-damage": "6",
            "energy": "4",
            "move-duration-seg": "0.5"
          },
          {
            "name": "quick attack",
            "type": "normal",
            "base-damage": "8",
            "energy": "10",
            "move-duration-seg": "0.8"
          }
        ],
        "special-attack": [
          {
            "name": "dig",
            "type": "ground",
            "base-damage": "100",
            "energy": "-50",
            "move-duration-seg": "4.7"
          },
          {
            "name": "hyper fang",
            "type": "normal",
            "base-damage": "80",
            "energy": "-50",
            "move-duration-seg": "2.5"
          },
          {
            "name": "hyper beam",
            "type": "normal",
            "base-damage": "150",
            "energy": "-100",
            "move-duration-seg": "3.8"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "rattata candy",
          "prev-evolution": [
            {
              "num": "019",
              "name": "rattata",
              "candy-cost": "25"
            }
          ]
        }
      }
    ];
    const arraypokemonesTres = [
      {
        "num": "011",
        "name": "metapod",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
        "img": "https://www.serebii.net/pokemongo/pokemon/011.png",
        "size": {
          "height": "0.71 m",
          "weight": "9.9 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "bug"
        ],
        "encounter": {
          "base-flee-rate": "0.09",
          "base-capture-rate": "0.25"
        },
        "spawn-chance": "0.187",
        "stats": {
          "base-attack": "45",
          "base-defense": "80",
          "base-stamina": "137",
          "max-cp": "450",
          "max-hp": "120"
        },
        "resistant": [
          "grass",
          "fighting",
          "ground"
        ],
        "weaknesses": [
          "fire",
          "flying",
          "rock"
        ],
        "quick-move": [
          {
            "name": "bug bite",
            "type": "bug",
            "base-damage": "5",
            "energy": "6",
            "move-duration-seg": "0.5"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "struggle",
            "type": "normal",
            "base-damage": "35",
            "energy": "-33",
            "move-duration-seg": "2.2"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "caterpie candy",
          "next-evolution": [
            {
              "num": "012",
              "name": "butterfree",
              "candy-cost": "50"
            }
          ],
          "prev-evolution": [
            {
              "num": "010",
              "name": "caterpie",
              "candy-cost": "12"
            }
          ]
        }
      },
      {
        "num": "012",
        "name": "butterfree",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
        "img": "https://www.serebii.net/pokemongo/pokemon/012.png",
        "size": {
          "height": "1.09 m",
          "weight": "32.0 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "bug",
          "flying"
        ],
        "encounter": {
          "base-flee-rate": "0.06",
          "base-capture-rate": "0.125"
        },
        "spawn-chance": "0.022",
        "stats": {
          "base-attack": "167",
          "base-defense": "137",
          "base-stamina": "155",
          "max-cp": "1827",
          "max-hp": "134"
        },
        "resistant": [
          "grass",
          "fighting",
          "ground",
          "bug"
        ],
        "weaknesses": [
          "fire",
          "electric",
          "ice",
          "flying",
          "rock"
        ],
        "quick-move": [
          {
            "name": "confusion",
            "type": "psychic",
            "base-damage": "20",
            "energy": "15",
            "move-duration-seg": "1.6"
          },
          {
            "name": "struggle bug",
            "type": "bug",
            "base-damage": "15",
            "energy": "15",
            "move-duration-seg": "1.5"
          },
          {
            "name": "bug bite",
            "type": "bug",
            "base-damage": "5",
            "energy": "6",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "bug buzz",
            "type": "bug",
            "base-damage": "90",
            "energy": "-50",
            "move-duration-seg": "3.7"
          },
          {
            "name": "psychic",
            "type": "psychic",
            "base-damage": "100",
            "energy": "-100",
            "move-duration-seg": "2.8"
          },
          {
            "name": "signal beam",
            "type": "bug",
            "base-damage": "75",
            "energy": "-50",
            "move-duration-seg": "2.9"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "caterpie candy",
          "prev-evolution": [
            {
              "num": "011",
              "name": "metapod",
              "candy-cost": "50",
              "prev-evolution": [
                {
                  "num": "010",
                  "name": "caterpie",
                  "candy-cost": "12"
                }
              ]
            }
          ]
        }
      },
      {
        "num": "013",
        "name": "weedle",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
        "img": "https://www.serebii.net/pokemongo/pokemon/013.png",
        "size": {
          "height": "0.30 m",
          "weight": "3.2 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "bug",
          "poison"
        ],
        "encounter": {
          "base-flee-rate": "0.2",
          "base-capture-rate": "0.5"
        },
        "spawn-chance": "7.12",
        "stats": {
          "base-attack": "63",
          "base-defense": "50",
          "base-stamina": "120",
          "max-cp": "456",
          "max-hp": "106"
        },
        "resistant": [
          "grass",
          "fighting",
          "poison",
          "bug",
          "fairy"
        ],
        "weaknesses": [
          "fire",
          "flying",
          "psychic",
          "rock"
        ],
        "quick-move": [
          {
            "name": "bug bite",
            "type": "bug",
            "base-damage": "5",
            "energy": "6",
            "move-duration-seg": "0.5"
          },
          {
            "name": "poison sting",
            "type": "poison",
            "base-damage": "5",
            "energy": "7",
            "move-duration-seg": "0.6"
          }
        ],
        "special-attack": [
          {
            "name": "struggle",
            "type": "normal",
            "base-damage": "35",
            "energy": "-33",
            "move-duration-seg": "2.2"
          }
        ],
        "egg": "2 km",
        "buddy-distance-km": "1",
        "evolution": {
          "candy": "weedle candy",
          "next-evolution": [
            {
              "num": "014",
              "name": "kakuna",
              "candy-cost": "12",
              "next-evolution": [
                {
                  "num": "015",
                  "name": "beedrill",
                  "candy-cost": "50"
                }
              ]
            }
          ]
        }
      }
    ]
    expect(cortarArrayPokemones(0, 3, arraypokemones)).toEqual(
      expect.arrayContaining(arraypokemonesTres))
  });

});