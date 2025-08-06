// src/components/Features.jsx
import React from "react";

const features = [
  {
    title: "Easy Scheduling",
    description: "Set your available slots and let clients pick what works best.",
    icon: "📅",
  },
  {
    title: "WhatsApp Notifications",
    description: "Get booking alerts directly on WhatsApp or email.",
    icon: "📲",
  },
  {
    title: "Mobile-First Design",
    description: "Fully responsive design — built for mobile, ready for desktop.",
    icon: "📱",
  },
  {
    title: "Custom Booking Page",
    description: "Your own branded public booking link to share with clients.",
    icon: "🌍",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00477B] mb-12">
          Powerful Features. Simple Experience.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#00477B] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
