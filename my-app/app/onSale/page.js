import ProductCarousel from "../components/ProductCarousel";
import ProductsWithFilters from "../components/ProductsWithFilters";
import { fetchProducts } from "../utils/fetchProducts";

export default async function OnSale() {
  let products = await fetchProducts();

  products =products.filter((p) => p.discountPercentage > 0);

  return (
    <>
      <ProductsWithFilters products={products} sectionTitle={"On Sale"} />;
      <ProductCarousel title={"On Sale"} products={products} />
    </>
  );
}
