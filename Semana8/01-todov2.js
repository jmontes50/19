/**
 * 0. Objetivo
 * 1. de donde obtengos los datos
 * 2. los datos estan en una forma que me sirve
 * 3. donde doy la respuesta
 */

let inputTarea = document.getElementById('nueva-tarea');
// querySelector('#nueva-tarea');

let btnTarea = document.getElementById('btn-tarea');

// quiero escuchar el evento click
btnTarea.addEventListener('click', function () {
  //Todo es un objeto para JS, incluido los elementos que obtiene del DOM
  //al ser objetos tendran propiedades y métodos útiles.
  console.log(inputTarea.value);
})
