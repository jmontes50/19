import ListProducts from "../components/ListProducts";
import useAxios from "../hooks/useAxios";

const AllProductView = () => {
  // entorno, las variables en VITE con React tienen que ser VITE_ y tenemos que usar import.meta.env.VARIABLE
  const URL = import.meta.env.VITE_ENDPOINT_BASE;

  const { data, error, loading } = useAxios(`${URL}/productos`);

  console.log({ data, error, loading });

  return (
    <div>
      <ListProducts />
    </div>
  );
};

export default AllProductView;
