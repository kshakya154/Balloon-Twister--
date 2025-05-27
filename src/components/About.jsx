import { motion } from "framer-motion";
import React from "react"
import { Link } from "react-router";
const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-6 py-12 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-blue-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Balloon Twister
        </motion.h1>
        <p className="text-lg text-white">
          We transform your moments into magical celebrations with custom balloon decorations for every occasion.
        </p>
        <img
          src="images/img10.jpeg"
          alt="Balloon decoration"
          className="rounded-2xl mt-8 shadow-lg w-full max-w-3xl mx-auto"
        />
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <motion.h2 className="text-2xl font-semibold text-blue-600 mb-4">
            🎯 Our Mission
          </motion.h2>
          <p className="text-white text-lg">
            To spread joy through colorful and creative balloon art, making every event visually unforgettable.
          </p>
        </div>
        <img
          src="images/img3.jpg"
          alt="Mission"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.h2 className="text-2xl font-semibold text-blue-600 mb-6">
          💼 What We Offer
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ul className="list-disc list-inside space-y-2 text-white text-lg">
            <li>🎈 Custom Balloon Garlands</li>
            <li>🎂 Birthday Backdrops</li>
            <li>👶 Baby Showers & Reveals</li>
            <li>🏢 Corporate Branding Events</li>
            <li>🌈 Theme-Based Party Designs</li>
          </ul>
          <img
            src="images/img4.jpg"
            alt="Services"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-12 rounded-2xl mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-2xl font-semibold text-blue-600 mb-6">
            🌟 Why Choose Us?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 text-left px-4">
            <ul className="list-disc list-inside text-white space-y-2 text-lg">
              <li>✅ Tailored Themes</li>
              <li>✅ Quality Balloons</li>
              <li>✅ Experienced Team</li>
              <li>✅ Fast Setup & Delivery</li>
            </ul>
            <img
              src="images/h2.jpg"
              alt="Why Choose Us"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto mb-20 text-center">
        <motion.h2 className="text-2xl font-semibold text-blue-600 mb-4">
          👥 Meet the Team
        </motion.h2>
        <p className="text-white text-lg mb-6">
          Our team of artists, planners, and balloon stylists bring joy and color to every celebration.
        </p>
        <img
          src="images/h9.jpg"
          alt="Team"
          className="rounded-xl shadow-lg w-full"
        />
      </section>

      {/* Testimonials */}
      <section className="bg-gray-800 py-12 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">🗨️ What Our Clients Say</h2>
          <div className="space-y-6">
            <blockquote className="bg-gray-700 shadow p-6 rounded-xl">
              <p className="italic">“They made my daughter's birthday magical! The balloon arch was stunning.”</p>
              <span className="block mt-2 font-semibold text-blue-600">— Priya R.</span>
            </blockquote>
            <blockquote className="bg-gray-700 shadow p-6 rounded-xl">
              <p className="italic">“Professional, creative, and super easy to work with. Highly recommended!”</p>
              <span className="block mt-2 font-semibold text-blue-600">— Rahul M.</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Fun Facts / Achievements */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">🎉 Fun Facts</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center text-lg font-semibold text-blue-600">
          <div className="bg-gray-800 rounded-xl p-6">500+ Events Decorated</div>
          <div className="bg-gray-800 rounded-xl p-6">5 Years in Business</div>
          <div className="bg-gray-800 rounded-xl p-6">20+ Cities Served</div>
          <div className="bg-gray-800 rounded-xl p-6">100% Client Satisfaction</div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">🖼️ Gallery Sneak Peek</h2>
        <div className="grid md:grid-cols-3 gap-4">   
            <img src="/images/img10.jpeg"/>
            <img src="/images/img4.jpg"/>
            <img src="/images/img3.jpg"/>
        </div>
        <div className="text-center mt-6">
          <Link to="/gallery" className="text-blue-600 underline hover:text-blue-500">
            View Full Gallery →
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-800 py-12 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">📍 We Serve</h2>
          <p className="text-white mb-4">
            We proudly serve in major cities across India including:
          </p>
          <p className="text-blue-600 font-semibold">
            Delhi · Mumbai · Bangalore · Hyderabad · Chennai · Kolkata · Pune · Ahmedabad
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto text-center mt-16">
        <motion.h2
          className="text-3xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Ready to Celebrate in Style? 🎊
        </motion.h2>
        <p className="text-white text-lg mb-6">
          Book your event with us today and let the balloons do the talking!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition"
          >
            Contact Us
          </Link>
          <Link
            to="/gallery"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
          >
            View Gallery
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
