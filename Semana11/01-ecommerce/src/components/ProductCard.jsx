const ProductCard = ({ product }) => {

  const { nombre, foto, descripcion, precio, id } = product;

  return (
    <div>
      <div className="bg-gray-200 p-4 rounded-md">
        {/* foto */}
        <div className="bg-white rounded-md overflow-hidden shadow-lg max-w-md mx-auto">
          <img src={ foto } className="w-full h-64 object-cover" alt="" />
        </div>
        {/* contenido */}
        <div className="p-4">
          <h4 className="text-md font-semibold mb-2">
            { nombre }
          </h4>
          <p className="text-sm text-gray-800 mb-2 text-ellipsis">
            { descripcion }
          </p>
          <span className="text-sm text-blue-600">
            S/ { precio }
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard