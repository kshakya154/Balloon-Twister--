import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Slider() {
  const images = [
    "/images/img8.png",
    "/images/img4.jpg",
    "/images/img9.jpeg",
    "/images/img11.jpeg",
    "/images/img10.jpeg",
    "/images/h5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-[calc(100vw-15px)] h-screen overflow-hidden relative rounded-b-xl mt-14">
      {/* Sliding background images */}
      <div className="w-full h-full absolute top-0 left-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-20" />
      </div>

      {/* Foreground content */}
      <div className="relative z-1 flex flex-col items-center justify-center text-center px-4 h-full">
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <motion.div
            className="lg:w-2/3 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tagline 1 - From Left with Glow */}
            <motion.h1
              className="text-3xl md:text-6xl font-bold text-orange-400 mb-4 glow"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform Your Events
            </motion.h1>

            {/* Tagline 2 - From Right with Glow */}
            <motion.h1
              className="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight glow"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              With Stunning Balloon Decor
            </motion.h1>

            {/* Scroll Animation Paragraph */}
            <p
              data-aos="fade-up"
              className="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl"
            >
              Elevate every occasion with breathtaking balloon arrangements and
              creative event styling.
            </p>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link
                to="/booking"
                className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-white hover:text-black transition"
              >
                Inquire Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
