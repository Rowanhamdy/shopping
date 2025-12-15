// import React, { useEffect, useState } from 'react'

import ProductView from "@/app/myproduct/[id]/page";
import ProductDisplay from "@/app/components/productGallery/ProductDisplay";
import RandomeProduct from "@/app/components/randomProduct/page";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col md:flex-row gap-10">
        <ProductDisplay product={product} />
        <div>
          <p className="mt-4  text-xl font-bold text-[28px] md:text-[49px] ">
            {product.title}
          </p>
          <p className=" text-2xl  text-amber-400">{product.rating}/5</p>
          <div className="flex items-center gap-4">
            <p className=" text-2xl font-bold text-black-500">
              ${product.price}
            </p>
            <p className=" bg-red-400  text-white w-fit px-1 rounded">
              -{
                Math.floor(product.discountPercentage)}%
            </p>
          </div>
          <p className="mt-4 w-100 text-gray-700">{product.description}</p>
          <div className="line mt-4"></div>
          <p className="mt-2 font-semibold">{product.availabilityStatus} </p>

          <p className="mt-2 font-semibold">
            {product.sizes ? `Sizes: ${product.sizes.join(", ")}` : "One Size"}
          </p>
          <p className="mt-2 font-semibold">
            {product.colors
              ? `Colors: ${product.colors.join(", ")}`
              : "Various Colors"}
          </p>
          <div className="flex flex-col md:flex-row gap-5 items-center ">
            
            <ProductView product={product} />
           
          </div>
        </div>
      </div>

      <div className="line mt-10"></div>
      <div>
        {product.reviews && product.reviews.length > 0 ? (
          <div className="mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4  pb-2">
              Customer Reviews ({product.reviews.length})
            </h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="mb-6 p-4   rounded-lg bg-white border border-gray-100 shadow-sm"
                >
                  <div className=" mb-2 pb-2">
                    <p className="font-bold text-xl text-gray-800">
                      {review.reviewerName}
                    </p>

                    <p className="text-yellow-500 font-semibold">
                      Rating: {review.rating}/5 ⭐
                    </p>
                  </div>

                  <p className="text-gray-700 italic mb-3">{review.comment}</p>

                  <p className="text-sm text-gray-500">
                    Reviewed on:
                    {new Date(review.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-10 p-4 text-center border rounded-lg bg-gray-50 text-gray-600">
            No reviews available for this product yet. Be the first to review!
          </p>
        )}
      </div>
      <div className="line mt-10 mb-10"></div>
      <div className="mb-40">
        <RandomeProduct />
      </div>
    </div>
  );
}
