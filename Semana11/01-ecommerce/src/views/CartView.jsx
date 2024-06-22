import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartTable from "../components/CartTable";
import { useForm } from "react-hook-form";

const CartView = () => {
  const { cart } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

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
              {...register("nombreCompleto")}
            />
          </div>
          <div className="mb-3">
            <label className="text-sm font-semibold mb-1 text-gray-600 block">
              Teléfono:
            </label>
            <input
              className="p-2 h-10 w-full border-2 border-gray-300 rounded block"
              {...register("telefono")}
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
