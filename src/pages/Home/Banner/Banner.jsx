import React from "react";
import profilePic from "../../../assets/Abdullah_new.png";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="relative banner-bg flex flex-col items-center justify-center  text-white  dark:bg-gray-900">
      <div className="flex  flex-col-reverse md:flex-row items-center w-full max-w-6xl px-6 sm:px-12">
        {/* Left Section */}
        <div 
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className="flex-1 items-center text-center md:text-left"
        >
          <span className="font-medium dark:text-white text-lg sm:text-xl ">Welcome to My Portfolio</span>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-2">
            I'M <span className=" text-blue-500 dark:text-[#1E40AF]">MD ABDULLAH</span>
          </h1>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2">
            I'M {" "}
            <TypeAnimation
              sequence={["MERN Stack Developer", 1000, "Front-End Developer", 1000, "Programmer", 1000]}
              wrapper="span"
              speed={30}
              className="text-[#1E40AF] dark:text-blue-500"
              repeat={Infinity}
            />
          </h2>
          <div className="flex gap-4 mt-6">
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1G5ikWkqnE43hZcht1P1yb261Zmc1lG8r/view?usp=sharing"
              className=" flex items-center gap-2 bg-blue-500 text-white   dark:bg-blue-500 dark:text-white   hover:bg-blue-700 dark:hover:bg-blue-700 p-2 rounded-lg shadow-lg"
            >
              Download Resume <FaArrowDown className="animate-bounce" />
            </Link>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 text-2xl mt-6">
            <Link target="_blank" to="https://github.com/MDABDULLAH16" className="social-icon dark:text-gray-300 hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16">
	<path fill="#067dff" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
</svg></Link>
            <Link target="_blank" to="https://www.facebook.com/share/19AxhSxJjX/" className="social-icon dark:text-gray-300 hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256">
	<path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
	<path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
</svg></Link>
            <Link target="_blank" to="https://www.linkedin.com/in/ars-abdullah/" className="social-icon dark:text-gray-300 hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256">
	<g fill="none">
		<rect width="256" height="256" fill="#fff" rx="60" />
		<rect width="256" height="256" fill="#0a66c2" rx="60" />
		<path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" />
	</g>
</svg></Link>
          </div>
        </div>
        {/* Right Section (Image) */}
        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          className="flex-1  flex justify-center items-center"
        >
          <img className="w-64 pb-8 pt-0 sm:w-80 md:w-96 rounded-lg shadow-lg" src={profilePic} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
