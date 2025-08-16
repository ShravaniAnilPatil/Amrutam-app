import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen">
     

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold">AMRUTAM</span>, we believe that 
          healthcare should be simple, accessible, and trusted. Our platform 
          connects patients with expert doctors for in-clinic consultations, 
          ensuring the right care at the right time. 
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to make quality healthcare accessible to everyone. 
              We provide a trusted space where patients can find the right 
              specialists based on their needs, location, and preferences.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/medical-concept-illustration_114360-8124.jpg"
            alt="Healthcare illustration"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-green-900 mb-6">Our Values</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#fdeedc] p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-green-900 mb-2">Trust</h4>
            <p className="text-gray-700">We ensure verified and experienced doctors for reliable care.</p>
          </div>
          <div className="bg-[#fdeedc] p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-green-900 mb-2">Accessibility</h4>
            <p className="text-gray-700">Easy search, filters, and location-based results for patients.</p>
          </div>
          <div className="bg-[#fdeedc] p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-green-900 mb-2">Care</h4>
            <p className="text-gray-700">Personalized healthcare experience built around patients’ needs.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fdeedc] py-6 text-center text-gray-700">
        © {new Date().getFullYear()} AMRUTAM. All rights reserved.
      </footer>
    </div>
  );
}
