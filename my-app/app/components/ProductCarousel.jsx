"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import OneProduct from "./OneProduct";
export default function ProductCarousel({ title, products }) {
  return (
    <section className="mt-10 mb-10 mx-5  md:hidden">
      <h1 className="text-center font-bold text-[28px] mb-10">{title}</h1>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1.5}
          spaceBetween={10}
          navigation
          className="mySwiper "
        >
          {products.map((item, index) => (
            <div key={index} className="w-full mt-10">
              <SwiperSlide key={index}>
                <OneProduct product={item} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
