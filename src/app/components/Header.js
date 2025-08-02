"use client";

import Link from "next/link";
import Image from "next/image";

const logo = "/pixel-farmer-logo.jpg";

export default function Header({ currentPage = "home" }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="">
              <Image src={logo} alt="PixelFarmer Logo" width={300} height={40} />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={currentPage === "home" ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}>Home</Link>
            <Link href="/work" className={currentPage === "work" ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}>Work</Link>
            <Link href="/shop" className={currentPage === "shop" ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}>Shop</Link>
            <Link href="/contact" className={currentPage === "contact" ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}>Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 