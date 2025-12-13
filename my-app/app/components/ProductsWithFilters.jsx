"use client";

import Sidebar from "../components/sidebar/Sidebar";
import CategoryFilter from "../components/sidebar/CategoryFilter";
import PriceFilter from "../components/sidebar/PriceFilter";
import useProductFilter from "../components/sidebar/useProductFilter";
import ProductsCard from "../components/ProductsCard";
import ProductCarousel from "./ProductCarousel";

export default function ProductsWithFilters({ sectionTitle, products }) {
  const categories = [...new Set(products.map((p) => p.category))];

  const {
    selectedCategories,
    price,
    toggleCategory,
    changePrice,
    filteredProducts,
  } = useProductFilter(products);

  return (
    <div>
      <div className="mt-10 hidden  md:flex gap-8 mb-40">
        <Sidebar>
          <CategoryFilter
            categories={categories}
            value={selectedCategories}
            onChange={toggleCategory}
          />

          <PriceFilter price={price} onChange={changePrice} />
        </Sidebar>

        <ProductsCard sectionTitle={sectionTitle} products={filteredProducts} />
      </div>
    </div>
  );
}
