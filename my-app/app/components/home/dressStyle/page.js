import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DressStyle() {
  return (
    <section>
      <div className="bg-gray-200 mt-10 mb-10 p-10 rounded-lg mx-4 md:mx-40">
        <h1 className="text-center font-bold text-[22px]  md:text-[48px] font-satoshi">
          BROWSE BY DRESS STYLE
        </h1>

        {/* First row */}
        <div className="mt-10 flex flex-col md:flex-row gap-5">
          <div className="relative w-full md:w-1/2">
            <Link href="/category/tops">
              <Image
                src="/tops.jpg"
                alt="tops"
                className="rounded-2xl w-full h-48 md:h-60"
                width={500}
                height={300}
                loading="eager"
              />
            </Link>
          </div>
          <div className="relative w-full md:w-full ">
            <Link href="/category/fragrances">
              <Image
                src="/perfume2.png"
                alt="fragrances"
                className="rounded-2xl w-full h-48 md:h-60"
                width={500}
                height={300}
                loading="eager"
              />
            </Link>
          </div>
        </div>

        {/* Second row */}
        <div className="mt-10 flex flex-col md:flex-row gap-5">
          <div className="relative w-full md:w-full">
            <Link href="/category/womens-dresses">
              <Image
                src="/Frame 64.png"
                alt="womens-dresses"
                className="rounded-2xl w-full h-48 md:h-60"
                width={500}
                height={300}
                loading="eager"
              />
            </Link>
          </div>
          <div className="relative w-full md:w-1/2">
            <Link href="/category/womens-bags">
              <Image
                src="/bag.jpg"
                alt="womens-bags"
                className="rounded-2xl w-full h-48 md:h-60"
                width={500}
                height={300}
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
