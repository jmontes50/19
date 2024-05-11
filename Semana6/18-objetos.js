let gatita = {
  //propiedad: valor,
  //key: value
  nombre: 'Lady',
  edad: 4,
  color: "Naranja",
  esAmigable: false,
  //método, es una función dentro de un objeto
  maullar() {
    // console.log('MIAU MIAU MIAU');
    return "miau miau miau";
  },
  comer: function () {
    // console.log("ñam ñam ñam");
    return "ñam ñam ñam";
  },
}

/*

console.log(gatita);
//si deseamos acceder al valor de 01 sola propiedad
//nombreObjeto.nombrePropiedad
console.log(gatita.nombre);

console.log(gatita.edad);

console.log(gatita.maullar());

console.log(gatita.comer());

*/

let deportistas = [
  {
    nombre: "Collapse",
    deporte: "Dota"
  },
  {
    nombre: "Rafael Nadal",
    deporte: "Tennis"
  },
  {
    nombre: "Cuevita",
    deporte: "Fútbol"
  }
];

console.log(deportistas);

console.log(deportistas[1]);

console.log(deportistas[1].nombre);