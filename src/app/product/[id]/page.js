"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/Header";

export default function ProductDetail() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const products = [
    {
      id: 1,
      name: "Vintage Pixel Art Print",
      price: 89.99,
      images: ["/images/about.jpg", "/images/work.jpg", "/images/contact.jpg"],
      category: "Art",
      description: "Hand-crafted digital art piece featuring retro pixel aesthetics. This unique piece combines traditional pixel art techniques with modern digital tools to create a stunning visual experience.",
      longDescription: "This vintage pixel art print is the result of countless hours of meticulous work, where each pixel has been carefully placed to create a cohesive and beautiful image. The piece features a retro aesthetic that harkens back to the golden age of video games and digital art, while maintaining a contemporary appeal that fits perfectly in any modern space.",
      features: [
        "High-resolution digital print",
        "Available in multiple sizes",
        "Limited edition of 100",
        "Includes certificate of authenticity",
        "Ready to frame or display digitally"
      ],
      specifications: {
        "Dimensions": "Various sizes available",
        "Format": "Digital download + Print",
        "Resolution": "300 DPI",
        "Color Profile": "sRGB",
        "File Types": "PNG, JPG, PDF"
      }
    },
    {
      id: 2,
      name: "Cubie World Collection",
      price: 149.99,
      images: ["/images/work.jpg", "/images/about.jpg", "/images/contact.jpg"],
      category: "NFT",
      description: "Exclusive collection of animated cubie scenes and characters. Each piece is a unique digital asset stored on the blockchain.",
      longDescription: "The Cubie World Collection represents a breakthrough in digital art and blockchain technology. Each piece in this collection features intricately designed cubie characters and scenes, all animated and interactive. These NFTs are not just static images but living, breathing digital art pieces that evolve and respond to their environment.",
      features: [
        "Blockchain-verified ownership",
        "Animated scenes and characters",
        "Interactive elements",
        "Exclusive community access",
        "Future airdrops included"
      ],
      specifications: {
        "Blockchain": "Ethereum",
        "Token Standard": "ERC-721",
        "Animation": "Yes",
        "Interactivity": "Yes",
        "Rarity": "Limited Edition"
      }
    },
    {
      id: 3,
      name: "AI-Generated Music Album",
      price: 24.99,
      images: ["/images/contact.jpg", "/images/about.jpg", "/images/work.jpg"],
      category: "Music",
      description: "Original AI-generated tracks with custom vocals and lyrics. A groundbreaking fusion of artificial intelligence and human creativity.",
      longDescription: "This album represents the cutting edge of AI-generated music, featuring original compositions created entirely through artificial intelligence. Each track showcases unique AI-generated vocals, lyrics, and instrumentation, creating a sound that's both familiar and completely new. The album explores themes of technology, creativity, and the future of music production.",
      features: [
        "10 original AI-generated tracks",
        "High-quality audio files",
        "Lyrics included",
        "Behind-the-scenes documentation",
        "Exclusive bonus content"
      ],
      specifications: {
        "Format": "MP3, FLAC, WAV",
        "Bitrate": "320 kbps / Lossless",
        "Tracks": "10 songs",
        "Duration": "45 minutes",
        "Genre": "Experimental AI"
      }
    }
  ];

  const product = products.find(p => p.id === parseInt(params.id)) || products[0];

  const addToCart = () => {
    // In a real app, this would add to cart state
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <main className="bg-white text-gray-800">
      <Header currentPage="shop" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gray-900' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm text-blue-600 font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
              <p className="text-2xl font-bold text-gray-900 mt-4">${product.price}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">{key}</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <button
                onClick={addToCart}
                className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => p.id !== product.id).slice(0, 3).map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative h-48">
                  <Image
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedProduct.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">${relatedProduct.price}</span>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 