'use client';
import { CartContext } from '@/context/CartProvider';
import { use } from 'react';

export default function AddToCartBtn({ food }) {
  const { handleAddToCart } = use(CartContext);
  return (
    <button
      onClick={() => handleAddToCart(food)}
      className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 text-center"
    >
      Add To Cart
    </button>
  );
}
