import React from "react";
import profilePic from "../../../assets/mypic.png";
import Typewriter from "react-ts-typewriter";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaFacebook, FaArrowDown } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import TitleSection from "../../../components/TitleSection/TitileSection";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-bg ">
      <TitleSection helmet={"Banner"}></TitleSection>
      <div className="md:flex items-center  min-h-screen  text-white  ">
        <div
          data-aos="fade-up-right"
          data-aos-duration="3000ms" // Set duration to 2 seconds
          data-aos-easing="ease-in-sine"
          className="flex-1 flex items-center justify-center md:ml-16"
        >
          <div>
            <span className=" font-semibold">Welcome to my Website</span>
            <h1 className="font-semibold text-3xl">
              I'M <span className="text-indigo-600">MD ABDULLAH</span>
            </h1>
            <h2 className="font-bold text-4xl">
              I'M{" "}
              {/* <Typewriter
              loop={Infinity}
              speed={200} // Set speed to 200 milliseconds
              text={"I'M MERN stack Developer"}
            ></Typewriter> */}
              {/* <TypeAnimation
                sequence={["I'M ,Jr MERN stack Developer."]}
                wrapper="span"
                speed={50}
                style={{ color: "red", display: "inline-block" }}
              /> */}
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
                style={{
                  // fontSize: "2em",
                  color: "#4f46e5",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </h2>
            <p className="font-semibold text-lg">
              As a MERN stack Developer with a good level of expertise in
              Front-End Web Development. I'm a tech lover and like to learn
              about modern science and technologies. I'm interested in MERN
              (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development and
              currently I am focused on it.
            </p>
            <div className=" space-x-6 space-y-4 ">
              <button className="btn btn-outline text-white hover:bg-indigo-600 border-indigo-600">
                Download Resume{" "}
                <FaArrowDown className="animate-bounce"></FaArrowDown>{" "}
              </button>
              <button className="btn  text-white font-semibold border-none hover:text-black bg-indigo-600 ">
                Hire Me
              </button>
            </div>
            <div className="flex  gap-4 text-4xl mt-4 text-white  ">
              <FaGithub className="hover:bg-white border hover:text-indigo-600 rounded-full" />
              <FaFacebook className="hover:bg-white border hover:text-indigo-600 rounded-full" />
              <TiSocialLinkedin className="hover:bg-white border hover:text-indigo-600 rounded-full " />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="3000ms" // Set duration to 2 seconds
          data-aos-easing="ease-in-sine"
          className="flex-1 flex justify-center items-center "
        >
          {/* <img src={profilePic} alt="Profile"  /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
