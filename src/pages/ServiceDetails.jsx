import { useParams } from "react-router-dom";
import { services } from "../data/services";
import { motion } from "framer-motion";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Service not found
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">

      {/* 🔥 Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-blue-600">
          {service.name}
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Quick & Reliable Government Service
        </p>
      </motion.div>

      {/* 📦 Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
      >

        {/* 💰 Price */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">Service Fee</p>
          <p className="text-2xl font-bold text-green-600">
            {service.price}
          </p>
        </div>

        {/* 📄 Documents */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">
            Required Documents
          </h3>

          <ul className="space-y-2">
            {service.documents.map((doc, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg"
              >
                📄 {doc}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ⚡ Features */}
        <div className="mb-6 grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
            ⚡ Fast Processing
          </div>
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
            ✔ Trusted Service
          </div>
          <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
            📞 Support Available
          </div>
        </div>

        {/* 🚀 Buttons */}
        <div className="flex gap-4">

          {/* Apply Button */}
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-lg transition hover:scale-105">
            Apply Now
          </button>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(
              `Hello, I want to apply for ${service.name}. Please guide me.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-center shadow-lg transition hover:scale-105"
          >
            WhatsApp
          </a>

        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetails;