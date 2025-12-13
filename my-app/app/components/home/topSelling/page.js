import Link from "next/link";
import ProductCarousel from "../../ProductCarousel";
import ProductsCard from "../../ProductsCard";
import { fetchProducts } from "@/app/utils/fetchProducts";
export default async function TopSelling() {
  let products = await fetchProducts();

  products = products.slice(4, 8);

  return (
    <>
      <section>
        <div className="mt-10 mb-10 hidden md:block">
          <ProductsCard sectionTitle={"Top Selling"} products={products} />
          <div className="text-center mt-20">
            <Link
              className="text-center  font-bold border border-gray-300 pl-10 pr-10 pt-2 pb-2 rounded-full "
              href={"/topSelling"}
            >
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10 mb-10 mx-5  md:hidden">
        <ProductCarousel title={"TopSelling"} products={products} />
        <div className="text-center mt-10">
          <Link
            className="font-bold border border-gray-300  px-10 py-2 rounded-full inline-block"
            href="/topSelling"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </>
  );
}
