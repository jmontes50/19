const URL = "https://665a7d66003609eda45e0a13.mockapi.io/"

const obtenerProductos = async () => {
  try {
    const respuesta = axios.get(`${URL}/productos`);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

export {
  obtenerProductos
}