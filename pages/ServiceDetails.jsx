import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

const serviceData = {
  birthday: {
    title: "Birthday Decoration",
    description:
      "A birthday is more than just a date on the calendar—it's a joyful celebration of life, love, and milestones. At our balloon decoration company, we turn every birthday into an unforgettable experience with vibrant, eye-catching designs tailored to the age and personality of the celebrant. Whether it's a child's magical first birthday with cartoon-themed balloons and colorful arches, or an elegant adult celebration with a sophisticated color palette, we bring your vision to life with creativity and precision. From entrance décor to photo booths, from themed setups to personalized name banners, every element is thoughtfully crafted to create a fun-filled, festive environment that radiates happiness and wonder.",
    images: ["/images/img3.jpg", "/images/img1.png", "/images/img2.jpg"],
  },
  anniversary: {
    title: "Anniversary Decoration",
    description:
      "Anniversaries are cherished milestones that deserve to be celebrated with elegance and romance. Our anniversary decoration service is crafted to help couples relive the magic of their journey together. We design warm, love-filled spaces using romantic color schemes such as red, gold, and silver, combined with ambient lighting, floral accents, and heart-shaped balloon décor. Whether it’s an intimate dinner setup for two or a grand celebration with friends and family, we incorporate personalized elements like photo displays, couple initials, and memory corners to make the event deeply meaningful. Every detail is carefully curated to create a cozy, charming atmosphere where love takes center stage and lasting memories are made.",
    images: ["/images/img2.jpg", "/images/img4.jpg", "/images/img1.png"],
  },
  corporate: {
    title: "Corporate Event Decoration",
    description:
      "Corporate events reflect your brand’s image and culture, and our decoration services help you make a lasting impression. We provide professional, sleek, and impactful balloon decorations for a wide range of corporate gatherings including product launches, office inaugurations, team celebrations, and annual functions. Our designs align with your brand aesthetics, using your company colors, logos, and themes to deliver a clean and cohesive look. From stylish balloon walls and welcome arches to elegant table décor and signage, we transform ordinary spaces into refined, engaging environments. With our expertise, your corporate event will not only look great but also feel professionally executed and welcoming for both employees and clients.",
    images: ["/images/img1.png", "/images/img4.jpg", "/images/img3.jpg"],
  },
  "baby-shower": {
    title: "Baby Shower Decoration",
    description:
      "Welcoming a new life into the world is a moment of pure joy, and our baby shower decoration service is designed to make this occasion as beautiful and heartwarming as it deserves to be. We create soft, whimsical setups that reflect the sweetness and innocence of the moment, using pastel color palettes, adorable balloon arrangements, and themed props like cradles, teddy bears, and baby clotheslines. Whether you're celebrating a boy, a girl, or keeping it neutral for a surprise, we tailor the entire ambiance to your preferences. With thoughtful touches like custom welcome boards, cozy seating areas, and elegant backdrop designs, your baby shower will be a touching, visually delightful celebration of new beginnings.",
    images: ["/images/img4.jpg", "/images/img3.jpg", "/images/img2.jpg"],
  },
};



const ServiceDetails = () => {
  const { service } = useParams();
  const data = serviceData[service];

  const [selectedImage, setSelectedImage] = useState(data?.images?.[0]);

  if (!data) return <div className="text-center text-white mt-10">Service not found</div>;

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white p-6 mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side: Image Gallery */}
        <div className="flex flex-col gap-4">
          <motion.img
            src={selectedImage}
            alt="Main"
            className="w-full rounded-xl shadow-lg object-cover h-[400px]"
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <div className="flex gap-2 overflow-x-auto">
            {data.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                  img === selectedImage ? "border-blue-500" : "border-transparent"
                } hover:border-blue-400 transition`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-lg leading-relaxed">{data.description}</p>
          <Link to="/booking">
            <Link to="/booking" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
              Book Now
            </Link>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;
