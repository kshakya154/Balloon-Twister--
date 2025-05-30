// CustomQoute.js
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";

export default function CustomQoute({
  heading = "Get A Custom Quote",
  subheading = "Let's get this party started!",
  steps = [],
  buttonText = "Inquire Now",
  buttonLink = "/contact",
}) {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-lg p-10 text-center">
        <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">
          {subheading}
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 transform hover:scale-120 transition duration-200">{step.icon}</div>
              <h4 className="font-semibold text-orange-500 uppercase text-xl mb-2">
                {step.title}
              </h4>
              <p className="text-white text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <br /><br />
        <Link to={buttonLink} className="mt-10 bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
