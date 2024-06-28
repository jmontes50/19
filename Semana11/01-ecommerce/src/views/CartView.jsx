import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import CartTable from "../components/CartTable";
import { useForm } from "react-hook-form";
import Map from "../components/Map";
// import useAxios from "../hooks/useAxios";
// import usePost from "../hooks/usePost";
import axiosPost from "../hooks/axiosService";

const CartView = () => {

  const URL = `${import.meta.env.VITE_ENDPOINT_BASE}/ventas`;

  const { cart } = useContext(CartContext);

  const [positionMarker, setPositionMarker] = useState(null);

  const [venta, setVenta] = useState(null)

  // const [startSubmit, setStartSubmit] = useState(false)

  const { register, handleSubmit, formState: { errors }, } = useForm();

  //añadimos el parametro false para que no se ejecute automaticamente
  // const { data, error, fetchData } = usePost(URL, { method: 'post', venta });
  // console.log("Cart View", data) 

  const handleCheckout = async (info) => {
    const [latitud, longitud] = positionMarker;

    const nuevaVenta = {
      productos: cart,
      fecha: Date.now(),
      nombre_cliente: info.nombreCompleto,
      telefono_cliente: info.telefono,
      direccion_cliente: info.direccion,
      dni_cliente: info.dni,
      latitud: latitud,
      longitud: longitud
    }

    try {
      const res = await axiosPost(URL, { method: 'POST', data: nuevaVenta });
      console.log("CartView Venta", res)
    } catch (error) {
      console.log(error);
    }

    // setVenta(nuevaVenta);
    // setStartSubmit(true);
    // fetchData();
  }

  // useEffect(() => {
  //   if (venta?.nombre_cliente) {
  //     fetchData();
  //   }
  // }, [])

  return (
    <div className="flex justify-between gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="lg:w-1/2 w-full">
        <h2 className="mb-3 text-2xl font-bold p-2 mt-5">Resumen carrito</h2>
        <CartTable products={cart} />
      </div>
      <div className="lg:w-1/2 w-full">
        <h2 className="mb-3 text-2xl font-bold p-2 mt-5">Confirmar Compra</h2>
        {/* el handleSubmit me permite indicar que función va a ejecutarse y recibir los input con su respectivo nombre y value */}
        <form onSubmit={handleSubmit(handleCheckout)}>
          <div className="mb-3">
            <label className="text-sm font-semibold mb-1 text-gray-600 block">
              Nombre completo:
            </label>
            <input
              className="p-2 h-10 w-full border-2 border-gray-300 rounded block"
              // {...register("nombreARegistrar", { validaciones especificas })}
              {...register("nombreCompleto", { required: true, minLength: 6 })}
            />
            {/* errors.nombreRegistrado?.type === validacionEspecifica && el JSX a mostrar si el error es válido*/}
            {errors.nombreCompleto?.type === "required" &&
              <p className="text-sm text-red-500 font-semibold my-2">
                Este campo es requerido
              </p>}
            {errors.nombreCompleto?.type === "minLength" &&
              <p className="text-sm text-red-500 font-semibold my-2">
                Este campo necesita al menos 6 caracteres
              </p>}
          </div>
          <div className="mb-3">
            <label className="text-sm font-semibold mb-1 text-gray-600 block">
              Teléfono:
            </label>
            <input
              className="p-2 h-10 w-full border-2 border-gray-300 rounded block"
              {...register("telefono", { required: true, minLength: 6 })}
            />
            {errors.telefono?.type === "minLength" &&
              <p className="text-sm text-red-500 font-semibold my-2">
                Este campo necesita al menos 6 caracteres
              </p>}
          </div>
          <div className="mb-3">
            <label className="text-sm font-semibold mb-1 text-gray-600 block">
              Dirección:
            </label>
            <input
              className="p-2 h-10 w-full border-2 border-gray-300 rounded block"
              {...register("direccion")}
            />
          </div>
          <div className="mb-3">
            <label className="text-sm font-semibold mb-1 text-gray-600 block">
              DNI:
            </label>
            <input
              className="p-2 h-10 w-full border-2 border-gray-300 rounded block"
              {...register("dni")}
            />
          </div>
          {/* mapa */}
          <Map positionMarker={positionMarker} setPositionMarker={setPositionMarker} />
          <button className="px-4 py-3 bg-sky-600 text-white font-semibold rounded" type="submit">
            Confirmar Compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartView;
