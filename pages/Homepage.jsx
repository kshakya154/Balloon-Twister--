import React from "react";
import Home from "../src/components/Home";
import Work from "../src/components/work/Work";
import Services from "../src/components/Services";
import About from "../src/components/About";
import Testimonial from "../src/components/Testimonial";
import { motion } from "framer-motion";
import FAQ from "../src/components/FAQ";
function Homepage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Home></Home>
        <Work></Work>
        <Services></Services>
        <Testimonial></Testimonial>
        <About></About>
        <FAQ></FAQ>
      </motion.div>
    </div>
  );
}

export default Homepage;
