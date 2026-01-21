import React from "react";
import { productDetails } from "./ProductContainer";

const CustomerReviews = () => {

  const reviews = productDetails.flatMap(product =>
    product.comments.map(comment => ({
      name: product.name,
      rating: product.rating,
      comment
    }))
  );

  return (
    <section className="bg-white py-16 px-6 md:px-20">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-3">
          Real reviews from real customers
        </p>
      </div>

      {/* Manual scroll container */}
      <div
        className="
          flex gap-6 overflow-x-auto
          scrollbar-hide
          scroll-smooth
          pb-4
        "
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="
              min-w-70
              md:min-w-[320px]
              bg-[#f0f0f0]
              rounded-xl
              p-6
              shadow-md
              hover:shadow-xl
              transition
              shrink-0
            "
          >
            <h4 className="font-semibold text-gray-800 mb-1">
              {review.name}
            </h4>

            <p className="text-yellow-500 text-sm mb-2">
              {"⭐".repeat(Math.round(review.rating))}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              “{review.comment}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
