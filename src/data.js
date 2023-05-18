import data from "./data/pokemon/pokemon.js";
// estas funciones son de ejemplo

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};

export const obtenerPokemon = (nombre) => {
  return data.pokemon.find((pokemon) => pokemon.name === nombre);
};
