"use client";

import React from "react";
import CartItem from "./cartItem";
import { useCartStore } from "../stores/cart/cart";
const Cart = () => {
  const { cart, submitCart, clearCart, getCartItemsCount, getCartTotal } =
    useCartStore((state) => state);

  return (
    cart.length > 0 && (
      <div
        className="border border-gray-600 bg-gray-100 px-4 py-8  fixed top-0 right-0 w-80 h-full z-50"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>

          <div className="space-y-4 text-center">
            <button
              href="#"
              className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
            >
              قم بيطبعات الفاتورة {getCartItemsCount()} عنصر
            </button>

            <button
              onClick={() => submitCart()}
              className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              قم ب البيع {getCartTotal()} جنيه
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Cart;
