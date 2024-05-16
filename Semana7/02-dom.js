//document hace referencia al documento HTML
//Selector de JS
let titulo = document.getElementById("titulo");

console.log("titulo: ", titulo);

titulo.style.color = "red";

let links = document.getElementsByClassName("menu");

console.log(links);

let main = document.querySelector("#principal");

console.log(main)

main.innerHTML = "Hola!!! :D ";

let input = document.getElementById("email");
console.log("value: ", input.value);

let button = document.getElementById("enviar");

//addEventListener

button.addEventListener('click', function () {
    console.log("valor input", input.value);
})

