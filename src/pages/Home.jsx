
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";


const Home = () => {
  // ✨ Typewriter Effect
  const texts = [
    "Domicile Certificate",
    "Income Certificate",
    "PAN Card Services",
    "Driving License",
    "LIC Services",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // 🧠 3D Rotation State
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let i = 0;
    const currentText = texts[index];

    const typing = setInterval(() => {
      setDisplayText(currentText.slice(0, i));
      i++;
      if (i > currentText.length) clearInterval(typing);
    }, 80);

    const changeText = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => {
      clearInterval(typing);
      clearTimeout(changeText);
    };
  }, [index]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition duration-300">

      {/* 🚀 Hero */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-6"
      >
        <h2 className="text-5xl font-extrabold mb-4">
          Jan Sewa Kendra
        </h2>

        <p className="text-xl text-blue-600 font-semibold h-8">
          {displayText}...
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-3">
          Fast, reliable and trusted government services at one place.
        </p>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition hover:scale-105">
          Apply Now
        </button>
      </motion.div>

      {/* 👤 Owner Section (3D Effect) */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10"
      >
        {/* 🔥 3D Image */}
        <div
          className="perspective-1000"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 10;
            const rotateY = (x - rect.width / 2) / 10;

            setRotate({ x: rotateX, y: rotateY });
          }}
          onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        >
          <motion.img
            src="/default.png"
            alt="Owner"
            
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
            }}
            className="w-52 h-52 rounded-full object-cover border-4 border-blue-500 shadow-2xl transition duration-200"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-3xl font-semibold mb-2">
            CSC Owner
          </h3>

          <p className="text-gray-600 dark:text-gray-300 max-w-md">
            Dedicated to providing fast and transparent government services
            with trust and efficiency.
          </p>
        </div>
      </motion.div>

      {/* 🛎 Services */}
      <ServicesSection services={services} />

      {/* 👨‍💼 Employees */}
      <EmployeeSection />

      {/* 📞 CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <h3 className="text-2xl font-semibold mb-4">
          Need Help with Any Service?
        </h3>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition hover:scale-105">
          Contact Now
        </button>
      </motion.div>
    </div>
  );
};

export default Home;



const employees = [
  {
    id: 1,
    name: "Rahul Kumar",
    role: "Document Specialist",
    img: "/emp1.jpg",
  },
  {
    id: 2,
    name: "Amit Singh",
    role: "Service Manager",
    img: "/emp2.jpg",
  },
  {
    id: 3,
    name: "Pooja Sharma",
    role: "Customer Support",
    img: "/emp3.jpg",
  },
];

const EmployeeSection = () => {
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Team
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition"
          >
            <img
              src={emp.img}
              
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
            />

            <h3 className="text-xl font-semibold">{emp.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {emp.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};





const ServicesSection = ({ services }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Services
      </h2>

      {/* 🔘 Buttons */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={() => scroll("left")}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg hover:scale-105"
        >
          ⬅
        </button>

        <button
          onClick={() => scroll("right")}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg hover:scale-105"
        >
          ➡
        </button>
      </div>

      {/* 🎠 Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {services.map((s) => (
          <div key={s.id} className="min-w-[300px]">
            <ServiceCard service={s} />
          </div>
        ))}
      </div>
    </div>
  );
};