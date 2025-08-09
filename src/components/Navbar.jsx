// src/components/Navbar.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import logo from '../assets/images/bookly.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative z-50">
      {/* <div className="text-[#00477B] text-2xl font-bold">Bookly</div> */}
      {/* <div className="flex items-center space-x-2">
        <img 
          src="/public/bookly.png" // Make sure your logo is in public/logo.png or update the path accordingly
          alt="Bookly Logo" 
          className="h-8 w-auto"
        />
      </div> */}
      <Link to="/" className="flex items-center space-x-3">
          {/* Uncomment to use logo image */}
          <img
            src={logo}
            alt="Binary Logo"
            className="h-10 w-auto object-contain transition-transform hover:scale-105 duration-300"
          />
          {/* <span className="text-2xl font-bold text-[#00477B] hidden sm:inline">Binary</span> */}
        </Link>

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
