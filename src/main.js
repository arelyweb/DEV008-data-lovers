import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

/* -------------------------------------------------------------------------- */
/*                Carga inicial de listado de pokemones                       */
/* -------------------------------------------------------------------------- */

window.addEventListener('load', function() {
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

// window.onclick = function (event) {
//   if (event.target === modalPokemon) {
//     modalPokemon.style.display = "none";
//   }
// };
/* -------------------------------------------------------------------------- */
/*                    Filtra datos por nombre y muestra listado               */
/* -------------------------------------------------------------------------- */


document.getElementById("idBotonBuscar").addEventListener("click",function(){
  const inputBusquedaNombre = document.getElementById("idInputBusqueda").value;
  const tablaPokemones = document.getElementById("idtablapokemones").getElementsByTagName('tbody')[0];
  
  const pattern = inputBusquedaNombre.split("").map((x)=>{
    return `(?=.*${x})`//?= pregunta . cualquier caracter excepto salto de linea * coincide con cero o mas instancias de un caracter 
  }).join("");   
  const regex = new RegExp(`${pattern}`, "g") ;
  const arrayPokemonBusquedaxNombre = data.pokemon.filter(pokemon => pokemon.name.match(regex) );
  tablaPokemones.innerHTML = '';
  muestraDatosTabla(arrayPokemonBusquedaxNombre);

});

/* -------------------------------------------------------------------------- */
/*                              Muestra datos en listado                      */
/* -------------------------------------------------------------------------- */

function muestraDatosTabla(arrayPokemones){
  const cuerpoTabla = document.querySelector("#cuerpoTabla");
  
  arrayPokemones.forEach(pokemon => {
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
    tr.appendChild(tdId);
    tdId.innerHTML= "<button class='buttonpill' value="+`${pokemon.num}`+">Ver Pok&eacute;mon</button>"
    // Finalmente agregamos el <tr> al cuerpo de la tabla
    cuerpoTabla.appendChild(tr);
    // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
  });

}






console.log(example, data);
