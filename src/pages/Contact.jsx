import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {

  //919876543210
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Request Submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
      >
        {/* 🔥 Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h1>

        {/* 📋 Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Write your message..."
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          {/* Buttons */}
          <div className="flex gap-4">

            {/* Submit */}
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-lg transition hover:scale-105"
            >
              Submit
            </button>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(
                `Hello, my name is ${form.name}. ${form.message}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-center shadow-lg transition hover:scale-105"
            >
              WhatsApp
            </a>

          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;