import { useEffect, useState } from "react";
import React from "react";
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
    }, 2500); // Change slide every 2s

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md mt-24 mb-0">
      <div className="relative w-full h-64 sm:h-80 md:h-96">
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
        <div >
          {/* Slide {currentIndex} */}
        </div>
      </div>
    </div>
  );
}
