'use client'
import { useState } from "react";

export default function useProductFilter(products) {
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 150 });

  const toggleCategory = (cat) => {
    setCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  const changePrice = (type, value) => {
    setPrice((prev) => ({ ...prev, [type]: Number(value) }));
  };

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      categories.length === 0 || categories.includes(p.category);
    const matchPrice =
      p.price >= price.min && p.price <= price.max;

    return matchCategory && matchPrice;
  });

  return {
    selectedCategories: categories,
    price,
    toggleCategory,
    changePrice,
    filteredProducts,
  };
}
