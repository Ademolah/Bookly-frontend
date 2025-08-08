

// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRegCalendarCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-[#F0F9FF] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#00477B] mb-6"
        >
          About Bookly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Bookly is a modern appointment scheduling solution by Binary, crafted
          to simplify how businesses manage bookings and clients connect with
          services. With a focus on speed, clarity, and elegance, we empower
          service providers to run smarter operations with less friction.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <FaRegCalendarCheck className="text-6xl text-[#50D6FE]" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;