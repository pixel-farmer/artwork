"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function CommunityCenter() {
  return (
    <main className="bg-white text-gray-800">
      <Header currentPage="work" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Cubie Community Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            A gathering place for our cubie workers and their families, fostering community and well-being.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Strong Communities</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our community center is the heart of cubie life, providing a space where workers and their 
              families can gather, learn, and grow together. We believe that happy cubies make better 
              cubes, and this facility reflects our commitment to their well-being and development.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The center features recreational facilities, educational programs, dining areas, and spaces 
              for social gatherings. It&apos;s designed to foster a sense of belonging and provide opportunities 
              for personal and professional growth within our cubie community.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                Recreational Activities
              </span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                Educational Programs
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Social Events
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
              alt="Cubie Community Center"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Community Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Recreation Center",
                description: "Sports facilities, gaming areas, and entertainment spaces for relaxation and fun.",
                icon: "🎮"
              },
              {
                title: "Learning Center",
                description: "Educational programs, skill development workshops, and training facilities.",
                icon: "📚"
              },
              {
                title: "Dining Hall",
                description: "Community dining area serving nutritious meals and fostering social connections.",
                icon: "🍽️"
              },
              {
                title: "Health & Wellness",
                description: "Medical facilities, fitness center, and wellness programs for cubie health.",
                icon: "💪"
              },
              {
                title: "Social Spaces",
                description: "Lounges, meeting rooms, and outdoor areas for community gatherings.",
                icon: "👥"
              },
              {
                title: "Child Care",
                description: "Safe and nurturing environment for cubie children while parents work.",
                icon: "👶"
              }
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{facility.title}</h4>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programs & Activities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Programs & Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Skill Development",
                description: "Workshops and training programs to help cubies develop new skills and advance their careers.",
                schedule: "Weekly",
                participants: "50+ cubies"
              },
              {
                title: "Cultural Events",
                description: "Celebrations, festivals, and cultural activities that bring the community together.",
                schedule: "Monthly",
                participants: "200+ cubies"
              },
              {
                title: "Sports & Fitness",
                description: "Organized sports leagues, fitness classes, and wellness programs for all ages.",
                schedule: "Daily",
                participants: "100+ cubies"
              },
              {
                title: "Family Programs",
                description: "Activities and events designed for families to spend quality time together.",
                schedule: "Weekends",
                participants: "75+ families"
              }
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h4>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Schedule: {program.schedule}</span>
                  <span>{program.participants}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Community Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Well-being",
                description: "Enhanced quality of life for cubie workers and their families through comprehensive support services.",
                icon: "😊"
              },
              {
                title: "Stronger Bonds",
                description: "Fostering meaningful relationships and a sense of belonging within the cubie community.",
                icon: "🤝"
              },
              {
                title: "Professional Growth",
                description: "Opportunities for skill development and career advancement within our organization.",
                icon: "📈"
              }
            ].map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{impact.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{impact.title}</h4>
                <p className="text-gray-600">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Community Members" },
              { number: "25+", label: "Weekly Activities" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Center Access" }
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