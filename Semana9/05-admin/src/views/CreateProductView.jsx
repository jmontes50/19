import { useState } from "react";
import { crearProducto } from "../services/productService";
// sweetalert2
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
    // console.log("handleimage: ", ev.target.files[0]);
    imagen = ev.target.files[0];
  }

  const handleSubmit = async (ev) => {
    // prevenir la acción por defecto
    ev.preventDefault();
    const resultado = await crearProducto(values);
    console.log(resultado);
    // alert("Producto Creado!")
    // En este caso no me interesa capturar el resultado de Swal.fire porque solamente tenemos un botón (OK)
    await Swal.fire({
      title:"Producto Creado",
      text:`${values.nombre} se creo exitosamente`,
      icon:"success"
    })
    // navegacion
    navigate('/');
  }

  return (
    <div className="container pt-4">
      <h1 className="mb-4">Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        {/* nombre */}
        <div className="mb-3">
          <label className="form-label" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Ej. Vestido Azul"
            name="nombre"
            value={values.nombre}
            // onChange={(ev) => setValues({nombre:ev.target.value})}
            onChange={handleValues}
          />
        </div>
        {/* descripción */}
        <div className="mb-3">
          <label className="form-label" htmlFor="descripcion">
            Descripción
          </label>
          <textarea
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={values.descripcion}
            onChange={handleValues}
          ></textarea>
          {/* precio */}
          <div className="mb-3">
            <label className="form-label" htmlFor="precio">
              Precio
            </label>
            <input
              type="number"
              className="form-control"
              id="precio"
              placeholder="100"
              name="precio"
              value={values.precio}
              onChange={handleValues}
            />
          </div>
          {/* color */}
          <div className="mb-3">
            <label className="form-label" htmlFor="color">
              Color
            </label>
            <input
              type="color"
              className="form-control"
              id="color"
              name="color"
              value={values.color}
              onChange={handleValues}
            />
          </div>
          {/* categoria */}
          <div className="mb-3">
            <label className="form-label" htmlFor="categoria">
              Categoría
            </label>
            <input
              type="text"
              className="form-control"
              id="categoria"
              placeholder="Jeans"
              name="categoria"
              value={values.categoria}
              onChange={handleValues}
            />
          </div>
          {/* {fecha} */}
          <div className="mb-3">
            <label className="form-label" htmlFor="fecha">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              name="fecha"
              value={values.fecha}
              onChange={handleValues}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="imagen">
            Foto
          </label>
          <input 
            type="file"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateProductView;
