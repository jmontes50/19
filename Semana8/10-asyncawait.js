const ejecutar = () => {
  return new Promise((resolve, reject) => {
    // resolve("Exito!!!")
    reject("algo salio mal")
  });
};


ejecutar()
.then((resultado) => { //van bien
  console.log(resultado)
})
.catch((error) => {
  console.log(error)
})