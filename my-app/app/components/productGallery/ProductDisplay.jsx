"use client";
import React, { useState } from "react";

export default function ProductDisplay({ product }) {
  const [mainImage, setMainImage] = useState(
    product.images[0] || product.thumbnail
  );
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const thumbnails = product.images || [];
  return (
    <div>
      <div className="flex flex-row md:flex-row gap-6">
        <div className="flex flex-col gap-4">
          {thumbnails.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} thumbnail ${index + 1}`}
              className="w-50 md:w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-300"
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>
        <div>
          <img
            src={mainImage}
            alt={product.title}
            className="w-full md:w-120 h-auto object-cover rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
