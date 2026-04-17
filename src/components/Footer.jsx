import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-10 mt-0">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
      >

        {/* 🔰 Logo */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/logo.png"
              alt="CSC Logo"
              className="w-12 h-12 rounded-full"
            />
            <h2 className="text-xl font-bold text-blue-600">
              CSC Kaptanganj
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Providing trusted government services like Domicile, Income,
            Caste, PAN, DL, LIC and more.
          </p>
        </div>

        {/* 📍 Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-600">
            Address
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Kaptanganj Market <br />
            Near Pandey Mandir <br />
            Uttar Pradesh, India
          </p>
        </div>

        {/* 📱 Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-600">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a className="bg-blue-600 p-3 rounded-full hover:scale-110 transition">
              👍
            </a>

            <a className="bg-pink-500 p-3 rounded-full hover:scale-110 transition">
              📸
            </a>

            <a className="bg-red-600 p-3 rounded-full hover:scale-110 transition">
              ▶
            </a>
          </div>
        </div>

      </motion.div>

      {/* 🔻 Bottom */}
      <div className="text-center mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-gray-500 dark:text-gray-400 text-sm">
        © 2026 CSC Kaptanganj | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;