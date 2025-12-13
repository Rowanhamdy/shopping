"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
export default function Navbar() {
  const pages = [
    { title: "Shop", href: "/" },
    { title: "On Sale", href: "/onSale" },
    { title: "New Arrivals", href: "/newArrivals" },
    { title: "Brands", href: "/brands" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  // SEARCH STATES
  const [query, setQuery] = useState("");
  const router = useRouter();
  //search function

  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.length > 0) {
      router.replace(`/searchResults?q=${encodeURIComponent(newQuery)}`);
    } else {
      router.replace(`/searchResults`);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    }

    // Listen to cart updates
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    };

    window.addEventListener("storage", updateCart);

    return () => window.removeEventListener("storage", updateCart);
  }, []);

  return (
    <nav className="mt-4 mb-4 px-6 lg:px-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <button className="menu" onClick={() => setIsOpen(!isOpen)}>
          <img src="./Menu.svg" alt="menu" loading="eager"/>
        </button>
        <div>
          <Image
            src="/SHOP.CO.svg"
            width={160}
            height={40}
            alt="Logo"
            style={{ width: "auto", height: "auto" }}
            priority
            loading="eager"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden font-semibold lg:flex items-center gap-8">
          {pages.map((item, index) => (
            <li key={index} className="hover:text-gray-500 transition ">
              <Link href={item.href} className="text-black ">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center relative w-[350px] ">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black/40"
            value={query}
            onChange={handleSearchChange}
          />

          <Image
            src="/Search.svg"
            alt="Search"
            width={24}
            height={24}
            style={{ width: "auto", height: "auto" }}
                className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
loading="eager"
          />
        </div>

        {/* Desktop Icons */}
        <div className="flex items-center gap-6 ">
          <button
            className="lg:hidden "
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <Image
              src="/Search.svg"
              alt="Search"
              width={24}
              height={24}
              style={{ width: "auto", height: "auto" }}
              loading="eager"
            />
          </button>

          <Link href="/cart">
            <Image
              src="/Vector.svg"
              alt="cart"
              width={24}
              height={24}
              style={{ width: "auto", height: "auto" }}
              loading="eager"
            />

            {cartCount > 0 && (
              <span className="absolute top-2 right-20 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href={"/login"}>
            <Image
              src="/User.svg"
              alt="user"
              width={24}
              height={24}
              style={{ width: "auto", height: "auto" }}
              loading="eager"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div>
        {/* Mobile Search Input */}
        {showMobileSearch && (
          <div className="lg:hidden mt-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black/40"
              value={query}
              onChange={handleSearchChange}
            />
          </div>
        )}{" "}
        {isOpen && (
          <ul className="mt-4 flex flex-col gap-4 px-2 lg:hidden">
            {pages.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-gray-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
