import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoPorId } from "../services/productService";

const EditProductView = () => {
  const [values, setValues] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    foto: "https://loremflickr.com/640/480/fashion",
    color: "ffffff",
    categoria: "",
    opiniones: [],
    fecha: new Date()
  })

  //si es que esto es un objeto, lo podemos desestructurar
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resultado = await obtenerProductoPorId(id);
        setValues(resultado)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct();
  }, []);

  return (
    <div>EditProductView</div>
  )
}

export default EditProductView