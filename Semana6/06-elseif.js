// Es una restobar que da un premio según la edad y contexto del cliente

//Si es menor de 18 no puede entrar al restobar
//Si es menor de 18 y esta acompañado de un adulto puede ingresar al restobar
//Si es mayor o igual de 18 hasta 29 puede ingresar pero no recibe ningun premio
//si es mayor o igual de 30 y menor o igual que 60, tiene derecho a una bebida
//si es mayor de 60 tiene descuento en tequeños

//los rangos de edades
//los menores de 18 no pasan - Claro

//que dificultades tenemos???
//el flujo
//restricciones
//cantidad
//Legibilidad de codigo

// && - Y -> que ambas expresiones sean verdaderas -> para que sea verdadera
// || - Ó -> al menos una expresión tiene que ser verdadera -> para que se considere verdadera
// ! not -> Negación -> No era yo, seguro se parecia

let edad = prompt("Indica tu edad");
let edadNum = parseFloat(edad);
// confirm, abrirá una ventanita pero el resultado sera un booleano
let estaAcompanado = confirm("Esta acompanad@ por un adulto?");
// console.log(estaAcompanado);
// console.log(typeof estaAcompanado);

// if( edadNum >= 18 && edadNum < 30 ) {
//   console.log("Pueden pasar al restobar! pero no tienen ningun premio/bono");
// } else if ( edadNum > 18 || estaAcompanado === true ){
//   console.log("Pueden pasar al restobar!");
// } 

if( edadNum > 60 ){
  console.log("Tiene descuentos en tequeños");
} else if (edadNum >= 30 && edadNum <= 60) {
  console.log("Tiene derecho a una bebida");
} else if ( edadNum >= 18 && edadNum < 30 ) {
  console.log("Pueden pasar al restobar! pero no tienen ningun premio/bono");
} else if (  edadNum < 18 && estaAcompanado === true) {
  console.log("Pueden pasar al restobar!");
} else {
  console.log("No puede pasar");
}