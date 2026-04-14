'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const beforeServicesLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  const afterServicesLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">

          {beforeServicesLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={pathname === link.path ? 'text-sky-600' : 'text-gray-700'}
            >
              {link.name}
            </Link>
          ))}

          {/* Treatments */}
          <div
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            className="relative"
          >
            <button className="text-gray-700 hover:text-sky-600">
              Treatments
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-2 bg-white shadow rounded w-56">
                <Link href="/treatments" className="block px-4 py-2 hover:bg-gray-100">
                  View All Treatments
                </Link>
              </div>
            )}
          </div>

          {afterServicesLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={pathname === link.path ? 'text-sky-600' : 'text-gray-700'}
            >
              {link.name}
            </Link>
          ))}

          {/* Button */}
          <Link
            href="/book"
            className="bg-sky-600 text-white px-4 py-2 rounded-full"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white p-6 space-y-4">
          {beforeServicesLinks.concat(afterServicesLinks).map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setOpen(false)}
              className="block"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}