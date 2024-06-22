import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartTable from "../components/CartTable";

const CartView = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex justify-between gap-4">

      <CartTable products={ cart } className="w-1/2"/>
      <div className="w-1/2">
        Formulario
      </div>
    </div>
  )
}

export default CartView