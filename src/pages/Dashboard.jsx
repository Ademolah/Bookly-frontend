

// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DasboardLayout";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("user");

    if (!token || !userInfo) {
      navigate("/login");
    } else {
      setUser(JSON.parse(userInfo));
    }
  }, [navigate]);

  if (!user) return null;

  const firstName = user.fullName?.split(" ")[0] || "User";

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#F0F9FF] to-white py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#00477B] leading-tight">
                Welcome back, {firstName} 👋
              </h1>
              <p className="text-gray-600 mt-4 text-lg">
                Your Bookly dashboard is where everything begins, manage slots, track appointments, and fine-tune your business settings with ease.
              </p>
            </div>

            
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Dashboard Visual"
                className="w-full max-w-sm mx-auto rounded-xl"
              />
          </div>
          </div>

          {/* Future: Quick Stats or Widgets */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#00477B]">
              <h4 className="text-sm text-gray-500">Slots Available</h4>
              <p className="text-3xl font-semibold text-[#00477B]">12</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#50D6FE]">
              <h4 className="text-sm text-gray-500">Upcoming Bookings</h4>
              <p className="text-3xl font-semibold text-[#00477B]">5</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#97BEFF]">
              <h4 className="text-sm text-gray-500">New Messages</h4>
              <p className="text-3xl font-semibold text-[#00477B]">2</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

