/**
Tiene un catálogo de productos con estos precios, 50, 20, 10, 100, 30, 10

Indique cuál es su presupuesto y según el orden en que están indique cuánto gastará Ej. si mi presupuesto es 90 considerare 50, 20 y 10.
*/

/*
let precios = [50, 20, 10, 100, 30, 10];

let presupuesto = prompt('Cuanto tiene de presupuesto');
let numPresupuesto = parseFloat(presupuesto);

for(let i = 0; i < precios.length; i++){
  if(precios[i] <= numPresupuesto){
    console.log(`El producto de S/ ${precios[i]} se compra`);
    //si es que el producto se compra
    // numPresupuesto -= precios[i];
    numPresupuesto = numPresupuesto - precios[i];
  }
}
*/

/**
 * Según el número ingresado por un usuario calcula la suma de los valores menores a este número comenzando desde 1
 */

// let numeroIngresado = parseFloat(prompt('Indique un número'))
let valorIngresado = prompt('Indique un número');
let numConvertido = parseFloat(valorIngresado);
let suma = 0;

for(let i = 1; i < numConvertido; i++){
  // console.log("i:", i);
  suma = suma + i;
  // console.log("suma:", suma);
}

console.log(`La suma es: ${suma}`);
