// // src/components/Footer.jsx
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#F4F7FA] text-gray-600 text-sm py-8 text-center space-y-4">
//       <div className="space-x-6">
//         <a href="/about" className="hover:text-[#00477B]">About</a>
//         <a href="/terms" className="hover:text-[#00477B]">Terms</a>
//         <a href="/privacy" className="hover:text-[#00477B]">Privacy</a>
//         <a href="/contact" className="hover:text-[#00477B]">Contact</a>
//       </div>
//       <div>
//         © {new Date().getFullYear()} <strong>Binary</strong>. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00477B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        <div>
          <h4 className="text-lg font-semibold">Bookly</h4>
          <p className="mt-2 text-gray-300">
  Bookly simplifies appointment scheduling for modern businesses. With a clean interface, seamless notifications, and instant bookings, it's the smarter way to manage your time.
</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Explore</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="/about" className="hover:text-[#50D6FE]">About</a></li>
            <li><a href="/terms" className="hover:text-[#50D6FE]">Terms</a></li>
            <li><a href="/privacy" className="hover:text-[#50D6FE]">Privacy</a></li>
            <li><a href="/contact" className="hover:text-[#50D6FE]">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Connect</h4>
          <p className="mt-2 text-gray-300">Have questions or ideas?</p>
          <a
            href="mailto:hello@binary.africa"
            className="text-[#50D6FE] hover:underline mt-1 inline-block"
          >
            hello@binary.africa
          </a>
        </div>
      </div>

      <div className="border-t border-[#50D6FE]/20 text-center py-4 text-xs text-gray-300">
        &copy; {new Date().getFullYear()} <strong>Binary</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
