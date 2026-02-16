import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router";

const Header = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id="header" className="relative z-50 bg-[#5e7627] shadow-lg shadow-black/45">
      {/* Main Header Container */}
      <div className="flex justify-between items-center h-20 md:h-24 px-6 md:px-10">
        
        {/* Logo Section */}
        {/* Added overflow-visible to the parent and adjusted translate for mobile */}
{/* <div className="relative z-50 left-3 bottom-0 translate-y-1/4 transition-all duration-300">
  <img 
    className="w-20 md:w-32" // Slightly smaller logo for mobile so it fits the bar
    src="https://res.cloudinary.com/ds7rnlyst/image/upload/v1767833279/whizzyLogo-removebg-preview_ag3pgr.png" 
    alt="Whizzy Logo" 
  />
</div> */}
<div>


    <img
          src="https://res.cloudinary.com/ds7rnlyst/image/upload/v1768556605/image0_z38z6t.jpg"
          alt="Whizzy Logo"
          className="w-20 p-2  shadow-lg shadow-black/45"
        />
</div>
        {/* Brand Name (Hidden on very small screens to save space) */}
        <h1 className="hidden sm:block text-2xl font-bold tracking-wide text-white">
          Whizzy
        </h1>

        {/* Desktop Navigation (Visible on lg screens and up) */}
        <ul className="hidden lg:flex gap-10 text-sm font-medium text-white">
          <Link to={`/`}><li className="cursor-pointer hover:text-gray-200 transition">Home</li></Link>
          <Link to={'/about'}> <li className="cursor-pointer hover:text-gray-200 transition">About us</li></Link>
          <Link to={"/contact"}><li className="cursor-pointer hover:text-gray-200 transition">Contact us</li></Link>
        </ul>

        {/* Hamburger Button (Visible only on mobile/tablet) */}
        <button 
          className="lg:hidden text-white focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              /* "X" Close Icon */
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              /* Hamburger Menu Icon */
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
 {/* Mobile Menu Overlay */}
<div className={`
  lg:hidden w-full bg-[#5e7627] border-t border-black/10 transition-all duration-300 ease-in-out
  /* 1. Removed 'absolute'
     2. Changed 'top-full left-0' to 'overflow-hidden' 
     3. Controlled height to shift content
  */
  ${isMenuOpen ? "max-h-125 opacity-100 visible" : "max-h-0 opacity-0 invisible"}
`}>
  <ul className="flex flex-col items-center gap-6 py-8 text-white font-medium shadow-xl">
   <Link to={`/`}><li className="cursor-pointer hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Home</li></Link> 
   <Link to={'/about'}> <li className="cursor-pointer hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>About us</li></Link>
   <Link to={"/contact"}><li className="cursor-pointer hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Contact us</li></Link> 
  </ul>
</div>
    </nav>
  );
};

export default Header;