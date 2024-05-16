//document hace referencia al documento HTML
//Selector de JS
let titulo = document.getElementById("titulo");

console.log("titulo: ", titulo);

titulo.style.color = "red";

let links = document.getElementsByClassName("menu");

console.log(links);

let arrayLinks = Array.from(links);

console.log("arrayLinks: ", arrayLinks);

arrayLinks.forEach(function (item) {
  console.log("li: ", item);
  // con style puedo acceder a diferentes propiedades de css del elemento al que se le este aplicando, ej style.color
  item.style.color = "blue";
  item.style.fontFamily = "Arial";
});

let main = document.querySelector("#principal");

console.log(main)

// main.innerHTML = "Hola!!! :D ";
main.innerHTML = `
<article>
  <h2>Chat GPT anuncio capacidades en audio e imagenes</h2>
  <p>Texto de relleno</p>
</article>`

let input = document.getElementById("email");
console.log("value: ", input.value);

let button = document.getElementById("enviar");

//addEventListener

button.addEventListener('click', function () {
  console.log("valor input", input.value);
  titulo.style.color = "green";
})

//propiedad es algo que tiene un valor, string, num, booleano, ...
//método function
