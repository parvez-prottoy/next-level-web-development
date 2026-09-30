'use client';
import { CartContext } from '@/context/CartProvider';
import { use } from 'react';

export default function CartItem() {
  const { cart } = use(CartContext);
  return (
    <span className="btn" href="/reviews">
      Cart <sup>{cart.length}</sup>
    </span>
  );
}
