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
   FaInstagram
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

  const onSubmit = async (data) => {
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID_CONTACT,
        ID.unique(),
        data
      );
      setIsSubmitting(true);
      setSuccessMessage("Message sent successfully!");
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage("");
        reset();
        setSelectedSubject("");
      }, 3000);
    } catch (error) {
      console.error("Error creating contact document:", error);
    }
  };

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    setValue("subject", value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">Let's Connect</h1>
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
              Sec 34 Chandigarh
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-6 text-2xl text-cyan-400">
            <a href="mailto:kshakya154@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/yourprofile" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/917973182512" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank">
              <FaTwitter />
            </a>
          </div>

          {/* Resume Button */}

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.124306643507!2d76.37669701445346!3d30.327985581775037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910288b7f85ae69%3A0x55de7f30e15b9f1a!2sSanauri%20Adda!5e0!3m2!1sen!2sin!4v1684265012345!5m2!1sen!2sin"
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
                      className="form-radio text-cyan-500"
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
                isSubmitting ? "bg-green-600" : "bg-cyan-600 hover:bg-cyan-700"
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
