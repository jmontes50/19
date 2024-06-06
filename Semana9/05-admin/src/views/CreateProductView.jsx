import { useState } from "react";

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

  return (
    <div className="container pt-4">
      <h1 className="mb-4">Crear Producto</h1>
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
      </div>
    </div>
  );
};

export default CreateProductView;
