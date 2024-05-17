/**
 * 1. Tener las referencias necesarias
 * 2. resolver el algoritmo - etapa de manejo de datos, me refiero que habrá algun algoritmo,
 * lógica de negocio a implementar
 * 3. identificar que queremos, dificultades posibles e ir resolviendo (sandbox)
 * 4. Curiosidad y divertido
 * 
 */

/** 2. resolver el algoritmo
 * Objetivo: Mostrar una lista de tareas con lo que tengo en el html mediante el manejo del DOM
 * 2.1 Necesito obtener el ingreso del usuario dentro del input
 * 2.2 Necesito la acción del button, el click del button
 * 2.3 ul para mostrar las tareas agregadas
 * 
 */

//tener las referencias arriba
let inputTarea = document.getElementById("idTarea");
let btnAgregar = document.getElementById("btnAgregar");
//selector que acepta nomenclatura de CSS
let ulTareas = document.querySelector(".tareas");

function obtenerTarea() {
    let textoTarea = inputTarea.value;
    return textoTarea;
}

let listaTareas = [];

function dibujarTareas() {
    let htmlTareas = "";
    //estamos añadiendo codigo html a htmlTareas
    listaTareas.forEach(function (item) {
        htmlTareas = htmlTareas + `
            <li>${item}</li>
        `
    });
    ulTareas.innerHTML = htmlTareas;
}

function guardarTareaLS() {
    //recordemos el LS solamente me permite Texto
    let listaTareasJSON = JSON.stringify(listaTareas);
    localStorage.setItem("todo", listaTareasJSON);
}

function leerTareasLS() {
    //cuando obtenemos el valor de LS con getItem lo obtenemos como string
    let tareasObtenidas = localStorage.getItem("todo");
    let listaTareasJS = JSON.parse(tareasObtenidas);
    // console.log("lista JS: ", listaTareasJS)
    //no es la mejor manera
    listaTareas = listaTareasJS;
    dibujarTareas();
}

btnAgregar.addEventListener("click", function () {
    let textoObtenido = obtenerTarea();
    console.log("textoObtenido", textoObtenido);
    // push es un método que me permite añadir algo a un arreglo
    listaTareas.push(textoObtenido);
    console.table(listaTareas);
    guardarTareaLS();
    dibujarTareas();
})

leerTareasLS()
//en caso deseen borrar todo el LS, pueden utilizr el método localStorage.clear();


















/* primera versión del ejercicio
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
*/