import React from "react";
import Work from "../src/components/work/Work";
import Services from "../src/components/Services";
import Testimonial from "../src/components/Testimonial";
import { motion } from "framer-motion";
import FAQ from "../src/components/FAQ";
import Slider from "../src/components/Slider";
import CustomQoute from "../src/components/CustomQoute";

// Icons
import { FaClipboardList, FaCalendarAlt, FaBirthdayCake } from 'react-icons/fa';
import { GiBalloons } from 'react-icons/gi';

function Homepage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Slider />
        <Work />
        <Services />
        <Testimonial />
        
        <CustomQoute
          subheading="Make an Entrance They'll Never Forget"
          heading="Fill out enquiry form"
          buttonText="Inquire Now"
          buttonLink="/booking"
          steps={[
            {
              title: "Fill Out Inquiry Form",
              icon: <FaClipboardList size={40} className="text-orange-600" />,
              description: "Click below to fill out our inquiry form and we will get back to you",
            },
            {
              title: "Discuss Your Vision",
              icon: <GiBalloons size={40} className="text-orange-600" />,
              description: "We’ll discuss your event and pricing in further detail with you",
            },
            {
              title: "Mark The Calendar",
              icon: <FaCalendarAlt size={40} className="text-orange-600" />,
              description: "We require a 40% deposit to book your date on our calendar.",
            },
            {
              title: "Event Day!",
              icon: <FaBirthdayCake size={40} className="text-orange-600" />,
              description: "We arrive and install everything on your big day! not to worry",
            }
          ]}
        />

        <FAQ />
      </motion.div>
    </div>
  );
}

export default Homepage;
