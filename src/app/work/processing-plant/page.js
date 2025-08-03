"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function ProcessingPlant() {
  return (
    <main className="bg-white text-gray-800">
      <Header currentPage="work" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Voxel Processing Plant
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            State-of-the-art facility where raw cubes are processed into high-quality voxel products with precision engineering.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Cube Processing</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Our processing plant transforms raw cubes into premium voxel products using cutting-edge technology 
            and an alarming amount of anxiety about geometric perfection. Every cube undergoes rigorous quality 
            control, existential questioning, and a thorough background check to meet our impossibly exacting 
            standards that we&apos;re constantly changing.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            The facility features automated assembly lines that occasionally work as intended, robotic quality 
            inspection systems with trust issues, and advanced packaging operations run by machines that take 
            their jobs way too seriously. Our skilled cubie technicians oversee every step of the process while 
            muttering about &apos;back in my day&apos; and questioning whether cubes have gotten softer over the years.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            The processing journey includes multiple stages of cube counseling, geometric realignment therapy, 
            and a final &apos;confidence boost&apos; treatment where cubes are told they&apos;re special before being shipped 
            off into an uncertain world. Our quality control team has developed an impressive ability to find 
            flaws invisible to the naked eye, leading to heated philosophical debates about what constitutes cube 
            perfection.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Automated Assembly
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Quality Control
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Precision Engineering
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
              src="/images/about.jpg"
              alt="Voxel Processing Plant"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Processing Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Processing Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Raw Cube Reception",
                description: "Fresh cubes from our farms are received and inspected for quality standards."
              },
              {
                step: "02",
                title: "Precision Cutting",
                description: "Advanced cutting systems shape cubes to exact specifications with micron precision."
              },
              {
                step: "03",
                title: "Quality Inspection",
                description: "Robotic systems and cubie inspectors verify every cube meets our standards."
              },
              {
                step: "04",
                title: "Packaging & Shipping",
                description: "Finished products are carefully packaged and prepared for worldwide distribution."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-3">{step.step}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Robotic Assembly",
              description: "Advanced robotics handle precise assembly and quality control with unmatched accuracy.",
              icon: "🤖"
            },
            {
              title: "Quality Assurance",
              description: "Multi-stage inspection process ensures every product meets our premium standards.",
              icon: "✅"
            },
            {
              title: "Efficient Operations",
              description: "Optimized workflow and automation maximize productivity while maintaining quality.",
              icon: "⚡"
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
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Daily Output" },
              { number: "99.9%", label: "Quality Rate" },
              { number: "24/7", label: "Operations" },
              { number: "50+", label: "Product Lines" }
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