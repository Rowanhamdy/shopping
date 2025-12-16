"use client";
import React, { useEffect, useState } from "react";

export default function QuantityCounter({
  initialQuantity = 1,
  max = 10,
  min = 1,
  onChange,
  onCartUpdate,
  productId
}) {
  const [count, setCount] = useState(initialQuantity);

  const addOne = () => {
    setCount((prevCount) => (prevCount < max ? prevCount + 1 : max));
  };

  const minuseOne = () => {
    setCount((prevCount) => (prevCount > min ? prevCount - 1 : min));
  };

  const removeItem = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    if (onCartUpdate) onCartUpdate();
    setCount(0);
  };

  useEffect(() => {
    if (onChange) onChange(count);
  }, [count]);

  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      <div className="flex items-center border border-gray-300 rounded-3xl overflow-hidden">
        <button
          onClick={minuseOne}
          className="px-3 py-1 sm:px-4 sm:py-2 hover:bg-gray-300 transition text-lg"
        >
          -
        </button>

        <span className="px-4 sm:px-6 py-1 sm:py-2 text-center min-w-10">
          {count}
        </span>

        <button
          onClick={addOne}
          className="px-3 py-1 sm:px-4 sm:py-2 hover:bg-gray-300 transition text-lg"
        >
          +
        </button>
      </div>

      <button
        onClick={removeItem}
        className="px-3 sm:px-4 py-1 sm:py-2 bg-red-100 text-red-700 rounded-3xl hover:bg-red-300 transition"
      >
        Remove
      </button>
    </div>
  );
}
