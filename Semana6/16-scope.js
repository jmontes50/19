'use strict';
//le estoy diciendo a JS con 'use strict' que sea estricto
// Javascript scope, que ya existe dentro de JS... window
console.log("de la nada!!, ya existe!");
//ámbito/scope global, esta directamente en el DOC
let IGV = 1.18;

function calcularPrecio(costo){
    //ganancia solamente existe dentro de la función
    let ganancia = 1.15;
    console.log(ganancia)
}

//Sin el use strict la linea de abajo es equivalente a una declaración de variable... let ganancia = 1.20
// ganancia = 1.20;
// console.log(ganancia)

calcularPrecio();