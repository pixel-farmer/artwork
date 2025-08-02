"use client";

import Link from "next/link";
import Image from "next/image";

const logo = "/pixel-farmer-logo.jpg";

export default function ShopHeader({ cartCount, setIsCartOpen, isCartOpen, currentPage = "shop" }) {
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
          <div className="flex items-center space-x-4">
            <button className="relative p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button 
              className="relative p-2"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 