"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Work() {
  const getProjectLink = (title) => {
    switch (title) {
      case "Cubie Farm Operations":
        return "/work/farm-operations";
      case "Voxel Processing Plant":
        return "/work/processing-plant";
      case "Cubie Research Lab":
        return "/work/research-lab";
      case "Cube Distribution Center":
        return "/work/distribution-center";
      case "Cubie Community Center":
        return "/work/community-center";
      case "Sustainable Cube Farm":
        return "/work/sustainable-farm";
      default:
        return "/work";
    }
  };

  const projects = [
    {
      id: 1,
      title: "Cubie Farm Operations",
      description: "Our main farming facility where we grow and harvest premium cubes. Features automated irrigation systems and sustainable cube cultivation techniques.",
      image: "/images/farm.jpg",
      category: "Farming",
      year: "2024"
    },
    {
      id: 2,
      title: "Voxel Processing Plant",
      description: "State-of-the-art facility where raw cubes are processed into high-quality voxel products. Includes quality control and packaging operations.",
      image: "/images/cubes-rare.jpg",
      category: "Manufacturing",
      year: "2024"
    },
    {
      id: 3,
      title: "Cubie Research Lab",
      description: "Advanced research facility where we develop new cube varieties and improve farming techniques. Home to our experimental cube breeding program.",
      image: "/images/research.jpg",
      category: "Research",
      year: "2023"
    },
    {
      id: 4,
      title: "Cube Distribution Center",
      description: "Our logistics hub where cubes are sorted, packaged, and shipped worldwide. Features automated sorting systems and climate-controlled storage.",
      image: "/images/work.jpg",
      category: "Logistics",
      year: "2024"
    },
    {
      id: 5,
      title: "Cubie Community Center",
      description: "A gathering place for our cubie workers and their families. Includes recreational facilities, dining areas, and educational programs.",
      image: "/images/about.jpg",
      category: "Community",
      year: "2023"
    },
    {
      id: 6,
      title: "Sustainable Cube Farm",
      description: "Eco-friendly farming operation using renewable energy and organic cube cultivation methods. Zero-waste processing and carbon-neutral operations.",
      image: "/images/sustainable.jpg",
      category: "Sustainability",
      year: "2024"
    }
  ];

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
            Cubie Operations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Discover how our cubie people work together to farm, process, and distribute the finest cubes in the digital world.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From farming to processing, our cubie workforce operates state-of-the-art facilities across the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Link href={getProjectLink(project.title)}>
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cubie Workforce Stats</h2>
            <p className="text-gray-600">Our dedicated cubie team by the numbers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1,247", label: "Cubie Workers", icon: "👥" },
              { number: "156", label: "Cube Varieties", icon: "🧊" },
              { number: "24/7", label: "Operations", icon: "⚡" },
              { number: "99.9%", label: "Quality Rate", icon: "⭐" }
            ].map((stat, index) => (
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} PixelFarmer Cubie Operations. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 