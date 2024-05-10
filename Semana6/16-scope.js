'use strict';
//le estoy diciendo a JS con 'use strict' que sea estricto
// Javascript scope, que ya existe dentro de JS... window
console.log("de la nada!!, ya existe!");
//ámbito/scope global, esta directamente en el DOC
let IGV = 1.18;

function calcularPrecio(costo){
    //ganancia solamente existe dentro de la función
    let ganancia = 1.15;
    let costoTotal = costo * ganancia * IGV;
    if(costoTotal > 100){
        // ámbito de bloque, if, for, function acá adentro
        let descuento = 0.95;
        costoTotal = costoTotal * descuento;
    }
    // descuento = 0.90;

    return costoTotal;
}

//Sin el use strict la linea de abajo es equivalente a una declaración de variable... let ganancia = 1.20
// ganancia = 1.20;
// console.log(ganancia)

console.log(calcularPrecio(1000));