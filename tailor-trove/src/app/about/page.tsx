// src/app/about/page.tsx
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f5e9] via-white to-[#ffffff] text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="bg-[#3a6d8f] text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">About Tailor Trove</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Precision tailoring with a personal touch. Crafted to fit your style and story.
        </p>
      </section>

      {/* Our Journey */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#2c3e50]">Our Journey</h2>
          <p className="text-lg mb-4">
            I'm <strong>Sumaira</strong>, the founder of Tailor Trove. For over <strong>10 years</strong>, I've passionately delivered
            custom tailoring services that blend traditional skills with modern aesthetics.
          </p>
          <p className="text-lg">
            What started as a passion has become a mission—to make every customer feel confident in clothing that’s
            tailored to their exact style and comfort.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/sumaira.jpeg"
            alt="Sumaira"
            className="rounded-2xl w-72 h-72 object-cover shadow-xl border-4 border-white"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f0fdf4] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#2c3e50] mb-12">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-[#2c3e50]">Our Mission</h3>
              <p className="text-gray-700">
                To empower individuals through uniquely crafted garments that elevate personal confidence and comfort.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-[#2c3e50]">Our Vision</h3>
              <p className="text-gray-700">
                To become the leading destination for personalized fashion, merging craftsmanship with innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#2c3e50] mb-12">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2 text-[#2c3e50]">Quality</h4>
              <p className="text-gray-700">
                Meticulous attention to detail, using premium fabrics and skilled craftsmanship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2 text-[#2c3e50]">Customization</h4>
              <p className="text-gray-700">
                Every piece is tailored to fit your personality and measurements perfectly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2 text-[#2c3e50]">Customer Delight</h4>
              <p className="text-gray-700">
                Ensuring you feel delighted and confident with every outfit you wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="bg-[#3a6d8f] text-white py-10 text-center">
        <h2 className="text-2xl font-bold">Want Something Uniquely Tailored?</h2>
        <p className="mt-2 text-gray-300">Contact us and let your wardrobe reflect your true essence.</p>
      </section>
    </div>
  );
}
