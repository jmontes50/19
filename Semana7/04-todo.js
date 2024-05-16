/**
 * 1. Tener las referencias necesarias
 * 2. resolver el algoritmo - etapa de manejo de datos, me refiero que habrá algun algoritmo,
 * lógica de negocio a implementar
 * 3. identificar que queremos, dificultades posibles e ir resolviendo (sandbox)
 * 4. Curiosidad y divertido
 * 
 */

//tener las referencias arriba
let inputTarea = document.getElementById("idTarea");
let btnAgregar = document.getElementById("btnAgregar");
let ulTareas = document.querySelector(".tareas");

let tareas = [];

btnAgregar.addEventListener('click', function () {
    let tarea = inputTarea.value;
    // console.log(tarea);
    tareas.push(inputTarea.value)
    // console.log(tareas)

    let paraDibujar = renderizarTareas(tareas)
    ulTareas.innerHTML = paraDibujar;

})

function renderizarTareas(arrTareas) {
    let htmlTareas = "";
    arrTareas.forEach(function (tar) {
        htmlTareas = htmlTareas + `<li>${tar}</li>`
    })
    return htmlTareas
}