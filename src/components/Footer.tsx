import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-2 bg-[#211212] text-white text-center overflow-hidden ">
    <div className="max-w-screen-xl mx-auto">
      <span>
        &copy; {new Date().getFullYear()} Movie App. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
