let gato = {
    nombre: "Michi",
    edad: 5,
    color: "Café"
}

// console.log(gato.nombre);
// console.log(gato.edad);
// console.log(gato.color);
//que es lo que voy a desestructurar (array u objeto) y saber que contenido tiene
const { color, edad, nombre } = gato;

console.log(nombre);
console.log(edad);
console.log(color);

// const infoGato = (nombre, color, edad) => {
//infoGato recibira 01 parámetro, ese parámetro será un objeto
const infoGato = ({ nombre, color, edad }) => {
    console.log(`Tu gato es ${nombre} tiene ${edad} años y es ${color}`)
}

// infoGato("Garfield", "10", "naranja")

infoGato(gato);

const frutas = ["Kiwi", "Naranja", "Fresa"];

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);