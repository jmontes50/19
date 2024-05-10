/**
 *  Escribe una función que reciba un array de números y retorne la cantidad de números pares que contiene.

 */

function contarPares(arreglo){
    let cantidad = 0;
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] % 2 === 0){
            cantidad++;
            // console.log(cantidad)
        }
    }
    return cantidad
}

let resultado = contarPares([10, 5, 7, 40, 2, 4, 8])

console.log(resultado);