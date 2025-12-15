import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      {/* ================= DESKTOP ================= */}
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
            className="inline-block bg-black text-white py-3 px-16 rounded-full mt-5 hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>

          <div className="flex gap-16 mt-12">
            {[
              ["200+", "International Brands"],
              ["2,000+", "High-Quality Products"],
              ["30,000+", "Happy Customers"],
            ].map(([num, label]) => (
              <div key={num}>
                <h2 className="text-[40px] font-bold">{num}</h2>
                <p className="text-gray-800">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Desktop Logos */}
      <div className="bg-black py-5 hidden md:block">
        <div className="flex justify-around items-center flex-wrap gap-10">
          {[
            "/VERSACE.svg",
            "/zara-logo-1 1.svg",
            "/gucci-logo-1 1.svg",
            "/prada-logo-1 1.svg",
            "/CELVIN.png",
          ].map((logo, i) => (
            <div key={i} className="relative w-32 h-16">
              <Image src={logo} alt="brand" fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <header className="relative md:hidden">
        <div className="px-5 pt-10">
          <h1 className="font-extrabold text-[28px] leading-tight">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="pt-4 text-gray-400 text-sm">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link
            href="/"
            className="inline-block bg-black px-10 py-3 mt-6 text-white rounded-full"
          >
            Shop Now
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8 text-center">
            <div>
              <h2 className="text-[28px] font-bold">200+</h2>
              <p className="text-sm">Brands</p>
            </div>
            <div>
              <h2 className="text-[28px] font-bold">2,000+</h2>
              <p className="text-sm">Products</p>
            </div>
            <div className="col-span-2">
              <h2 className="text-[28px] font-bold">30,000+</h2>
              <p className="text-sm">Customers</p>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <Image
          src="/headerMb-2.png"
          alt="Mobile Header"
          width={800}
          height={600}
          className="w-full h-auto mt-6"
        />

        {/* Mobile Logos */}
        <div className="bg-black py-4 flex justify-center gap-6 flex-wrap">
          {[
            "/VERSACE.svg",
            "/zara-logo-1 1.svg",
            "/gucci-logo-1 1.svg",
            "/prada-logo-1 1.svg",
            "/celvin.svg",
          ].map((logo, i) => (
            <div key={i} className="relative w-20 h-8">
              <Image src={logo} alt="brand" fill className="object-contain" />
            </div>
          ))}
        </div>
      </header>
    </>
  );
}
