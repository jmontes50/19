//createElement me permite crear objetos que representen elementos de HTML
/**
 * A) Si ya existe el elemento a utilizar
 * 1. utilizar el selector adecuado
 * 2. cambiar o ajustar propiedades
 */

/**
 * Podemos crear elementos directamente
 */
//document.createElement("la etiqueta del elemento a crearse");
let imagen = document.createElement("img");
console.log(imagen);

let novedades = document.querySelector('#novedades');
novedades.appendChild(imagen);

//element.setAtributo
imagen.setAttribute("src", "https://s.t13.cl/sites/default/files/styles/manualcrop_850x475/public/t13/field-imagen/2017-09/1506597856-pato.jpg.jpeg?itok=iyzplEmI");

imagen.setAttribute("alt", "pato de goma");

imagen.style.width = "500px";
//PROS: al ser un objeto element ya tengo la referencia incluso de antes que se agregue al html, es como a prueba de errores
//DESVENTAJA: ABSTRACTO

/**
 * Crear 01 solo elemento y a ese elemento añadirle HTML
 *
 */

let deportes = document.getElementById("deportes");

let divDeportes = document.createElement('div');

divDeportes.innerHTML = `
  <p id="parrafo1">lorem ipsum</p>
  <p id="parrafo2">lorem ipsum2</p>
  <button id="btn">Hazme click!!!</button>
`

//algo que podemos aplicar es querySelector, pero en el elemento
let boton = divDeportes.querySelector("#btn");

console.log(boton)

deportes.appendChild(divDeportes);