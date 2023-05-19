import { obtenerPokemon, ordenarPokemon } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

/* -------------------------------------------------------------------------- */
/*                Carga inicial de listado de pokemones                       */
/* -------------------------------------------------------------------------- */

window.addEventListener("load", function () {
  muestraDatosTabla(data.pokemon);
});

/* -------------------------------------------------------------------------- */
/*                              Interaccion Modal                             */
/* -------------------------------------------------------------------------- */

const modalPokemon = document.getElementById("modalPokemon");
const btnCerrar = document.getElementById("btnCerrar");

btnCerrar.onclick = function () {
  modalPokemon.style.display = "none";
};

/* -------------------------------------------------------------------------- */
/*                    Filtra datos por nombre y muestra listado               */
/* -------------------------------------------------------------------------- */

document.getElementById("idBotonBuscar").addEventListener("click", function () {
  const inputBusquedaNombre = document.getElementById("idInputBusqueda").value;
  const tablaPokemones = document
    .getElementById("idtablapokemones")
    .getElementsByTagName("tbody")[0];

  const pattern = inputBusquedaNombre
    .split("")
    .map((x) => {
      return `(?=.*${x})`; //?= pregunta . cualquier caracter excepto salto de linea * coincide con cero o mas instancias de un caracter
    })
    .join("");
  const regex = new RegExp(`${pattern}`, "g");
  const arrayPokemonBusquedaxNombre = data.pokemon.filter((pokemon) =>
    pokemon.name.match(regex)
  );
  tablaPokemones.innerHTML = "";
  muestraDatosTabla(arrayPokemonBusquedaxNombre);
});

/* -------------------------------------------------------------------------- */
/*                              Muestra datos en listado                      */
/* -------------------------------------------------------------------------- */

function muestraDatosTabla(arrayPokemones) {
  const cuerpoTabla = document.querySelector("#cuerpoTabla");

  arrayPokemones.forEach((pokemon) => {
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
    const tdVer = document.createElement("td");

    //botton abrir modal
    const btnModal = document.createElement("button");
    btnModal.classList.add("buttonpill");
    btnModal.innerHTML = "Ver pokemón";
    btnModal.value = pokemon.name;

    tdVer.appendChild(btnModal);

    tr.appendChild(tdVer);

    cuerpoTabla.appendChild(tr);
    // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo

    //agregar evento click a la celda nombre
    btnModal.addEventListener("click", mostrarModal);
  });
}

/* -------------------------------------------------------------------------- */
/*                                mostrar modal                               */
/* -------------------------------------------------------------------------- */
function mostrarModal(event) {
  const nombrePokemon = event.target.value;
  const pokemon = obtenerPokemon(nombrePokemon);
  document.getElementById("info").innerHTML = pokemon.name;
  document.getElementById("generacion").innerHTML =
    pokemon.generation.num + ": " + pokemon.generation.name;
  document.getElementById("tipo").innerHTML = pokemon.type.join(", ");
  document.getElementById("rareza").innerHTML = pokemon["pokemon-rarity"];
  document.getElementById("debilidades").innerHTML =
    pokemon.weaknesses.join(", ");
  document.getElementById("resistencia").innerHTML =
    pokemon.resistant.join(", ");
  document.getElementById("nombreTitulo").innerHTML =
    pokemon.name.toUpperCase();
  document.getElementById("imagenPokemon").src = pokemon.img;
  modalPokemon.style.display = "block";
}
/* -------------------------------------------------------------------------- */
/*                  ordenamiento ascendente y descendente DOM                 */
/* -------------------------------------------------------------------------- */
document.getElementById("slcOrdenar").addEventListener("change", function (e) {
  const tipoOrdenamiento = e.target.value;
  const pokemonOrdenados = ordenarPokemon(tipoOrdenamiento);
  document.getElementById("cuerpoTabla").innerHTML = ""; //limpieza de tabla
  muestraDatosTabla(pokemonOrdenados); //llenado de tabla :)
});
