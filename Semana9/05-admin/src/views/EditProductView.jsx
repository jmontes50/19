import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { uploadFile } from "../services/storageService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { obtenerProductoPorId, actualizarProducto } from "../services/productService";
import FormProduct from "../components/FormProduct";

let imagen; //si no tiene nada es undefined

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

  const navigate = useNavigate();

  const handleValues = (ev) => {
    console.log(ev.target.name);
    const nombrePropiedad = ev.target.name;
    const valorPropiedad = ev.target.value;
    const newProduct = {
      ...values,
      [nombrePropiedad]: valorPropiedad,
    };
    setValues(newProduct);
  };

  const handleImage = (ev) => {
    console.log("handleimage: ", ev.target.files[0]);
    imagen = ev.target.files[0];
    // const resName = nameFileUUID(imagen.name);
    // console.log(resName)
  };

  const handleSubmit = async (ev) => {
    // prevenir la acción por defecto
    ev.preventDefault();
    const { nombre, descripcion, precio } = values;
    //validando el formulario
    if (nombre === "" || descripcion === "" || precio === "" || precio == 0) {
      Swal.fire({
        title: "Faltan campos por llenar",
        text: "Verifique el formulario",
        icon: "error",
      });
      return;
    }
    //subimos la imagen
    const loading = Swal.fire({
      title: "Actualizando producto",
      text: "Espere por favor...",
      icon: "info",
    });

    let urlImagen = "";

    if(imagen !== undefined){
      //si el usuario selecciono una imagen se subirá la imagen seleccionada
      urlImagen = await uploadFile(imagen);
    }
    
    //hacemos una copia del producto, con la info a partir del formulario
    let productoActualizado = {
      ...values,
    };
    //si es que se subio, modifico la propiedad foto en la copia
    if (urlImagen !== "" && imagen !== undefined) {
      productoActualizado.foto = urlImagen;
    }
    //creo el producto con la URL de la imagen súbida a firebase
    const resultado = await actualizarProducto(id, productoActualizado);
    loading.close();

    // alert("Producto Creado!")
    // En este caso no me interesa capturar el resultado de Swal.fire porque solamente tenemos un botón (OK)
    await Swal.fire({
      title: "Producto Actualizado",
      text: `${values.nombre} se actualizo exitosamente`,
      icon: "success",
    });
    // navegacion
    navigate("/");
  };

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
    <FormProduct 
      handleValues={handleValues}
      handleImage={handleImage}
      handleSubmit={handleSubmit}
      values={values}
      title="Editar Producto"
    />
  )
}

export default EditProductView