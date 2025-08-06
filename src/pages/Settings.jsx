// // src/pages/Settings.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import DashboardLayout from "../components/DasboardLayout";

// const Settings = () => {
//   const [form, setForm] = useState({
//     businessName: "",
//     businessDescription: "",
//     whatsappNumber: "",
//     notifications: {
//       email: true,
//       whatsapp: false,
//     },
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const token = localStorage.getItem("token");

//   const fetchSettings = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/settings", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setForm(res.data);
//     } catch (err) {
//       console.error("Error fetching settings", err);
//     }
//   };

//   useEffect(() => {
//     fetchSettings();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await axios.put(
//         "http://localhost:5000/api/settings/update",
//         form,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setMessage("Settings updated successfully.");
//     } catch (err) {
//       setMessage("Failed to update settings.");
//     }
//     setLoading(false);
//   };

//   return (
//     <DashboardLayout>
//       <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-6">
//         <h2 className="text-2xl font-bold text-[#00477B]">Business Settings</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Business Name"
//             value={form.businessName}
//             onChange={(e) => setForm({ ...form, businessName: e.target.value })}
//             className="w-full border p-3 rounded"
//           />
//           <textarea
//             placeholder="Business Description"
//             value={form.businessDescription}
//             onChange={(e) =>
//               setForm({ ...form, businessDescription: e.target.value })
//             }
//             className="w-full border p-3 rounded"
//           />
//           <input
//             type="tel"
//             placeholder="WhatsApp Number"
//             value={form.whatsappNumber}
//             onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
//             className="w-full border p-3 rounded"
//           />

//           <div className="space-y-2">
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={form.notifications.email}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     notifications: {
//                       ...form.notifications,
//                       email: e.target.checked,
//                     },
//                   })
//                 }
//               />
//               <span>Email Notifications</span>
//             </label>

//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={form.notifications.whatsapp}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     notifications: {
//                       ...form.notifications,
//                       whatsapp: e.target.checked,
//                     },
//                   })
//                 }
//               />
//               <span>WhatsApp Notifications</span>
//             </label>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-[#00477B] text-white px-6 py-3 rounded hover:bg-[#003760]"
//           >
//             {loading ? "Saving..." : "Save Settings"}
//           </button>
//           {message && <p className="text-sm mt-2">{message}</p>}
//         </form>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Settings;

import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DasboardLayout";

const Settings = () => {
  const [form, setForm] = useState({
    businessName: "",
    businessDescription: "",
    whatsappNumber: "",
    notifications: {
      email: true,
      whatsapp: false,
    },
    slug: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const token = localStorage.getItem("token");

  const fetchSettings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/settings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm(res.data);
    } catch (err) {
      console.error("Error fetching settings", err);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.put(
        "http://localhost:5000/api/settings/update",
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("Settings updated successfully.");
    } catch (err) {
      setMessage("Failed to update settings.");
    }
    setLoading(false);
  };

  const bookingUrl = `http://localhost:3000/book/${form.slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-6">
        <h2 className="text-2xl font-bold text-[#00477B]">Business Settings</h2>

        {/* Public Booking Link */}
        <div className="bg-[#F0F9FF] p-4 rounded border border-blue-200">
          <p className="text-sm text-gray-600 mb-1">Your public booking link:</p>
          <div className="flex items-center justify-between space-x-2">
            <input
              type="text"
              readOnly
              value={bookingUrl}
              className="flex-1 border p-2 rounded bg-gray-100 text-sm"
            />
            <button
              type="button"
              onClick={handleCopy}
              className="bg-[#00477B] text-white px-4 py-2 rounded hover:bg-[#003760] text-sm"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Business Name"
            value={form.businessName}
            onChange={(e) => setForm({ ...form, businessName: e.target.value })}
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Business Description"
            value={form.businessDescription}
            onChange={(e) =>
              setForm({ ...form, businessDescription: e.target.value })
            }
            className="w-full border p-3 rounded"
          />
          <input
            type="tel"
            placeholder="WhatsApp Number"
            value={form.whatsappNumber}
            onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
            className="w-full border p-3 rounded"
          />

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={form.notifications.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    notifications: {
                      ...form.notifications,
                      email: e.target.checked,
                    },
                  })
                }
              />
              <span>Email Notifications</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={form.notifications.whatsapp}
                onChange={(e) =>
                  setForm({
                    ...form,
                    notifications: {
                      ...form.notifications,
                      whatsapp: e.target.checked,
                    },
                  })
                }
              />
              <span>WhatsApp Notifications</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#00477B] text-white px-6 py-3 rounded hover:bg-[#003760]"
          >
            {loading ? "Saving..." : "Save Settings"}
          </button>
          {message && <p className="text-sm mt-2">{message}</p>}
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

