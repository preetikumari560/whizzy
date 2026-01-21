import React from "react";

const About = () => {
  return (
    <section className="bg-[#f0f0f0] py-16 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-[#5e7627] mb-4">
          About Whizzy Clean
        </h2>
        <p className="text-gray-600 text-lg">
          Safe • Organic • Powerful Everyday Cleaning
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            At <span className="font-semibold text-[#5e7627]">Whizzy Clean</span>, 
            we believe a truly clean home should never come at the cost of your health 
            or the environment. Our products are thoughtfully designed to deliver 
            powerful cleaning using safe, organic-inspired formulations suitable for 
            everyday Indian homes.
          </p>
        </div>

        {/* Philosophy */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Safety First",
              desc: "Gentle on hands, safe for families, pets, and daily use."
            },
            {
              title: "Nature Inspired",
              desc: "Made using plant-based and naturally derived ingredients."
            },
            {
              title: "Powerful Cleaning",
              desc: "Removes grease, stains, and limescale without harsh chemicals."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#5e7627] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Ingredients */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-[#5e7627] mb-6">
            Key Ingredient Highlights
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>🌿 Plant-based surfactants for effective grease removal</li>
            <li>🍋 Natural citrus extracts to fight stains and odors</li>
            <li>🧴 Mineral cleaning agents for hard water deposits</li>
            <li>🌸 Essential oil blends for freshness & antibacterial support</li>
            <li>♻️ Non-toxic boosters safe for daily cleaning</li>
          </ul>
        </div>

        {/* What we avoid */}
        <div className="bg-[#eef3e3] rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-[#5e7627] mb-4">
            What We Never Use
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 font-medium">
            <span>❌ Harsh acids</span>
            <span>❌ Chlorine bleach</span>
            <span>❌ Ammonia</span>
            <span>❌ Toxic fumes</span>
            <span>❌ Harmful residues</span>
            <span>❌ Skin-damaging chemicals</span>
          </div>
        </div>

        {/* Promise */}
        <div className="text-center bg-white rounded-2xl shadow-md p-10">
          <h3 className="text-2xl font-bold text-[#5e7627] mb-4">
            Our Promise
          </h3>
          <p className="text-xl text-gray-700 italic">
            “Powerful cleaning. Gentle care. Natural confidence.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
