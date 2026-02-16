'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 relative">
            <img
              src="/images/RECEPTION LOGO.jpg"
              alt="Dental Essential Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <span className="block text-lg font-bold text-sky-600 tracking-wide">
              DENTAL
            </span>
            <span className="block text-lg font-bold text-gray-700 tracking-wide">
              ESSENTIAL
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative text-sm font-medium transition duration-300 ${
                pathname === link.path
                  ? 'text-sky-600'
                  : 'text-gray-700 hover:text-sky-600'
              }`}
            >
              {link.name}

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300 ${
                  pathname === link.path
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}

          {/* Book Button */}
          <Link
            href="/book"
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full shadow-md transition duration-300 text-sm"
          >
            Book Appointment
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-6 gap-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  pathname === link.path
                    ? 'text-sky-600 font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="bg-sky-600 text-center text-white px-6 py-3 rounded-full"
            >
              Book Appointment
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
