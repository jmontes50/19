const CartTable = ({ products }) => {
  return (
    <table className="table-fixed w-full text-left whitespace-no-wrap" >
      <thead >
        <tr>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Nombre
          </th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            P.U
          </th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Cant.
          </th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            P. Final
          </th>
        </tr>
      </thead>
      <tbody>
        { products ? products.map((prod) => (
          <tr key={prod.id}>
            <td className="border-t-2 border-gray-200 px-4 py-3">{prod.nombre}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">S/{prod.precio}</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">{prod.cantidad} Unid.</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">S/ {(prod.cantidad * prod.precio).toFixed(2)}</td>
          </tr>
        )) : null }
      </tbody>
    </table>
  )
}

export default CartTable