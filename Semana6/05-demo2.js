//Mi farma necesita un módulo para indicar que un cliente tiene dscto.

let edad = prompt("Cual es su edad?");

console.log("edad: ", edad);

let numEdad = parseFloat(edad);

console.log("numEdad: ", numEdad);

if( numEdad >= 60 ){
    console.log("Tiene dscto");
} else {
    console.log("No tiene dscto");
}