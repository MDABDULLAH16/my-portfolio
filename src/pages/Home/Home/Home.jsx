import React from "react";


import Banner from "../Banner/Banner";
import Skills from "../../Skills/Skills";

// import Services from "../../Services/Services";
import Projects from "../../Projects/Projects";
import Contact from "../../Contact/Contact";
import Blogs from "../../Blogs/Blogs";

const Home = () => {
  return (
    <div>
      
      <Banner></Banner>
      {/* <About></About> */}
      <Skills></Skills>
      {/* <Services></Services> */}
      <Projects></Projects>
      <Blogs/>
      <Contact/>
    </div>
  );
};

export default Home;
