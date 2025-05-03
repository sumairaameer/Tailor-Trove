'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', search);
    setSearch('');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white text-black text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-400" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-green-400" />
          </a>
        </div>
        <div className="font-semibold">Call us: +92-300-1234567</div>
      </div>

      {/* Header (Sticky) */}
      <header className="bg-gray-800 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">TailorTrove</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <Link href="/about" className="hover:text-yellow-300">About</Link>
            <Link href="/services" className="hover:text-yellow-300">Services</Link>
            <Link href="/contact" className="hover:text-yellow-300">Contact Us</Link>
            <Link href="/book-appointment" className="hover:text-yellow-300">Book Appointment</Link>
          </nav>
        </div>

        {/* Navigation Links (Mobile) */}
        {menuOpen && (
          <nav className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-gray-700">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <Link href="/about" className="hover:text-yellow-300">About</Link>
            <Link href="/services" className="hover:text-yellow-300">Services</Link>
            <Link href="/contact" className="hover:text-yellow-300">Contact Us</Link>
            <Link href="/book-appointment" className="hover:text-yellow-300">Book Appointment</Link>
          </nav>
        )}

        {/* Search Bar */}
        <div className="bg-gray-800 py-2 px-4 border-t border-gray-700">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 rounded-l outline-none"
              placeholder="Search services, categories, etc..."
            />
            <button type="submit" className="bg-yellow-400 text-black px-4 rounded-r hover:bg-yellow-300">
              Search
            </button>
          </form>
        </div>
      </header>
    </>
  );
}
