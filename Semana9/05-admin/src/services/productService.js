import axios from "axios";
// necesitamos esto: import.meta.env.VITE_SOMEKEY
const URL = import.meta.env.VITE_ENDPOINT_BASE;

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