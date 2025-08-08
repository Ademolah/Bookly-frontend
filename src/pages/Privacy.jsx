

// src/pages/Privacy.jsx
import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#F0F9FF] px-4 py-20 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-[#00477B]">Privacy Policy</h1>
        <p>
          At Bookly, your privacy is a top priority. We only collect information
          necessary to provide and improve your booking experience. Your data is
          securely stored and never shared with third parties without consent.
        </p>
        <p>
          We may collect details like your name, email, and phone number when
          appointments are made. These are strictly used to confirm bookings,
          send reminders, or improve our service.
        </p>
        <p>
          By using Bookly, you agree to this policy. We may update this page,
          and any changes will be communicated promptly.
        </p>
      </div>
    </div>
  );
};

export default Privacy;