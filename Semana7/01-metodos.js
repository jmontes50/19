let productos = [
  { nombre: "iPhone 13", precio: 999 },
  { nombre: "Samsung Galaxy S21", precio: 799 },
  { nombre: "MacBook Pro 2021", precio: 1299 },
  { nombre: "PlayStation 5", precio: 499 },
  { nombre: "Xbox Series X", precio: 499 },
  { nombre: "Canon EOS R5", precio: 3899 },
  { nombre: "Sony A7 III", precio: 1999 },
  { nombre: "DJI Mavic Air 2", precio: 799 },
  { nombre: "Samsung QLED Q90T", precio: 1499 },
  { nombre: "Bose QuietComfort 45", precio: 329 }
];

//Pero podemos pensar en practicamente todo dentro de JS como un objeto
//cada cosa tendra propiedades y método.
//usualmente esas propiedades y métodos que vienen nos pueden ser útiles según

// console.log(productos[0].precio);

let numeros = [1, 2, 3, 4, 5];
// filter me va a retornar un arreglo nuevo
let numerosGrandes = numeros.filter(function (numero) {
  // console.log(numero);
  // retornar una expresion que me de V o F
  return numero > 3;
})

console.log("num grandes", numerosGrandes);

// forEach ejecuta algo por cada uno, nada más pero al final NO ME RETORNA NADA
let porCadaNumero = numeros.forEach(function (num) {
  // console.log(num + 2)
  return num;
});

console.log("por cada: ", porCadaNumero);

let porDos = numeros.map(function (item) {
  return item * 2;
});

console.log("por dos: ", porDos);

//SANDBOX
//deseo los productos menores a 800 dólares
let productosMasBaratos = productos.filter(function (prod) {
  return prod.precio < 800;
})

console.table(productosMasBaratos);

//1. (No todo) pero podemos pensar en general como que todo es un objeto en JS
//2. al ser objeto todo, esto trae cosas útiles y muchas veces no tenemos que implementar la lógica de 0 para obtener un resultado que necesitemos, no tenemos que reinventar la rueda