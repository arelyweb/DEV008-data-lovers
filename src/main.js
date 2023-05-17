import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

/* -------------------------------------------------------------------------- */
/*                              Interaccion Modal                             */
/* -------------------------------------------------------------------------- */

const modalPokemon = document.getElementById("modalPokemon");
const btnCerrar = document.getElementById("btnCerrar");

btnCerrar.onclick = function () {
  modalPokemon.style.display = "none";
};

// window.onclick = function (event) {
//   if (event.target === modalPokemon) {
//     modalPokemon.style.display = "none";
//   }
// };

console.log(example, data);
