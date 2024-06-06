const CreateProductView = () => {
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
