import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { useRef } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">

      {/* 🔥 Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Our Services
      </motion.h1>

      {/* 🔘 Scroll Buttons */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={() => scroll("left")}
          className="bg-white dark:bg-gray-800 shadow px-4 py-2 rounded-lg hover:scale-110 transition"
        >
          ⬅
        </button>

        <button
          onClick={() => scroll("right")}
          className="bg-white dark:bg-gray-800 shadow px-4 py-2 rounded-lg hover:scale-110 transition"
        >
          ➡
        </button>
      </div>

      {/* 🎠 Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
      >
        {services.map((s, index) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[300px] hover:scale-105 transition"
          >
            <ServiceCard service={s} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;