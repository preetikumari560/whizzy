import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#5e7627] text-white mt-16">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-20
                      py-6 flex flex-col md:flex-row
                      items-center justify-between gap-6">

        {/* Logo */}
        <img
          src="https://res.cloudinary.com/ds7rnlyst/image/upload/v1768556605/image0_z38z6t.jpg"
          alt="Whizzy Logo"
          className="w-28 bg-white rounded-md p-2"
        />

        {/* Contact – compact */}
        <div className="text-center md:text-right text-sm text-white/90 space-y-1">
          <p>📞 +91 95994 76080</p>
          <p>📧 corpfelia@gmail.com</p>
          <p>📍 New Delhi, India</p>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-white/20 py-2 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Whizzy • Organic Home Care
      </div>

    </footer>
  );
};

export default Footer;
