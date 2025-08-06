// src/pages/Slots.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DasboardLayout";

const Slots = () => {
  const [slots, setSlots] = useState([]);
  const [form, setForm] = useState({ date: "", time: "" });
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const fetchSlots = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/slots", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSlots(res.data);
    } catch (err) {
      console.error("Error fetching slots:", err);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/slots", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm({ date: "", time: "" });
      fetchSlots();
    } catch (err) {
      alert(err.response?.data?.msg || "Slot error");
    }
    setLoading(false);
  };

  const deleteSlot = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/slots/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchSlots();
    } catch (err) {
      alert("Error deleting slot");
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-[#00477B]">Manage Your Availability</h2>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#00477B] text-white px-6 py-3 rounded hover:bg-[#003760]"
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Slot"}
          </button>
        </form>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#00477B] mb-4">Your Slots</h3>
          {slots.length === 0 ? (
            <p className="text-gray-500">No slots yet.</p>
          ) : (
            <ul className="space-y-3">
              {slots.map((slot) => (
                <li
                  key={slot._id}
                  className="flex justify-between items-center border p-3 rounded-md"
                >
                  <span>{slot.date} at {slot.time}</span>
                  <button
                    onClick={() => deleteSlot(slot._id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Slots;
