'use client';

import { CartContext } from '@/context/CartProvider';
import { use } from 'react';

export default function FoodCarts() {
  const { cart } = use(CartContext);
  const totalPrice = cart.reduce((prev, cur) => prev + cur.price, 0);
  console.log(totalPrice);
  return (
    <div className="w-82 border-2 rounded-xl p-4">
      <h2 className="text-2xl font-bold">Cart Items {cart.length}</h2>
      <h2 className="text-2xl font-bold mb-3">Total Price: {totalPrice}৳</h2>
      <hr />
      {cart.length === 0 ? (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition mt-3">
          <h2 className="text-2xl font-bold text-center">Cart is empty!!!</h2>
        </div>
      ) : (
        cart.map((c) => (
          <div key={c.id} className="mt-3">
            <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">{c.title}</h2>
            </div>
          </div>
        ))
      )}
      {/* <CartItems></CartItems> */}
    </div>
  );
}
