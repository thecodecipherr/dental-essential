'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-sky-600">
          SmileCare
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-sky-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-sky-600 transition">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-sky-600 transition">
            Services
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-sky-600 transition">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-sky-600 transition">
            Contact
          </Link>

          <Link
            href="/book"
            className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full shadow transition"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-4">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <Link
              href="/book"
              className="bg-sky-500 text-center text-white px-4 py-2 rounded-full"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
