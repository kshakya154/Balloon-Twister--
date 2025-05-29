import React, { useState, useEffect } from 'react';

const images = [
  '/images/h1.jpg',
  '/images/h2.jpg',
  '/images/h3.jpg',
  '/images/h4.jpg',
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
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className="w-full flex-shrink-0 object-cover h-[500px]"
          />
        ))}
      </div>
    </div>
  );
};

export default DollySlider;
