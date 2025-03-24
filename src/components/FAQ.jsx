import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide customized balloon decorations for birthdays, weddings, corporate events, baby showers, and more!",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 1-2 weeks in advance to secure your preferred date and theme. However, last-minute bookings are accepted based on availability.",
  },
  {
    question: "Do you offer themed balloon decorations?",
    answer:
      "Yes! We can create decorations based on any theme, including cartoon characters, luxury events, seasonal themes, and more.",
  },
  {
    question: "How much do your balloon decorations cost?",
    answer:
      "Our pricing depends on the event type, decoration size, and customization. Contact us for a free quote!",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, bank transfers, PayPal, and cash payments.",
  },
  {
    question: "Do you deliver and set up the decorations?",
    answer:
      "Yes! We handle everything from delivery, setup, and takedown after the event if required.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Setup time depends on the decoration size but typically takes between 1-3 hours.",
  },
  {
    question: "Can I request custom colors and designs?",
    answer:
      "Absolutely! We specialize in custom balloon arches, backdrops, bouquets, and more.",
  },
  {
    question: "What happens if the event is postponed?",
    answer:
      "We will do our best to reschedule your booking based on availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <button
                className="flex justify-between items-center w-full text-left text-white font-semibold text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
