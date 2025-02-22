import React from "react";
import profilePic from "../../../assets/Abdullah_new.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaFacebook, FaArrowDown } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import TitleSection from "../../../components/TitleSection/TitileSection";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-bg min-h-screen flex flex-col items-center justify-center text-white px-6 sm:px-12">
      <TitleSection helmet={"Banner"} />
      
      <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-5xl">
        {/* Left Section (Text) */}
        <div 
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="flex-1 text-center md:text-left"
        >
          <span className="font-semibold text-lg sm:text-xl">Welcome to my Website</span>
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
            I'M <span className="text-indigo-600">MD ABDULLAH</span>
          </h1>
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
            I'M{" "}
            <TypeAnimation
              sequence={[
                " MERN stack Developer",
                1000,
                " Front-End Developer.",
                1000,
                " Programmer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ color: "#4f46e5", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <p className="font-semibold text-base sm:text-lg mt-4">
            As a MERN stack Developer with expertise in Front-End Web Development,
            I'm passionate about learning modern technologies. My focus is on the
            MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link target="_blank" to="https://drive.google.com/file/d/1LusyV9rIm-aPx8UK5UzpUFJSjZc_pgJf/view?usp=sharing"  className="btn btn-outline text-white hover:bg-indigo-600 border-indigo-600">
              Download Resume <FaArrowDown className="animate-bounce" />
            </Link>
            <button className="btn text-white font-semibold border-none hover:text-black bg-indigo-600">
              Hire Me
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-3xl mt-6">
            <Link target="_blank" to="https://github.com/MDABDULLAH16">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 64 64">
	<path fill="#fff" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0" />
</svg>
            </Link>
            <Link target="_black" to='https://www.facebook.com/share/19AxhSxJjX/'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256">
	<path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
	<path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
</svg></Link>
            <Link target="_black" to='https://www.linkedin.com/in/md-abdullah-49a39622b/'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 1000 1000">
	<path fill="#067dff" d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854z" />
</svg></Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div 
          data-aos="fade-up-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="flex-1 flex justify-center items-center mb-8 md:mb-0"
        >
          <img className="w-3/4 sm:w-2/3 rounded-md" src={profilePic} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
