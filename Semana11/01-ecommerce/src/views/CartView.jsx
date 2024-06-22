import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartTable from "../components/CartTable";

const CartView = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>

      <CartTable products={ cart }/>
    </div>
  )
}

export default CartView