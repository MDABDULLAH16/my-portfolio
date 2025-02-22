import React from "react";
import TitleSection from "../../components/TitleSection/TitileSection";

const Projects = () => {
  return (
    <div className="bg-[#010313] text-white min-h-screen">
      {/* Title Section */}
      <TitleSection
        header={"Latest"}
        optional={"Projects"}
        helmet={"Projects"}
      ></TitleSection>

      {/* Background Animation */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-[size:400%_400%] animate-[rgb-background_15s_ease_infinite] opacity-20 blur-[50px]"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {/* Card 1 */}
        <div className="card relative bg-[rgba(15,15,15,0.8)] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:translate-y-[-10px] hover:rotate-x-[5deg] hover:rotate-y-[-5deg] hover:shadow-xl hover:scale-105">
          <img
            src="/src/assets/projects/easemart.png"
            alt="EaseMart Project Cover"
            className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-110 hover:brightness-125 hover:contrast-125"
          />
          <div className="p-6">
            <h2 className="text-[#00ffff] font-bold text-3xl mb-4">EaseMart</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              EaseMart is a modern ecommerce platform built with Next.js,
              offering an exceptional shopping experience. It features an
              intuitive UI, fast product search with dynamic modals, and
              category management.
            </p>
            <div className="flex gap-4 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-xs text-white">
                <i className="fab fa-react text-[#61DAFB]"></i> React
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-xs text-white">
                <i className="fab fa-js text-[#F0DB4F]"></i> Next.js
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-xs text-white">
                <i className="fab fa-css3-alt text-[#264DE4]"></i> TailwindCSS
              </span>
            </div>
            <div className="flex gap-4">
              {/* GitHub Button */}
              <a
                href="https://github.com/MDABDULLAH16/EaseMartLetest-client"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#171515] hover:bg-[#333] text-white font-bold text-sm uppercase rounded-full transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                aria-label="View EaseMart on GitHub"
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </a>

              {/* Live Button */}
              <a
                href="https://easemartletestv2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-black font-bold text-sm uppercase rounded-full transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,255,255,0.4)]"
                aria-label="View EaseMart Live"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Live
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card relative bg-[rgba(15,15,15,0.8)] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:translate-y-[-10px] hover:rotate-x-[5deg] hover:rotate-y-[-5deg] hover:shadow-xl hover:scale-105">
          <img
            src="/src/assets/projects/sparkwave.png"
            alt="SparkWave Project Cover"
            className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-110 hover:brightness-125 hover:contrast-125"
          />
          <div className="p-6">
            <h2 className="text-[#00ffff] font-bold text-3xl mb-4">
              SparkWave
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              SparkWave is a dynamic car washing booking system built with
              React, Redux, and Firebase. It allows users to book services,
              select times, and make payments, while admins can manage bookings
              and services.
            </p>
            <div className="flex gap-4 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-xs text-white">
                <i className="fab fa-react text-[#61DAFB]"></i> React
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-xs text-white">
                <i className="fab fa-redux text-[#764ABC]"></i> Redux
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-xs text-white">
                <i className="fab fa-firebase text-[#FFCA28]"></i> Firebase
              </span>
            </div>
            <div className="flex gap-4">
              {/* GitHub Button */}
              <a
                href="https://github.com/MDABDULLAH16/lvl2_assignment_5_client"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#171515] hover:bg-[#333] text-white font-bold text-sm uppercase rounded-full transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                aria-label="View SparkWave on GitHub"
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </a>

              {/* Live Button */}
              <a
                href="https://sparkwave-web.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-black font-bold text-sm uppercase rounded-full transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,255,255,0.4)]"
                aria-label="View SparkWave Live"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Live
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card relative bg-[rgba(15,15,15,0.8)] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:translate-y-[-10px] hover:rotate-x-[5deg] hover:rotate-y-[-5deg] hover:shadow-xl hover:scale-105">
          <img
            src="/src/assets/projects/fithearhub1.png"
            alt="FitGearHub Project Cover"
            className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-110 hover:brightness-125 hover:contrast-125"
          />
          <div className="p-6">
            <h2 className="text-[#00ffff] font-bold text-3xl mb-4">
              FitGearHub
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              FitGearHub is a modern ecommerce platform built to help users
              purchase gym products for physical exercise. The website offers a
              seamless shopping experience with a wide range of gym equipment
              and fitness gear.
            </p>
            <div className="flex gap-4 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-xs text-white">
                <i className="fab fa-react text-[#61DAFB]"></i> React
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-xs text-white">
                <i className="fab fa-redux text-[#764ABC]"></i> Redux
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-xs text-white">
                <i className="fab fa-firebase text-[#FFCA28]"></i> Firebase
              </span>
            </div>
            <div className="flex gap-4">
              {/* GitHub Button */}
              <a
                href="https://github.com/MDABDULLAH16/lvl2_assignment4_client"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#171515] hover:bg-[#333] text-white font-bold text-sm uppercase rounded-full transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                aria-label="View FitGearHub on GitHub"
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </a>

              {/* Live Button */}
              <a
                href="https://fitgearhubclient.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-black font-bold text-sm uppercase rounded-full transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,255,255,0.4)]"
                aria-label="View FitGearHub Live"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
