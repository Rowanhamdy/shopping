import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      {/* ==== DESKTOP HEADER ==== */}
      <header className="relative h-[95vh] my-background hidden md:block">
        <div className="container mx-auto py-10 px-5">
          <h1 className="font-bold text-[40px] sm:text-[50px] lg:text-[64px] max-w-xl leading-tight">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="text-gray-700 max-w-2xl py-4 text-base sm:text-lg lg:text-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link
            href="/"
            className="inline-block bg-black text-white py-3 px-10 sm:px-16 rounded-full mt-5 hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-10 mt-12 sm:gap-16">
            <div>
              <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold">
                200+
              </h2>
              <p className="text-gray-800 text-sm sm:text-base">
                International Brands
              </p>
            </div>

            <div>
              <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold">
                2,000+
              </h2>
              <p className="text-gray-800 text-sm sm:text-base">
                High-Quality Products
              </p>
            </div>

            <div>
              <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold">
                30,000+
              </h2>
              <p className="text-gray-800 text-sm sm:text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="relative bg-black py-5 px-5 hidden md:block">
        <div className="flex items-center justify-around flex-wrap gap-10">
          <div className="relative w-40 h-20">
            <Image
              src="/VERSACE.svg"
              alt="Versace logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-40 h-20">
            <Image
              src="/zara-logo-1 1.svg"
              alt="Zara logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-40 h-20">
            <Image
              src="/gucci-logo-1 1.svg"
              alt="Gucci logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-40 h-20">
            <Image
              src="/prada-logo-1 1.svg"
              alt="Prada logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-40 h-20">
            <Image
              src="/CELVIN.png"
              alt="Celvin logo"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 10rem, 
           (max-width: 768px) 12rem, 
           (max-width: 1024px) 16rem, 
           10rem"
            />
          </div>
        </div>
      </div>
      {/* ==== MOBILE HEADER ==== */}

      <header className="relative h-[95vh] my-background-mb header-mb md:hidden">
        <div className="container px-5">
          <h1 className="pt-10 font-extrabold text-[32px] leading-tight">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="pt-5 text-gray-400">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link
            href="/"
            className="inline-block bg-black px-10 py-2 mt-5 text-white text-center rounded-full hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>

          <div className="flex gap-10 justify-center mt-10">
            <div className="flex flex-col items-start">
              <h2 className="text-[32px] font-bold">200+</h2>
              <p className="text-gray-800">International Brands</p>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="text-[32px] font-bold">2,000+</h2>
              <p className="text-gray-800">High-Qualtiy Products</p>
            </div>
          </div>

          <div className="flex flex-col text-center pt-4">
            <h2 className="text-[32px] font-bold">30,000+</h2>
            <p className="text-gray-800">Happy Customers</p>
          </div>
        </div>

        {/* mobile background image */}
        <Image
          src="/headerMb-2.png"
          alt="Mobile Header Background"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
        />
        <div className="bg-black py-5 px-5 flex items-center justify-around flex-wrap gap-10">
          {[
            "/VERSACE.svg",
            "/zara-logo-1 1.svg",
            "/gucci-logo-1 1.svg",
            "/prada-logo-1 1.svg",
            "/CELVIN.png",
          ].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`logo ${i}`}
              width={40}
              height={40}
              className="w-20 h-auto object-contain"
            />
          ))}
        </div>
      </header>
    </>
  );
}
