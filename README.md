# Data Lovers

## Índice

* [1. Definición del producto.](#1-preámbulo)
* [2. Objetivos del proyecto.](#2-resumen-del-proyecto)
* [3. Historias de usuario.](#4-historias-de-usuario)
* [4. Prototipo de baja fidelidad.](#6-hacker-edition)
* [5. Diseño de la interfaz de usuario.](#5-diseño-de-la-interfaz-de-usuario)
* [6. Link FIGMA del proyecto.](#7-consideraciones-técnicas)
* [7. Test de Usabilidad.](#8-pistas-tips-y-lecturas-complementarias)
* [8. Objetivos de aprendizaje.](#9-checklist)
* [9. Links de ayuda.](#9-checklist)
* [10. Link del proyecto.](#9-checklist)

***
## 1. Definición del producto
Pokedex-Data Lovers  es un sitio web dirigido a usarios que sean fans de la franquicia pokemon y desean saber mas información de los pokemones.
La pagina web brinda a los usuarios la facilidad de realizar diversas acciones de forma sencilla , intuitiva e iteractiva.

Las principales acicones que el usuario podran realizar son:
* Buscar un pokemon por nombre o número.
* Ordenar todos los pokemones disponibles por nombre (ascendete y descente).
*Ordenar los pokemones previamente filtrados por nombre (ascendete y descente).
* Ver la información  detallada de un pokemon a través de una tarjeta llamativa e iteractiva.
* ver una gráfica con las estadisticas  de los pokemones basados en su tipo.
* ver que tipo de pokemon más comunes y el menos común.

## 2. Objetivo del proyecto

Desarrollar una pagina web que permite visualizar la data, ordenar (ascendente y descendente), filtrar datos y mostrar una gráfica con las estadisitcas de tipo pokemon utilizando las herramietas tecnológicas para sastifacer las necesidades de los usuarios finales.
## 3. Historias de Usuario

*Nuestra obtención de historias de usuario se basó en la descripción del README y en la búsqueda de páginas que mostraban datos del pokémones. Asi mismo de preguntas informales a usuarios que jugaban pokémonGo sobre qué datos del pokémon son relevantes para jugar. Con esta información obtuvimos ocho historias de usuario.

[DT-1] Mostrar datos de pokemon.
 
 Descripción  	 
CRITERIOS DE ACEPTACIÓN
1.	Se mostrará en una ventana al dar click en el listado de pokemones.
2.	Se mostrará la imagen del pokémon, nombre, descripción, generación, tipo, movimiento rápido, ataque especial, debilidades y resistencia.
3.	Se podrá cerrar la ventana y regresar al listado de pokemones.
DEFINICIÓN DE TERMINADO
1.	Todo el código de las modificaciones será subido a la rama DEVELOP.
2.	La colaboradora podrá descargar los cambios en su local.

[DT-2] Realizar la paginación de la tabla.
 Descripción  	 

 CRITERIOS DE ACEPTACIÓN
1.	Mostrará un paginado que permita al usuario recorrer de manera manual el listado de pokemones.
2.	Solo mostrará 12 pokemones por página.
3.	Mostrará un paginado con númeral y botónes que permitan avanzar.
4.	Se mostrará cada vez que exista más de 12 pokemones en la lista.
DEFINICIÓN DE TERMINADO
1.	Todo el código de las modificaciones será subido a la rama DEVELOP.
2.	La colaboradora podrá descargar los cambios en su local.

[DT-3] Mostrar listado de todos los pokemones.

 Descripción  	 
 CRITERIO DE ACEPTACIÓN
1.	Se verá en una tabla.
2.	Mostrar el número, nombre, generación, tipo y Pokémon.
3.	Permitir ver la información del pokémon al dar click en Ver Pokemon.
4.	Interacción en ver Pokemon.
DEFINICIÓN DE TERMINADO
1.	Todo el código de las modificaciones será subido a la rama DEVELOP.
2.	La colaboradora podrá descargar los cambios en su local.

[DT-4] Filtrar por nombre y número de los pokemones.

 Descripción  	 
 CRITERIO DE ACEPTACIÓN
1.	Se verá en una tabla.
2.	Mostrar el número, nombre, generación, tipo y Pokémon.
3.	Permitir ver la información del pokémon al dar click en Ver Pokemon.
4.	Interacción en ver Pokemon.
DEFINICIÓN DE TERMINADO
1.	Todo el código de las modificaciones será subido a la rama DEVELOP.
2.	La colaboradora podrá descargar los cambios en su local.

[DT-5] Ordenar de forma ascendente los pokemones.

 Descripción  	 
CRITERIOS DE ACEPTACIÓN
1.	El elemento se selección permitirá al usuario poder elegir el tipo ordenamiento.
2.	Cuando el usuario da clic en tipo ordenamiento (ASCENDENTE) mostrar listado de pokemones que inicien de la letra A hasta Z.
3.	Cuando el usuario da clic en tipo ordenamiento (DESCENDENTE) mostrar listado de pokemones que inicien de la letra Z hasta A.
DEFINICIÓN DE TERMINADO
1.	Una vez terminado la codificación se subirá los cambios en la rama develop.
2.	La colaboradora podrá descargar los cambios en su local.

[DT-6] Gráfica de las categorías y totales de los pokemones.

 Descripción  	 
 CRITERIOS DE ACEPTACIÓN
1.	Se mostrará una gráfica que muestre el conteo de tipo de pokemon.
2.	Se mostrará un contreo de generacion de pokemon.
3.	Se mostrará en otro apartado diferente a la página principal.
4.	Permitirá al usuario regresar a la página principal.
DEFINICIÓN DE TERMINADO
1.	Una vez terminado la codificación se subirá los cambios en la rama develop.
2.	La colaboradora podrá descargar los cambios en su local.

[DT-7] Filtrado por ordenamiento ASC y DESC.

 Descripción  	 
 CRITERIOS DE ACEPTACIÓN
1.	Se deberá ordenar los datos filtrados por el usuario.
2.	El usuario deberá seleccionar el tipo de ordenamiento (ASCENDENTE O DESCENDENTE).
DEFINICIÓN DE TERMINADO
1.	Una vez terminado la codificación se subirá los cambios en la rama develop.
2.	La colaboradora podrá descargar los cambios en su local.

[DT-8] Realizar la página responsive.

 Descripción  	 
 CRITERIOS DE ACEPTACIÓN
1.	El listado se mostrará responsivo.
2.	La tarjeta pokemon se mostrará responsiva.
3.	La gráfica se mostrará responsiva.
4.	Paginado se mostrará responsivo
DEFINICIÓN DE TERMINADO
1.	Una vez terminado la codificación se subirá los cambios en la rama develop.
2.	La colaboradora podrá descargar los cambios en su local.


### 4. Prototipo de baja fidelidad
En  la siguiente imagen se podrá observar nuestro boceto del cual fue el punto partida para realizar el prototipo de alta fidelidad en figma. Los cambios fueron surgiendo conforme a las necesidades que se hiban presentando.
![Image text](/src/icons/boceto1.jpg)

## 7. Diseño de la Interfaz de Usuario

Decidimos utilizar colores basados en el logo oficial de Pokémon para que amenizara la experiencia de usuario, el funcionamiento es mostrar una tabla de pokemones que permita realizar búsquedas simples y poder consultar los datos e imagen del pokémon.

### Prototipo de alta fidelidad

![Imagen de la página principal.](https://raw.githubusercontent.com/Luzgalan/DEV008-data-lovers/feature/paginacion-table/img/prototipo/paginaPrincipal_DT.jpg)

![Imagen de la gráfica que muestra el conteo por tipo y generación.](https://raw.githubusercontent.com/Luzgalan/DEV008-data-lovers/feature/paginacion-table/img/prototipo/grafica_DT.jpg)

![Imagen de la parte frontal de la tarjeta del pokémon.](https://raw.githubusercontent.com/Luzgalan/DEV008-data-lovers/feature/paginacion-table/img/prototipo/tarjetaFrente_DT.jpg)

![Imagen de la parte trasera de la tarjeta del pokémon.](https://raw.githubusercontent.com/Luzgalan/DEV008-data-lovers/feature/paginacion-table/img/prototipo/tarjetaDetras_DT.jpg)

* [Link a FIGMA del proyecto](https://www.figma.com/file/IwIB5IsbdV69MQzJJaxM8K/DATALOVERS?type=design&node-id=1%3A2&t=cIVfROvni0Mu4kt9-1)


## 8. Objetivos de aprendizaje

El proyecto fue realizado usando Javascrip, HTML y CSS de cada uno de ellos se obtuvo un aprendizaje para poder concluir el proyecto a continuacion se detalla sobre lo aprendido.

### HTML

* Entender y reconocer el uso de **HTML Semantico** para la mejora de la accesibilidad, el SEO, facilita el mantenimiento y la colaboración.
* Desarrollar la maquetación HTML en concordancia con el prototipo en Figma.


### CSS

* Implementacion selectores CSS para estilizar y dar formato al contenido
* Uso de modelos de caja para para controlar y definir el diseño y la presentación de los elementos HTML en una página web. 
En el modelo de caja cada elemento en HTML se representa como una caja rectangular, y el modelo de caja de CSS describe cómo se calcula el tamaño total de esa caja, incluyendo el contenido, el relleno (padding), los bordes (border) y los márgenes (margin).


* Uso de **Flexbox** para crear diseños flexibles y responsivos en la página web. Esto nos permitio organizar y alinear de manera eficiente los elementos dentro de un contenedor
### Web APIs

**Uso de selectores del DOM**

 Se utilizaron para seleccionar y acceder a elementos específicos en la página web, lo que permitio interactuar con ellos y manipular su contenido, estilo, atributos y eventos.

  * Listeners: se utilizaron para detectar y responder a eventos que ocurren en los elementos HTML de la página web. 
    + EventTarget.addEventListener()
    + El objeto Event
  * Manipulacion dinámica del DOM: fue utilizado par  modificar y actualizar el contenido, la estructura y el estilo del sitio  web en tiempo real mediante JavaScript, permitiendonos agregar, eliminar y modificar elementos y sus atributos, así como cambiar el contenido y el estilo de los elementos existentes
    + Node.appendChild() 
    + Document.createElement() 
    + Element.innerHTML 
    + Node.textContent
    + Element.classList.add()
    + Element.classList.remove()
    + Element.value
    + Event.target

### JavaScript
Se utilizo en lenguaje de desarrollo en java scritp vainilla para desarrollar la logica y el funcionamiento del sitio usando:

* Datos primitivos y no primitivos
*Variables (declaración, asignación, ámbito)
* Arrays
  + Array.filter()
  + Array.sort()
  + Array.map()
  + Array.foreach()
  + Array.find()
  + Array.findIndex()
  + Array.slice()
  + Array.length
 * Funciones (parámetros, argumentos, valor de retorno).
 * Uso de condicionales (if y lógica booleana).
 Uso de bucles/ciclos (for).
 * ES Modules (import | export).  
 * Objetos (key, value) 
 * Pruebas unitarias  jest (unit tests).

 ### Hacker edition
 Para poder mostrar la grafica de los tipos de pokemones fue necesario incluir el siguente elemento:
 *Chart.js: es una biblioteca de graficos de java scritp que nos permite incluir graficas de forma  sencilla y flexible.

### Git, Git hub y Git flow

 Git flow: Se utlizo este modelo de ramificación ya que nos facilita la organización del trabajo y el seguimiento de las diferentes etapas de desarrollo.

* Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote).
* Git repositorios de GitHub (clone, fork, gh-pages).
* Git: Integración de cambios entre ramas (branch, checkout, merge, reset)
* GitHub: Despliegue con GitHub Pages

### Buenas practicas de desarrollo
* Organizar y dividir el código en módulos (Modularización).
* Utilizar identificadores descriptivos (Nomenclatura | Semántica).
* Utilizar linter para seguir buenas prácticas (ESLINT).

## 9. Links de ayuda

### GIT

* [COMANDOS](https://education.github.com/git-cheat-sheet-education.pdf)
* [COMANDOS](https://learngitbranching.js.org/?locale=es_ES)
* [COMANDOS](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=%C2%BFQu%C3%A9%20es%20Gitflow%3F,vez%20y%20quien%20lo%20populariz%C3%B3.)

### EFECTO FLIP

* [FLIP](https://xitrus.es/blog/87/Efecto_flip_con_fotos_en_3D_con_CSS3)
* [FLIP](https://www.youtube.com/watch?v=1XsFJh9tJG0)

### MODAL

* [MODAL](https://www.youtube.com/watch?v=iIayPuuB2gY)

### Java Script
* [METODOS](https://www.freecodecamp.org/espanol/news/el-manual-de-arreglos-en-javascript/)
* [METODOS](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## 10. Checklist

* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.

