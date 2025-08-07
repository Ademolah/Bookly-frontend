// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative bg-[#F0F9FF] overflow-hidden py-24 px-6">
      {/* Background Motion Circles */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#50D6FE] opacity-20 blur-3xl"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00477B] opacity-10 blur-3xl"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Left */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00477B] leading-tight">
            Simplify Your&nbsp;
            <TypeAnimation
              sequence={[
                "Booking.",
                2000,
                "Client Scheduling.",
                2000,
                "Workflow.",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-[#50D6FE]"
            />
            <br />
            Get More Done.
          </h1>
          <p className="text-gray-600 text-lg">
            Bookly helps you manage appointments effortlessly for your business, your clients, and your time.
          </p>
          <div className="space-x-4 mt-4">
            <a href="/register">
              <button className="bg-[#00477B] text-white px-6 py-3 rounded-lg hover:bg-[#003760]">
                Get Started
              </button>
            </a>
            <a href="#features">
              <button className="border border-[#00477B] text-[#00477B] px-6 py-3 rounded-lg hover:bg-[#00477B] hover:text-white">
                See Demo
              </button>
            </a>
          </div>
        </div>

        {/* Empty Right to keep layout balanced */}
        <div className="md:w-1/2 mb-10 md:mb-0 h-72 md:h-96" />
      </div>
    </section>
  );
};

export default Hero;
