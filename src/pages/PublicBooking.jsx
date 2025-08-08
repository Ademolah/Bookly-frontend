


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const PublicBooking = () => {
  const { slug } = useParams();
  const [slots, setSlots] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedSlot: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const res = await axios.get(`https://bookly-backend-5qfw.onrender.com/api/public/slots/${slug}`);
        setSlots(res.data.slots);
      } catch (err) {
        console.error("Failed to load slots:", err);
      }
    };

    fetchSlots();
  }, [slug]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://bookly-backend-5qfw.onrender.com/api/bookings/public", {
        slotId: form.selectedSlot,
        name: form.fullName,
        email: form.email,
        phone: form.phone,
      });

      toast.success("Booking successful!");
      setForm({ fullName: "", email: "", phone: "", selectedSlot: "" });
    } catch (err) {
      console.error("Booking error:", err);
      toast.error(err.response?.data?.msg || "Booking failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-tr from-[#e0f7ff] via-[#ffffff] to-[#d5f3ff] flex items-center justify-center px-4 py-12">
      {/* Motion background effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute inset-0 bg-[radial-gradient(#50D6FE_1px,transparent_1px)] [background-size:20px_20px] z-0"
      />

      <div className="relative z-10 max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
        <div className="mb-6 text-center">
          <p className="text-xl uppercase font-bold tracking-wide text-[#50D6FE]">
            Bookly
            </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#00477B] mt-2">
            Book an Appointment
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Kindly fill in your details to confirm your booking.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="selectedSlot"
            value={form.selectedSlot}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
          >
            <option value="">Select a slot</option>
            {slots.map((slot) => (
              <option key={slot._id} value={slot._id}>
                {new Date(slot.date).toLocaleDateString()} @ {slot.time}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#00477B] hover:bg-[#003760] transition duration-200 text-white font-semibold py-3 rounded-lg w-full"
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>

        <p className="mt-6 text-xs text-center text-gray-400">
          Powered by <span className="text-[#50D6FE] font-medium">Binary</span>
        </p>
      </div>
    </div>
  );
};

export default PublicBooking;

