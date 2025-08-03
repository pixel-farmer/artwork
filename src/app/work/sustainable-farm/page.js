"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function SustainableFarm() {
  return (
    <main className="bg-white text-gray-800">
      <Header currentPage="work" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Sustainable Cube Farm
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Eco-friendly farming operation using renewable energy and organic cube cultivation methods for a greener future.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Green Cube Cultivation</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our sustainable farm represents the future of cube farming, combining cutting-edge technology 
              with eco-friendly practices. We've created a zero-waste operation that produces premium cubes 
              while protecting the digital environment for future generations.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The facility runs entirely on renewable energy, uses organic cultivation methods, and 
              implements advanced recycling systems. Every aspect of our operation is designed to minimize 
              environmental impact while maximizing cube quality and yield.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                Renewable Energy
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Zero Waste
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Carbon Neutral
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
              src="/images/contact.jpg"
              alt="Sustainable Cube Farm"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Sustainability Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Sustainability Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Solar Power",
                description: "100% renewable energy from our on-site solar array powering all operations.",
                icon: "☀️"
              },
              {
                title: "Organic Methods",
                description: "Chemical-free cultivation using natural pest control and organic fertilizers.",
                icon: "🌱"
              },
              {
                title: "Water Recycling",
                description: "Advanced irrigation systems that recycle and purify water for reuse.",
                icon: "💧"
              },
              {
                title: "Waste Composting",
                description: "All organic waste is composted and returned to the soil as natural fertilizer.",
                icon: "♻️"
              },
              {
                title: "Carbon Capture",
                description: "Innovative systems that capture and store carbon dioxide from the atmosphere.",
                icon: "🌿"
              },
              {
                title: "Biodiversity",
                description: "Maintaining diverse ecosystems to support natural pest control and soil health.",
                icon: "🦋"
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
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Environmental Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Carbon Neutral Operations",
                description: "Our farm produces zero net carbon emissions through renewable energy and carbon capture technology.",
                impact: "100% Carbon Neutral"
              },
              {
                title: "Zero Waste Production",
                description: "Every byproduct is recycled or composted, creating a completely waste-free operation.",
                impact: "Zero Waste"
              },
              {
                title: "Water Conservation",
                description: "Advanced irrigation systems use 80% less water than traditional farming methods.",
                impact: "80% Less Water"
              },
              {
                title: "Biodiversity Protection",
                description: "Our farming practices support local ecosystems and maintain natural habitats.",
                impact: "Protected Ecosystems"
              }
            ].map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{impact.title}</h4>
                <p className="text-gray-600 mb-4">{impact.description}</p>
                <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {impact.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Innovation Hub */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Sustainability Innovation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Irrigation",
                description: "AI-powered systems that optimize water usage based on real-time weather and soil data.",
                icon: "🤖"
              },
              {
                title: "Vertical Farming",
                description: "Space-efficient vertical growing systems that maximize yield in minimal space.",
                icon: "📈"
              },
              {
                title: "Biomimicry",
                description: "Designing farming systems that mimic natural ecosystems for optimal sustainability.",
                icon: "🌍"
              }
            ].map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{innovation.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{innovation.title}</h4>
                <p className="text-gray-600">{innovation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100%", label: "Renewable Energy" },
              { number: "0", label: "Carbon Emissions" },
              { number: "80%", label: "Less Water Usage" },
              { number: "100%", label: "Waste Recycled" }
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