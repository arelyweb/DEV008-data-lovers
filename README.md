


















































































































































































# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***
## 2. Descripción del proyecto

Pokedex-Data Lovers  es un sitio web dirigido a usarios que sean fans de la franquicia pokemon y desean saber mas información de los pokemones.
La pagina web brinda a los usuarios la facilidad de realizar diversas acciones de forma sencilla , intuitiva e iteractiva.

Las principales acicones que el usuario podran realizar son:
* Buscar un pokemon por nombre o número.
* Ordenar todos los pokemones disponibles por nombre (ascendete y descente).
*Ordenar los pokemones previamente filtrados por nombre (ascendete y descente).
* Ver la información  detallada de un pokemon a través de una tarjeta llamativa e iteractiva.
* ver una gráfica con las estadisticas  de los pokemones basados en su tipo.
* ver que tipo de pokemon más comunes y el menos común.

## 2. Objetivos del proyecto

Desarrollar una pagina web que permite visualizar la data,ordenar (ascendente y descendente), filtrar datos y mostrar una gráfica con las estadisitcas de tipo pokemon utilizando las herramietas tecnológicas para sastifacer las necesidades de los usuarios finales.




## 3. Objetivos de aprendizaje

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

### Prototipo de baja fidelidad
En  la siguiente imagen se podrá observar nuestro boceto del cual fue el punto partida para realizar el prototipo de alta fidelidad en figma. Los cambios fueron surgiendo conforme a las necesidades que se hiban presentando.
![Image text](/src/icons/boceto1.jpg)
