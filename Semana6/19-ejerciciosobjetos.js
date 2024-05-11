let productos = [
  {
    nombre: "Flores",
    precio: 40
  },
  {
    nombre: 'Chocolates',
    precio: 35
  },
  {
    nombre: 'Rolex',
    precio: 10000,
  },
  {
    nombre: 'Cartera',
    precio: 1000
  }
];

//según el arreglo de objetos, muestre los nombres de los productos más caros
//los más caros mayor a 500
/*
for (let i = 0; i < productos.length; i++) {
  // console.log(productos[i]);
  if (productos[i].precio > 500) {
    console.log(productos[i].nombre);
  }
}
*/

let alumnos = [
  {
    nombre: "Esluvia",
    notas: [18, 14, 19]
  },
  {
    nombre: "Marcia",
    notas: [17, 14, 20]
  },
  {
    nombre: "Carlos",
    notas: [13, 19, 17]
  },
]

//en base al arreglo de estudiantes calcular el promedio de cada uno en base a sus notas

//alumno por alumno, sumando las notas y dividiendo entre 3. 

for (let i = 0; i < alumnos.length; i++) {
  console.log("i: ", alumnos[i]);
  //hacer otro for para las notas
  let sumaNotas = 0;
  for (let j = 0; j < alumnos[i].notas.length; j++) {
    sumaNotas = sumaNotas + alumnos[i].notas[j]
  }
  console.log(`${alumnos[i].nombre} tiene un promedio de: ${sumaNotas / 3}`);
}
//Math.round(num * 100)/100