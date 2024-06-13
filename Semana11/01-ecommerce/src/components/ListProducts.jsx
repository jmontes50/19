import ProductCard from "./ProductCard";

const ListProducts = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-3 flex justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
