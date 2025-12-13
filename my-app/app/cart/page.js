"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import QuantityCounter from "../components/quantityCounter/QuantityCounter";
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const updateQuantity = (id, newQty) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("storage"));
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("storage"));
  };

  const handelCheckout = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("You must log in to checkout!");
      router.push("/login");
      return;
    }
    router.push("/checkout");
  };
  return (
    <div className="container mx-auto mb-60">
      <h1 className=" font-bold text-[48px] mt-10 mb-10">YOUR CART</h1>

      <div>
        {cart.length > 0 ? (
          <>
            <div className="grid grid-cols-2 m-5">
              <div className="col-span-2 md:col-span-1 border border-gray-200 p-5 rounded-2xl">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 mb-10">
                    <Link href={`/productDetails/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-lg bg-gray-100 "
                      />
                    </Link>

                    <div>
                      <h2 className="font-bold text-xl">{item.title}</h2>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="ml-auto  ">
                      <QuantityCounter
                         productId={item.id}
                        initialQuantity={item.quantity}
                        onChange={(qty) => updateQuantity(item.id, qty)}
                        onCartUpdate={() => {
                          const storedCart =
                            JSON.parse(localStorage.getItem("cart")) || [];
                          setCart(storedCart);
                          window.dispatchEvent(new Event("storage")); 
                        }}
                      />
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => clearCart()}
                  className="text-black px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition mb-10"
                >
                  Clear Cart
                </button>
              </div>

              <div className="col-span-2 md:col-span-1 p-5 pb-1 border border-gray-200 rounded-2xl ml-0 md:ml-10 mt-10 md:mt-0">
                <h2 className="font-bold text-2xl mb-5">Summary</h2>
                <div className="flex items-center justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-gray-300 mt-2 pt-2 flex items-center justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>

                <div className="mt-5">
                  <button
                    onClick={handelCheckout}
                    className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
