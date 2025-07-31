"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const banner = "/banner.jpg";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const sections = [
    {
      title: "About Me",
      text: [ 
      "I’m a multidisciplinary creative blending design, video, branding, and AI to craft compelling digital experiences. With roots in traditional graphic design and a career spanning print, web, and video, I’ve evolved with the times—integrating emerging technologies like AI-generated assets, 3D models in webGL, and custom development into my creative toolkit.",

"I run several YouTube channels as creative laboratories, experimenting with storytelling through AI-generated content. This includes music videos featuring original lyrics, AI vocals, and scenes filmed in virtual worlds like Second Life—where I combine visual design, narrative, and innovation to push the boundaries of art and technology.",

"My background includes years of agency and freelance work—from junior designer to creative director—alongside entrepreneurial experience running an online business. This unique blend gives me both a strategic eye and a deep understanding of how design and content function within a brand ecosystem."
      ],
      img: "/images/about.jpg",
    },
    {
      title: "Work",
  text: [
    <>
      I build immersive and interactive web experiences using modern technologies like JavaScript, React, and Three.js.
    </>,
    <>
      I also edit and apply motion design to video. As a hobby, I enjoy machinima and run the{" "}
      <a
        href="https://Iamavamusic.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lime-500 underline hover:text-lime-700"
      >
        I am AVA youtube channel
      </a>{" "}
      to showcase those creations.
    </>,
    <>
      Additionally, I have a long history as a fine artist and illustrator.
    </>,
  ],
      img: "/images/work.jpg",
    },
    {
      title: "The Cubie Folks",
      text: [
        <>
        Once upon a time I made a whole cubie world full of cubie people (aka voxel models). The NFTs of those animated scenes can be found{" "}
        <a
        href="https://foundation.app/@Pixel-Farmer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lime-500 underline hover:text-lime-700"
      >
         here.
      </a>{" "}
      </>,
        ],
        
      img: "/images/contact.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section className="w-full h-[60vh] relative">
        <Image
          src={banner}
          alt="Banner"
          width={1500}
          height={500}
          className="w-full h-auto"
        />
<div className="absolute inset-0 flex flex-col items-start mt-20 ml-20">
  <h1 className="text-2xl md:text-4xl text-white font-thin">Pixel Farmer</h1>
  <p className="text-white">(aka Lawn Walker)</p>
</div>
      </section>

      {/* Content Sections */}
      {sections.map((section, i) => (
        <section
          key={i}
          className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} items-center py-16 px-6 md:px-20 gap-8`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-center md:text-left"
          >
            {/* <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.title}</h2> */}
            <h2
              className={`${
                section.title === "About Me"
                  ? "text-lime-500"
                  : section.title === "Work"
                  ? "text-orange-500"
                  : section.title === "The Cubie Folks"
                  ? "text-sky-400"
                  : ""
              } text-2xl md:text-3xl font-semibold mb-4`}
            >
              {section.title}
            </h2>
              {section.text.map((para, idx) => (
              <p key={idx} className="text-lg text-gray-600 mb-6 leading-relaxed">
                {para}
              </p>
            ))}

            {/* <p className="text-lg text-gray-600">{section.text}</p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="w-[800px] h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={section.img}
                alt={section.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>
      ))}

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10">
        &copy; {new Date().getFullYear()} Pixel Farmer. All rights reserved.
      </footer>
    </main>
  );
}
