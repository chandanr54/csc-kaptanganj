import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl rounded-2xl p-6 transition duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* 🔹 Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 text-xl mb-4">
        📄
      </div>

      {/* 🔹 Title */}
      <h3 className="text-xl font-semibold mb-2 text-blue-600">
        {service.name}
      </h3>

      {/* 🔹 Price */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        Service Fee
      </p>
      <p className="text-lg font-bold text-gray-800 dark:text-white mb-3">
        {service.price}
      </p>

      {/* 🔹 Documents Preview */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
          Required Docs:
        </p>

        <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc list-inside">
          {service.documents.slice(0, 2).map((doc, i) => (
            <li key={i}>{doc}</li>
          ))}
          {service.documents.length > 2 && (
            <li>+ more...</li>
          )}
        </ul>
      </div>

      {/* 🔹 Buttons */}
      <div className="flex gap-3 mt-4">
        <Link
          to={`/services/${service.id}`}
          className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Details
        </Link>

        <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Apply
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;