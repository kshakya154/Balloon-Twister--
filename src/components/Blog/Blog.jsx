import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://backend-balloon-twister.onrender.com/blog"
        );
        const result = await response.json();
        setBlogs(result.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-10 mt-16">
      <h2 className="text-3xl font-semibold text-center text-white mb-10">
        Blog Posts
      </h2>

      <div className="space-y-10 ">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            {blog.image && (
              <div className="w-full md:w-1/2 h-96">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col justify-between w-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {blog.title}
                </h3>
                <div
                  className="text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.message.length > 200
                        ? blog.message.slice(0, 1000) + "..."
                        : blog.message,
                  }}
                ></div>
              </div>

              {/* Read More Button */}
              <div className="mt-4">
                <Link to={`/blog/${blog._id}`}>
                  <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded transition duration-200">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sticky Admin Button */}
      <div className="fixed bottom-5 right-5">
        <Link to="/adminlogin">
          <button className="bg-orange-700 text-white px-5 py-3 rounded-full shadow-lg hover:bg-orange-600 transition">
            Admin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
