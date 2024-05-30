/*
const ejecutar = () => {
  return new Promise((resolve, reject) => {
    resolve("Exito!!!")
    // reject("algo salio mal")
  });
};
*/

//async/await también me permite trabajar con tareas asíncronas
// async function ejecutar(){}
const ejecutar = async () => {
//me va a indicar que hay una tarea asíncrona dentro
  // return "Exitooo"; //resolve
  throw "Algo salio mal" //reject
}

/*
ejecutar()
.then((resultado) => { //van bien
  console.log(resultado)
})
.catch((error) => {
  console.log(error)
})
*/

const ejecuto = async () => {
  try { //NO ES SOLO PARA PROMESAS, PERMITE CAPTURAR ERRORES 
    //si un codigo no les funciona y no ven errores prueben con
    //trycatch
    //intenta prueba
    const resultado = await ejecutar(); //espere ⌛
    console.log(resultado);
  } catch (error) {
    console.log(error)
  }
}
ejecuto();