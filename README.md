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
## 3. Historias de Usuario

*Nuestra obtención de historias de usuario se basó en la descripción del README y en la búsqueda de páginas que mostraban datos del pokémones. Asimismo de preguntas informales a usuarios que jugaban pokémonGo sobre qué datos del pokémon son relevantes para jugar. Con esta información obtuvimos ocho historias de usuario.

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


## 7. Diseño de la Interfaz de Usuario

Decidimos utilizar colores basados en el logo oficial de Pokémon para que amenizara la experiencia de usuario, el funcionamiento es mostrar una tabla de pokemones que permita realizar búsquedas simples y poder consultar los datos e imagen del pokémon.

### Prototipo de alta fidelidad

![Imagen de la página principal.](https://raw.githubusercontent.com/Luzgalan/DEV008-data-lovers/feature/paginacion-table/img/prototipo/paginaPrincipal_DT.jpg)

![Imagen de la gráfica que muestra el conteo por tipo y generación.](https://raw.githubusercontent.com/Luzgalan/DEV008-data-lovers/feature/paginacion-table/img/prototipo/grafica_DT.jpg)

![Imagen de la parte frontal de la tarjeta del pokémon.](https://raw.githubusercontent.com/Luzgalan/DEV008-data-lovers/feature/paginacion-table/img/prototipo/tarjetaFrente_DT.jpg)

![Imagen de la parte trasera de la tarjeta del pokémon.](https://raw.githubusercontent.com/Luzgalan/DEV008-data-lovers/feature/paginacion-table/img/prototipo/tarjetaDetras_DT.jpg)

* [Link a FIGMA del proyecto](https://www.figma.com/file/IwIB5IsbdV69MQzJJaxM8K/DATALOVERS?type=design&node-id=1%3A2&t=cIVfROvni0Mu4kt9-1)


## 9. Links de ayuda

### GIT

* [COMANDOS](https://education.github.com/git-cheat-sheet-education.pdf)
* [COMANDOS](https://learngitbranching.js.org/?locale=es_ES)

### EFECTO FLIP

* [FLIP](https://xitrus.es/blog/87/Efecto_flip_con_fotos_en_3D_con_CSS3)
* [FLIP](https://www.youtube.com/watch?v=1XsFJh9tJG0)

### MODAL

* [MODAL](https://www.youtube.com/watch?v=iIayPuuB2gY)

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
