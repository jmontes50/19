/*
const hornear = (callback) => {
    setTimeout(() => {
        const resultado = "Horneado";
        callback(resultado);
        // return resultado;
    }, 3000);
}

// const res = hornear()

// console.log(res)

hornear((res) => {
    console.log(res)
})
*/

const hornear = () => {
    //retornamos una nueva Promesa
    return new Promise((resolve, reject) => {
        //aqui adentro de la funcion callback que recibe new Promise, puedo poner mi tarea asíncrona
        setTimeout(() => {
            const resultado = "Horneado";
            // resolve(resultado); //return +
            reject("Quemo la torta "); //return - , throw
        }, 3000)
    })
}

hornear()
    .then((result) => { //resolve
        console.log(result)
        //el resultado positivo
    })
    .catch((err) => { //reject
        console.log(err)
    })
