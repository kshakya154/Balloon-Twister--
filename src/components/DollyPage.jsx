import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import DollySlider from "./DollySlider";

const DollyPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess(false);
    try {
      const response = await fetch("http://localhost:4000/dolly", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert("Error: " + result.message || "Something went wrong");
        console.error("Submission error:", result);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden bg-[#0c162d] min-h-screen mt-6">
      {/* Slider with Heading Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-screen h-screen"
      >
        <DollySlider />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white bg-opacity-200 px-6 py-4 rounded-lg bg-black">
            Dolly Car Booking
          </h1>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto  py-10 space-y-12">
        {/* Description Section */}
        <motion.div
          className="text-white leading-relaxed space-y-4 text-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            At Balloon Bliss, we believe every celebration deserves a grand
            entrance — and nothing does it better than our Dolly Car Booking
            service. Whether it's a bride's royal arrival, a child’s magical
            birthday entry, or a divine procession for religious or cultural
            events, our beautifully decorated dolly cars are designed to turn
            heads and leave lasting impressions. Each dolly car is thoughtfully
            customized with premium decorations like vibrant flowers, fairy
            lights, elegant fabric drapes, themed cutouts, and unique props
            tailored specifically to your event. Want a princess-themed dolly
            car for your daughter’s birthday? Or a majestic, traditional setup
            for a wedding? We’ve got it covered. Our fleet includes various
            dolly car styles — from open-top floral wagons to enclosed,
            air-conditioned mini-chariots — all maintained with the highest
            standards of safety and hygiene. Our professional team ensures
            timely delivery, setup, and smooth operation throughout the event.
            We even offer music options, lighting effects, and personalized
            banners to add that extra sparkle to your celebration. Perfect for
            weddings, birthdays, anniversaries, pre-wedding shoots, dholki
            nights, baby showers, mata ki chowki, jagrata processions, and more
            — our dolly cars are not just transport but an experience. With
            flexible packages, easy booking options, and doorstep delivery, we
            take the stress out of planning and bring the joy straight to you.
            Let your loved ones shine and be the center of attention as they
            ride in elegance. Book your dolly car with Balloon Bliss today and
            make your celebration truly memorable!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 shadow-md rounded-lg p-6 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <input
              placeholder="Name"
              {...register("name", { required: true })}
              className="border p-2 rounded bg-gray-900"
            />
            <input
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
              className="border p-2 rounded bg-gray-900"
            />
            <input
              placeholder="Phone"
              type="tel"
              {...register("phone", { required: true })}
              className="border p-2 rounded bg-gray-900"
            />
            <input
              placeholder="Location"
              {...register("location", { required: true })}
              className="border p-2 rounded bg-gray-900"
            />
            <select
              {...register("cartype", { required: true })}
              className="border p-2 rounded bg-gray-900"
            >
              <option value="">Select Car Type</option>
              <option value="suv">SUV</option>
              <option value="sedan">Sedan</option>
              <option value="hatchback">Hatchback</option>
            </select>
          </div>
          <textarea
            placeholder="Additional Requests"
            {...register("additionalrequest")}
            className="w-full border p-2 rounded bg-gray-900 text-white"
          />

          <button
            type="submit"
            className={`px-6 py-2 rounded transition duration-300 text-white ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : success
                ? "bg-green-600 hover:bg-green-700"
                : "bg-orange-700 hover:bg-orange-800"
            }`}
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : success
              ? "Dolly Booked Successfully!"
              : "Submit"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default DollyPage;
