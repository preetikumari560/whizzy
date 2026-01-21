import React from "react";
import { useParams } from "react-router";

const ProductDetails = ({ products }) => {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div  className="text-center py-20 text-xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <section
  className="min-h-screen px-8 md:px-20 py-16 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://png.pngtree.com/thumb_back/fh260/background/20250416/pngtree-a-green-plant-branch-with-leaves-on-an-old-gray-stone-image_17199953.jpg')",
  }}
>
  {/* overlay for readability */}
  <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-10 max-w-5xl mx-auto shadow-xl">

    <div className="grid md:grid-cols-2 gap-12">

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-80 object-contain"
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          {product.name}
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <p className="mt-6 text-2xl font-bold text-green-700">
          {product.price}
        </p>

        <p className="mt-2 text-gray-600">
          ⭐ {product.rating} / 5
        </p>

        <a
          href="https://www.amazon.in"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-[#5e7627] text-white px-6 py-3 rounded-lg hover:bg-[#4b601f] transition"
        >
          Buy on Amazon
        </a>
      </div>

    </div>
  </div>
</section>


  );
};

export default ProductDetails;
