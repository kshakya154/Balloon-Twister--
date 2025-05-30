import React, { useState, useEffect } from 'react';

const images = [
  // '/images/dolly1.jpg',
  '/images/dolly2.jpg',
  '/images/dolly3.jpg',
  '/images/dolly4.jpg',
];

const DollySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className="w-screen h-screen flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default DollySlider;
