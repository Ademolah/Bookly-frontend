// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiCalendar, FiHome, FiLogOut, FiSettings, FiX } from "react-icons/fi";

const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { label: "Slots", icon: <FiCalendar />, path: "/dashboard/slots" },
    { label: "Bookings", icon: <FiCalendar />, path: "/dashboard/bookings" },
    { label: "Settings", icon: <FiSettings />, path: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <aside className="bg-white shadow-md w-64 h-full flex flex-col py-8 px-6 border-r z-50 relative">
      {/* Close button for mobile */}
      {closeSidebar && (
        <button
          className="absolute top-4 right-4 text-xl text-[#00477B] md:hidden"
          onClick={closeSidebar}
        >
          <FiX />
        </button>
      )}

      <h2 className="text-2xl font-bold text-[#00477B] mb-10">Bookly</h2>

      <nav className="space-y-4 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-2 rounded-md text-sm font-medium ${
              location.pathname === item.path
                ? "bg-[#50D6FE] text-white"
                : "text-[#00477B] hover:bg-[#F0F9FF]"
            }`}
            onClick={closeSidebar} // Close on link click (mobile)
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-auto flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
      >
        <FiLogOut />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
