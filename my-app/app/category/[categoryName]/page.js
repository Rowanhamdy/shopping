import AddToMyCart from "@/app/addToMyCart/page";
import ProductsCard from "@/app/components/ProductsCard";
import React from "react";

export default async function CategoryPage({ params }) {
  const { categoryName } = await params;
  const res = await fetch(
    `https://dummyjson.com/products/category/${categoryName}`
  );
  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();
  let products = data.products;
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl p-5 pb-0 font-bold capitalize">
        {categoryName}{" "}
      </h1>

      <ProductsCard sectionTitle={""} products={products} />
    </div>
  );
}
