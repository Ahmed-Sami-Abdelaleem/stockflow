import React from "react";
import { useCartStore } from "../stores/cart/cart";
const Card = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <a
      key={product.id}
      href="#"
      className="group relative block overflow-hidden rounded-lg"
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-24 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="relative border border-gray-100 bg-white p-3">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-700 ">
            ${product.sellPrice}
            {/*<span className="text-xs text-gray-400 line-through">$80</span>*/}
          </p>
          <div className="flex items-center gap-1">
          <div className="rounded-full bg-green-400 h-2 w-2">  </div>
          <span className=" text-xs text-green-400 "> {product.quantity}</span>
        
          </div>
        </div>
        <h3 className="mt-1 text-sm font-medium text-gray-900 truncate">
          {product.name}
        </h3>

        <button
          onClick={() => addToCart(product)}
          type="button"
          className="mt-2 block w-full rounded-sm bg-gray-900 px-3 py-2 text-xs font-medium text-white transition hover:scale-105"
        >
          ضيف للسلة
        </button>
      </div>
    </a>
  );
};

export default Card;
