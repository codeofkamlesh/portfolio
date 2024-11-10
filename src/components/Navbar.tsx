import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed w-full bg-cyan-800 text-white h-[70px] flex items-center z-20">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="text-white text-4xl font-extrabold">My Portfolio</div>
        <div className="flex space-x-8 text-white font-bold text-2xl">
          <Link href="/" className="pages">Home</Link>
          <Link href="/about" className="pages">About</Link>
          <Link href="/contact" className="pages">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;