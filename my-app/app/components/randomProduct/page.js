import Link from "next/link";
import React from "react";
import ProductsCard from "../ProductsCard";
import { fetchProducts } from "@/app/utils/fetchProducts";

export default async function RandomeProduct() {
  let products = await fetchProducts();

  products = products.slice(3, 7);
  return (
    <div>
      <div className=" mb-40">
        <ProductsCard
          sectionTitle={"You might also like"}
          products={products}
        />
      </div>
    </div>
  );
}
