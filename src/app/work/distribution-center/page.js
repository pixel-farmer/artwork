"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function DistributionCenter() {
  return (
    <main className="bg-white text-gray-800">
      <Header currentPage="work" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Cube Distribution Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Our logistics hub where cubes are sorted, packaged, and shipped worldwide with precision and care.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Logistics Excellence</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our distribution center is the nerve center of our worldwide cube delivery network. Here, 
              cubes from all our facilities are received, sorted, and prepared for shipment to customers 
              across the digital globe.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The facility features automated sorting systems, climate-controlled storage units, and 
              advanced tracking technology. Our logistics team ensures every cube reaches its destination 
              in perfect condition, maintaining the highest standards of quality throughout the journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Automated Sorting
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Global Shipping
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Real-time Tracking
              </span>
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
              alt="Cube Distribution Center"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Distribution Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Distribution Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Receiving",
                description: "Cubes arrive from our farms and processing plants for quality inspection and sorting."
              },
              {
                step: "02",
                title: "Sorting & Packaging",
                description: "Automated systems sort cubes by type and package them for optimal protection."
              },
              {
                step: "03",
                title: "Storage",
                description: "Climate-controlled storage ensures cubes maintain quality until shipment."
              },
              {
                step: "04",
                title: "Shipping",
                description: "Cubes are shipped worldwide using our network of digital delivery partners."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-2xl font-bold text-orange-600 mb-3">{step.step}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Network */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Global Distribution Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                region: "North America",
                countries: "USA, Canada, Mexico",
                deliveryTime: "1-2 days",
                icon: "🌎"
              },
              {
                region: "Europe",
                countries: "UK, Germany, France, Italy",
                deliveryTime: "2-3 days",
                icon: "🇪🇺"
              },
              {
                region: "Asia Pacific",
                countries: "Japan, Australia, Singapore",
                deliveryTime: "3-4 days",
                icon: "🌏"
              }
            ].map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
              >
                <div className="text-4xl mb-4">{region.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{region.region}</h4>
                <p className="text-gray-600 mb-2">{region.countries}</p>
                <p className="text-orange-600 font-medium">Delivery: {region.deliveryTime}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Automated Sorting",
              description: "Advanced robotics sort and categorize cubes with precision and speed.",
              icon: "🤖"
            },
            {
              title: "Climate Control",
              description: "Temperature and humidity controlled storage maintains cube quality.",
              icon: "🌡️"
            },
            {
              title: "Real-time Tracking",
              description: "Advanced tracking systems provide complete visibility of shipments.",
              icon: "📱"
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
        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Countries Served" },
              { number: "24/7", label: "Operations" },
              { number: "99.9%", label: "On-time Delivery" },
              { number: "1M+", label: "Cubes Shipped" }
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