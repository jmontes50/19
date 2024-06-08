import { useState } from "react";
import { crearProducto } from "../services/productService";
import { uploadFile } from "../services/storageService";
// sweetalert2
import Swal from "sweetalert2";
import { Form, useNavigate } from "react-router-dom";
import FormProduct from "../components/FormProduct";

let imagen;

const CreateProductView = () => {
  const [values, setValues] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    foto: "https://loremflickr.com/640/480/fashion",
    color: "ffffff",
    categoria: "",
    opiniones: [],
    fecha: new Date(), //hoy
  });

  // nos da una función para poder navegar de forma imperativa.
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
      title: "Creando producto",
      text: "Espere por favor...",
      icon: "info",
    });
    const urlImagen = await uploadFile(imagen);
    console.log(urlImagen);
    //hacemos una copia del producto, con la info a partir del formulario
    let nuevoProducto = {
      ...values,
    };
    console.log(urlImagen);
    //si es que se subio, modifico la propiedad foto en la copia
    if (urlImagen !== "") {
      nuevoProducto.foto = urlImagen;
    }
    //creo el producto con la URL de la imagen súbida a firebase
    const resultado = await crearProducto(nuevoProducto);
    loading.close();

    // alert("Producto Creado!")
    // En este caso no me interesa capturar el resultado de Swal.fire porque solamente tenemos un botón (OK)
    await Swal.fire({
      title: "Producto Creado",
      text: `${values.nombre} se creo exitosamente`,
      icon: "success",
    });
    // navegacion
    navigate("/");
  };

  return (
    <FormProduct
      handleValues={handleValues}
      handleImage={handleImage}
      handleSubmit={handleSubmit}
      values={values}
      title="Crear Producto"
    />
  );
};

export default CreateProductView;
