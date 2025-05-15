import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../src/components/ServiceCard";

const services = [
  {
    title: "Birthday",
    description: "Celebrate with vibrant balloon decor and joyful vibes!",
    image: "/images/img3.jpg",
    link: "/services/birthday",
  },
  {
    title: "Corporate Events",
    description: "Add flair to your events with our classy balloon setups.",
    image: "/images/img1.png",
    link: "/services/corporate",
  },
  {
    title: "Baby Shower",
    description: "Make your baby shower unforgettable with our cute designs.",
    image: "/images/img4.jpg",
    link: "/services/baby-shower",
  },
  {
    title: "Anniversary",
    description: "Celebrate love with elegant and romantic balloon designs.",
    image: "/images/img2.jpg",
    link: "/services/anniversary",
  },
];

export default function ServicesPage() {
  return (
    <motion.section
      className="py-16 px-4 bg-gray-900 mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-white mb-12 max-w-xl mx-auto">
          We specialize in making every event magical. Choose a service to learn more or get started with booking!
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
