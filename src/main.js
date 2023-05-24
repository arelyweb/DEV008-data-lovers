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
  pokemones = data.pokemon;
  muestraDatosTabla(pokemones);
});

/* ---------------------------- Reseteo de pagina --------------------------- */
document.getElementById("pokemon").addEventListener("click", function () {
  pokemones = data.pokemon;
  muestraDatosTabla(pokemones);
});
/* --------------------- Busca los pókemones por nombre --------------------- */
document.getElementById("idBotonBuscar").addEventListener("click", function () {
  const inputBusquedaNombre = document.getElementById("idInputBusqueda").value;
  const pokemonesFiltrados = filtraPokemon(inputBusquedaNombre.toLowerCase());
  pokemones = pokemonesFiltrados;
  muestraDatosTabla(pokemonesFiltrados);
});

function muestraDatosTabla(arrayPokemones) {
  const cuerpoTabla = document.querySelector("#cuerpoTabla");
  cuerpoTabla.innerHTML = ""; //Borramos lo que contenga la tabla

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
    btnModal.addEventListener("click", mostrarModal);

    //Agrega el boton al <td>
    tdVer.appendChild(btnModal);
    //Agrega el <td> al elemento tr
    tr.appendChild(tdVer);
    //Agrega el tr a la tabla
    cuerpoTabla.appendChild(tr);

    // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
  });
}

/* --------------------- mostrar la grafica de pokemones -------------------- */
document
  .getElementById("promedioPokemones")
  .addEventListener("click", function (e) {
    if (e.target.innerHTML === "Ver estadística") {
      document.getElementById("promedioPokemones").innerHTML = "Ver tabla";

      document.getElementById("idtablapokemones").style.display = "none";
      const divGrafica = document.getElementById("grafica");
      divGrafica.innerHTML = "";
      divGrafica.style.display = "flex";

      const estadistica = contarTipoPokemon();

      const tipoPokemones = estadistica.map((item) => item.tipoPokemon);
      const totalPokemones = estadistica.map((item) => item.total);

      const ctx = document.createElement("canvas");
      divGrafica.appendChild(ctx);

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: tipoPokemones,
          datasets: [
            {
              label: "Total de pokemones",
              data: totalPokemones,
              borderWidth: 1,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } else {
      document.getElementById("promedioPokemones").innerHTML =
        "Ver estadística";
      document.getElementById("grafica").style.display = "none";
      document.getElementById("idtablapokemones").style.display = "table";

      document
        .getElementById("idtablapokemones")
        .classList.add("main-conteiner__table");
    }
  });

/* ---------------------------------- Modal --------------------------------- */
function mostrarModal(event) {
  const informacion = document.getElementById("informacion");
  informacion.innerHTML = "";
  modalPokemon.style.display = "block";
  const nombrePokemon = event.target.value;
  const pokemonEncontrado = obtenerPokemon(nombrePokemon);

  informacion.appendChild(
    document.createElement("p")
  ).innerHTML = `Nombre Pokemon: ${capitalizar(pokemonEncontrado.name)}`;
  informacion.appendChild(
    document.createElement("p")
  ).innerHTML = `Tipo: ${capitalizar(pokemonEncontrado.type.join(", "))}`;
  informacion.appendChild(
    document.createElement("p")
  ).innerHTML = `Generación: ${capitalizar(
    pokemonEncontrado.generation.num
  )} - ${capitalizar(pokemonEncontrado.generation.name)}`;
  informacion.appendChild(
    document.createElement("p")
  ).innerHTML = `Rareza: ${capitalizar(pokemonEncontrado["pokemon-rarity"])}`;
  informacion.appendChild(
    document.createElement("p")
  ).innerHTML = `Debilidades: ${capitalizar(
    pokemonEncontrado.weaknesses.join(", ")
  )}`;
  informacion.appendChild(
    document.createElement("p")
  ).innerHTML = `Resistencia: ${capitalizar(
    pokemonEncontrado.resistant.join(", ")
  )}`;
  document.getElementById("imagenPokemon").src = pokemonEncontrado.img;
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
