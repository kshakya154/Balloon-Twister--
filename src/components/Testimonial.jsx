import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      text: "Absolutely stunning! The balloon decorations for my daughter's 5th birthday were beyond my expectations. The colors, the arrangement, and the creativity were just perfect. It made the whole venue feel magical. Will definitely book again!",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    },
    {
      name: "Rohan Mehta",
      text: "I booked them for a baby shower, and it was a dream come true! The attention to detail and color coordination were spot-on. Our guests couldn’t stop taking pictures. Highly recommend their services!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Sanya Verma",
      text: "Incredible service! Everything was set up beautifully and on time. Our anniversary celebration felt extra special thanks to their elegant decoration. Their team is so polite and professional!",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Ishaan Kapoor",
      text: "From the first call to the final balloon, everything was smooth and stress-free. My son’s birthday was a hit. Thank you for bringing the wow factor!",
      image:
        "https://unsplash.com/photos/man-wearing-black-framed-sunglasses-mjRwhvqEC0U?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="bg-gray-900 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <blockquote className="rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 h-full">
                <div className="flex items-center gap-4">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-white">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-200">{testimonial.text}</p>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
