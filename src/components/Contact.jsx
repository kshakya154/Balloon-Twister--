import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { databases } from "../appwrite/appwrite";
import { ID } from "appwrite";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
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

      const response = await fetch("http://localhost:4000/contact", {
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
    <div className="min-h-screen bg-gray-900 text-white p-8 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div>
          <h1 className="text-3xl font-bold text-orange-400">Let's Connect</h1>
          <p className="mt-4 text-lg">
            Planning a party or special event? Let’s bring your balloon vision
            to life!. Reach out today — we’d love to decorate your celebration
            with joy and color!
          </p>

          <div className="mt-6 space-y-3 text-base">
            <p>
              <strong>Email:</strong> Info@balloontwister.com
            </p>
            <p>
              <strong>Phone:</strong> +91-9896578836 , +91-9017303937
            </p>
            <p>
              <strong>Address:</strong> Housing Board Colony, Ambala Cantt ||
              2140 vikas nagar chandigarh
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-6 text-2xl text-orange-400">
            <a href="mailto:Info@balloontwister.com">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com/ballontwister" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/balloontwister" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/919896578836" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com/balloontwister" target="_blank">
              <FaTwitter />
            </a>
          </div>

          {/* Resume Button */}

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7020.9363380681225!2d76.85043686439528!3d30.33606172659369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb66b63897745%3A0xd0753d11a2f8cfa9!2sNetaji%20Subhash%20Chandra%20Bose%20Park!5e0!3m2!1sen!2sin!4v1748253882674!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 bg-opacity-40 p-6 rounded-xl shadow-xl"
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
      </div>
    </div>
  );
}
