const CartTable = ({ products }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>
            Nombre
          </th>
          <th>
            P.U
          </th>
          <th>
            Cant.
          </th>
          <th>
            P. Final
          </th>
        </tr>
      </thead>
      <tbody>
        { products ? products.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.nombre}</td>
            <td>{prod.precio}</td>
            <td>{prod.cantidad}</td>
            <td>{prod.cantidad * prod.precio}</td>
          </tr>
        )) : null }
      </tbody>
    </table>
  )
}

export default CartTable