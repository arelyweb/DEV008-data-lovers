//import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";

// estas funciones son de ejemplo

export const obtenerPokemon = (nombre) => {
  return data.pokemon.find((pokemon) => pokemon.name === nombre);
};

export const ordenarPokemon = (tipoOrdenamiento) => {
  if (tipoOrdenamiento === "asc") {
    return data.pokemon.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else {
    return data.pokemon.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }
};

export const contarTipoPokemon = () => {
  const arrayTipoPokemon = [];

  data.pokemon.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      const posicion = arrayTipoPokemon.findIndex(
        (item) => item.tipoPokemon === type
      );
      if (posicion === -1) {
        arrayTipoPokemon.push({ tipoPokemon: type, total: 1 });
      } else {
        arrayTipoPokemon[posicion].total += 1;
      }
    });
  });
  return arrayTipoPokemon;
};

/*                                                                */
/*                     filtra por nombre y numero                 */
/*                                                                */

export const filterData = (nombreNumero) => {
  const pattern = nombreNumero
    .split("")
    .map((x) => {
      return `(?=.*${x})`; //?= pregunta . cualquier caracter excepto salto de linea * coincide con cero o mas instancias de un caracter (?=.*p)(?=.*i)(?=.*k)(?=.*a)
    })
    .join("");
  const regex = new RegExp(`${pattern}`, "g");
  const arrayPokemonBusquedaxNombre = data.pokemon.filter(
    (pokemon) => pokemon.num.match(regex) || pokemon.name.match(regex)
  ); //busca por nombre o numero

  return arrayPokemonBusquedaxNombre;
};

/*                                                                */
/*                     filtra por pagina de datos               */
/*                                                                */

export const paginaPokemon = (pagina,arrayData,datos) => {

  const porPagina = 10;
  const offset = porPagina * (pagina - 1);
  const arrayPaginado = [];
  const numeral = 0;
  let totalPages =0
  let pokemonesPorPagina = [];

  if(datos){
    totalPages = Math.ceil(arrayData.length / porPagina);
    pokemonesPorPagina = arrayData.slice(offset, porPagina * pagina);
  }else{
    totalPages = Math.ceil(data.pokemon.length / porPagina);
    pokemonesPorPagina = data.pokemon.slice(offset, porPagina * pagina);
  }
  
  for (let i = 0; i<totalPages;i++){
    arrayPaginado[i]=numeral+i;
  }
  
  return {
    previousPage: pagina - 1 ? pagina - 1 : null,
    nextPage: (totalPages > pagina) ? pagina + 1 : null,
    total: data.pokemon.length,
    totalPages: arrayPaginado,
    items: pokemonesPorPagina
  };
};