import { useState } from "react"

const CreateProductView = () => {
  const [values, setValues] = useState({
    nombre:"",
    descripcion:"",
    precio:0,
    foto:"https://loremflickr.com/640/480/fashion",
    color:"ffffff",
    categoria:"",
    opiniones:[],
    fecha: new Date() //hoy
  })

  const handleValues = (ev) => {
    console.log(ev.target.name)
    const nombrePropiedad = ev.target.name;
    const valorPropiedad = ev.target.value
    const newProduct = {
      ...values,
      [nombrePropiedad]: valorPropiedad
    }
    setValues(newProduct)
  }


  return (
    <div className="container pt-4">
      <h1 className="mb-4">Crear Producto</h1>
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
      <div className="mb-3">
        <label className="form-label" htmlFor="descripcion">
          Descripción
        </label>
        <textarea className="form-control" id="descripcion"></textarea>
      </div>
    </div>
  );
};

export default CreateProductView;
