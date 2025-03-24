import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { databases } from "../appwrite/appwrite";
import { ID } from "appwrite";

function Booking() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showMessage, setShowMessage] = useState(false);
  const [buttonConfirmed, setButtonConfirmed] = useState(false);

  const locations = [
    "Chandigarh",
    "Mohali",
    "Panchkula",
    "Zirakpur",
    "Kharar",
    "Derabassi",
    "Pinjore",
    "Baddi",
  ];

  const onSubmit = async (data) => {
    try {
      // Formatting data to match Appwrite's required structure
      const formattedData = {
        Name: data.name, // Capitalized to match Appwrite field
        email: data.email,
        phone: data.phone,
        event: data.eventType, // Matching Appwrite's schema
        date: new Date(data.eventDate).toISOString(), // Convert to correct format
        location: data.eventLocation,
        types: data.services ? data.services.join(", ") : "", // Convert array to string
        theme: data.theme || "",
        "additional-demand": data.additionalRequests || "", // Match Appwrite field name
      };

      const response = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        ID.unique(),
        formattedData
      );

      console.log("Document created:", response);

      // Show success message
      setShowMessage(true);
      setButtonConfirmed(true);
      setTimeout(() => {
        setShowMessage(false);
        setButtonConfirmed(false);
      }, 3000);
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6 relative mt-14">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Book Your Event</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input
            type="tel"
            {...register("phone", { required: true })}
            placeholder="Phone Number"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          />
          {errors.phone && (
            <p className="text-red-500">Phone number is required</p>
          )}

          <select
            {...register("eventType", { required: true })}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          >
            <option value="">Select Event Type</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate</option>
          </select>
          {errors.eventType && (
            <p className="text-red-500">Event type is required</p>
          )}

          <input
            type="date"
            {...register("eventDate", { required: true })}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          />
          {errors.eventDate && (
            <p className="text-red-500">Event date is required</p>
          )}

          <select
            {...register("eventLocation", { required: true })}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          {errors.eventLocation && (
            <p className="text-red-500">Location is required</p>
          )}

          <div className="flex flex-wrap gap-3">
            {[
              "Balloon Arrangements",
              "Event Styling",
              "Balloon Installations",
            ].map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("services")}
                  value={service}
                  className="w-5 h-5 text-blue-600"
                />
                {service}
              </label>
            ))}
          </div>

          <input
            type="text"
            {...register("theme")}
            placeholder="Theme/Color Preferences"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          />

          <textarea
            {...register("additionalRequests")}
            placeholder="Additional Requests"
            rows="3"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
          ></textarea>

          {/* <input
            type="file"
            {...register("images")}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded"
          /> */}

          <button
            type="submit"
            className={`w-full p-3 rounded text-lg font-semibold ${
              buttonConfirmed ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {buttonConfirmed ? "Booking Confirmed" : "Confirm Booking"}
          </button>
        </form>
      </motion.div>

      {showMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="absolute top-10 bg-green-500 text-white p-4 rounded shadow-lg"
        >
          Booking confirmed! We will contact you soon.
        </motion.div>
      )}
    </div>
  );
}

export default Booking;
