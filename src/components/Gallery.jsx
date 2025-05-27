import { motion } from 'framer-motion';
import React from 'react';
const galleryImages = [
  {
    src: '/images/v3.jpg',
    alt: 'Birthday balloon arch',
  },
  {
    src: '/images/img2.jpg',
    alt: 'Baby shower balloon setup',
  },
  {
    src: '/images/img3.jpg',
    alt: 'Elegant wedding balloon decor',
  },
  {
    src: '/images/img4.jpg',
    alt: 'Corporate event balloon backdrop',
  },
  {
    src: '/images/v9.jpg',
    alt: 'Corporate event balloon backdrop',
  },
  {
    src: '/images/h7.jpg',
    alt: 'Corporate event balloon backdrop',
  },
  {
    src: '/images/h8.jpg',
    alt: 'Corporate event balloon backdrop',
  },
  {
    src: '/images/img8.png',
    alt: 'Corporate event balloon backdrop',
  },
  {
    src: '/images/img9.jpeg',
    alt: 'Corporate event balloon backdrop',
  },
  {
    src: '/images/img10.jpeg',
    alt: 'Corporate event balloon backdrop',
  },
  {
    src: '/images/h13.jpg',
    alt: 'Corporate event balloon backdrop',
  },
  {
    src: '/images/v24.jpg',
    alt: 'Corporate event balloon backdrop',
  },
  // Add more as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Gallery() {
  return (
    <section className="py-16 px-4  text-white bg-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Our Balloon Decor Gallery</h2>
        <p className="text-gray-500">Take a look at some of our favorite creations.</p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-72 object-cover transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
