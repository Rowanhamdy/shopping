import Link from "next/link";
import ProductCarousel from "../../ProductCarousel";
import ProductsCard from "../../ProductsCard";
import { fetchProducts } from "@/app/utils/fetchProducts";

export default async function NewArrival() {

  let products = await fetchProducts();

  products = products.slice(0, 4);

  return (
    <>
      <div className="mt-10 mb-10 hidden   md:block lg:mt-10">
        <ProductsCard sectionTitle={"New Arrivals"} products={products} />

        <div className="text-center ">
          <Link
            className="font-bold border border-gray-300  px-10 py-2 rounded-full inline-block"
            href={`/newArrivals`}
          >
            VIEW ALL
          </Link>
          <div className="line mt-10"></div>
        </div>
      </div>

      <div className="mt-10 mb-10 mx-5  md:hidden">
        <ProductCarousel title={"New Arrivals"} products={products} />
        <div className="text-center mt-10">
          <Link
            className="font-bold border border-gray-300  px-10 py-2 rounded-full inline-block"
            href="/newArrivals"
          >
            VIEW ALL
          </Link>
          <div className="line mt-10"></div>
        </div>
      </div>
    </>
  );
}
