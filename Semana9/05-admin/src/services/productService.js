import axios from "axios";

const URL = "https://665a7d66003609eda45e0a13.mockapi.io/"

const obtenerProductos = async () => {
  try {
    const respuesta = await axios.get(`${URL}/productos`);
    if(respuesta.status === 200){
      return respuesta.data;
    }
    throw new Error("Error al obtener la data");
  } catch (error) {
    throw error;
  }
}

const crearProducto = async (producto) => {
  try {
    const respuesta = await axios.post(`${URL}/productos`, producto);
    console.log(respuesta)
    return respuesta.data
  } catch (error) {
    throw error;
  }
}

export {
  obtenerProductos,
  crearProducto
}