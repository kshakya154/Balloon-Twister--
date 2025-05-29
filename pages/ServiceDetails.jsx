import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

const serviceData = {
  birthday: {
    title: "Birthday Decoration",
    description:
      "A birthday is more than just a date on the calendar—it's a joyful celebration of life, love, and milestones. At our balloon decoration company, we turn every birthday into an unforgettable experience with vibrant, eye-catching designs tailored to the age and personality of the celebrant. Whether it's a child's magical first birthday with cartoon-themed balloons and colorful arches, or an elegant adult celebration with a sophisticated color palette, we bring your vision to life with creativity and precision. From entrance décor to photo booths, from themed setups to personalized name banners, every element is thoughtfully crafted to create a fun-filled, festive environment that radiates happiness and wonder.",
    images: ["/images/h5.jpg", "/images/h6.jpg", "/images/h7.jpg"],
  },
  anniversary: {
    title: "Anniversary Decoration",
    description:
      "Anniversaries are cherished milestones that deserve to be celebrated with elegance and romance. Our anniversary decoration service is crafted to help couples relive the magic of their journey together. We design warm, love-filled spaces using romantic color schemes such as red, gold, and silver, combined with ambient lighting, floral accents, and heart-shaped balloon décor. Whether it’s an intimate dinner setup for two or a grand celebration with friends and family, we incorporate personalized elements like photo displays, couple initials, and memory corners to make the event deeply meaningful. Every detail is carefully curated to create a cozy, charming atmosphere where love takes center stage and lasting memories are made.",
    images: ["/images/img12.jpeg", "/images/img4.jpg", "/images/img10.jpeg"],
  },
  corporate: {
    title: "Corporate Event Decoration",
    description:
      "Corporate events reflect your brand’s image and culture, and our decoration services help you make a lasting impression. We provide professional, sleek, and impactful balloon decorations for a wide range of corporate gatherings including product launches, office inaugurations, team celebrations, and annual functions. Our designs align with your brand aesthetics, using your company colors, logos, and themes to deliver a clean and cohesive look. From stylish balloon walls and welcome arches to elegant table décor and signage, we transform ordinary spaces into refined, engaging environments. With our expertise, your corporate event will not only look great but also feel professionally executed and welcoming for both employees and clients.",
    images: ["/images/img12.jpeg", "/images/v26.jpg", "/images/img11.jpeg"],
  },
  "baby-shower": {
    title: "Baby Shower Decoration",
    description:
      "Welcoming a new life into the world is a moment of pure joy, and our baby shower decoration service is designed to make this occasion as beautiful and heartwarming as it deserves to be. We create soft, whimsical setups that reflect the sweetness and innocence of the moment, using pastel color palettes, adorable balloon arrangements, and themed props like cradles, teddy bears, and baby clotheslines. Whether you're celebrating a boy, a girl, or keeping it neutral for a surprise, we tailor the entire ambiance to your preferences. With thoughtful touches like custom welcome boards, cozy seating areas, and elegant backdrop designs, your baby shower will be a touching, visually delightful celebration of new beginnings.",
    images: ["/images/img4.jpg", "/images/h8.jpg", "/images/img8.png"],
  },
  "wedding-engagement": {
    title: " Weddings & Engagements",
    description:
      "Enhance the romance and elegance of your big day with luxurious balloon designs curated for weddings and engagements. Our custom decor includes heart-shaped arches, oversized initials, chic balloon bouquets, and romantic backdrops that blend seamlessly with floral arrangements and lighting. We work closely with couples and planners to create a dreamy ambiance that reflects your love story.We believe your love story deserves to be beautifully expressed. That’s why we go beyond simple decor, crafting balloon designs that complement your wedding aesthetic — whether it’s modern, rustic, romantic, or classic. Paired with lighting or floral arrangements, our balloon installations add a dreamy, Pinterest-worthy atmosphere to your big day.",
    images: ["/images/v10.jpg", "/images/v22.jpg", "/images/v26.jpg"],
  },
  "school-events": {
    title: "School & Community Events",
    description:
      "Liven up school fairs, annual days, festivals, and community events with our engaging balloon twisting entertainment. We bring energy, fun, and interactivity to the crowd with live balloon art, games, and colorful decor tailored to the event’s theme. Ideal for family-friendly events, our presence adds visual appeal and keeps kids happily occupied throughout the day.We know how important it is to make public events feel inviting and exciting. Our balloon artists are great with children and experienced in managing high-energy environments. We also offer themed packages — from patriotic holidays to school mascots — to match the event purpose and foster a sense of community pride and fun.",
    images: ["/images/v27.jpg", "/images/v5.jpg", "/images/img11.jpeg"],
  },
  "custom-balloon-bouquets": {
    title: "Custom Balloon Bouquets",
    description:
      "Surprise your loved ones with customized balloon bouquets delivered with care. Perfect for birthdays, anniversaries, graduations, or celebrations of any kind, our balloon bouquets can be personalized with names, messages, and favorite colors. Add-ons like flowers, chocolates, or plush toys can be included for an extra special touch. It’s a unique and joyful way to say “I’m thinking of you.We go beyond generic gifts by offering thoughtful customization. You can include special messages, name initials, or favorite cartoon characters to make each bouquet meaningful. Delivered with care and precision, our bouquets are perfect for surprising loved ones at home, work, or school — making everyday moments feel like celebrations.",
    images: ["/images/img11.jpeg", "/images/img10.jpeg", "/images/img9.jpeg"],
  },
  "dolly-car-booking": {
    title: "Dolly Car Booking",
    description:
      "This service is ideal for a bride or groom's grand entry, surprise birthday gifts, baby homecomings, or even promotional events. We offer compact or SUV-sized dollies based on your requirement, and our team ensures on-site decoration, timely setup, and hassle-free pickup. Every element used is of premium quality, ensuring your decoration looks perfect and lasts throughout the event.With our attention to detail and creative flair, your dolly will become the highlight of the occasion, drawing admiration and countless photo ops. One of our happy clients shared, The car dolly decoration was the highlight of my sister’s wedding entry. Everyone was clicking pictures and asking who did the décor. Thank you, Balloon Twister, for the magic!",
    images: ["/images/h4.jpg", "/images/h2.jpg", "/images/h1.jpg"],
  },
};

const ServiceDetails = () => {
  const { service } = useParams();
  const data = serviceData[service];

  const [selectedImage, setSelectedImage] = useState(data?.images?.[0]);

  if (!data)
    return (
      <div className="text-center text-white mt-10">Service not found</div>
    );

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
                  img === selectedImage
                    ? "border-orange-500"
                    : "border-transparent"
                } hover:border-orange-400 transition`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-lg leading-relaxed">{data.description}</p>
          <Link
            to={service === "dolly-car-booking" ? "/dolly" : "/booking"}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 w-32"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;
