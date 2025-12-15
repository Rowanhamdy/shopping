import Link from "next/link";
import React from "react";
import AddToMyCart from "../addToMyCart/page";
import OneProduct from "./OneProduct";

export default function ProductsCard({ products, sectionTitle }) {
  return (
    <section className="">
      <div className="mt-10 mb-10">
        <h1 className="text-center text-[28px] font-bold md:text-[48px]">{sectionTitle}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  mx-10 pt-10 mb-10">
          {products.map((item, index) => (
            <div key={index} className="w-full">
              <OneProduct product={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
