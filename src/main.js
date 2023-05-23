import {
  filtraPokemon,
  obtenerPokemon,
  ordenarPokemon,
  contarTipoPokemon,
} from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";

/* -------------------------------------------------------------------------- */
/*                             Variables globales                             */
/* -------------------------------------------------------------------------- */
const modalPokemon = document.getElementById("modalPokemon");
let pokemones = [];

/* ----------------------------- Carga de pagina ---------------------------- */
window.addEventListener("load", function () {
  limpiaTabla();
});

/* ---------------------------- Reseteo de pagina --------------------------- */
document.getElementById("pokemon").addEventListener("click", function () {
  limpiaTabla();
});
/* --------------------- Busca los pókemones por nombre --------------------- */
document.getElementById("idBotonBuscar").addEventListener("click", function () {
  const inputBusquedaNombre = document.getElementById("idInputBusqueda").value;
  const tablaPokemones = document
    .getElementById("idtablapokemones")
    .getElementsByTagName("tbody")[0];
  const pokemonesFiltrados = filtraPokemon(inputBusquedaNombre.toLowerCase());
  pokemones = pokemonesFiltrados;
  tablaPokemones.innerHTML = "";
  muestraDatosTabla(pokemonesFiltrados);
});

/**
 * Rellena la tabla con la lista de pokemones
 * @param {*} arrayPokemones Lista de pokemones a mostrar
 */
function muestraDatosTabla(arrayPokemones) {
  const cuerpoTabla = document.querySelector("#cuerpoTabla");
  arrayPokemones.forEach((pokemon) => {
    // Crear un <tr>
    const tr = document.createElement("tr");
    // Creamos un <td> de numero
    const tdNumero = document.createElement("td");
    tdNumero.textContent = pokemon.num; // el textContent del td es el nombre
    tr.appendChild(tdNumero);
    // Creamos el <td> de nombre
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

    // Crea el <td> en donde contiene el boton de ver
    const tdVer = document.createElement("td");

    // Crea el <botton> en donde contiene el boton de ver
    const btnModal = document.createElement("button");
    btnModal.classList.add("buttonpill");
    btnModal.innerHTML = "Ver pokemón";
    btnModal.value = pokemon.name;

    //agregar evento click al boton
    btnModal.addEventListener("click", function () {
      mostrarModal(this, "modalDetalle");
    });

    //Agrega el boton al <td>
    tdVer.appendChild(btnModal);
    //Agrega el <td> al elemento tr
    tr.appendChild(tdVer);
    //Agrega el tr a la tabla
    cuerpoTabla.appendChild(tr);

    // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
  });
}

/* --------------------- Llamar al modal de estadisticas -------------------- */
document
  .getElementById("promedioPokemones")
  .addEventListener("click", function () {
    mostrarModal(this, "modalEstadistica");
  });

/* ---------------------------------- Modal --------------------------------- */
function mostrarModal(e, tipoModal) {
  const informacion = document.getElementById("informacion");
  informacion.innerHTML = "";
  document.getElementById("imagenPokemon").src = "";

  if (tipoModal === "modalDetalle") {
    const nombrePokemon = e.value;
    const pokemon = obtenerPokemon(nombrePokemon);

    informacion.appendChild(
      document.createElement("p")
    ).innerHTML = `Nombre Pokemon: ${capitalizar(pokemon.name)}`;
    informacion.appendChild(
      document.createElement("p")
    ).innerHTML = `Tipo: ${capitalizar(pokemon.type.join(", "))}`;
    informacion.appendChild(
      document.createElement("p")
    ).innerHTML = `Generación: ${capitalizar(
      pokemon.generation.num
    )} - ${capitalizar(pokemon.generation.name)}`;
    informacion.appendChild(
      document.createElement("p")
    ).innerHTML = `Rareza: ${capitalizar(pokemon["pokemon-rarity"])}`;
    informacion.appendChild(
      document.createElement("p")
    ).innerHTML = `Debilidades: ${capitalizar(pokemon.weaknesses.join(", "))}`;
    informacion.appendChild(
      document.createElement("p")
    ).innerHTML = `Resistencia: ${capitalizar(pokemon.resistant.join(", "))}`;
    document.getElementById("imagenPokemon").src = pokemon.img;
  } else {
    const estadistica = contarTipoPokemon();

    estadistica.forEach((elemento) => {
      informacion.appendChild(
        document.createElement("p")
      ).innerHTML = `${capitalizar(elemento.tipoPokemon)}: ${
        elemento.total
      } pokemones`;
    });
  }
  modalPokemon.style.display = "block";
}
/* -------------------------------------------------------------------------- */
/*                              cierres de modal                              */
/* -------------------------------------------------------------------------- */
document.getElementById("btnCerrar").onclick = function () {
  modalPokemon.style.display = "none";
};
document.getElementById("elipseCerrar").onclick = function () {
  modalPokemon.style.display = "none";
};
/* -------------------------------------------------------------------------- */
/*                  ordenamiento ascendente y descendente DOM                 */
/* -------------------------------------------------------------------------- */
document.getElementById("slcOrdenar").addEventListener("change", function (e) {
  const tipoOrdenamiento = e.target.value;
  const pokemonOrdenados = ordenarPokemon(tipoOrdenamiento, pokemones);
  document.getElementById("cuerpoTabla").innerHTML = ""; //limpieza de tabla
  muestraDatosTabla(pokemonOrdenados); //llenado de tabla :)
});

function capitalizar(palabra) {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

/* -------------------------------------------------------------------------- */
/*                  Limpia tabla                                             */
/* -------------------------------------------------------------------------- */
function limpiaTabla() {
  pokemones = data.pokemon;
  document.getElementById("cuerpoTabla").innerHTML = "";
  //.getElementsByTagName("tbody")[0];
  muestraDatosTabla(pokemones);
}
