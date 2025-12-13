import Link from "next/link";

import AddToMyCart from "../addToMyCart/page";
import ProductCarousel from "../components/ProductCarousel";
import ProductsCard from "../components/ProductsCard";
import ProductsWithFilters from "../components/ProductsWithFilters";

export default async function NewArrivals() {
  let products = [];
  const res1 = await fetch("https://dummyjson.com/products/category/beauty", {
    cache: "no-store",
  });
  if (!res1.ok) throw new Error("Failed to fetch beauty products");

  const data1 = await res1.json();
  const res2 = await fetch(
    "https://dummyjson.com/products/category/womens-watches",
    { cache: "no-store" }
  );
  if (!res2.ok) throw new Error("Failed to fetch watches");

  const data2 = await res2.json();
  const res3 = await fetch(
    "https://dummyjson.com/products/category/womens-jewellery",
    { cache: "no-store" }
  );
  if (!res3.ok) throw new Error("Failed to fetch jewellery");

  const data3 = await res3.json();

  products = [
    ...products,
    ...data1.products,
    ...data2.products,
    ...data3.products,
  ];

  return (
    <>
      <div className="">
        <ProductsWithFilters
          sectionTitle={"New Arrivals"}
          products={products}
        />
      </div>

      <ProductCarousel title={"New Arrivals"} products={products} />
    </>
  );
}
