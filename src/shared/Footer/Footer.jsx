import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-indigo-500 text-white font-medium p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by MD
          ABDULLAH
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
