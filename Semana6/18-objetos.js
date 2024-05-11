let gatita = {
    //propiedad: valor,
    //key: value
    nombre: 'Lady',
    edad: 4,
    color: "Naranja",
    esAmigable: false,
    //método, es una función dentro de un objeto
    maullar() {
        console.log('MIAU MIAU MIAU');
    },
    comer: function () {
        console.log("ñam ñam ñam");
    }
}

console.log(gatita);
//si deseamos acceder al valor de 01 sola propiedad
//nombreObjeto.nombrePropiedad
console.log(gatita.nombre);

console.log(gatita.edad);

gatita.maullar();