// src/app/page.tsx
import React from 'react'

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-[#e8f5e9] via-white to-[#ffffff] text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="bg-[#3a6d8f] text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Tailor Trove</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Where precision meets style. Tailor-made garments designed to fit you perfectly.
        </p>
        <a
          href="#services"
          className="mt-6 inline-block bg-[#f0fdf4] text-[#3a6d8f] py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-[#3a6d8f] hover:text-white transition-all"
        >
          Explore Our Services
        </a>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#2c3e50] mb-12">Our Tailoring Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#2c3e50] mb-4">Custom Fit</h3>
              <p className="text-gray-700">
                Get clothes that fit your body perfectly. Tailored to your exact measurements and comfort.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#2c3e50] mb-4">Bespoke Designs</h3>
              <p className="text-gray-700">
                We bring your fashion ideas to life with our bespoke design services, ensuring your uniqueness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#2c3e50] mb-4">Alterations & Repairs</h3>
              <p className="text-gray-700">
                Need your favorite outfit altered or repaired? We provide professional alterations and repair services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-6 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#2c3e50] mb-12">Featured Collections</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Ensure images are present in public/images folder */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="/images/collection1.jpg" alt="Collection 1" className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-2xl font-bold">Men's Wear</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="/images/collection2.jpg" alt="Collection 2" className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-2xl font-bold">Women's Wear</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="/images/collection3.jpg" alt="Collection 3" className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-2xl font-bold">Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-[#3a6d8f] text-white">
        <h2 className="text-3xl font-semibold mb-4">Let’s Bring Your Fashion Ideas to Life!</h2>
        <p className="text-lg mb-6">Contact us today for a free consultation or to get started on your bespoke garment.</p>
        <a
          href="/contact"
          className="inline-block bg-[#f0fdf4] text-[#3a6d8f] py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-[#3a6d8f] hover:text-white transition-all"
        >
          Contact Us
        </a>
      </section>

    </div>
  )
}
