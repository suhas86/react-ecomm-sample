import React from "react";
const CartContext = React.createContext();
export default CartContext;
export const CartConsumer = CartContext.Consumer;
export const CartProvider = CartContext.Provider;
