import { filterData, contarTipoPokemon, calcularPaginas, cortarArrayPokemones } from '../src/data.js';
import { capitalizar, obtenerPokemon, ordenarPokemon } from '../src/data.js';
import { pikachu, bulbasaur, pokemonesAsc, pokemonesDesc, pokemonSinOrdenarAsc, pokemonSinOrdenarDesc, arrayPokemones, arrayPokemonesTres } from './const.js';
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

describe('ordenarPokemon', () => {
  it('is a function', () => {
    expect(typeof ordenarPokemon).toBe('function');
  });
  it('retornar el arreglo pokemonesAsc  cuando el parametro sea pokemonSinOrdenar', () => {
    expect(ordenarPokemon("asc", pokemonSinOrdenarAsc)).toEqual(pokemonesAsc);
  });
  it('retornar el arreglo pokemonesDesc  cuando el parametro sea pokemonSinOrdenar', () => {
    expect(ordenarPokemon("desc", pokemonSinOrdenarDesc)).toEqual(pokemonesDesc);
  });
});

describe('cortarArrayPokemones', () => {
  it('is a function', () => {
    expect(typeof cortarArrayPokemones).toBe('function');
  });
  it("retorna la parte del array especifica", () => {
    expect(cortarArrayPokemones(0, 3, arrayPokemones)).toEqual(
      expect.arrayContaining(arrayPokemonesTres))
  });

});