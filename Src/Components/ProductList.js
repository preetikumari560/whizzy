import React from "react";

import { Link } from "react-router";

const ProductList = ({ data }) => {
  return (
    /* Added 'group' class here so the child image can respond to this container's hover state */
    <div
      className="group bg-[#f7f7f7] rounded-xl shadow-md hover:shadow-xl transition
                 p-5 flex flex-col items-center text-center cursor-pointer"
    >
      <img
        src={data.image_url}
        alt={data.name}
        /* The transition and group-hover classes now work together */
        className="w-40 h-40 object-contain mb-4
                   transition-transform duration-500 ease-in-out
                   group-hover:-rotate-45"
      />

      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {data.name}
      </h3>

      <p className="mt-2 text-green-700 font-bold text-lg">
        {data.price}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        ⭐ {data.rating} / 5
      </p>
<Link to={`/product/${data.id}`}>
      <button
        className="mt-4 px-4 py-2 text-sm rounded-lg
                   bg-[#5e7627] text-white
                   hover:bg-[#4b601f] transition"
      >
        View Details
      </button></Link>
    </div>
  );
};

export default ProductList;