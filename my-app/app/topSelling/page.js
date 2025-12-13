
import ProductCarousel from "../components/ProductCarousel";
import ProductsWithFilters from "../components/ProductsWithFilters";
export default async function TopSelling() {
  let products = [];
  const res1 = await fetch(
    "https://dummyjson.com/products/category/fragrances"
  );
  const data1 = await res1.json();
  const res2 = await fetch("https://dummyjson.com/products/category/beauty");
  const data2 = await res2.json();
  if (!res1.ok) throw new Error("Failed to fetch data");

  products = [...products, ...data1.products, ...data2.products];
  if (!res2.ok) throw new Error("Failed to fetch data");

  return (
    <>
      <section>
        <div className="mt-10 mb-40  md:block ">
          <ProductsWithFilters
            sectionTitle={"Top Selling"}
            products={products}
          />
        </div>
        <div className="md:hidden">
          {<ProductCarousel title={"Top Selling"} products={products} />}
        </div>
      </section>
    </>
  );
}
