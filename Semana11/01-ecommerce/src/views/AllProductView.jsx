import { useState } from "react";
import ListProducts from "../components/ListProducts";
import useAxios from "../hooks/useAxios";
import Slider from '@mui/material/Slider';
import { filterByPrice, orderByName } from "../functions/dataFunctions";
import Carousel from "../components/Carousel";

const AllProductView = () => {
  // entorno, las variables en VITE con React tienen que ser VITE_ y tenemos que usar import.meta.env.VARIABLE
  const URL = import.meta.env.VITE_ENDPOINT_BASE;

  const { data, error, loading } = useAxios(`${URL}/productos`);

  // console.log({ data, error, loading });

  const [prices, setPrices] = useState([1, 1000]);
  const [orderBy, setOrderBy] = useState("asc");

  const handleSlider = (event, newValues) => {
    console.log("handleSlider", newValues);
    setPrices(newValues);
  }

  let productsFiltered = data;

  if (data) {
    productsFiltered = filterByPrice(data, prices);
    productsFiltered = orderByName(productsFiltered, orderBy);
  }

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 max-h-96">
        <div className="col-span-2 row-span-2">

        </div>
      </div>
      <div className="flex justify-between gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="lg:w-1/4 w-full">
          <h2 className="font-semibold text-lg mb-3">Filtros</h2>
          <div className="mb-2">
            <h3 className="font-semibold mb-2">Filtrar por Precio: </h3>
            <Slider
              value={prices}
              onChange={handleSlider}
              min={1}
              max={1000}
            />
          </div>
          <div className="mb-2">
            <h3 className="font-semibold mb-2">Ordenar: </h3>
            <select
              className="p-2 border-2 border-gray-400 rounded w-full"
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="asc">Ascendente</option>
              <option value="des">Descendente</option>
            </select>
          </div>
        </div>
        <div className="lg:w-3/4 w-full">
          <ListProducts products={productsFiltered} />
        </div>

      </div>
    </>
  );
};

export default AllProductView;
