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
    <div className="mt-6">
      {/* Carousel con la grilla */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 max-h-96 mb-10">
        <div className="col-span-2 row-span-2">
          <Carousel />
        </div>
        <div className="col-span-1 col-start-3 row-span-1">
          <img className="object-cover w-full h-full" src="https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="col-span-1 col-start-3 row-span-1 row-start-2">
          <img className="object-cover w-full h-full" src="https://plus.unsplash.com/premium_photo-1678066730766-a27dd4fb02a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXVkaWZvbm9zfGVufDB8fDB8fHww" />
        </div>

      </div>
      {/* contenido principal cards y filtros */}
      <div className="flex justify-between gap-4 mx-auto max-w-7xl md:px-2 px-6 sm:px-6 lg:px-8 md:flex-row flex-col ">
        {/* Filtros */}
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
        {/* Productos */}
        <div className="lg:w-3/4 w-full">
          <ListProducts products={productsFiltered} />
        </div>

      </div>
    </div>
  );
};

export default AllProductView;
