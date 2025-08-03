"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function FarmOperations() {
  return (
    <main className="bg-white text-gray-800">
      <Header currentPage="work" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Cubie Farm Operations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Our main farming facility where we grow and harvest premium cubes using sustainable cultivation techniques.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainable Cube Cultivation</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Our flagship farming facility where the magic happens (and by magic, we mean systematic geometric agriculture). 
            This 500-acre operation houses our most experienced cubie farmers who wake up at 4 AM every day to tend to rows 
            upon rows of developing cubes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            <b>Automated Irrigation Systems:</b> Precisely calibrated to deliver the exact amount of moisture needed for 
            optimal cube corner development.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            <b>Climate-Controlled Growing Domes:</b> Maintained at a perfect 72°F because cubes are surprisingly temperamental 
            about temperature.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            <b>Geometric Quality Assurance:</b> Every cube is measured by our crack team of inspectors armed with rulers 
            and unrealistic expectations.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            <b>Sustainable Practices:</b> 100% organic cube fertilizer (we don&apos;t ask what&apos;s in it, the cubies handle procurement).
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            <b>Daily Operations:</b> Our cubie workforce starts each day with mandatory geometry exercises to keep their 
            spatial reasoning sharp. The morning shift focuses on planting new cube seeds in perfectly aligned rows, while the 
            afternoon crew handles harvesting mature cubes using specialized extraction tools that definitely don&apos;t look like oversized spatulas.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Automated Irrigation
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Precision Farming
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Sustainable Methods
              </span>
            </div>
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="/images/work.jpg"
                alt="Cubie Farm Operations"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-left"
            >
              <p className="text-gray-600 mb-6 leading-relaxed">
                <b>Safety Record:</b> Only 3 cube-related injuries this quarter (all minor geometric confusion incidents).
              </p>
            </motion.div>
          </div>
        </div>
        

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Automated Systems",
              description: "State-of-the-art automation handles irrigation, lighting, and climate control for optimal cube growth.",
              icon: "🤖"
            },
            {
              title: "Quality Control",
              description: "Every cube is inspected and graded before harvest to ensure premium quality standards.",
              icon: "🔍"
            },
            {
              title: "Sustainable Practices",
              description: "Eco-friendly farming methods that minimize environmental impact while maximizing yield.",
              icon: "🌱"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Digital Acres" },
              { number: "24/7", label: "Operations" },
              { number: "1,000+", label: "Daily Harvest" },
              { number: "99.9%", label: "Quality Rate" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Work */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/work"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to All Operations
          </Link>
        </div>
      </section>
    </main>
  );
} 