import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex items-center px-6 py-4">

        {/* 🔰 Logo (Left) */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="w-10 h-10 rounded-full" />
          <h2 className="text-xl font-bold text-blue-600">
            CSC Kaptanganj
          </h2>
        </div>

        {/* 👉 Right Section */}
        <div className="ml-auto flex items-center gap-4">

          {/* 🧭 Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" label="Home" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/contact" label="Contact" />
            <NavLink to="/about" label="About" />
          </div>

          {/* 🔐 Login */}
          <Link
            to="/login"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Login
          </Link>

          {/* 🌗 Toggle (RIGHT SIDE NOW) */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* 📱 Mobile Menu Button */}
         <button
  className="md:hidden text-xl text-gray-800 dark:text-white hover:scale-110 transition"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <FaBars />
</button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white dark:bg-gray-900"
        >
          <NavLink to="/" label="Home" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/contact" label="Contact" />
          <NavLink to="/about" label="About" />

          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Login
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="relative group text-gray-700 dark:text-gray-300 hover:text-blue-600"
  >
    {label}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
  </Link>
);

export default Navbar;