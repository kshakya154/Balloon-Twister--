import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Event Planner",
      text: "Absolutely stunning! The balloon decorations for my daughter's 5th birthday were beyond my expectations.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    },
    {
      name: "Rohan Mehta",
      role: "Interior Designer",
      text: "The baby shower decor was a dream come true! Guests couldn’t stop taking pictures. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Sanya Verma",
      role: "Wedding Organizer",
      text: "Incredible service! Our anniversary felt extra special thanks to their elegant decoration.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Ishaan Kapoor",
      role: "Party Host",
      text: "Everything was smooth and stress-free. My son’s birthday was a hit. Thank you for the wow factor!",
      image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">TESTIMONIALS</h2>
        <p className="text-gray-200 text-lg mb-12">
          Takeoff has showed tremendous skill in cost engineering over my time working with them. I can always rely on their expertise and professionalism.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        className="max-w-xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-gray-800 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <h3 className="mt-6 text-xl font-semibold text-white">{testimonial.name}</h3>
              <span className="text-sm text-blue-300 mb-4">{testimonial.role}</span>
              <p className="text-white max-w-md">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
