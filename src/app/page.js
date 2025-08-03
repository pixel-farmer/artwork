"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

const banner = "/banner.jpg";

export default function Home() {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [bannerError, setBannerError] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const features = [
    {
      title: "Sustainable Cube Farming",
      description: "Our cubie people use eco-friendly methods to grow and harvest premium cubes, ensuring the highest quality while our cubes develop insufferable attitudes about being organically cultivated and environmentally conscious.",
      icon: "🌱",
      color: "text-lime-500"
    },
    {
      title: "Advanced Processing",
      description: "State-of-the-art facilities where raw cubes are transformed into high-quality voxel products using cutting-edge technology that occasionally works and robots with perfectionist anxiety disorders about geometric precision.",
      icon: "⚙️",
      color: "text-orange-400"
    },
    {
      title: "Global Distribution",
      description: "Worldwide network ensuring fresh cubes reach customers everywhere, with climate-controlled shipping that plays soothing music to anxious cubes and real-time tracking that's accurate 68% of the time.",
      icon: "🌍",
      color: "text-sky-500"
    }
  ];

  const stats = [
    { number: "1,247", label: "Cubie Workers", icon: "👥" },
    { number: "156", label: "Cube Varieties", icon: "🧊" },
    { number: "24/7", label: "Operations", icon: "⚡" },
    { number: "99.9%", label: "Quality Rate", icon: "⭐" }
  ];

  return (
    <main className="bg-white text-gray-800">
      <Header />

      {/* Hero Banner */}
      <section className="w-full h-[60vh] relative bg-gray-100">
        {!bannerError ? (
          <Image
            src={banner}
            alt="Banner"
            fill
            className="object-cover"
            onLoad={() => setBannerLoaded(true)}
            onError={() => setBannerError(true)}
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">PixelFarmer</h1>
              <p className="text-xl">Sustainable Cube Farming</p>
            </div>
          </div>
        )}
        {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
        {/* Text overlay removed for GLB file placement */}
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose <span className="text-lime-500">Pixel</span><span className="text-orange-400">Farmer</span>?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality, sustainability, and innovation makes us the leading cubie farming operation in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-semibold mb-4 ${feature.color}`}>{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Numbers</h2>
            <p className="text-gray-600">The scale of our cubie farming operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Cubie Operations</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At PixelFarmer, we&apos;ve revolutionized the art of cube farming. Our dedicated team of cubie workers 
              operates around the clock, using sustainable farming practices to cultivate the finest geometric specimens 
              in the digital world.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From our state-of-the-art processing facilities to our global distribution network, every aspect of our 
              operation is designed to deliver premium cubes to customers worldwide while maintaining the highest 
              standards of quality and sustainability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/work"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Our Operations
              </Link>
              <Link 
                href="/shop"
                className="border border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                Shop Our Products
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <Image
              src="/images/work.jpg"
              alt="Cubie Farming Operations"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Experience Premium Cubes?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who trust PixelFarmer for their cube needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/shop"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
            <Link 
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PixelFarmer</h3>
              <p className="text-gray-300">
                Leading the way in sustainable cube farming and premium geometric products.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Operations</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/work" className="hover:text-white">Our Facilities</Link></li>
                <li><Link href="/work/farm-operations" className="hover:text-white">Farming</Link></li>
                <li><Link href="/work/processing-plant" className="hover:text-white">Processing</Link></li>
                <li><Link href="/work/distribution-center" className="hover:text-white">Distribution</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
                <li><Link href="/product/1" className="hover:text-white">Collections</Link></li>
                <li><Link href="/product/2" className="hover:text-white">Rare Cubes</Link></li>
                <li><Link href="/product/3" className="hover:text-white">Farming Kits</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} PixelFarmer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
