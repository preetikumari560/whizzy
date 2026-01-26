import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#f0f0f0] min-h-screen py-16 px-6 md:px-20">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-[#5e7627] mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-lg">
          We'd love to hear from you — reach out anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="space-y-8">

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-[#5e7627] mb-4">
              Get in Touch
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Have a question about our products, bulk orders, or partnerships?
              Our support team is always ready to help you.
            </p>

            <div className="space-y-4 text-gray-700 font-medium">
              <p>📞 <span className="ml-2">+91-9599476080,  +91-8800368448 </span></p>
              <p>📧 <span className="ml-2">corpfelia@gmail.com</span></p>
              <p>📍 <span className="ml-2">New Delhi, India</span></p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-[#5e7627] text-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-semibold mb-3">
              WhatsApp Support
            </h4>

            <p className="mb-6 text-white/90">
              Quick replies • Order help • Product guidance
            </p>

            <a
              href="https://wa.me/919599476080?text=Hi%20I%20visited%20your%20Whizzy%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         bg-white text-[#5e7627]
                         font-semibold px-6 py-3  shadow-lg shadow-black/45
                         rounded-full hover:bg-gray-200 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl shadow-md p-10
                        flex flex-col justify-center items-center text-center">

          <h3 className="text-2xl font-semibold text-[#5e7627] mb-4">
            Prefer Email?
          </h3>

          <p className="text-gray-600 mb-8 max-w-sm">
            For business enquiries, partnerships, or detailed support,
            feel free to email us anytime.
          </p>

          <a
            href="mailto:whizzyclean.care@gmail.com?subject=Product%20Inquiry&body=Hi%20Whizzy,%0A%0AI%20visited%20your%20website%20and%20want%20to%20know%20more%20about%20your%20products.%0A%0AThanks"
            className="inline-flex items-center gap-3
                       bg-[#5e7627] text-white
                       px-8 py-4 rounded-full
                      shadow-lg shadow-black/45 hover:bg-[#4b601f]
                       transition text-lg"
          >
            📧 Email Whizzy
          </a>

        </div>

      </div>

     

    </section>
  );
};

export default Contact;
