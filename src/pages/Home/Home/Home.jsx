import React from "react";

import About from "../../About/About/About";
import Banner from "../Banner/Banner";
import Skills from "../../Skills/Skills";
import TitleSection from "../../../components/TitleSection/TitileSection";
import { Helmet } from "react-helmet-async";
import Services from "../../Services/Services";
import Projects from "../../Projects/Projects";
import Contact from "../../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Abdullah | home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
      <Contact/>
    </div>
  );
};

export default Home;
