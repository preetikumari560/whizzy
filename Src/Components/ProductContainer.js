import React from "react";
import ProductList from "./ProductList";



const productDetails=[


  {
    "id": "B0DHYSJSD1",
    "name": "Whizzy Clean Kitchen Degreaser - Heavy Duty Spray",
    "price": "₹325",
    "description": "Professional-grade heavy-duty degreaser designed to dissolve tough oil, grease, and grime. Ideal for kitchen chimneys, exhaust fans, stovetops, and grills. The 0% acid formula ensures it is safe for stainless steel and countertops without leaving harmful fumes.",
    "image_url": "https://res.cloudinary.com/ds7rnlyst/image/upload/v1768279941/81g6OolfWBL._SX679__cf9sw3.png",
    "rating": 4.3,
    "comments": [
      "Excellent for chimney cleaning; the oil just melts off.",
      "Value for money and does not have a choking chemical smell."
    ]
  },
  {
    "id": "B0DJDB7CJ3",
    "name": "Whizzy Clean Reusable Kitchen Towel Roll",
    "price": "₹126",
    "description": "High-quality non-woven reusable kitchen towels. Each roll contains 80 sheets that are highly absorbent, lint-free, and washable. Designed to be used multiple times for wiping slabs, drying dishes, or cleaning glass surfaces, making it an eco-friendly alternative to paper towels.",
    "image_url": "https://res.cloudinary.com/ds7rnlyst/image/upload/v1768279954/81V9GfvVdGL._SX522__l9oqme.png",
    "rating": 4.5,
    "comments": [
      "Very absorbent and durable even after several washes.",
      "Doesn't tear easily like regular paper tissues."
    ]
  },
  {
    "id": "B0DHR2QYLK",
    "name": "Whizzy Tap & Shower Cleaner - Limescale Descaler",
    "price": "₹270",
    "description": "A powerful descaling solution that targets hard water stains, limescale, and soap scum. It restores the original shine to chrome-plated taps, showerheads, and stainless steel fittings. Includes a free scrubbing pad for deep cleaning.",
    "image_url": "https://res.cloudinary.com/ds7rnlyst/image/upload/v1768279894/whizzyHero_niis8d.png",
    "rating": 4.6,
    "comments": [
      "Old taps look like new. Best descaler I've used.",
      "Highly effective on thick white hard water deposits."
    ]
  },
  {
    "id": "B0DHB7TH9X",
    "name": "Whizzy Kitchen Cleaner Spray - 0% Acid Formula",
    "price": "₹349",
    "description": "Versatile daily kitchen maintenance spray. Effective against everyday dirt, spills, and light grease. Safe for use on sinks, ceramic tiles, and food prep areas. Formulated without ammonia or acid to ensure it is gentle on surfaces and hands.",
    "image_url": "https://res.cloudinary.com/ds7rnlyst/image/upload/v1768279986/717deeu2GRL._SX679_PIbundle-3_TopRight_0_0_AA679SH20__nbkup9.png",
    "rating": 4.2,
    "comments": [
      "Good for daily mess and light kitchen maintenance.",
      "No harsh chemical odor, which is great for small kitchens."
    ]
  },
  {
    "id": "B0DH8FX3KC",
    "name": "Whizzy Clean Mandir Soot & Black Wall Cleaner",
    "price": "₹258",
    "description": "A unique specialized cleaner formulated to remove black carbon soot and oil stains caused by diyas and agarbattis in puja rooms. Safe for marble, tiles, and painted walls. It effectively cleans without damaging delicate temple finishes.",
    "image_url": "https://res.cloudinary.com/ds7rnlyst/image/upload/v1768279970/81GedNCHrNL._SX679__zwww2e.png",
    "rating": 4.4,
    "comments": [
      "Cleans oil stains perfectly from the puja area.",
      "Safe on white marble walls; didn't leave any yellowing."
    ]
  }
]




const ProductContainer=()=>{

return(
    <section className="px-8 md:px-20 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Products
      </h2>

      <div className="grid gap-8
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4">
        {productDetails.map((item) => (
          <ProductList key={item.id} data={item} />
        ))}
      </div>
    </section>


)

}


export default ProductContainer;