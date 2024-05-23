/**
 * 0. Objetivo
 * 1. de donde obtengos los datos
 * 2. los datos estan en una forma que me sirve
 * 3. donde doy la respuesta
 */

let inputTarea = document.getElementById('nueva-tarea');
// querySelector('#nueva-tarea');

let btnTarea = document.getElementById('btn-tarea');

let dataTareas = [];

// quiero escuchar el evento click
btnTarea.addEventListener('click', function () {
  //Todo es un objeto para JS, incluido los elementos que obtiene del DOM
  //al ser objetos tendran propiedades y métodos útiles.
  console.log(inputTarea.value);
  // agregarlo en dataTareas
  // let nuevaTarea = inputTarea.value;
  let nuevaTarea = {
    tarea: inputTarea.value,
    completada: false
  }
  dataTareas.push(nuevaTarea);
  console.table(dataTareas)
  //limpiamos antes de añadir nuevas tareas
  document.getElementById('tareas').innerHTML = "";
  // ----- probando
  dataTareas.forEach(function (item, indice) {
    let elTarea = ItemTarea(item, indice);
    dibujarTareas(elTarea);
  })
})

// componente
//tener agrupada la lógica y apariencia de un conjunto de elementos en html
function ItemTarea(task, index) {
  //devolverme un elemento LI que represente una tarea, con toda su apariencia y toda su lógica
  let li = document.createElement('li');
  //añadir una clase a un elemento
  li.classList.add('list-group-item');
  //estamos rellenando el elemento LI
  //es un atributo de tipo data, lo que hace es guardar info
  li.innerHTML = `
    <span>${task.tarea}</span>
    <input 
      type="checkbox"
      class="form-check-input"
      data-id="${index}" 
      ${task.completada === true ? "checked" : ""}
    >
  `
  //querySelector obtiene un elemento usando la sintaxis de CSS . # tag
  let checkbox = li.querySelector('input[type=checkbox]');
  console.log("CHECKBOX: ", checkbox)
  //getAttribute obtiene el valor de un atributo
  let numIndex = +checkbox.getAttribute('data-id');
  console.log("numIndex: ", typeof numIndex)
  checkbox.addEventListener('click', function (evento) {
    //evento.target me dice de donde vino el evento
    console.log("evento: ", evento.target.checked)
    dataTareas[numIndex].completada = evento.target.checked;
    console.table(dataTareas)
  })
  return li;
}

function dibujarTareas(elemTarea) {
  //obtiene referencia del ul en el html
  let ul = document.getElementById('tareas');
  //lo limpia como si fuera una pizarra
  // ul.innerHTML = "";
  //agrego un nuevo elemento al ul
  ul.appendChild(elemTarea);
}