//Tener el código que me permita obtener los datos

const obtenerUsuarios = async () => {
  const respuesta = await fetch("https://reqres.in/api/users?page=2");
  // console.log("RESPUESTA", respuesta);
  console.log({ respuesta }); // console.log({ respuesta: respuesta });
}

export {
  obtenerUsuarios
}