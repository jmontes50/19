import ProductCard from "./ProductCard";

const ListProducts = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-3 flex justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* renderizado condicional */}
          {products ? (
            products.map((prod) => <ProductCard key={prod.id} product={prod} />)
          ) : (
            <p>No se encontraron productos</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
