import React from "react";
import profilePic from "../../../assets/Abdullah_new.png";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown, FaGithub, FaLinkedin,FaFacebook } from "react-icons/fa";
 
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./Banner.css";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen banner-bg flex flex-col items-center justify-center text-white dark:bg-gray-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative flex flex-col-reverse md:flex-row items-center w-full max-w-7xl px-6 sm:px-12 gap-12 z-10">
        {/* Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="flex-1 text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold">
              Welcome to my portfolio 👋
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mt-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              MD ABDULLAH
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold mt-4 text-gray-300"
          >
            <span className="inline-block">I'm a </span>
            <span className="inline-block ml-2">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  1000,
                  "Full-Stack Developer",
                  1000,
                  "React Specialist",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                repeat={Infinity}
              />
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg mt-6 max-w-md"
          >
            Passionate about building scalable, modern web applications using
            the MERN stack. I create responsive, high-performance digital
            solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                target="_blank"
                to="https://drive.google.com/file/d/1G5ikWkqnE43hZcht1P1yb261Zmc1lG8r/view?usp=sharing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
              >
                Download Resume <FaArrowDown className="animate-bounce" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mt-8 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotateZ: 10 }}
              href="https://github.com/MDABDULLAH16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-500 rounded-full transition-all duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotateZ: -10 }}
              href="https://www.linkedin.com/in/ars-abdullah/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-500 rounded-full transition-all duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotateZ: 10 }}
              href="https://www.facebook.com/share/19AxhSxJjX/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-500 rounded-full transition-all duration-300"
            >
              <FaFacebook className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex justify-center items-center relative"
        >
          {/* Animated Circles */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-gray-950" />
          </motion.div>

          <motion.div
            className="absolute inset-8 rounded-full border-2 border-blue-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Profile Image with Border */}
          <motion.div
            className="relative w-72 md:w-96 aspect-square rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              className="w-full h-full object-cover"
              src={profilePic}
              alt="MD Abdullah"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
