import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";

//img
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import javaScript from "../../assets/skills/javaScript.png";
import react from "../../assets/skills/react.png";
import nextjs from "../../assets/skills/nextjs.svg";
import bootstrap from "../../assets/skills/bootstrap.png";
import tailwind from "../../assets/skills/tailwind.png";
import firebase from "../../assets/skills/firebase.png";
import heroku from "../../assets/skills/heroku.png";
import nodeJs from "../../assets/skills/nodeJs.png";
import express from "../../assets/skills/express.png";
import mongoDB from "../../assets/skills/mongoDB.png";
import figma from "../../assets/skills/figma.png";
import typeScript from "../../assets/skills/typeScript.png";
import TitleSection from "../../components/TitleSection/TitileSection";

const skillsData = {
  frontend: [
    { img: html, name: "HTML5", level: 95 },
    { img: css, name: "CSS3", level: 93 },
    { img: javaScript, name: "JavaScript", level: 92 },
    { img: typeScript, name: "TypeScript", level: 85 },
    { img: react, name: "React", level: 95 },
    { img: nextjs, name: "Next.js", level: 88 },
    { img: tailwind, name: "Tailwind CSS", level: 94 },
    { img: bootstrap, name: "Bootstrap", level: 90 },
  ],
  backend: [
    { img: nodeJs, name: "Node.js", level: 90 },
    { img: express, name: "Express.js", level: 92 },
    { img: mongoDB, name: "MongoDB", level: 88 },
    { img: firebase, name: "Firebase", level: 85 },
  ],
  tools: [
    { img: figma, name: "Figma", level: 80 },
    { img: heroku, name: "Heroku", level: 85 },
  ],
};

const SkillCard = ({ skill, index, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ translateY: -8, scale: 1.05 }}
      className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative mb-4"
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img className="w-16 h-16 object-contain filter drop-shadow-lg" src={skill.img} alt={skill.name} />
        </motion.div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 text-center">{skill.name}</h3>

        {/* Progress Bar */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Helmet>
        <title>Skills | MD Abdullah</title>
      </Helmet>

      <div className="py-12">
        <TitleSection header={"My Skills"} helmet={"Skills"} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-20">
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Frontend Development</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {skillsData.frontend.map((skill, index) => (
              <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} total={skillsData.frontend.length} />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Backend Development</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillsData.backend.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index + skillsData.frontend.length}
                total={skillsData.backend.length}
              />
            ))}
          </div>
        </motion.div>

        {/* Tools & Others */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Tools & Platforms</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillsData.tools.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index + skillsData.frontend.length + skillsData.backend.length}
                total={skillsData.tools.length}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
