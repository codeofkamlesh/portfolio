"use client"; // Marks this file as a Client Component

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-cyan-800 text-white h-[70px] flex items-center z-20">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          <Link href="/">My Portfolio</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-lg lg:text-xl font-bold">
          <Link href="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition duration-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="text-3xl lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-cyan-800 text-white shadow-md lg:hidden">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <Link
              href="/"
              className="hover:text-yellow-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
