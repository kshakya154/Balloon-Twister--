import React from "react";
import Testimonial from "../src/components/Testimonial";
import CustomQoute from "../src/components/CustomQoute";
import { FaClipboardList, FaCalendarAlt, FaBirthdayCake } from "react-icons/fa";
import { GiBalloons } from "react-icons/gi";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router";
const LandingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [selectedSubject, setSelectedSubject] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [backendError, setBackendError] = useState("");

  const onSubmit = async (data) => {
    try {
      setBackendError("");
      setIsSubmitting(true);

      const response = await fetch("http://localhost:4000/landing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setSuccessMessage(result.message || "Message sent successfully!");
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage("");
        reset();
        setSelectedSubject("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setBackendError(error.message);
      setIsSubmitting(false);
    }
  };

  {
    backendError && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-red-600 text-white p-3 rounded mb-4"
      >
        {backendError}
      </motion.div>
    );
  }

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    setValue("subject", value);
  };
  return (
    <div className="font-sans bg-gray-900 text-white mt-18">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 text-center bg-[url('https://images.unsplash.com/photo-1560128411-79892dd93bf8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsbG9vbiUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D')] bg-cover bg-center">
        <h2 className="text-xl md:text-2xl tracking-wide">
          Elevate Your Celebrations
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 leading-tight my-6">
          Embrace the Magic
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg mb-10 text-gray-900">
          Transform your events into unforgettable experiences with our premium
          balloon decorations and event decor services. From vibrant backdrops
          to stunning centerpieces, we bring your vision to life.
        </p>
        <Link
          to="/"
          className="bg-gray-900 text-white px-6 py-3 rounded mt-20 hover:bg-[#cfae60] transition duration-300"
        >
          Discover the Magic
        </Link>
      </section>

      {/* custom qoute section */}
      <CustomQoute
        subheading="Make an Entrance They'll Never Forget"
        heading="Fill out enquiry form"
        buttonText="Inquire Now"
        buttonLink="/booking"
        steps={[
          {
            title: "Fill Out Inquiry Form",
            icon: <FaClipboardList size={40} className="text-orange-600" />,
            description:
              "Click below to fill out our inquiry form and we will get back to you",
          },
          {
            title: "Discuss Your Vision",
            icon: <GiBalloons size={40} className="text-orange-600" />,
            description:
              "We’ll discuss your event and pricing in further detail with you",
          },
          {
            title: "Mark The Calendar",
            icon: <FaCalendarAlt size={40} className="text-orange-600" />,
            description:
              "We require a 40% deposit to book your date on our calendar.",
          },
          {
            title: "Event Day!",
            icon: <FaBirthdayCake size={40} className="text-orange-600" />,
            description:
              "We arrive and install everything on your big day! not to worry",
          },
        ]}
      />

      {/* Showcase Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Elevate Your Events</h2>
        <p className="max-w-xl mx-auto text-white mb-10">
          Unleash the magic of balloons and transform your events into
          extraordinary experiences. Our team of experts will work closely with
          you to curate personalized decor that leaves a lasting impression.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <img
            src="images/v2.jpg"
            alt="Balloon decor 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="images/v3.jpg"
            alt="Balloon decor 2"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* services Section */}

      <section className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Birthday",
                image: "/images/h3.jpg",
                content:
                  "Celebrate with vibrant balloon decor and joyful vibes!",
              },
              {
                title: "Corporate Events",
                image: "/images/h6.jpg",
                content:
                  "Add flair to your events with our classy balloon setups.",
              },
              {
                title: "Baby Shower",
                image: "/images/h8.jpg",
                content:
                  "Make your baby shower unforgettable with our cute designs.",
              },
              {
                title: "Anniversary",
                image: "/images/h10.jpg",
                content:
                  "Celebrate love with elegant and romantic balloon designs.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-orange-500/40 transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-400">
                  {service.title}
                </h3>
                <p className="text-sm mb-4">{service.content}</p>
                <Link
                  to={`/services/${service.title}`}
                  className="mt-auto bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="bg-orange-500 px-6 py-3 text-white rounded-lg hover:bg-orange-600"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-900 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Balloons that Captivate
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img
            src="/images/h7.jpg"
            alt="Balloon 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="/images/h12.jpg"
            alt="Balloon 2"
            className="rounded-lg shadow-md"
          />
          <img
            src="/images/h4.jpg"
            alt="Balloon 3"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="text-center mt-10 text-2xl hover:text-blue-300">
          <Link to="/gallery">View all Collection</Link>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Personalized Perfection</h2>
          <p className="text-gray-300 mb-10">
            Elevate your events with our exceptional balloon decorations and
            event decor services. Our team of skilled professionals will work
            closely with you to bring your vision to life, crafting stunning
            displays that captivate and delight your guests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/images/h2.jpg"
              alt="Decor 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="/images/h5.jpg"
              alt="Decor 2"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* <!-- Testimonials Section --> */}
      <Testimonial />

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 bg-opacity-40 p-6 rounded-xl shadow-xl w-full max-w-3xl mx-auto my-16"
      >
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

        {successMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-600 text-white p-3 rounded mb-4"
          >
            {successMessage}
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label>Name</label>
            <input
              {...register("Name", { required: "Name is required" })}
              className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
              placeholder="Your name"
            />
            {errors.Name && (
              <p className="text-red-500">{errors.Name.message}</p>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label>Subject</label>
            <div className="flex gap-4 mt-1">
              {["General Inquiry", "Support", "Feedback"].map((subject) => (
                <label key={subject} className="flex items-center gap-1">
                  <input
                    type="radio"
                    checked={selectedSubject === subject}
                    onChange={() => handleSubjectChange(subject)}
                    className="form-radio text-orange-500"
                  />
                  {subject}
                </label>
              ))}
            </div>
            {errors.subject && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label>Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
              rows="4"
              placeholder="Type your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-2 rounded font-semibold transition ${
              isSubmitting
                ? "bg-green-600"
                : "bg-orange-600 hover:bg-orange-700"
            }`}
          >
            {isSubmitting ? "Message Sent" : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      {/* CTA Section */}
      <section className="py-16 text-center bg-[#f8ebe9] bg-[url('/images/img1.png')] bg-cover bg-center text-white px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">
          Ready to Create Something Magical?
        </h2>
        <Link
          to="/"
          className="mt-6 bg-[#1f2d53] text-white px-6 py-3 rounded hover:bg-[#152041] transition duration-300"
        >
          Discover More
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
