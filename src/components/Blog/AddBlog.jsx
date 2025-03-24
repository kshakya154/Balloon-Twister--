import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Client, ID } from "appwrite";
import RTE from "../RTE/RTE"; // Import the Tiptap-based RTE
import { databases, storage } from "../../appwrite/appwrite"; // Import Appwrite Storage

function AddBlog() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");
  const [buttonColor, setButtonColor] = useState(
    "bg-blue-500 hover:bg-blue-600"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin-login");
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setButtonText("Submitting...");
    setErrorMessage("");

    try {
      let uploadedImageUrl = "";

      if (data.image && data.image[0]) {
        const file = data.image[0];

        // Upload Image to Appwrite Storage
        const uploadedFile = await storage.createFile(
          import.meta.env.VITE_APPWRITE_BUCKET_ID_BLOG,
          ID.unique(),
          file
        );

        // Get Image URL
        uploadedImageUrl = storage.getFilePreview(
          import.meta.env.VITE_APPWRITE_BUCKET_ID_BLOG,
          uploadedFile.$id
        );
      } else {
        throw new Error("Please upload an image.");
      }

      // Save blog post
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID_BLOG,
        ID.unique(),
        {
          title: data.title,
          content: data.content, // Captures Tiptap RTE content
          featuredImage: uploadedImageUrl,
        }
      );

      console.log("Blog added successfully!");

      setButtonText("Blog added successfully!");
      setButtonColor("bg-green-500 hover:bg-green-600");

      setTimeout(() => {
        setButtonText("Submit");
        setButtonColor("bg-blue-500 hover:bg-blue-600");
      }, 2000);
    } catch (error) {
      console.error("Error while adding blog:", error);
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 pt-10">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl lg:w-2/3">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Create Blog Post
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-gray-400 font-medium">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full px-4 py-3 border rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Content Input */}
          <div>
            <label className="block text-gray-400 font-medium">Content</label>
            <RTE
              name="content"
              control={control}
              defaultValue={getValues("content")}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-400 font-medium">
              Upload Image
            </label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="w-full px-4 py-3 border rounded-lg bg-gray-700 text-white"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="bg-red-500 text-white p-3 rounded-md text-center">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full text-white font-semibold py-3 rounded-lg transition ${buttonColor}`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Submitting...
              </div>
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default AddBlog;
