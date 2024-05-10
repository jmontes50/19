let nombres = ["Pamela", "Abel", "Giancarlo", "Cleo"];

let busqueda = prompt("Ingrese el nombres a buscar");

for(let i = 0; i < nombres.length; i++){
  if(busqueda === nombres[i]){
    console.log(`Se encontro a ${busqueda} en el índice ${i}`);
  }
  // console.log(nombres[i]);
}