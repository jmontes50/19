import ListProducts from "../components/ListProducts";
import useAxios from "../hooks/useAxios";

const AllProductView = () => {

  const { data, error, loading } = useAxios('https://665a7d66003609eda45e0a13.mockapi.io/productos');

  console.log({ data, error, loading });

  return (
    <div>
      <ListProducts />
    </div>
  );
};

export default AllProductView;
