import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-orange-700 text-white py-4 px-4 sm:px-6 md:px-8 flex flex-wrap items-center justify-between">
      {/* Logo */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
        Bags Collection
      </h1>

      {/* Navigation */}
      <nav className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
        <Link href="/" className="text-sm sm:text-base hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-sm sm:text-base hover:underline">
          About
        </Link>
        <Link href="/bags" className="text-sm sm:text-base hover:underline">
          Bags
        </Link>
        <Link href="/contact" className="text-sm sm:text-base hover:underline">
          Contact
        </Link>
        <FaShoppingCart className="text-lg sm:text-xl cursor-pointer" />
      </nav>
    </header>
  );
};

export default Header;
