import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, image, link }) {
  return (
    <div className="bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white mb-4">{description}</p>
        <div className="flex justify-center gap-4">
          <Link
            to="/booking"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-base hover:bg-white hover:text-black transition"
          >
            Book Now
          </Link>
          <Link
            to={link}
            className=" text-base  px-4 py-2 rounded-lg hover:bg-blue-800 text-black hover:text-black transition hover:text-white bg-white "
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
