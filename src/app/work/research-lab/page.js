"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function ResearchLab() {
  return (
    <main className="bg-white text-gray-800">
      <Header currentPage="work" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Cubie Research Lab
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Advanced research facility where we develop new cube varieties and improve farming techniques through innovation.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Innovation at the Core</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our research lab is the heart of innovation in cube farming technology. Here, our brilliant 
              cubie scientists work tirelessly to develop new cube varieties, improve cultivation methods, 
              and push the boundaries of what's possible in digital agriculture.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The facility houses cutting-edge laboratories, experimental growing chambers, and advanced 
              analysis equipment. Our research team collaborates with leading digital universities and 
              agricultural institutions to stay at the forefront of cube farming technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Genetic Research
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                Innovation Hub
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Experimental Breeding
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
              alt="Cubie Research Lab"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Research Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cube Genetics",
                description: "Studying cube DNA to develop new varieties with enhanced properties and improved yield.",
                icon: "🧬"
              },
              {
                title: "Growth Optimization",
                description: "Researching optimal growing conditions and techniques to maximize cube quality and quantity.",
                icon: "📈"
              },
              {
                title: "Disease Resistance",
                description: "Developing cube varieties that are resistant to digital pests and environmental stresses.",
                icon: "🛡️"
              },
              {
                title: "Sustainability",
                description: "Creating eco-friendly farming methods that minimize environmental impact.",
                icon: "🌱"
              },
              {
                title: "Quality Enhancement",
                description: "Improving cube properties like color, texture, and durability through selective breeding.",
                icon: "✨"
              },
              {
                title: "Automation Research",
                description: "Developing new technologies to automate and optimize cube farming processes.",
                icon: "🤖"
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h4>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Research Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Quantum Cube Development",
                description: "Exploring the potential of quantum properties in cube farming for unprecedented yields.",
                status: "In Progress",
                progress: "75%"
              },
              {
                title: "Holographic Cube Varieties",
                description: "Developing cubes with holographic properties for enhanced visual appeal and market value.",
                status: "Testing Phase",
                progress: "60%"
              },
              {
                title: "Climate-Adaptive Cubes",
                description: "Creating cube varieties that can thrive in various digital climate conditions.",
                status: "Field Trials",
                progress: "85%"
              },
              {
                title: "Miniaturization Research",
                description: "Developing micro-cube varieties for specialized applications and compact farming.",
                status: "Lab Testing",
                progress: "40%"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full" 
                    style={{ width: project.progress }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500 mt-2">{project.progress} Complete</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Research Projects" },
              { number: "15", label: "Scientists" },
              { number: "50+", label: "Cube Varieties" },
              { number: "12", label: "Patents Filed" }
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