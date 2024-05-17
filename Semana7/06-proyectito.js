let productos = [
  {
    imagen: "https://media.admagazine.com/photos/654c8f592dcb51875ef13be5/1:1/w_2250,h_2250,c_limit/flores-moradas.jpg",
    nombre: "Ramo de Flores",
    precio: 25.99,
    descripcion: "Hermoso ramo de flores frescas ideal para el Día de la Madre."
  },
  {
    imagen: "https://media.admagazine.com/photos/654c8f592dcb51875ef13be5/1:1/w_2250,h_2250,c_limit/flores-moradas.jpg",
    nombre: "Caja de Chocolates",
    precio: 15.50,
    descripcion: "Deliciosos chocolates artesanales en una elegante caja."
  },
  {
    imagen: "https://media.admagazine.com/photos/654c8f592dcb51875ef13be5/1:1/w_2250,h_2250,c_limit/flores-moradas.jpg",
    nombre: "Collar de Plata",
    precio: 45.00,
    descripcion: "Fino collar de plata con un delicado diseño floral."
  },
  {
    imagen: "https://media.admagazine.com/photos/654c8f592dcb51875ef13be5/1:1/w_2250,h_2250,c_limit/flores-moradas.jpg",
    nombre: "Perfume",
    precio: 60.75,
    descripcion: "Fragancia exclusiva para una ocasión especial como el Día de la Madre."
  },
  {
    imagen: "https://media.admagazine.com/photos/654c8f592dcb51875ef13be5/1:1/w_2250,h_2250,c_limit/flores-moradas.jpg",
    nombre: "Set de Spa en Casa",
    precio: 35.00,
    descripcion: "Todo lo necesario para un relajante día de spa en casa."
  },
  {
    imagen: "https://media.admagazine.com/photos/654c8f592dcb51875ef13be5/1:1/w_2250,h_2250,c_limit/flores-moradas.jpg",
    nombre: "Taza Personalizada",
    precio: 12.99,
    descripcion: "Taza con un diseño personalizado y mensaje especial para mamá."
  },
  {
    imagen: "https://media.admagazine.com/photos/654c8f592dcb51875ef13be5/1:1/w_2250,h_2250,c_limit/flores-moradas.jpg",
    nombre: "Álbum de Fotos",
    precio: 20.00,
    descripcion: "Álbum de fotos para guardar los momentos más preciados."
  },
  {
    imagen: "https://media.admagazine.com/photos/654c8f592dcb51875ef13be5/1:1/w_2250,h_2250,c_limit/flores-moradas.jpg",
    nombre: "Libro de Recetas",
    precio: 18.50,
    descripcion: "Libro con recetas especiales para cocinar en familia."
  }
];

let tarjetasDiv = document.querySelector("#tarjetas");

function Card(imagen, nombre, precio, descripcion) {
  // función Card funcione como componente individual de cada carta
  let envoltura = document.createElement("div");
  envoltura.classList.add("col-lg-12", "col-lg-4");
  envoltura.innerHTML = ` 
          <div class="card">
            <img
              src="${imagen}"
              class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">${nombre}</h4>
              <p class="card-text">${descripcion}</p>
              <p class="card-text">${precio}</p>
              <button class="btn btn-primary">
                Agregar
              </button>
            </div>
          </div>
  `
  return envoltura;
}

function dibujarCards() {
  productos.forEach(function (item) {
    //agregar un elemento a otro elemento
    let revision = Card(item.imagen, item.nombre, item.precio, item.descripcion);
    tarjetasDiv.appendChild(revision);
  })
}

dibujarCards();