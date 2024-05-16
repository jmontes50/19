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