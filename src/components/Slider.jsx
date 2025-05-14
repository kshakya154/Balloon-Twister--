import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Slider() {
  const images = [
    "/images/img2.jpg",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img1.png",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img7.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="w-full h-full relative">
        {/* Background Images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Centered Link Buttons */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-6">
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-200 hover:text-black transition"
          >
            About Us
          </Link>
          <Link
            to="/booking"
            className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-200
            hover:text-black transition"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
