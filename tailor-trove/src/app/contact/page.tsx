import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#f0fdf4] text-gray-800 min-h-screen font-sans">
      {/* Header */}
      <section className="bg-[#1e293b] text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto text-gray-300">
          We'd love to hear from you. Let's bring your fashion ideas to life.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-[#22c55e]">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#1e293b]">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                placeholder="Tell us what you need..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#f0fdf4] py-10 px-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Reach Us Directly</h2>
        <p className="mb-1">📞 Phone: <strong>+92-333-9876543</strong></p>
        <p className="mb-1">📧 Email: <strong>contact@tailortrove.com</strong></p>
        <p>📍 Location: <strong>Naz Town, Lahore, Pakistan</strong></p>
      </section>
    </div>
  );
}
