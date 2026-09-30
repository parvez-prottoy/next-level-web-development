'use client';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    console.log(item);
    setCart([item, ...cart]);
  };
  console.log(cart);
  const cartInfo = { handleAddToCart, cart };
  return <CartContext value={cartInfo}>{children}</CartContext>;
};
export default CartProvider;
