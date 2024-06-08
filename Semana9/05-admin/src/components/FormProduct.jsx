const FormProduct = ({ handleValues, handleImage, handleSubmit, values, title }) => {
  return (
    <div className="container pt-4">
      <h1 className="mb-4">{ title }</h1>
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
          <input type="file" className="form-control" onChange={handleImage} />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Crear
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
