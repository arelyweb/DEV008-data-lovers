import { capitalizar, obtenerPokemon, ordenarPokemon } from '../src/data.js';
import { pikachu } from './const.js';
import { bulbasaur } from './const.js';
import { pokemonesAsc } from './const.js';
import { pokemonSinOrdenar } from './const.js';
import { pokemonesDesc } from './const.js';

describe('capitalizar', () => {
  it('is a function', () => {
    expect(typeof capitalizar).toBe('function');
  });

  it('retornar Dalia cuando yo le mande dalia', () => {
    expect(capitalizar("dalia")).toBe('Dalia');
  });
  it('retornar Luz cuando yo le mande luz', () => {
    expect(capitalizar("luz")).toBe('Luz');
  });
});

describe('obtenerPokemon', () => {
  it('is a function', () => {
    expect(typeof obtenerPokemon).toBe('function');
  });

  it('retornar el objeto pikachu cuando yo le envie el nombre pikachu', () => {
    expect(obtenerPokemon("pikachu")).toEqual(pikachu);
  });
  it('retornar el objeto bulbasaur cuando yo le envie el nombre bulbasaur', () => {
    expect(obtenerPokemon("bulbasaur")).toEqual(bulbasaur);
  });
});

describe('ordenarPokemon', () => {
  it('is a function', () => {
    expect(typeof ordenarPokemon).toBe('function');
  });

  it('retornar el arreglo pokemonesAsc  cuando el parametro sea pokemonSinOrdenar', () => {
    expect(ordenarPokemon("asc", pokemonSinOrdenar)).toEqual(pokemonesAsc);
  });

  it('retornar el arreglo pokemonesDesc  cuando el parametro sea pokemonSinOrdenar', () => {
    expect(ordenarPokemon("desc", pokemonSinOrdenar)).toEqual(pokemonesDesc);
  });
});

