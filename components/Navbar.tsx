'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-grey/80 backdrop-blur-md shadow-lg'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Dental Essential Logo"
            className="h-18 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-sm font-large transition duration-300 ${
                  isActive
                    ? 'text-sky-600'
                    : scrolled
                    ? 'text-black hover:text-sky-600'
                    : 'text-black hover:text-sky-300'
                }`}
              >
                {link.name}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-sky-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </Link>
            );
          })}

          {/* Book Button */}
          <Link
            href="/book"
            className={`px-6 py-2 rounded-full shadow-md transition duration-300 text-sm font-semibold ${
              scrolled
                ? 'bg-sky-600 hover:bg-sky-700 text-white'
                : 'bg-white/90 hover:bg-white text-sky-600'
            }`}
          >
            Book Appointment
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl transition ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col p-6 gap-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  pathname === link.path
                    ? 'text-sky-600 font-semibold'
                    : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="bg-sky-600 text-center text-white px-6 py-3 rounded-full font-semibold"
            >
              Book Appointment
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}