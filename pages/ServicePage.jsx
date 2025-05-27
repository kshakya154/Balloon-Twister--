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
    image: "/images/img9.jpeg",
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
  {
    title: "Weddings & Engagements",
    description: "Celebrate love with elegant balloon artistry.",
    image: "/images/v28.jpg",
    link: "/services/wedding-engagement",
  },
  {
    title: " School & Community Events",
    description: "Where community fun meets balloon creativity.",
    image: "/images/v27.jpg",
    link: "/services/school-events",
  },
  {
    title: "Custom Balloon Bouquets",
    description: "Send love, one balloon at a time.",
    image: "/images/v26.jpg",
    link: "/services/custom-balloon-bouquets",
  },
  {
    title: "Balloon Sculptures & Art Installations",
    description: "Bigger, bolder, balloon creations.",
    image: "/images/v21.jpg",
    link: "/services/balloon-sculptures-art-installation",
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
