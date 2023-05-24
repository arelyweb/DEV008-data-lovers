import {
  filterData,
  obtenerPokemon,
  ordenarPokemon,
  contarTipoPokemon,
  paginaPokemon,
} from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";


//declaracion modal-Varoable global se usa en varias funciones
const modalPokemon = document.getElementById("modalPokemon");
/* -------------------------------------------------------------------------- */
/*                Carga inicial de listado de pokemones                       */
/* -------------------------------------------------------------------------- */

window.addEventListener("load", function () {
  
  limpiaTabla();

});
/* -------------------------------------------------------------------------- */
/*                logo pokemon limpia la tabla                                */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                logo pokemon limpia la tabla                                */
/* -------------------------------------------------------------------------- */
document.getElementById("pokemon").addEventListener("click", function () {
  limpiaTabla();
});

/* -------------------------------------------------------------------------- */
/*                    Filtra datos por nombre y muestra listado               */
/* -------------------------------------------------------------------------- */
document.getElementById("idBotonBuscar").addEventListener("click", function () {
  const inputBusquedaNombre = document.getElementById("idInputBusqueda").value;
  const tablaPokemones = document
    .getElementById("idtablapokemones")
    .getElementsByTagName("tbody")[0];

  const pokemonesFiltrados = filterData(inputBusquedaNombre.toLowerCase());

  tablaPokemones.innerHTML = "";
  const arrayPokmon = paginaPokemon(1,pokemonesFiltrados,true);
  muestraDatosTabla(arrayPokmon.items);
});

/* -------------------------------------------------------------------------- */
/*                              Muestra datos en listado                      */
/* -------------------------------------------------------------------------- */

function muestraDatosTabla(arrayPokemones) {
  const cuerpoTabla = document.querySelector("#cuerpoTabla");

  arrayPokemones.forEach((pokemon) => {
    // Crear un <tr>
    const tr = document.createElement("tr");
    // Creamos el <td> de numero y lo adjuntamos a tr
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
    btnModal.addEventListener("click", function () {
      mostrarModal(this, "modalDetalle");
    });
  });
}

/* -------------------------------------------------------------------------- */
/*                        Mostrar modal de estadistica                        */
/* -------------------------------------------------------------------------- */
document
  .getElementById("promedioPokemones")
  .addEventListener("click", function () {
    mostrarModal(this, "modalEstadistica");
  });

/* -------------------------------------------------------------------------- */
/*                                mostrar modal                               */
/* -------------------------------------------------------------------------- */
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
  const pokemonOrdenados = ordenarPokemon(tipoOrdenamiento);
  document.getElementById("cuerpoTabla").innerHTML = ""; //limpieza de tabla
  muestraDatosTabla(pokemonOrdenados); //llenado de tabla :)
});

/* -------------------------------------------------------------------------- */
/*                  Capitaliza palabra                                        */
/* -------------------------------------------------------------------------- */

function capitalizar(palabra) {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

/* -------------------------------------------------------------------------- */
/*                  Limpia tabla                                             */
/* -------------------------------------------------------------------------- */
function limpiaTabla() {
  const tablaPokemones = document
    .getElementById("idtablapokemones")
    .getElementsByTagName("tbody")[0];
  tablaPokemones.innerHTML = "";
  document.getElementById("idInputBusqueda").value="";
  const arrayPokmon = paginaPokemon(1,null,false);
  muestraDatosTabla(arrayPokmon.items);
}

/* -------------------------------------------------------------------------- */
/*                 Paginacion de tabla principal                              */
/* -------------------------------------------------------------------------- */
const next = document.getElementById("next");
const tablePokemones = document.getElementById("cuerpoTabla");
let i = 1;

next.addEventListener("click",  function(){
  i--;
  const arrayPokmon = paginaPokemon(i,null,false);
  tablePokemones.innerHTML = "";
  muestraDatosTabla(arrayPokmon.items);
})
const back = document.getElementById("back");
back.addEventListener("click",  function(){
  i++;
  const arrayPokmon = paginaPokemon(i,null,false);
  tablePokemones.innerHTML = "";
  muestraDatosTabla(arrayPokmon.items);
})
