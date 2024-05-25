//ciudadano de primera clase, que tengo una referencia a cualquier cosa
const saludar = () => 'Hola';
const adios = () => 'Adios';

// Podemos pasar como parámetro a una función a otra función.

const socializar = (funcion) => {
    return funcion()
}

// console.log(socializar(saludar));

// console.log(socializar(adios));


//Tarea Asíncrona
// pedir a alguien tomar un café, que nos diga no lo se dejame revisar mi agenda y nosotros esperarle el telefono sin colgarle, la tarea asincrona es revisar la agenda.

console.log("1. Hola");

/*
//setTimeout(funcion, tiempo en ms)
setTimeout(() => {
    console.log("2. como estas?");
}, 2000)

console.log("3. Byes");
*/

const terminarSaludo = (callback) => {
    setTimeout(() => {
        console.log("2. como estas?");
        //después va a ejecutar el parámetro que reciba
        callback();
    }, 2000)
}

terminarSaludo(() => {
    console.log("3. Byes");
})

//Eventos, es una tarea asíncrona, cuando ponemos un evento no se queda colgado, congelado, podemos seguir usando la aplicación
//Yo no se cuando va a ocurrir el evento
//el ejemplo del café
//addEventListener('click', function(){})