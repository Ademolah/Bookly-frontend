

// src/pages/Bookings.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DasboardLayout";
import { CalendarDays, Clock, Mail, Phone, User, XCircle } from "lucide-react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("token");

  const fetchBookings = async () => {
    try {
      const res = await axios.get("https://bookly-backend-5qfw.onrender.com/api/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(res.data);
    } catch (err) {
      console.error("Error loading bookings:", err);
    }
  };

  const cancelBooking = async (id) => {
    try {
      await axios.delete(`https://bookly-backend-5qfw.onrender.com/api/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBookings();
    } catch {
      alert("Could not cancel booking");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <h2 className="text-3xl font-bold text-[#00477B]">Your Bookings</h2>

        {bookings.length === 0 ? (
          <p className="text-gray-500 text-lg mt-4">No bookings yet.</p>
        ) : (
          <div className="grid gap-6">
            {bookings.map((b) => (
              <div
                key={b._id}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row justify-between md:items-center border-l-4 border-[#50D6FE]"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#00477B] font-semibold text-lg">
                    <User className="w-5 h-5" />
                    {b.name}
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4" />
                    <span>{b.email}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4" />
                    <span>{b.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <CalendarDays className="w-4 h-4" />
                    <span>{b.slotId?.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4" />
                    <span>{b.slotId?.time}</span>
                  </div>
                </div>

                <button
                  onClick={() => cancelBooking(b._id)}
                  className="mt-4 md:mt-0 text-red-600 hover:text-red-800 flex items-center gap-2"
                >
                  <XCircle className="w-5 h-5" />
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Bookings;

