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
    const updatedCart = cart.filter(item => item.id !==  productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    if (onCartUpdate) onCartUpdate();

    setCount(0);
  };
  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count]);

  return (
    <div>
      <div className="flex items-center mt-6 border border-gray-300 rounded-3xl w-fit">
        <button
          onClick={minuseOne}
          className=" px-4 py-2 rounded-l-3xl hover:bg-gray-300 transition"
        >
          -
        </button>
        <span className="px-6 py-2  ">{count}</span>
        <button
          onClick={addOne}
          className=" px-4 py-2  hover:bg-gray-300 transition"
        >
          +
        </button>


        <button
          onClick={removeItem}
          className="px-4 py-2 ml-2 rounded-r-3xl hover:bg-red-300 transition text-red-700"
        >
          Remove
        </button>
      </div>

      
    </div>
  );
}
