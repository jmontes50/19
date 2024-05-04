// aritméticos
//vamos a armar una PC
let monitor = 400;
let cpu = 300;
let memoria = 200;

// suma;
let precioTotal = monitor + cpu + memoria;
console.log("precio total: ", precioTotal);

let adicionales = 50 + 10;
console.log("adicionales: ", adicionales);

// resta
let descuento = 25;
let precioConDscto = precioTotal - descuento;
console.log("con Dscto. :", precioConDscto);

// dividir en cuotas
let cuotas = precioConDscto / 2;
console.log("C/cuota es", cuotas);

//queremos comprar varias, multiplicación
let totalPorDos = precioConDscto * 2;
console.log("precio por dos unid. ", totalPorDos);