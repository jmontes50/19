//salen en grupo a comer/ tomar algo

let cantidadGrupo = 19;

//for (inicializador; limite/condicional; actualizador)
/*
    for (let i = 1; i <= cantidadGrupo; i++){
    console.log(`Amig@ ${i} ya se fue`);
}
*/
/*
for( let i = 1; i <= cantidadGrupo; i+=2){
    console.log(`Amig@ ${i} ya se fue`);
}
*/

for(let i = cantidadGrupo; i > 0; i--){
    console.log(`Amig@ ${i} ya se fue`);
}

console.log("Fin!");