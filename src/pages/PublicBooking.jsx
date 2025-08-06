// // src/pages/PublicBooking.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const PublicBooking = () => {
//   const [slots, setSlots] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "", phone: "", slotId: "" });
//   const [message, setMessage] = useState("");
//   const { ownerId } = useParams();

//   useEffect(() => {
//     const fetchSlots = async () => {
//       const res = await axios.get(`http://localhost:5000/api/public/slots/${ownerId}`);
//       setSlots(res.data);
//     };
//     fetchSlots();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("Booking...");

//     try {
//       const res = await axios.post("http://localhost:5000/api/bookings/public", form);
//       setMessage(res.data.msg);
//       setForm({ name: "", email: "", phone: "", slotId: "" });
//     } catch (err) {
//       setMessage(err.response?.data?.msg || "Error booking");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F0F9FF] p-6 flex items-center justify-center">
//       <div className="max-w-xl bg-white p-8 shadow rounded-xl w-full">
//         <h2 className="text-2xl font-bold text-[#00477B] mb-4">Book a Session</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <select
//             value={form.slotId}
//             onChange={(e) => setForm({ ...form, slotId: e.target.value })}
//             className="w-full border p-3 rounded"
//             required
//           >
//             <option value="">Select a slot</option>
//             {slots.map((slot) => (
//               <option key={slot._id} value={slot._id}>
//                 {slot.date} at {slot.time}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full border p-3 rounded"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full border p-3 rounded"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full border p-3 rounded"
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             required
//           />

//           <button
//             type="submit"
//             className="bg-[#00477B] text-white px-6 py-3 rounded hover:bg-[#003760] w-full"
//           >
//             Book Now
//           </button>

//           {message && <p className="text-sm mt-2 text-center">{message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PublicBooking;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const PublicBooking = () => {
  const { slug } = useParams();
  const [slots, setSlots] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedSlot: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/public/slots/${slug}`);
        setSlots(res.data.slots);
      } catch (err) {
        console.error("Failed to load slots:", err);
      }
    };

    fetchSlots();
  }, [slug]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post("http://localhost:5000/api/bookings/public", {
//         ...form,
//         owner: slug,
//       });
//       alert("Booking successful!");
//       setForm({ fullName: "", email: "", phone: "", selectedSlot: "" });
//     } catch (err) {
//       console.error(err);
//       alert("Booking failed");
//     }

//     setLoading(false);
//   };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post("http://localhost:5000/api/bookings/public", {
      slotId: form.selectedSlot,    // must match backend field
      name: form.fullName,          // rename from fullName → name
      email: form.email,
      phone: form.phone
    });

    toast.success("Booking successful!")
    setForm({ fullName: "", email: "", phone: "", selectedSlot: "" });
  } catch (err) {
    console.error("Booking error:", err);
    alert(err.response?.data?.msg || "Booking failed");
  }

  setLoading(false);
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F9FF] px-4 py-10">
    
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-[#00477B]">
          Book an Appointment
        </h2>

        <select
          name="selectedSlot"
          value={form.selectedSlot}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded"
        >
          <option value="">Select a slot</option>
          {slots.map((slot) => (
            <option key={slot._id} value={slot._id}>
              {new Date(slot.date).toLocaleDateString()} @ {slot.time}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="fullName"
          placeholder="Your Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-[#00477B] text-white py-3 rounded w-full hover:bg-[#003760]"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default PublicBooking;

