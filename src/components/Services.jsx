import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mt-14 text-center lg:text-left px-4 lg:ml-32 flex justify-center mr-28">
          Services
        </h4>

        <div className="bg-gray-900 pt-16 pb-32 space-y-24">
          {[
            {
              title: "Balloon Arrangements",
              desc: "Enhance your celebrations with beautifully designed balloon bouquets, arches, and centerpieces, customized to match your theme and bring joy to every occasion",
              img: "https://media.istockphoto.com/id/1352398824/photo/birthday-cake-on-a-background-balloons-party-decor-copy-space-trendy-cake-delicious-wedding.jpg?s=612x612&w=0&k=20&c=T4wlEs_JmC2XOMsCBSzTCBmp7bKRHbCkwjs4RlZpPjU=",
              reverse: false,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984M13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0"
                  />
                </svg>
              ),
            },
            {
              title: "Event Styling",
              desc: "From intimate gatherings to grand celebrations, we create stunning event setups with themed decorations, elegant backdrops, and personalized styling to make your event unforgettable",
              img: "https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=",
              reverse: true,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25..."
                  />
                </svg>
              ),
            },
            {
              title: "Balloon Installations",
              desc: "Transform your venue with breathtaking balloon installations, including garlands, walls, and ceiling décor, adding a touch of elegance, fun, and creativity to your special event",
              img: "https://media.istockphoto.com/id/2217079818/photo/colorful-balloon-display-enhances-the-vibrant-atmosphere-at-a-festive-event-in-an-urban.jpg?s=612x612&w=0&k=20&c=liRnfnkfUMa1ZAeaIS48pRLV-XF94SdQqs97ptHgxmA=",
              reverse: false,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487..."
                  />
                </svg>
              ),
            },
          ].map((service, idx) => (
            <div key={idx} className="px-4 sm:px-6 lg:px-8">
              <div
                className={`flex flex-col-reverse ${
                  service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10`}
              >
                <div className="text-center lg:text-left lg:w-1/2">
                  <div className="flex justify-center lg:justify-start">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-700">
                      {service.icon}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-6">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-gray-300">
                    {service.desc}
                  </p>
                  <div className="mt-6">
                    <Link
                      className="inline-flex rounded-lg bg-orange-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-orange-800"
                      to="/booking"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
