import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-gray-900 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300">
                MA
              </div>
              <span className="hidden sm:inline text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abdullah
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div className="hidden md:flex flex-1 justify-center gap-1">
            {navItems.map(({ name, path }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={path}
                  className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 ${
                    location.pathname === path
                      ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {name}
                  {location.pathname === path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-blue-500/10 rounded-lg -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Dark Mode & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <BsSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <BsMoon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? (
                <ImCross className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <GiHamburgerMenu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-800"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                location.pathname === path
                  ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
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