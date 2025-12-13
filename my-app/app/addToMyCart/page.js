"use client";
import Image from "next/image";
import React from "react";
import addToCart from "../utils/cart";

export default function AddToMyCart({ item }) {
  return (
    <div>
      <div className="ml-auto mt-5 font-bold text-xl flex items-center  rounded-full hover:bg-gray-300 transition">
        +
        <button className=" "   onClick={() => addToCart(item)}>
          <Image
            src="/Vector.svg"
            alt="cart"
            width={24}
            height={24}
            style={{ width: "auto", height: "auto" }}
          />
        </button>
      </div>
    </div>
  );
}
