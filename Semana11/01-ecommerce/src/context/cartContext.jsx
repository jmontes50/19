//Componer de su propio contexto y un proveedor
import { createContext, useState, useEffect } from "react";

//muy similar a una instanciación para crear el contexto de React;
const CartContext = createContext(props);

//Proveedor
const CartContextProvider = () => {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart(product);
  }
  // mediante value el contexto podrá proveer loq ue desee
  return <CartContext.Provider value={{cart, addProductToCart}}>
    {props.children}
  </CartContext.Provider>
}

export { 
  CartContext,
  CartContextProvider
}