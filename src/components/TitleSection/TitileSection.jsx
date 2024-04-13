import React from "react";
import { Helmet } from "react-helmet-async";

const TitleSection = ({ helmet, header, optional }) => {
  return (
    <div>
      <Helmet>
        <title>MD ABDULLAH | {helmet}</title>
      </Helmet>

      <div
        className="text-center font-bold text-4xl text-indigo-600 "
        data-aos="fade-down"
      >
        <h1 className="py-6">
          {header} <span className="text-white text-4xl">{optional}</span>
        </h1>
      </div>
    </div>
  );
};

export default TitleSection;
