import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import TitleSection from "../../../components/TitleSection/TitileSection";
import { FaCode, FaDatabase, FaRocket } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "JavaScript (ES6+), React, Next.js, Redux Toolkit, Tailwind CSS, Bootstrap",
    },
    {
      icon: FaDatabase,
      title: "Backend Development",
      description: "Node.js, Express.js, MongoDB, REST APIs, Firebase, NextAuth.js",
    },
    {
      icon: FaRocket,
      title: "Deployment & DevOps",
      description: "Vercel, Netlify, Heroku, CI/CD, Payment Gateway Integration",
    },
  ];

  const responsibilities = [
    "Developing responsive and interactive web applications",
    "Building secure authentication and user-friendly dashboards",
    "Optimizing backend performance and database efficiency",
    "Integrating REST APIs, GraphQL, and third-party services",
    "Ensuring smooth deployment and continuous integration",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-20">
      <Helmet>
        <title>About Me | MD Abdullah</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <TitleSection helmet={"About Me"} header={"About Me"} optional={"Who Am I?"} />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16"
        >
          {/* Intro Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
            >
              I'm a passionate <span className="font-bold text-blue-500">MERN Stack Developer</span> dedicated to creating <span className="font-bold">efficient, scalable, and visually appealing</span> web applications. I have a deep understanding of modern web technologies and always strive to improve user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              With expertise in both frontend and backend technologies, I build complete solutions that not only look great but perform exceptionally. I'm constantly learning and staying updated with the latest industry trends and best practices.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-blue-200 dark:border-gray-700 group hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Responsibilities Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20 rounded-2xl p-12 border border-blue-200 dark:border-blue-700/50 mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Responsibilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {responsibility}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Philosophy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Code is not just about functionality; it's about creating experiences. I believe in writing clean, maintainable code that scales with your business. Every project is an opportunity to solve real problems and make a meaningful impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
