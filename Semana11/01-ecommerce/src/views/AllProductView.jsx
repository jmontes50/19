import { useState } from "react";
import ListProducts from "../components/ListProducts";
import useAxios from "../hooks/useAxios";
import Slider from '@mui/material/Slider';
import { filterByPrice } from "../functions/dataFunctions";

const AllProductView = () => {
  // entorno, las variables en VITE con React tienen que ser VITE_ y tenemos que usar import.meta.env.VARIABLE
  const URL = import.meta.env.VITE_ENDPOINT_BASE;

  const { data, error, loading } = useAxios(`${URL}/productos`);

  // console.log({ data, error, loading });

  const [prices, setPrices] = useState([1, 1000]);

  const handleSlider = (event, newValues) => {
    console.log("handleSlider", newValues);
    setPrices(newValues);
  }

  let productsFiltered = data;

  if (data) {
    productsFiltered = filterByPrice(data, prices);
  }

  return (
    <div className="flex justify-between gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="lg:w-1/4 w-full">
        <h2 className="font-semibold text-lg mb-3">Filtros</h2>
        <div>
          <Slider
            value={prices}
            onChange={handleSlider}
          />
        </div>
      </div>
      <div className="lg:w-3/4 w-full">
        <ListProducts products={productsFiltered} />
      </div>

    </div>
  );
};

export default AllProductView;
