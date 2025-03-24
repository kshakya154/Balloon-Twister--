import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div class="sm:flex items-center max-w-screen-xl text-white">
          <div class="sm:w-1/2 p-10">
            <div class="image object-center text-center">
              <img src="https://i.imgur.com/WbQnbas.png" />
            </div>
          </div>
          <div class="sm:w-1/2 p-5">
            <div class="text">
              <span class="text-white border-b-2 border-blue-700 uppercase">
                About us
              </span>
              <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
                Celebrate <span class="text-blue-700">With Balloons</span>
              </h2>
              <p class="text-white">
                We specialize in custom balloon décor for birthdays, weddings,
                baby showers, corporate events, and more. Our passion is turning
                ordinary spaces into extraordinary experiences with vibrant
                colors, creative designs, and eye-catching arrangements. With
                years of experience in the event decoration industry, our team
                is dedicated to delivering high-quality, personalized
                decorations that match your theme, style, and vision. Whether
                you need elegant balloon arches, fun balloon bouquets, or
                breathtaking backdrops, we’ve got you covered!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
