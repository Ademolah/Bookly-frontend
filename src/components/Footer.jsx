// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F4F7FA] text-gray-600 text-sm py-8 text-center space-y-4">
      <div className="space-x-6">
        <a href="/about" className="hover:text-[#00477B]">About</a>
        <a href="/terms" className="hover:text-[#00477B]">Terms</a>
        <a href="/privacy" className="hover:text-[#00477B]">Privacy</a>
        <a href="/contact" className="hover:text-[#00477B]">Contact</a>
      </div>
      <div>
        © {new Date().getFullYear()} <strong>Binary</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
