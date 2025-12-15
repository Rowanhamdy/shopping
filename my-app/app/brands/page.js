import React from "react";
import ProductsWithFilters from "../components/ProductsWithFilters";
import ProductCarousel from "../components/ProductCarousel";
import { fetchProducts } from "../utils/fetchProducts";


export const metadata = {
  title: "Brands",
  description:
    "Browse all available fashion brands at Shop.Co and discover your favorite labels.",
};

export default async function Brands() {
  const products = await fetchProducts();

  const productWithBrands = products.filter(
    (product) => product.brand && product.brand.trim() !== ""
  );

  return (
    <div>
      <ProductsWithFilters
        sectionTitle={"Brands we Stock"}
        products={productWithBrands}
      />
      <ProductCarousel title={"Brands we Stock"} products={productWithBrands} />
    </div>
  );
}
