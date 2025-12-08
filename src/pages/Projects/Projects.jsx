import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import TitleSection from "../../components/TitleSection/TitileSection";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import easeMart from "../../assets/projects/easemart.png";
import sparkWave from "../../assets/projects/sparkwave.png";
import fitGearHub from "../../assets/projects/fithearhub1.png";

const projects = [
  {
    id: 1,
    img: easeMart,
    title: "EaseMart",
    category: "E-Commerce",
    description:
      "A modern e-commerce platform built with Next.js featuring an intuitive UI, fast product search with dynamic modals, and category management.",
    tech: ["React", "Next.js", "TailwindCSS", "MongoDB"],
    github: "https://github.com/MDABDULLAH16/EaseMartLetest-client",
    live: "https://easemartletestv2.vercel.app",
    features: ["Product Search", "Category Management", "Payment Integration"],
  },
  {
    id: 2,
    img: sparkWave,
    title: "SparkWave",
    category: "Booking System",
    description:
      "A car washing booking system built with React, Redux, and Firebase, allowing users to book services, select times, and make payments.",
    tech: ["React", "Redux", "Firebase", "TailwindCSS"],
    github: "https://github.com/MDABDULLAH16/lvl2_assignment_5_client",
    live: "https://sparkwave-web.vercel.app",
    features: ["Service Booking", "Real-time Updates", "Payment Processing"],
  },
  {
    id: 3,
    img: fitGearHub,
    title: "FitGearHub",
    category: "E-Commerce",
    description:
      "An e-commerce platform for gym products offering a seamless shopping experience for fitness gear and gym equipment.",
    tech: ["React", "Redux", "Firebase", "TailwindCSS"],
    github: "https://github.com/MDABDULLAH16/lvl2_assignment4_client",
    live: "https://fitgearhubclient.vercel.app",
    features: ["Product Catalog", "Cart Management", "User Reviews"],
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 bg-gray-200 dark:bg-gray-700">
        <motion.img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i }}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 dark:border-purple-500/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-semibold"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h3>
          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 sm:gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-semibold text-sm rounded-lg transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span className="hidden sm:inline">Live</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>Projects | MD Abdullah</title>
      </Helmet>

      <div className="py-12">
        <TitleSection header={"Latest Projects"} helmet={"Projects"} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-20">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work? Visit my GitHub profile for additional projects.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/MDABDULLAH16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
