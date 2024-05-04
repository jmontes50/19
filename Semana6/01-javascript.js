//este es un comentario de una línea
/**
 * este es un comentario de bloque
 * aquí puede describir el console.log
 * en varias lineas
 */
console.log("Hola mundo!!!!");

let nombre = "Pamela";

console.log(nombre);

let edad = 25;

console.log(edad);
// camelCase 🐫, anioDeNacimiento
// usualmente tíldes o ñ no se van a usar
let precioSmartphone = 900;
// sensible a mayúsculas
console.log(precioSmartphone);
//VAR no lo usen
var apellido = "Borjas";
console.log(apellido);
var apellido = "Soles";
console.log(apellido);

// let nombre = "Harold";
//TIPOS DE DATOS;
//texto - string
let nombre2 = "Giancarlo";
//number
let numero =  20;
//string
let nota = "20";

console.log("number", numero);
console.log("typeof number", typeof numero);
console.log("string", nota);
console.log("typeof string", typeof nota);
//tener cuidado al concatenar o sumar
// console.log(numero + nota);

//boolean - booleanos
let meQuiere = true; //false
console.log("boolean", meQuiere);
console.log("typeof boolean", typeof meQuiere);

//Le podemos dar más de un argumento
//puedo hacer que imprima una cosa detrás de otra
console.log("este numero es:", 100);

//undefined
let porDefinir;
console.log("no esta definido", porDefinir);
console.log("tipo undefined:", typeof porDefinir);

//null
let noHayNada = null;
console.log("este es un null:", noHayNada);
console.log("tipo null:", typeof noHayNada);

let anio = 2024;
console.log("año1: ", anio);
//podemos darle un nuevo valor;
anio = 2025;
console.log("año2: ", anio);
//Que una variable al cambiar su valor, puede cambiar también de tipo de dato
anio = "DOS MIL VEINTICINCO";
console.log("año3: ", anio);