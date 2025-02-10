import React from "react";
import { Helmet } from "react-helmet-async";

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
const Skills = () => {
  return (
    <div className="min-h-screen text-white bg-[#010313]">
      <TitleSection
        header={"My"}
        optional={"Skills"}
        helmet={"Skills"}
      ></TitleSection>
      {/* <Helmet>
        <title>MD ABDULLAH | Skills</title>
      </Helmet>
      <div
        className="text-center font-bold text-4xl text-indigo-600 "
        data-aos="flip-right"
      >
        <h1 className="py-6">
          My <span className="text-white text-4xl">Skills</span>
        </h1>
      </div> */}

      {/* content */}
      <div>
        <fieldset className="border border-indigo-600 ">
          <legend className="p-4 text-center font-semibold text-indigo-600 uppercase text-2xl">
            Tools/Technologies
          </legend>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={html} alt="" />
              <h1 className="font-semibold text-2xl">HTML</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={css} alt="" />
              <h1 className="font-semibold text-2xl">CSS</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={bootstrap} alt="" />
              <h1 className="font-semibold text-2xl">Bootstrap</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={tailwind} alt="" />
              <h1 className="font-semibold text-2xl">Tailwind</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={javaScript} alt="" />
              <h1 className="font-semibold text-2xl">JavaScript</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={typeScript} alt="" />
              <h1 className="font-semibold text-2xl">TypeScript</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={react} alt="" />
              <h1 className="font-semibold text-2xl">React</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto" src={nextjs} alt="" />
              <h1 className="font-semibold text-2xl">Next.js</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={nodeJs} alt="" />
              <h1 className="font-semibold text-2xl">NodeJs</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={express} alt="" />
              <h1 className="font-semibold text-2xl">Express</h1>
            </div>

            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={firebase} alt="" />
              <h1 className="font-semibold text-2xl">Firebase</h1>
            </div>

            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={heroku} alt="" />
              <h1 className="font-semibold text-2xl">Heroku</h1>
            </div>
          </div>
        </fieldset>
        <fieldset className="border border-indigo-600 ">
          <legend className="p-4 text-center font-semibold text-indigo-600 uppercase text-2xl">
            Familiar
          </legend>
          <div className="grid grid-cols-2 ">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={mongoDB} alt="" />
              <h1 className="font-semibold text-2xl">MongoDB</h1>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-8 m-4 text-center rounded-md bg-[#24244B] "
            >
              <img className="w-12 h-16 mx-auto " src={figma} alt="" />
              <h1 className="font-semibold text-2xl">Figma</h1>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Skills;
