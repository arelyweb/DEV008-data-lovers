//import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";

/* ----------------- busca un pokemon de acuerdo a su nombre ---------------- */
export const obtenerPokemon = (nombre) => {
  return data.pokemon.find((pokemon) => pokemon.name === nombre);
};

/* ------------------ Ordena de forma ascendente y descente ----------------- */
export const ordenarPokemon = (tipoOrdenamiento, arrayPokemones) => {
  if (tipoOrdenamiento === "asc") {
    return arrayPokemones.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else {
    return arrayPokemones.sort((a, b) => {
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

/* ------------------- Obtiene el total y tipos de pokemon ------------------ */
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

/* ------------------- Aplica SLICE al array que se mande ------------------- */
export const cortarArrayPokemones = (inicio, fin, arrayPokemones) => {
  return arrayPokemones.slice(inicio, fin);
};

/* -------- Calcula cuaantas paginas se necesitan para la paginacion -------- */
export const calcularPaginas = (tamañoArreglo, pokemonesPorPagina) => {
  return Math.ceil(tamañoArreglo / pokemonesPorPagina);
};

/* ---------------- Filtra los pokemones por nombre o numero ---------------- */
export const filterData = (nombreNumero) => {
  const sinEsp = nombreNumero.replace(/\s/g, '');
  const sinCreS = sinEsp.replace(/[^a-zA-Z0-9 ]/g, '');
  const pattern = sinCreS
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

/* -------------------------------------------------------------------------- */
/*                            C A P I T A L I Z A R                           */
/* -------------------------------------------------------------------------- */
export const capitalizar = (palabra) => {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}


// export const paginaPokemon = (pagina, arrayData, datos) => {
//   const porPagina = 10;
//   const offset = porPagina * (pagina - 1);
//   const arrayPaginado = [];
//   const numeral = 0;
//   let totalPages = 0;
//   let pokemonesPorPagina = [];

//   if (datos) {
//     totalPages = Math.ceil(arrayData.length / porPagina);
//     pokemonesPorPagina = arrayData.slice(offset, porPagina * pagina);
//   } else {
//     totalPages = Math.ceil(data.pokemon.length / porPagina);
//     pokemonesPorPagina = data.pokemon.slice(offset, porPagina * pagina);
//   }

//   for (let i = 0; i < totalPages; i++) {
//     arrayPaginado[i] = numeral + i;
//   }

//   return {
//     previousPage: pagina - 1 ? pagina - 1 : null,
//     nextPage: totalPages > pagina ? pagina + 1 : null,
//     total: data.pokemon.length,
//     totalPages: arrayPaginado,
//     items: pokemonesPorPagina,
//   };
// };
