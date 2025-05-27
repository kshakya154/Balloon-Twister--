import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:4000/blog/${id}`);
        const result = await response.json();
        setBlog(result.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Blog not found.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-20"
    >
      <div className="flex flex-col">
        {/* Title for mobile */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:hidden">{blog.title}</h1>

        <div className="flex flex-col md:block">
          {/* Image */}
          {blog.image && (
            <div className="float-left mr-6 mb-4 w-full md:w-auto">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-[400px] h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Title for desktop */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 hidden md:block">{blog.title}</h1>

          {/* Content */}
          <div
            className="text-lg text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.message }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}

export default SingleBlog;
