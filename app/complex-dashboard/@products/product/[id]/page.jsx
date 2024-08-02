import Link from "next/link";
import React from "react";

export default async function Page({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="text-yellow-500">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };
  return (
    <div>
      <Link
        className="inline-block mb-4 text-blue-600 hover:text-blue-800 font-medium underline hover:no-underline transition-colors duration-300"
        href="/complex-dashboard"
      >
        &larr; Back to Products
      </Link>
      <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          {product.title}
        </h1>
        <p className="text-2xl text-green-600">${product.price}</p>
        <div className="text-gray-700 space-y-2">
          <p>{product.description}</p>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(Math.round(product.rating.rate))}
              <span className="ml-2 text-yellow-500 font-semibold">
                {product.rating.rate}
              </span>
            </div>
            <span className="text-gray-600">
              ({product.rating.count} watched)
            </span>
          </div>
        </div>
        <div className="w-full h-64">
          <img
            className="w-full h-full object-contain rounded-md"
            src={product.image}
            alt={product.title}
          />
        </div>
      </div>
    </div>
  );
}
