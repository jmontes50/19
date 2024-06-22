import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartTable from "../components/CartTable";

const CartView = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex justify-between gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="lg:w-1/2 w-full">
        <CartTable products={cart} />
      </div>
      <div className="lg:w-1/2 w-full">Formulario</div>
    </div>
  );
};

export default CartView;
