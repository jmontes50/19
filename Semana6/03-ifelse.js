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

if (1 > 5){ //evalua esto y si es verdadero...
    //...ejecutas lo que esta dentro de estas llaves
    console.log("es verdadero");
} else {//pero si no es verdadero entonces ...
    //...ejecutas lo que esta dentro de estas otras llaves
    console.log("es falso");
}