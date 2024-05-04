// expresiones vs sentencias
//expresión algo que me va a dar un resultado por si solo;
let b = 10; //NO me da un resultado, Sentencia, ORDEN, asignación

console.log(b); //b por si solo si me da un resultado, ya me da un resultado, ya me da un valor, es una Expresión.

console.log(10 > 5);

/**
 * < menor que
 * <= menor igual que
 * > mayor
 * >= mayor igual que
 * == igual que
 * === estrictamente igual que
 */

/*
if (1 > 5){ //evalua esto y si es verdadero...
    //...ejecutas lo que esta dentro de estas llaves
    console.log("es verdadero");
} else {//pero si no es verdadero entonces ...
    //...ejecutas lo que esta dentro de estas otras llaves
    console.log("es falso");
}
*/

console.log("a: ", 9 == 9);

//que sucede? el == compara valores, NO EL TIPO DE DATO;
console.log("b: ", 10 == "10");

//compara, estrictamente igual, tanto valor, como tipo de dato
//Siempre comparar de forma estricta
console.log("c: ", 20 === "20");

// if( 9 === 9 ){
//     console.log("es verdadero")
// }

let nombre = "Jorge";
//length === longitud
console.log(nombre.length);
console.log(typeof nombre.length)
if(nombre.length > 0){
    console.log("Es un nombre válido");
}