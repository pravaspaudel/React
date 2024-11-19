import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="mt-4">
          {cart.items.map((item) => (
            <li key={item.id} className="border-b py-2">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
