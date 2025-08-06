// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Slots from "./pages/Slots.jsx";
import Bookings from "./pages/Bookings.jsx";
import PublicBooking from "./pages/PublicBooking.jsx";
import Settings from "./pages/Settings.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    
    <Router>
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/slots" element={<Slots />} />
        <Route path="/dashboard/bookings" element={<Bookings />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/book/:slug" element={<PublicBooking />} />
        {/* More routes like /dashboard coming soon */}
      </Routes>
    </Router>
  );
};

export default App;
