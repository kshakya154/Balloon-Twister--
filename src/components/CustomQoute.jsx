import { FaClipboardList, FaCalendarAlt, FaCloud, FaBirthdayCake } from 'react-icons/fa';
import { GiPartyPopper,GiBalloons } from 'react-icons/gi'; // Party icon
import { motion } from "framer-motion";
import React from "react";
import { Link } from 'react-router';
const steps = [
  {
    title: "Fill Out Inquiry Form",
    icon: <FaClipboardList size={40} className="text-orange-600" />,
    description:
      "Click below to fill out our inquiry form and we will get back to you.",
  },
  {
    title: "Discuss Your Vision",
    icon: <GiBalloons size={40} className="text-orange-600" />, // Replaced FaBalloons
    description: "We’ll discuss your event and pricing in further detail with you.",
  },
  {
    title: "Mark The Calendar",
    icon: <FaCalendarAlt size={40} className="text-orange-600" />,
    description: "We require a 40% deposit to book your date on our calendar.",
  },
  {
    title: "Event Day! ",
    icon: <FaBirthdayCake size={40} className="text-orange-600" />, // Alternative to FaPartyHorn
    description:
      "We arrive and install everything on your big day! not to worry",
  },
];

export default function CustomQoute() {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-lg p-10 text-center">
        <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">
          Let's get this party started!
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
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
              <div className="mb-4 transform hover:scale-120 transition duration-200">{step.icon}</div>
              <h4 className="font-semibold text-orange-500 uppercase text-xl mb-2">
                {step.title}
              </h4>
              <p className="text-white text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
          <br />
          <br />
        <Link to="/contact" className="mt-10 bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition ">
          Inquire Now
        </Link>
      </div>
    </section>
  );
}
