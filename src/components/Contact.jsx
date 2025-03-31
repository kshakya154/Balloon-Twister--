import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { databases } from "../appwrite/appwrite";
import { ID } from "appwrite";
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
      const response = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID_CONTACT,
        ID.unique(),
        data
      );
      console.log("Document created:", response);
      console.log("Form Data:", data);
      setIsSubmitting(true);
      setSuccessMessage("Message sent successfully!");
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage("");
        reset();
        setSelectedSubject("");
      }, 3000);
    } catch (error) {
      console.error("Error creating document of contact", error);
    }
  };

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    setValue("subject", value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 bg-gray-800 bg-opacity-30 backdrop-blur-2xl shadow-2xl rounded-xl"
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          Get in Touch
        </h2>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute top-10 bg-green-500 text-white p-4 rounded shadow-lg"
          >
            Message sent successfully!
          </motion.div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white text-left">
              Name
            </label>
            <input
              placeholder="Enter your name"
              {...register("Name", { required: "Name is required" })}
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-gray-700 bg-opacity-50 backdrop-blur-md text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.Name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white text-left">
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full p-3 mt-1 border rounded-lg focus:ring-1 focus:ring-indigo-400 focus:outline-none bg-gray-700 bg-opacity-50 backdrop-blur-md text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2 text-left">
              Subject
            </label>
            <div className="flex space-x-4">
              {["General Inquiry", "Support", "Feedback"].map((subject) => (
                <label
                  key={subject}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    checked={selectedSubject === subject}
                    onChange={() => handleSubjectChange(subject)}
                    className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-400"
                  />
                  <span className="text-white">{subject}</span>
                </label>
              ))}
            </div>
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white text-left">
              Message
            </label>
            <textarea
              placeholder="Enter message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-gray-700 bg-opacity-50 backdrop-blur-md text-white"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-lg focus:ring-green-300 transition-all ${
              isSubmitting ? "bg-green-700" : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            {isSubmitting ? "Message Sent" : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
