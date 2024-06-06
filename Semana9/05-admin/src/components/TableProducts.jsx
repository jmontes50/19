import CircleColor from "./CircleColor"

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
          {productos.map(({nombre, descripcion, color, fecha, precio, id}) => (
            <tr key={id}>
              <td>{nombre}</td>
              <td>{descripcion}</td>
              <td><CircleColor color={color} /></td>
              <td>{fecha}</td>
              <td>S/ {precio}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableProducts