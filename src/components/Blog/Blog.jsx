import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { motion } from "framer-motion"; // For animations
import { databases } from "../../appwrite/appwrite";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_ID_BLOG
        );
        setBlogs(response.documents);
      } catch (error) {
        console.error("Error fetching blogs:", error);
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
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-10 relative">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.$id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            {blog.featuredImage && (
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-white">{blog.title}</h3>

            {/* Render HTML Content */}
            <div
              className="text-gray-400 mt-2"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* Sticky Admin Button */}
      <div className="fixed bottom-5 right-5">
        <Link to="/adminlogin">
          <button className="bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">
            Admin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogList;
