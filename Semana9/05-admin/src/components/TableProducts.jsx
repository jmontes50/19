import { convertDateToLocal } from "../utils/utils";
import CircleColor from "./CircleColor";

const TableProducts = ({ productos }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Color</th>
            <th>Fecha</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* desestructurando directamente en los argumentos */}
          {productos.map(
            ({ nombre, descripcion, color, fecha, precio, id }) => (
              <tr key={id}>
                <td>{nombre}</td>
                <td>{descripcion}</td>
                <td>
                  <CircleColor color={color} />
                </td>
                <td>{convertDateToLocal(fecha)}</td>
                <td>S/ {precio}</td>
                <td>
                  <button className="btn btn-primary btn-sm">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableProducts;
