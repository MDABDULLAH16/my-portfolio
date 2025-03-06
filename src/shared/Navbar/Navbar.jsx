import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BsSun, BsMoon } from "react-icons/bs";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#F9FAFB] text-[#1F2937] dark:bg-[#111827] dark:text-[#E5E7EB] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold">MD ABDULLAH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`relative text-[#1F2937] dark:text-[#E5E7EB] hover:text-[#1E40AF] dark:hover:text-[#2563EB] text-lg font-medium py-2 after:bg-[#2563EB] dark:after:bg-[#1E40AF] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
                  location.pathname === path ? "text-[#1E40AF] dark:text-[#2563EB] after:w-full" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="hidden md:block text-[#1F2937] dark:text-[#E5E7EB] ml-4 p-2 rounded-full hover:bg-[#E5E7EB] dark:hover:bg-[#2563EB] transition"
          >
            {darkMode ? <BsSun className="h-6 w-6" /> : <BsMoon className="h-6 w-6" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1F2937] dark:text-[#E5E7EB] focus:outline-none"
          >
            {isOpen ? <ImCross className="h-6 w-6" /> : <GiHamburgerMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#1E40AF] dark:bg-[#2563EB] text-center`}>
        <div className="px-4 pt-2 pb-3 flex flex-col space-y-2">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`text-[#E5E7EB] dark:text-[#F9FAFB] text-lg font-medium py-2 hover:text-[#1F2937] dark:hover:text-[#1E40AF] ${
                location.pathname === path ? "text-[#1E40AF] dark:text-[#2563EB] border-b-2 border-[#1E40AF] dark:border-[#2563EB]" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle for Mobile */}
        <button
          onClick={toggleDarkMode}
          className="mt-2 text-[#E5E7EB] dark:text-[#F9FAFB] p-2 rounded-full hover:bg-[#1F2937] dark:hover:bg-[#2563EB] transition"
        >
          {darkMode ? <BsSun className="h-6 w-6" /> : <BsMoon className="h-6 w-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;