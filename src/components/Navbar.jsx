// src/components/Navbar.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative z-50">
      <div className="text-[#00477B] text-2xl font-bold">Bookly</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center">
        <a href="#features" className="text-[#00477B] hover:text-[#50D6FE]">Features</a>
        <a href="/login" className="text-[#00477B] hover:text-[#50D6FE]">Login</a>
        <a href="/register">
          <button className="bg-[#50D6FE] text-white px-4 py-2 rounded-md hover:bg-[#00477B] transition-all">
            Get Started
          </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX className="text-3xl text-[#00477B]" /> : <HiMenu className="text-3xl text-[#00477B]" />}
        </button>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#features" className="text-[#00477B] hover:text-[#50D6FE]">Features</a>
          <a href="/login" className="text-[#00477B] hover:text-[#50D6FE]">Login</a>
          <a href="/register">
            <button className="bg-[#50D6FE] text-white px-4 py-2 rounded-md hover:bg-[#00477B] transition-all">
              Get Started
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
