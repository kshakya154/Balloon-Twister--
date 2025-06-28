import React from "react";
import Testimonial from "../src/components/Testimonial";
import CustomQoute from "../src/components/CustomQoute";
import { FaClipboardList, FaCalendarAlt, FaBirthdayCake } from "react-icons/fa";
import { GiBalloons } from "react-icons/gi";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ✅ fixed from react-router to react-router-dom

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
  const [showContactModal, setShowContactModal] = useState(false);

  const onSubmit = async (data) => {
    try {
      setBackendError("");
      setIsSubmitting(true);

      const response = await fetch(
        "https://backend-balloon-twister.onrender.com/contact", // ✅ corrected endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    setValue("subject", value);
  };

  const testimonials = [
    {
      name: "Michael Cant...",
      time: "18 hours ago",
      review:
        "Such an amazing team! A professional service, very well organised that kno...",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Leah Adams",
      time: "7 days ago",
      review:
        "Although we didn’t originally book Pack and Stack Removals, they...",
      image:
        "https://media.istockphoto.com/id/2099403180/photo/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=fd9yaVrgWeZIHTfllbUmxTjPRVD2b79Yzt4HQlQfNSA=",
    },
    {
      name: "Mohammad N...",
      time: "14 days ago",
      review:
        "Excellent service! Highly recommended. This team’s process is super...",
      image:
        "https://media.istockphoto.com/id/2151919066/photo/portrait-of-a-young-man-indoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ug1JQMLsTh8FugUj0PFPdr7l5AtDZysUuE-SVg1TmZ4=",
    },
    {
      name: "Caren Thain",
      time: "21 days ago",
      review:
        "Charlie and his team were excellent and so professional really goin...",
      image:
        "https://media.istockphoto.com/id/2166309222/photo/smiling-mature-woman-enjoying-healthy-living-by-the-sea-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=06Ljx8mQ0jhDJzOBxGEa0T8Mx-BtTjI-ZWUp7Mhbtc4=",
    },
    {
      name: "Kerry Ward",
      time: "21 days ago",
      review:
        "Pack and stack removals were absolutely brilliant, professional, reliable,...",
      image:
        "https://media.istockphoto.com/id/2186780921/photo/young-woman-programmer-focused-on-her-work-coding-on-dual-monitors-in-a-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=SAF-y0Rjzil_3FQi2KmAyXOAKYHaHRRbNxjQXnMsObk=",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="font-sans bg-gray-900 text-white mt-18">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 text-center h-screen bg-[url('https://images.unsplash.com/photo-1560128411-79892dd93bf8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsbG9vbiUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D')] bg-cover bg-center">
        <h2 className="text-xl md:text-2xl tracking-wide mt-20">
          Elevate Your Celebrations
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 leading-tight my-6 mt-10">
          Embrace the Magic
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg mb-10 text-gray-900 mt-5">
          Transform your events into unforgettable experiences with our premium
          balloon decorations and event decor services. From vibrant backdrops
          to stunning centerpieces, we bring your vision to life.
        </p>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            setShowContactModal(true);
          }}
          className="bg-gray-900 text-white px-6 py-3 rounded mt-20 hover:bg-[#cfae60] hover:text-black transition duration-300"
        >
          Discover the Magic
        </Link>
      </section>

      {/* Custom Quote */}
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

      {/* Showcase */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Elevate Your Events</h2>
        <p className="max-w-xl mx-auto text-white mb-10">
          Unleash the magic of balloons and transform your events into
          extraordinary experiences.
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

      {/* Services */}
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
              {
                title: "Dolly Car Booking",
                image: "/images/dolly1.jpg",
                content: "Bigger, bolder, balloon creations, Bolder wedding.",
              },
              {
                title: "Ring Decoration",
                image: "/images/v2.jpg",
                content: "Elegant Floral Setups!.",
              },
              {
                title: "Valentines Day",
                image: "/images/v3.jpg",
                content: "Love is in the Air… and in Every Balloon!",
              },
              {
                title: "Aann Prashan",
                image: "/images/v9.jpg",
                content: "A Sacred Bite, Celebrated Bright!",
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
                {/* <Link
                  to={`/services/${service.title}`}
                  className="mt-auto bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Learn More
                </Link> */}
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

      {/* Gallery */}
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

      {/* Personalization */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Personalized Perfection</h2>
          <p className="text-gray-300 mb-10">
            Elevate your events with our exceptional balloon decorations and
            event decor services.
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

      {/* Testimonials */}
      <section className="py-10 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            What Our Customers Say About Us
          </h2>

          <div className="flex flex-wrap justify-center items-center mb-6">
            <span className="text-lg font-semibold mr-2">Google Reviews</span>
            <span className="text-lg font-bold">5.0</span>
            <span className="text-yellow-400 ml-2">★★★★★</span>
            <span className="text-sm ml-2">(118)</span>
            <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Review us on Google
            </button>
          </div>

          <Slider {...sliderSettings}>
            {testimonials.map((t, index) => (
              <div key={index} className="p-4">
                <div className="border rounded-lg p-4 shadow-sm text-left">
                  <div className="flex items-center mb-2">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.time}</div>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-1">★★★★★</div>
                  <p className="text-sm text-white">{t.review}</p>
                  <a
                    href="#"
                    className="text-blue-500 text-sm mt-2 inline-block"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contact Form */}
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

        {backendError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-600 text-white p-3 rounded mb-4"
          >
            {backendError}
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

      {/* CTA */}
      <section className="py-16 text-center bg-[#f8ebe9] bg-[url('/images/h1.jpg')] bg-cover bg-center text-white px-4">
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
      {showContactModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-60 flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-lg relative"
          >
            {/* Close button */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

            {successMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-600 text-white p-3 rounded mb-4"
              >
                {successMessage}
              </motion.div>
            )}

            {backendError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-600 text-white p-3 rounded mb-4"
              >
                {backendError}
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm">Name</label>
                <input
                  {...register("Name", { required: "Name is required" })}
                  className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
                  placeholder="Your name"
                />
                {errors.Name && (
                  <p className="text-red-500 text-sm">{errors.Name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm">Email</label>
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
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm">Subject</label>
                <div className="flex gap-3 mt-1">
                  {["General Inquiry", "Support", "Feedback"].map((subject) => (
                    <label key={subject} className="flex items-center gap-1">
                      <input
                        type="radio"
                        checked={selectedSubject === subject}
                        onChange={() => handleSubjectChange(subject)}
                        className="text-orange-500"
                      />
                      {subject}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full p-2 bg-gray-700 rounded mt-1 text-white"
                  placeholder="Type your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
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
        </div>
      )}
    </div>
  );
};

export default LandingPage;
