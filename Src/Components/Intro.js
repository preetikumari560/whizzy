
import ProductContainer from "./ProductContainer";

const Intro = ({ title, desc, img }) => {
  return (

    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-8 md:px-20 py-12 bg-[#f0f0f0] mt-10">
    
      {/* Image Section - Set to order-first for mobile */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end order-first md:order-last">
        <img
          src={img}
          alt="Intro visual"
          className="
            w-full max-w-[320px] 
            md:max-w-112.5 
            lg:max-w-150 
            max-h-87.5 md:max-h-125
            object-cover rounded-xl shadow-lg
          "
        />
      </div>

      {/* Text Section - Set to order-last for mobile so it stays below image */}
      <div className="w-full md:w-1/2 text-center md:text-left order-last md:order-first">
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-700 leading-tight m-6">🌿 Whizzy keeps your home bright and breezy — organic care inside, tough on stains, gentle and easy</h2>
        <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
           
    
          {title}
        </h3>

        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
          {desc}
        </p>

      <a href="#products">  <button className="mt-8 px-6 py-3 bg-[#4b601f]  text-white rounded-lg shadow-lg shadow-black/45 hover:bg-[#5e7627] transition">
          Explore Products
        </button></a>
      </div>

    </section>
  );
};

export default Intro;