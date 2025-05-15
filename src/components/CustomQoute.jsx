import { FaClipboardList, FaCalendarAlt, FaCloud, FaBirthdayCake } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi'; // Party icon
import { motion } from "framer-motion";
import React from "react";
// import { Link } from 'lucide-react';
import { Link } from 'react-router';

const steps = [
  {
    title: "Fill Out Inquiry Form",
    icon: <FaClipboardList size={40} className="text-pink-400" />,
    description:
      "Click below to fill out our inquiry form and we will get back to you within 48 hours.",
  },
  {
    title: "Discuss Your Vision",
    icon: <GiPartyPopper size={40} className="text-pink-400" />, // Replaced FaBalloons
    description: "We’ll discuss your event and pricing in further detail.",
  },
  {
    title: "Let’s Get You On The Calendar",
    icon: <FaCalendarAlt size={40} className="text-pink-400" />,
    description: "We require a 40% deposit to book your date on our calendar.",
  },
  {
    title: "Event Day! Time to Party!",
    icon: <FaBirthdayCake size={40} className="text-pink-400" />, // Alternative to FaPartyHorn
    description:
      "We arrive and install everything on your big day! You don’t have to worry about a thing.",
  },
];

export default function CustomQoutes() {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-10 text-center">
        <h3 className="text-pink-500 font-semibold mb-2 text-sm uppercase tracking-wider">
          Let's get this party started!
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800">
          Get A Custom Quote
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
              <div className="mb-4">{step.icon}</div>
              <h4 className="font-semibold text-pink-500 uppercase text-sm mb-2">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
          <br />
          <br />
        <Link to="/contact" className="mt-10 bg-pink-400 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition">
          Inquire Now
        </Link>
      </div>
    </section>
  );
}
