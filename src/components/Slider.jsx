import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Slider() {
  const images = [
    "/images/img8.png",
    "/images/img5.png",
    "/images/img4.jpg",
    "/images/img9.jpeg",
    // "/images/img1.png",
    "/images/img11.jpeg",
    "/images/img10.jpeg",
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

        {/* Centered Content + Buttons */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
            <div className="lg:w-2/3 w-full animate-fade-in-down">
              <h1 className="inline-block w-full text-3xl md:text-6xl font-bold text-blue-800 mb-4">
                Transform Your Events
              </h1>
              <h1 className="md:text-6xl text-3xl mb-4 font-bold text-gray-950 tracking-tight leading-tight">
                With Stunning Balloon{" "}
                <span className="border-b-4 border-green-400 -mb-20"></span>Decor
              </h1>

              <p className="mt-8 mb-16 md:leading-relaxed leading-normal text-gray-950 tracking-tight text-xl">
                Elevate every occasion with breathtaking balloon arrangements and
                creative event styling.
              </p>

              <div className="flex justify-center gap-6">
                {/* <Link
                  to="/contact"
                  className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-200 hover:text-black transition"
                >
                  About Us
                </Link> */}
                <Link
                  to="/booking"
                  className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-200 hover:text-black transition"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
