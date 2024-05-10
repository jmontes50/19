/**
Tiene un catálogo de productos con estos precios, 50, 20, 10, 100, 30, 10

Indique cuál es su presupuesto y según el orden en que están indique cuánto gastará Ej. si mi presupuesto es 90 considerare 50, 20 y 10.
*/

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