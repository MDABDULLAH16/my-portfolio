import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";

const TitleSection = ({ helmet, header, optional }) => {
  return (
    <div className="relative py-12 overflow-hidden">
      <Helmet>
        <title>MD ABDULLAH | {helmet}</title>
      </Helmet>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -left-40 top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-40 bottom-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative text-center max-w-4xl mx-auto px-6"
      >
        <div className="inline-block mb-4">
          {/* <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold">
            {optional || "My Work"}
          </span> */}
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          {header}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default TitleSection;
