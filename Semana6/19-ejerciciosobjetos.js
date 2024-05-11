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

for (let i = 0; i < productos.length; i++) {
  // console.log(productos[i]);
  if (productos[i].precio > 500) {
    console.log(productos[i].nombre);
  }
}