// // src/pages/Privacy.jsx
// import React from "react";


// const Privacy = () => {
//   return (
//     <div className="min-h-screen bg-[#F0F9FF] text-gray-700 py-16 px-6 md:px-20">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <h1 className="text-4xl font-bold text-[#00477B]">Privacy Policy</h1>
//         <p className="text-lg leading-relaxed">
//           At Bookly, your privacy is important to us. We collect only the necessary information required to deliver and improve our service.
//         </p>
//         <p className="text-lg leading-relaxed">
//           Your personal data — including your name, email, phone number, and booking details are securely stored and never shared with third parties without your consent.
//         </p>
//         <p className="text-lg leading-relaxed">
//           You can request deletion of your data or update your preferences at any time by contacting us at <span className="text-[#00477B]">support@bookly.so</span>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Privacy;

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