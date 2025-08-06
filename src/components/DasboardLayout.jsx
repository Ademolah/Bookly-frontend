// src/components/DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { HiMenu } from "react-icons/hi";

const DashboardLayout = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F9FF] flex relative">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar for mobile */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <Sidebar closeSidebar={() => setIsMobileOpen(false)} />
          <div
            className="flex-1 bg-black/30"
            onClick={() => setIsMobileOpen(false)}
          ></div>
        </div>
      )}

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="absolute top-4 left-4 z-40 block md:hidden bg-white p-2 rounded shadow"
      >
        <HiMenu className="text-2xl text-[#00477B]" />
      </button>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-10 overflow-auto w-full">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
