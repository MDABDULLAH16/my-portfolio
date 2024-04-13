import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLink = (
    <>
      <Link
        to="/"
        className="text-gray-300   relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:text-white  py-2 rounded-md text-2xl font-medium"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-gray-300  relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:text-white  py-2  rounded-md text-2xl font-medium"
      >
        About Me
      </Link>
      <Link
        to="/skills"
        className="text-gray-300  relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-300 cursor-pointer hover:text-white  py-2 rounded-md text-2xl font-medium"
      >
        Skills
      </Link>
      <Link
        to="/services"
        className="text-gray-300  relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-300 cursor-pointer hover:text-white  py-2 rounded-md text-2xl font-medium"
      >
        Services
      </Link>

      <Link
        to="/projects"
        className="text-gray-300  relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-300 cursor-pointer hover:text-white  py-2 rounded-md text-2xl font-medium"
      >
        Projects
      </Link>
      <Link
        to="/blogs"
        className="text-gray-300  relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-300 cursor-pointer hover:text-white  py-2 rounded-md text-2xl font-medium"
      >
        Blogs
      </Link>
      <Link
        to="/contact"
        className="text-gray-300  relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-300 cursor-pointer hover:text-white  py-2 rounded-md text-2xl font-medium"
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="bg-indigo-500 text-2xl   ">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <span className="text-white font-semibold">MD ABDULLAH</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center  md:ml-6">
              <div className="flex space-x-8">{navLink}</div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:underline focus:outline-none focus:underline focus:text-white"
            >
              <GiHamburgerMenu
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              />
              <ImCross
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              ></ImCross>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden `}>
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col  items-center  sm:px-3">
          {navLink}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
