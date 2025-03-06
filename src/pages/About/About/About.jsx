import React from "react";
import { Helmet } from "react-helmet-async";
import { FaRunning } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";
import TitleSection from "../../../components/TitleSection/TitileSection";

const About = () => {
  return (
    <div className="bg-white dark:bg-[#111827] text-gray-900 dark:text-white min-h-screen py-10 px-6 md:px-16">
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <TitleSection helmet={"about me"} header={"About"} optional={"Me"} />

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          I'm a passionate MERN Stack Developer skilled in modern web technologies.
          Constantly exploring AI and Cloud Computing, I thrive on solving complex
          problems and crafting seamless user experiences.
        </p>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          With a strong foundation in JavaScript, React, and backend technologies,
          I build scalable and high-performance applications. My experience with
          Firebase, Next.js, and ReduxToolkit allows me to create dynamic and interactive
          user interfaces. I also have expertise in database management using MongoDB
          and Express.js.
        </p>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Beyond coding, I am a quick learner and adaptable to new technologies.
          I enjoy collaborating with teams, managing projects efficiently, and constantly
          improving my skills to stay updated with industry trends.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {[
          { icon: <FaRunning className="text-4xl" />, label: "Fast Learning" },
          { icon: <IoIosPeople className="text-4xl" />, label: "Team Player" },
          { icon: <GrProjects className="text-4xl" />, label: "Project Management" },
          { icon: <FiAward className="text-4xl" />, label: "Award Winning" }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }} 
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center space-y-3"
          >
            {item.icon}
            <span className="text-lg font-semibold">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "JavaScript (ES6)", "TypeScript", "React", "Next.js", "NextAuth.js", "ReduxToolkit",
          "Firebase", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "MongoDB",
          "Mongoose", "AamarPay", "Git & GitHub", "Vercel", "Heroku", "Netlify"
        ].map((tech, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.1 }}
            className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center shadow-sm"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;