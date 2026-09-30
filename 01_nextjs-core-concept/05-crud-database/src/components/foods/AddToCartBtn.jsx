'use client';
import { CartContext } from '@/context/CartProvider';
import { use, useState } from 'react';

export default function AddToCartBtn({ food }) {
  const [inCart, setInCart] = useState(false);
  const { handleAddToCart } = use(CartContext);
  const handleCart = () => {
    handleAddToCart(food);
    setInCart(true);
  };
  return (
    <button
      disabled={inCart}
      onClick={handleCart}
      className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 text-center"
    >
      Add To Cart
    </button>
  );
}
