import React from "react";

const Footer: React.FC = () => (
    <footer className="w-full py-6 bg-gray-900 text-white text-center fixed left-0 bottom-0 z-50">
        <div className="max-w-screen-xl mx-auto">
            <span>
                &copy; {new Date().getFullYear()} Movie App. All rights reserved.
            </span>
        </div>
    </footer>
);

export default Footer;