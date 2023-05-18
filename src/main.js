import { obtenerPokemon } from "./data.js";
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

/* -------------------------------------------------------------------------- */
/*                              Muestra datos en listado                      */
/* -------------------------------------------------------------------------- */

const cuerpoTabla = document.querySelector("#cuerpoTabla");
//const busquedaNombre =
//const filterNombre = data.pokemon.filter(pokemon => pokemon.name === "bulbasaur" );
//console.log(filterNombre);

data.pokemon.forEach((pokemon) => {
  // Crear un <tr>
  const tr = document.createElement("tr");
  // Creamos el <td> de nombre y lo adjuntamos a tr
  const tdNombre = document.createElement("td");
  tdNombre.textContent = pokemon.name; // el textContent del td es el nombre
  tr.appendChild(tdNombre);
  // El td de generacion
  const tdGeneracion = document.createElement("td");
  tdGeneracion.textContent = pokemon.generation.name;
  tr.appendChild(tdGeneracion);
  // El td del tipo
  const tdTipo = document.createElement("td");
  tdTipo.textContent = pokemon.type;
  tr.appendChild(tdTipo);
  // El td del id
  const tdId = document.createElement("td");
  tdId.textContent = pokemon.num;
  tr.appendChild(tdId);
  // Finalmente agregamos el <tr> al cuerpo de la tabla
  cuerpoTabla.appendChild(tr);
  // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo

  //agregar evento click a la celda nombre
  tdNombre.addEventListener("click", mostrarModal);
});

function mostrarModal(event) {
  const nombrePokemon = event.target.innerHTML;
  const pokemonObtenido = obtenerPokemon(nombrePokemon);

  document.getElementById("info").innerHTML = pokemonObtenido.name;
  document.getElementById("generacion").innerHTML =
    pokemonObtenido.generation.num + ": " + pokemonObtenido.generation.name;
  document.getElementById("tipo").innerHTML = pokemonObtenido.type.join(", ");
  document.getElementById("rareza").innerHTML =
    pokemonObtenido["pokemon-rarity"];
  document.getElementById("debilidades").innerHTML =
    pokemonObtenido.weaknesses.join(", ");
  document.getElementById("resistencia").innerHTML =
    pokemonObtenido.resistant.join(", ");
  document.getElementById("imagenPokemon").src = pokemonObtenido.img;

  modalPokemon.style.display = "block";
}
