"use client";
import QuantityCounter from "@/app/components/quantityCounter/QuantityCounter";
import React, { useState } from "react";
import addToCart from "@/app/utils/cart";

export default function ProductView({ product }) {

  const [count, setCount] = useState(1);
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center ">
      <QuantityCounter
        initialCount={1}
        min={1}
        max={10}
        onChange={(val) => setCount(val)}
      />
      <button
        className="mt-6 bg-black text-white px-20 py-2 rounded-4xl hover:bg-gray-600 transition"
        onClick={() => {
          addToCart(product, count);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
