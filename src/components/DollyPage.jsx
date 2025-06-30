import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import DollySlider from "./DollySlider";
import CustomQoute from "./CustomQoute";
import {
  FaClipboardList,
  FaCalendarAlt,
  FaBirthdayCake,
  FaCarSide,
  FaCrown,
  FaStar,
} from "react-icons/fa";
import { GiPartyPopper, GiBalloons } from "react-icons/gi";

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
      const response = await fetch(
        "https://backend-balloon-twister.onrender.com/dolly",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px] bg-black/40">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center shadow-xl px-6 py-4 rounded-xl">
            Arrive in Style on Your Big Day With - Wedding Cars.
          </h1>
        </div>
      </motion.div>

      <CustomQoute
        subheading="Make an Entrance They'll Never Forget"
        heading="Wedding Car Booking Process"
        buttonText="Book Your Wedding Car Now"
        buttonLink="#form"
        steps={[
          {
            title: "Submit Your Booking Details",
            icon: <FaClipboardList size={40} className="text-orange-600" />,
            description:
              "Fill out the reservation form with all your event details.",
          },
          {
            title: "Personalized Consultation",
            icon: <GiBalloons size={40} className="text-orange-600" />,
            description:
              "We’ll contact you to finalize the theme and car type.",
          },
          {
            title: "Reserve Your Spot! Aeap",
            icon: <FaCalendarAlt size={40} className="text-orange-600" />,
            description: "Pay a 40% deposit to confirm your booking.",
          },
          {
            title: "Celebrate in Style! with us",
            icon: <FaBirthdayCake size={40} className="text-orange-600" />,
            description:
              "Your Wedding car will arrive decorated and ready to go!",
          },
        ]}
      />

      {/* Pricing Section */}
      <div className="bg-gray-800 rounded-3xl shadow-lg text-white py-12 px-6 mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-orange-500">
          Pricing & Wedding Car Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Package */}
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-orange-600 hover:shadow-xl transition">
            <FaCarSide size={40} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Classic Car</h3>
            <p className="mb-4 text-gray-300">
              Simple floral decoration, suitable for birthdays or school
              functions.
            </p>
            <p className="text-2xl font-bold text-orange-400">₹2,999</p>
          </div>

          {/* Premium Package */}
          <div className="bg-orange-700 p-6 rounded-xl text-center text-white shadow-2xl scale-105">
            <FaCrown size={40} className="text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Car</h3>
            <p className="mb-4 text-orange-100">
              Themed setup, lights, music, and moderate floral decor. Perfect
              for weddings.
            </p>
            <p className="text-2xl font-bold text-white">₹5,999</p>
          </div>

          {/* Luxury Package */}
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-orange-600 hover:shadow-xl transition">
            <FaStar size={40} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Luxury Car</h3>
            <p className="mb-4 text-gray-300">
              Fully customized car, AC, deluxe props, drapes & photo-ready
              decor.
            </p>
            <p className="text-2xl font-bold text-orange-400">₹9,999</p>
          </div>
        </div>
      </div>

      {/* Description + Form Section */}
      <div className="max-w-5xl mx-auto py-10 space-y-12">
        <motion.div
          className="text-white leading-relaxed space-y-4 text-base sm:text-lg px-4 sm:px-6 md:px-12 lg:px-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            At Balloon Bliss, we believe every celebration deserves a grand
            entrance — and nothing does it better than our Wedding Car Booking
            service. Whether it's a bride's royal arrival, a child’s magical
            birthday entry, or a divine procession for religious or cultural
            events, our beautifully decorated Weddding cars are designed to turn
            heads and leave lasting impressions. Each Wedding car is thoughtfully
            customized with premium decorations like vibrant flowers, fairy
            lights, elegant fabric drapes, themed cutouts, and unique props
            tailored specifically to your event. Want a princess-themed Wedding
            car for your daughter’s birthday? Or a majestic, traditional setup
            for a wedding? We’ve got it covered. Our fleet includes various
            Wedding car styles — from open-top floral wagons to enclosed,
            air-conditioned mini-chariots — all maintained with the highest
            standards of safety and hygiene. Our professional team ensures
            timely delivery, setup, and smooth operation throughout the event.
            We even offer music options, lighting effects, and personalized
            banners to add that extra sparkle to your celebration. Perfect for
            weddings, birthdays, anniversaries, pre-wedding shoots, dholki
            nights, baby showers, mata ki chowki, jagrata processions, and more
            — our Wedding cars are not just transport but an experience. With
            flexible packages, easy booking options, and doorstep delivery, we
            take the stress out of planning and bring the joy straight to you.
            Let your loved ones shine and be the center of attention as they
            ride in elegance.
            <span className="block mt-4 font-semibold text-orange-400">
              Book your Wedding car with Balloon Bliss today and make your
              celebration truly memorable!
            </span>
          </p>
        </motion.div>

        <motion.form
          id="form"
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
              <option value="hatchback">Audi</option>
              <option value="hatchback">BMW</option>
              <option value="hatchback">Mercedes-Benz</option>
              <option value="hatchback">Jaguar</option>
              <option value="hatchback">Land Rover</option>
              <option value="hatchback">Lexus</option>
              <option value="hatchback">Volvo</option>
              <option value="hatchback">Porsche</option>
              <option value="hatchback">Ferrari</option>
              <option value="hatchback">Bently</option>
              <option value="hatchback">Rolls-Royce</option>
              <option value="hatchback">Lamborghini</option>
              <option value="hatchback">Aston Martin</option>
              <option value="hatchback">Fortuner</option>
              <option value="hatchback">Verna</option>
            </select>
            <input
              type="date"
              {...register("date", { required: true })}
              className="border p-2 rounded bg-gray-900"
            />
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
              ? "Wedding Car Reserved Successfully!"
              : "Reserve Your Wedding Car"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default DollyPage;
