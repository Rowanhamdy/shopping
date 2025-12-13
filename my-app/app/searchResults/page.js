"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import ProductsCard from "../components/ProductsCard";
import { fetchProducts } from "../utils/fetchProducts";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const debouncedQuery = useDebounce(query, 300);

  const [allProducts, setAllProducts] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products once
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const products = await fetchProducts();
        setAllProducts(products || []);
      } catch (err) {
        console.error(err);
        setError("Could not load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Filter products based on query
  useEffect(() => {
    if (!debouncedQuery) {
      setResults(allProducts);
      return;
    }
    const lowerQuery = debouncedQuery.toLowerCase();
    const filtered = allProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
  }, [debouncedQuery, allProducts]);

  if (isLoading)
    return <div className="p-5 text-center text-xl mb-20">Loading products...</div>;

  if (error)
    return (
      <div className="p-5 text-center text-red-600 font-bold">{error}</div>
    );

  return (
    <div className="p-5 max-w-7xl mx-auto mb-40">
      <h1 className="text-2xl font-bold mb-6">
        {query && results.length > 0
          ? `Showing results for "${query}"`
          : `Search results`}
      </h1>

      {query && results.length === 0 ? (
        <p className="text-gray-500">No products found matching "{query}".</p>
      ) : (
        <ProductsCard sectionTitle={""} products={results} />
      )}
    </div>
  );
}
