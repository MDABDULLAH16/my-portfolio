import React from "react";
import { Helmet } from "react-helmet-async";
import coolbg from "../../../assets/cool-background.png";
import { FaRunning } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { FiAward } from "react-icons/fi";
import TitleSection from "../../../components/TitleSection/TitileSection";

const About = () => {
  return (
    <div className="bg-[#010313] text-white min-h-screen">
      <TitleSection
        helmet={"about me"}
        header={"About"}
        optional={"Me"}
      ></TitleSection>
      {/* <Helmet>
        <title>MD ABDULLAH | About Me</title>
      </Helmet>

      <div
        className="text-center font-bold text-4xl text-indigo-600 "
        data-aos="fade-down"
      >
        <h1 className="py-6">
          About <span className="text-white text-4xl">Me</span>
        </h1>
      </div> */}
      <div className=" grid-cols-1 md:grid-cols-2  gap-8">
        {/* <div className="text-white md:ml-16 mt-4 flex items-center">
          <div>
            <h1 className=" font-semibold text-2xl ">
              Name:{" "}
              <span className="text-indigo-600 text-2xl">MD ABDULLAH</span>
            </h1>
            <p className=" font-semibold text-2xl  ">
              Education:
              <span className="text-indigo-600 text-2xl"> Honer's Second Year
              </span>
            </p>
            <p className=" font-semibold text-2xl ">
              Location:
            
                <span className="text-indigo-600 text-2xl"> Jamalpur,Mymonshingh,Bangladesh</span>
             
            </p>
            <p className=" font-semibold text-2xl ">
              Phone:
              <span className="text-indigo-600 text-2xl"> 01735752241</span>
            </p>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 font-semibold text-xl text-center ">
          <div className="space-y-2 m-4 p-4 border border-indigo-600 rounded-md">
            <FaRunning className="text-4xl mx-auto hover:text-6xl transform" />
            <h1>Experience</h1>
            <p>1 Year of Experience (Running)</p>
          </div>
          <div className="space-y-2 m-4 p-4 border border-indigo-600 rounded-md">
            <IoIosPeople className="text-4xl  mx-auto hover:text-6xl" />
            <h1>Clients</h1>
            <p>5+ Happy Clients</p>
          </div>
          <div className="space-y-2 m-4 p-4 border border-indigo-600 rounded-md">
            <GrProjects className="text-4xl mx-auto hover:text-6xl" />
            <h1>Projects</h1>
            <p>10+ Complete Projects</p>
          </div>
          <div className="space-y-2 m-4 p-4 border border-indigo-600 rounded-md">
            <FiAward className="text-4xl mx-auto hover:text-6xl" />
            <h1>Awards</h1>
            <p>2+ Award Won</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
