import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartTable from "../components/CartTable";
import { useForm } from "react-hook-form";

const CartView = () => {
  const { cart } = useContext(CartContext);

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const handleCheckout = (data) => {
    console.log(data);
  }

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
              {...register("nombreCompleto", { required:true, minLength:6 })}
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
              {...register("telefono", { required:true, minLength:6 })}
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
          <button className="px-4 py-3 bg-sky-600 text-white font-semibold rounded" type="submit">
            Confirmar Compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartView;
