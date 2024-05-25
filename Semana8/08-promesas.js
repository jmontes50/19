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
//modulo de promesas
const hornear = () => {
    //retornamos una nueva Promesa
    return new Promise((resolve, reject) => {
        //aqui adentro de la funcion callback que recibe new Promise, puedo poner mi tarea asíncrona
        setTimeout(() => {
            const resultado = "Horneado";
            resolve(resultado); //return +
            // reject("Quemo la torta "); //return - , throw
        }, 3000)
    })
}

const prepararChocolate = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Preparado")
        }, 2000)
    })
}

hornear()
    .then((result) => { //resolve
        //el resultado positivo
        console.log(result)
        return prepararChocolate() //retornamos una nueva promesa
    })
    .then((result) => { //encadenamiento de promesas
        console.log(result)
        //retorne una promesa()
    })
    .catch((err) => { //reject
        console.log(err)
    })


/**
 * const tarea1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1")
    }, 3000)
  })
}

const tarea2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("2")
      reject("Error en 2")
    }, 3000)
  })
}

const tarea3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3")
    }, 3000)
  })
}

tarea1()
.then(res1 => {
  //para este primer then, ya la primera promesa se completo OK
  console.log(res1);
  //a, tengo que retornar una promesa
  return tarea2()
})
//como obtenemos el resultado de tarea2()
.then(res2 => {
  console.log(res2)
  return tarea3()
})
.then(res3 => {
  console.log(res3);
})
.catch(err => { //solamente va a necesitar 01 catch
  console.log(err)
})
     */