import ListProducts from "../components/ListProducts";
import useAxios from "../hooks/useAxios";

const AllProductView = () => {
  // entorno, las variables en VITE con React tienen que ser VITE_ y tenemos que usar import.meta.env.VARIABLE
  const URL = import.meta.env.VITE_ENDPOINT_BASE;

  const { data, error, loading } = useAxios(`${URL}/productos`);

  console.log({ data, error, loading });

  return (
    <div className="flex justify-between gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="lg:w-1/4 w-full">
        <h2 className="font-semibold text-lg mb-3">Filtros</h2>
      </div>
      <div className="lg:w-3/4 w-full">
        <ListProducts products={data} />
      </div>

    </div>
  );
};

export default AllProductView;
