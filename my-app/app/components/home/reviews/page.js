"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchProducts } from "@/app/utils/fetchProducts";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      let products = await fetchProducts();

      const allReviews = products.flatMap((product) =>
        (product.reviews || []).map((review) => ({
          productId: product.id,
          productTitle: product.title,
          ...review,
        }))
      );
      setReviews(allReviews);
    }
    fetchReviews();
  }, []);

  return (
    <>
      <section className="mt-10 mb-10   rounded-lg mx-4 md:mx-40">
        <div className="flex  items-center justify-between">
          <h1 className="font-bold text-[22px] md:text-[48px] font-satoshi">
            OUR HAPPY CUSTOMERS
          </h1>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button className="swiper-button-prev-custom text-3xl font-bold">
              ←
            </button>
            <button className="swiper-button-next-custom text-3xl font-bold">
              →
            </button>
          </div>
        </div>
        <div className="mt-10 mb-20 md:mb-40">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="mySwiper"
          >
            {reviews.slice(0, 12).map((review) => (
              <SwiperSlide key={review.id}>
                <div className="p-10  rounded-lg border border-gray-200 shadow-md h-full">
                  <p className="mb-4 text-amber-300">
                    {" "}
                    Rating: {review.rating}/5 ⭐
                  </p>

                  <p className="mb-4">{review.comment}</p>
                  <h3 className="font-bold"> {review.reviewerName}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
