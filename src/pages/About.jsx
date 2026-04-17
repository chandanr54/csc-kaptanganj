import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">

      {/* 🔥 Header */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center mb-12"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold text-blue-600"
        >
          About CSC Kaptanganj
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
        >
          Your trusted center for all government and digital services.
        </motion.p>
      </motion.div>

      {/* 👤 About Section */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto mt-10"
>

  {/* ✅ Image Fix */}
  <motion.div
    variants={item}
    className="flex justify-center"
  >
    <motion.img
      src="/owner.jpg"
      onError={(e) => (e.target.src = "/default.png")}
      className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500 shadow-xl"
      animate={{ y: [0, -10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      }}
    />
  </motion.div>

  {/* ✅ Text Fix */}
  <motion.div
    variants={item}
    className="max-w-md text-center md:text-left"
  >
    <h2 className="text-2xl font-semibold mb-3">
      Who We Are
    </h2>

    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      CSC Kaptanganj is a trusted Jan Sewa Kendra providing essential
      government services with fast processing, transparency, and
      reliable support.
    </p>
  </motion.div>

</motion.div>

      {/* ⚡ Services */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-16"
      >
        <motion.h2
          variants={item}
          className="text-3xl font-bold text-center mb-8"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Domicile Certificate",
            "Income Certificate",
            "Caste Certificate",
            "PAN Card",
            "Driving License",
            "LIC Services",
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow text-center cursor-pointer"
            >
              📄 {service}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🎯 Why Choose Us */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-16 text-center"
      >
        <motion.h2
          variants={item}
          className="text-3xl font-bold mb-8"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "⚡ Fast Service",
            "✔ Trusted Center",
            "📞 24/7 Support",
          ].map((itemText, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl"
            >
              {itemText}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 📞 CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <h3 className="text-2xl font-semibold mb-4">
          Need Any Government Service?
        </h3>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/919876543210"
          target="_blank"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Contact on WhatsApp
        </motion.a>
      </motion.div>

    </div>
  );
};

export default About;