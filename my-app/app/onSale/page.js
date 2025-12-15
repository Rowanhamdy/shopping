import ProductCarousel from "../components/ProductCarousel";
import ProductsWithFilters from "../components/ProductsWithFilters";
import { fetchProducts } from "../utils/fetchProducts";


export const metadata = {
  title: "On Sale",
  description: "Best deals and discounts on top fashion items at Shop.Co",
};

export default async function OnSale() {
  let products = await fetchProducts();

  products =products.filter((p) => p.discountPercentage > 0).slice(0,10);

  return (
    <>
      <ProductsWithFilters products={products} sectionTitle={"On Sale"} />;
      <ProductCarousel title={"On Sale"} products={products} />
    </>
  );
}
