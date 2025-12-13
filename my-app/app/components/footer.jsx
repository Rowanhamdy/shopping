import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="bg-gray-300 text-black py-10 mt-10 relative"> {/* FIX APPLIED HERE: Changed text-white to text-black */}
          <div className="container mx-auto px-5">
            <div
              className="flex justify-between items-center bg-black p-5 md:p-10 rounded-lg flex-col md:flex-row gap-5 
                         md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-11/12 
                         relative top-0 left-0 transform-none mb-10"
            >
              <h2 className="font-bold text-[22px] md:text-[36px] p-5 pb-0 text-center md:text-left text-white">
                STAY UP TO DATE ABOUT OUR LATEST OFFERS
              </h2>
              <div className="flex flex-col gap-5 w-full md:w-auto p-5 pt-0 md:p-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-4 rounded-full text-black bg-white w-full"
                />
                <button className="p-4 bg-white text-black font-bold rounded-full w-full">
                  SUBSCRIBE to Newsletter
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 md:pt-40 pb-20">
              {/* Logo and Social Links */}
              <div>
                <Image
                  src="/SHOP.CO.svg"
                  alt="logo"
                  className="rounded-2xl  w-fit  md:h-20"
                  width={40}
                  height={40}
                />
                <p className="mt-5 text-black">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
                <ul className="flex gap-4 mt-4">
                  <li>
                    <i className="fa-brands fa-facebook text-xl text-black"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter text-xl text-black"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram text-xl text-black"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-github text-xl text-black"></i>
                  </li>
                </ul>
              </div>
              {/* Company Links */}
              <div className="text-black font-satoshi">
                <h2 className="font-bold mb-4">Company</h2>
                <ul>
                  <li className="mb-2">About Us</li>
                  <li className="mb-2">Features</li>
                  <li className="mb-2">Works</li>
                  <li className="mb-2">Career</li>
                </ul>
              </div>
              {/* FAQ Links */}
              <div className="text-black font-satoshi">
                <h2 className="font-bold mb-4">FAQ</h2>
                <ul>
                  <li className="mb-2">Account</li>
                  <li className="mb-2">Manage Deliveries</li>
                  <li className="mb-2">Orders</li>
                  <li className="mb-2">Payments</li>
                </ul>
              </div>
              {/* Resources Links */}
              <div className=" text-black">
                <h2 className="font-bold mb-4">RESOURCES</h2>
                <ul>
                  <li className="mb-2">Free eBooks</li>
                  <li className="mb-2">Development Tutorial</li>
                  <li className="mb-2">How to - Blog</li>
                  <li className="mb-2">Youtube Playlist</li>
                </ul>
              </div>
            </div>
            <div className="line"></div>{" "}
            {/* Assuming 'line' has custom CSS for a divider */}
            {/* Copyright and Payment Icons */}
            <div className="text-black flex flex-col md:flex-row justify-between items-center gap-6 mt-10 text-center">
              <div className="mt-4">
                &copy; {new Date().getFullYear()} Your Company Name. All rights
                reserved.
              </div>
              <ul className="flex gap-4 mt-4">
                <li>
                  <i className="fa-brands fa-cc-visa text-4xl"></i>
                </li>
                <li>
                  <i className="fa-brands fa-cc-paypal text-4xl"></i>
                </li>
                <li>
                  <i className="fa-brands fa-apple-pay text-4xl"></i>
                </li>
                <li>
                  <i className="fa-brands fa-google-pay text-4xl"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}