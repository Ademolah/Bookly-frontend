// // src/pages/Terms.jsx
// import React from "react";

// const Terms = () => {
//   return (
//     <div className="min-h-screen bg-[#F0F9FF] text-gray-700 py-16 px-6 md:px-20">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <h1 className="text-4xl font-bold text-[#00477B]">Terms & Conditions</h1>
//         <p className="text-lg leading-relaxed">
//           By using Bookly, you agree to our terms of service. This includes compliance with all local regulations, responsible usage of the platform, and respecting privacy of all users.
//         </p>
//         <p className="text-lg leading-relaxed">
//           Bookly reserves the right to suspend or terminate accounts that violate these terms or misuse the platform in any way.
//         </p>
//         <p className="text-lg leading-relaxed">
//           For questions about our terms or to report misuse, please contact <span className="text-[#00477B]">legal@bookly.so</span>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Terms;

// src/pages/Terms.jsx
import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#F0F9FF] px-4 py-20 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-[#00477B]">Terms of Service</h1>
        <p>
          Welcome to Bookly. By accessing or using our platform, you agree to be
          bound by these terms. Please read them carefully.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You must provide accurate information during booking.</li>
          <li>Do not misuse or abuse the platform in any way.</li>
          <li>
            Bookly reserves the right to suspend or terminate access at our
            discretion.
          </li>
          <li>
            We are not responsible for third-party integrations or downtime.
          </li>
        </ul>
        <p>
          Your continued use of Bookly confirms your acceptance of these terms.
        </p>
      </div>
    </div>
  );
};

export default Terms;
