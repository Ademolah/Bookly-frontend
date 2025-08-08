

// src/pages/Auth/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://bookly-backend-5qfw.onrender.com/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success('Login successful')
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
    setLoading(false);
  };

  return (
    
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Info */}
      <div className="flex w-full md:w-1/2 bg-gradient-to-br from-[#00477B] to-[#50D6FE] items-center justify-center text-white p-8 md:p-12">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome Back 👋</h1>
          <p className="text-base md:text-lg leading-relaxed">
            Log in to manage your slots, bookings, and business settings with{" "}
            <strong>Bookly</strong> your simple, elegant scheduling companion.
          </p>
          <p className="text-xs md:text-sm text-[#97BEFF]">
            Built by Binary your future-ready tech partner.
          </p>
        </div>
      </div>


      {/* Right Panel - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[#F0F9FF]">
      
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-[#00477B] text-center">Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
            required
          />

          <button
            type="submit"
            className="bg-[#00477B] text-white py-3 rounded w-full hover:bg-[#003760] transition duration-200"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#00477B] font-medium hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

