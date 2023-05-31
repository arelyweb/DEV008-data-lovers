import {
  filterData,
  obtenerPokemon,
  ordenarPokemon,
  contarTipoPokemon,
  calcularPaginas,
  cortarArrayPokemones,
  capitalizar,
} from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";

/* -------------------------------------------------------------------------- */
/*                             Variables globales                             */
/* -------------------------------------------------------------------------- */
const modalPokemon = document.getElementById("modalPokemon");
let pokemones = [];
const pokemonesPorPagina = 12;
let paginaActual;
let totalPaginas;


/* ----------------------------- Carga de pagina ---------------------------- */
window.addEventListener("load", function () {
  crearPaginacionInicial(data.pokemon);
});

/* ---------------------------- Reseteo de pagina --------------------------- */
document.getElementById("pokemon").addEventListener("click", function () {
  crearPaginacionInicial(data.pokemon);
});

/* --------------------- Busca los pókemones por nombre --------------------- */
document.getElementById("idBotonBuscar").addEventListener("click", function () {
  const inputBusquedaNombre = document.getElementById("idInputBusqueda").value;
  const pokemonesFiltrados = filterData(inputBusquedaNombre.toLowerCase());
  pokemones = pokemonesFiltrados;
  crearPaginacionInicial(pokemones);
});

function muestraDatosTabla(arrayPokemones) {
  const cuerpoTabla = document.querySelector("#cuerpoTabla");
  cuerpoTabla.innerHTML = ""; //Se limpia la tabla
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

/* ------------------- Muestra/Oculta grafica de pokemones ------------------ */

document.getElementById("promedioPokemones").addEventListener("click", function (e) {

  if (e.target.innerHTML === "Ver estadística") {
    document.getElementById("promedioPokemones").innerHTML = "Ver tabla";
    document.getElementById("idtablapokemones").style.display = "none";

    document.getElementById("menuBusqueda").style.display = "none";
    document.getElementById("divBusqueda").style.display = "none";
    document.getElementById("divPaginacion").style.display = "none";
    document.getElementById("estadistica").style.display = "flex";




    const divGrafica = document.getElementById("grafica");
    divGrafica.innerHTML = "";
    divGrafica.style.display = "flex";

    const estadistica = contarTipoPokemon();
    const tipoPokemones = estadistica.map((item) => item.tipoPokemon);
    const totalPokemones = estadistica.map((item) => item.total);



    const conteoPokemon = estadistica.sort(function (a, b) {
      return a.total - b.total;
    });
    document.getElementById("tipoPokemonMayor").innerHTML = `Tipo: ${capitalizar(conteoPokemon[conteoPokemon.length - 1].tipoPokemon)}`
    document.getElementById("totalPokemonMayor").innerHTML = conteoPokemon[conteoPokemon.length - 1].total
    document.getElementById("tipoPokemonMenor").innerHTML = `Tipo: ${capitalizar(conteoPokemon[0].tipoPokemon)}`
    document.getElementById("totalPokemonMenor").innerHTML = conteoPokemon[0].total


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
    document.getElementById("divPaginacion").style.display = "flex";
    document.getElementById("estadistica").style.display = "none";
    document.getElementById("menuBusqueda").style.display = "block";
    document.getElementById("divBusqueda").style.display = "block";





    document
      .getElementById("idtablapokemones")
      .classList.add("main-conteiner__table");
  }
});

/* ------------------ Ordenamiento ascendente y descendente ----------------- */
document.getElementById("slcOrdenar").addEventListener("change", function (event) {
  const tipoOrdenamiento = event.target.value;
  const pokemonOrdenados = ordenarPokemon(tipoOrdenamiento, pokemones);
  crearPaginacionInicial(pokemonOrdenados);
});





/* -------------------------------------------------------------------------- */
/*                                  M O D A L                                 */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Muestra el modal ---------------------------- */
function mostrarModal(event) {
  const informacion = document.getElementById("informacion");
  informacion.innerHTML = "";
  modalPokemon.style.display = "block";
  const nombrePokemon = event.target.value;
  const pokemonEncontrado = obtenerPokemon(nombrePokemon);

  informacion.appendChild(document.createElement("p")).innerHTML = `Nombre Pokemon: ${capitalizar(pokemonEncontrado.name)}`;
  informacion.appendChild(document.createElement("p")).innerHTML = `Tipo: ${capitalizar(pokemonEncontrado.type.join(", "))}`;
  informacion.appendChild(document.createElement("p")).innerHTML = `Generación: ${capitalizar(pokemonEncontrado.generation.num)} - ${capitalizar(pokemonEncontrado.generation.name)}`;
  informacion.appendChild(document.createElement("p")).innerHTML = `Rareza: ${capitalizar(pokemonEncontrado["pokemon-rarity"])}`;
  informacion.appendChild(document.createElement("p")).innerHTML = `Debilidades: ${capitalizar(pokemonEncontrado.weaknesses.join(", "))}`;
  informacion.appendChild(document.createElement("p")).innerHTML = `Resistencia: ${capitalizar(pokemonEncontrado.resistant.join(", "))}`;

  document.getElementById("imagenPokemon").src = pokemonEncontrado.img;
}
/* ----------------------- Botones de cierre del modal ---------------------- */
document.getElementById("btnCerrar").onclick = function () {
  modalPokemon.style.display = "none";
};
// document.getElementById("elipseCerrar").onclick = function () {
//   modalPokemon.style.display = "none";
// };



/* -------------------------------------------------------------------------- */
/*                             P A G I N A C I O N                            */
/* -------------------------------------------------------------------------- */

/* ----------------------- Crea la paginacion inicial ----------------------- */
function crearPaginacionInicial(pokemonesAPaginar) {
  pokemones = pokemonesAPaginar; // Es el arreglo que se cargara
  paginaActual = 1; // Cuando se crea la paginación  la pagina por defecto es 1
  totalPaginas = calcularPaginas(pokemones.length, pokemonesPorPagina); //Calculamos cuantos botoncitos de paginacion vamos a necesitar
  crearBotonesPaginacion(); // Funcion que crea los botones con numeros
  const pokemonesAMostrar = cortarArrayPokemones(pokemonesPorPagina * (paginaActual - 1), pokemonesPorPagina * paginaActual, pokemones);//Vamos por los primeros pokemones
  muestraDatosTabla(pokemonesAMostrar); //Mostramos los pokemones en la tabla
  //Pintamos el boton
  pintarCuadrito()
}

/* --------------------- Evento clic del boton Adelante --------------------- */
document.getElementById("btnAdelante").addEventListener("click", () => {
  if (paginaActual < totalPaginas) {
    paginaActual = paginaActual + 1;
    const pokemonesAMostrar = cortarArrayPokemones(pokemonesPorPagina * (paginaActual - 1), pokemonesPorPagina * paginaActual, pokemones);
    muestraDatosTabla(pokemonesAMostrar);
    //Pintamos el boton
    pintarCuadrito()
  }
});

/* ----------------------- Evento clic del boton Atras ---------------------- */
document.getElementById("btnAtras").addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual = paginaActual - 1;
    const pokemonesAMostrar = cortarArrayPokemones(pokemonesPorPagina * (paginaActual - 1), pokemonesPorPagina * (paginaActual), pokemones);
    muestraDatosTabla(pokemonesAMostrar);
    //Pintamos el boton
    pintarCuadrito()
  }
});

/* --------------- Crea los botones de las páginas disponibles -------------- */
function crearBotonesPaginacion() {
  const contenedorBotones = document.getElementById("contenedorBotones");
  contenedorBotones.innerHTML = "";
  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement("button");
    boton.innerHTML = i;
    boton.id = 'btn' + boton.innerHTML
    boton.classList.add("buttonPagination")
    boton.addEventListener("click", cargarPokemonesPorPagina);
    contenedorBotones.appendChild(boton);
  }
}

/* ------ Funcion de cada uno de los botones de las paginas disponibles ----- */
function cargarPokemonesPorPagina(e) {
  paginaActual = parseInt(e.target.innerHTML);
  const pokemonesAMostrar = cortarArrayPokemones(pokemonesPorPagina * (paginaActual - 1), pokemonesPorPagina * paginaActual, pokemones);
  muestraDatosTabla(pokemonesAMostrar);
  pintarCuadrito();
}

function pintarCuadrito() {
  for (let i = 1; i <= totalPaginas; i++) {
    document.getElementById(`btn${i}`).classList.remove("btnActual")
  }
  document.getElementById(`btn${paginaActual}`).classList.add("btnActual")

}


