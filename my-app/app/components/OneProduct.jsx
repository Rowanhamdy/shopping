import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToMyCart from "../addToMyCart/page";

export default function OneProduct({ product ,brand}) {
  return (
    <>
      <Link href={`/productDetails/${product.id}`}>

        <div className="relative w-full h-60">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            loading="eager"
            className="object-cover rounded-lg bg-gray-100"
          />
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <div>
          {" "}
          <h2 className="font-bold ">{product.title}</h2>
          <h2 className="font-bold text-amber-300">{product.rating}</h2>
          <h2 className="font-bold">$ {product.price}</h2>
        </div>
        <AddToMyCart item={product} />
      </div>
    </>
  );
}
