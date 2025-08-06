// src/components/HowItWorks.jsx
import React from "react";

const steps = [
  {
    title: "1. Create Your Page",
    description: "Sign up and set your preferred schedule and contact method.",
  },
  {
    title: "2. Share Your Link",
    description: "Send your booking link to clients, or embed it anywhere.",
  },
  {
    title: "3. Get Booked",
    description: "Receive instant notifications and manage bookings with ease.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#F9FBFF] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00477B] mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#00477B] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
