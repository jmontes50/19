/* break, corta el ciclo cuando se ejecuta
let nombres = ["Pamela", "Abel", "Giancarlo", "Cleo"];

let busqueda = prompt("Ingrese el nombres a buscar");

for(let i = 0; i < nombres.length; i++){
  if(busqueda === nombres[i]){
    console.log(`Se encontro a ${busqueda} en el índice ${i}`);
    break;
  }
  // console.log(nombres[i]);
}
*/

// continue
let notas = [11, 13, 20, 17, 19, 20, 9, 14];

for(let i = 0; i < notas.length; i++) {
  if(notas[i] < 13){
    continue;
  }
  console.log(`La nota a considerar es ${notas[i]}`)
  //aca abajo tenga mucho más código
}