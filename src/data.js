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

/*                                                                */
/*                     filtra por nombre y numero                 */
/*                                                                */

export const filtraPokemon = (nombreNumero) => {
  const pattern = nombreNumero
    .split("")
    .map((x) => {
      return `(?=.*${x})`; //?= pregunta . cualquier caracter excepto salto de linea * coincide con cero o mas instancias de un caracter (?=.*p)(?=.*i)(?=.*k)(?=.*a)
    })
    .join("");
  const regex = new RegExp(`${pattern}`, "g");
  const arrayPokemonBusquedaxNombre = data.pokemon.filter((pokemon) =>
    pokemon.num.match(regex) || pokemon.name.match(regex)); //busca por nombre o numero

  return arrayPokemonBusquedaxNombre;
  
}