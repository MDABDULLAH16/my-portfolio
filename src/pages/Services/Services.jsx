import React from "react";
import TitleSection from "../../components/TitleSection/TitileSection";
// import webdesign from "../../assets/services/webdesign.png";
import webdevelopment from "../../assets/services/webdevelopment.png";
import responsive from "../../assets/services/responsive.png";
import onepage from "../../assets/services/onepage.png";
import bugfixing from "../../assets/services/bugfixing.png";
// import { MotionAnimate } from "react-motion-animate";

const Services = () => {
  return (
    <div className="bg-[#010313] text-white min-h-screen">
      <TitleSection
        header={"My"}
        optional={"Services"}
        helmet={"services"}
      ></TitleSection>
      <div className="grid grid-cols-2 place-items-center gap-4  ">
        {/* <div data-aos="flip-left">
          <div className="h-[500px] max-w-sm hover:bg-gray-900 overflow-hidden overflow-ellipsis">
            <h1 className="text-center p-2 bg-indigo-600 text-2xl font-semibold">
              Web Design
            </h1>
            <img className="max-w-60 h-60 mx-auto" src={webdesign} alt="" />
            <p className="p-4 text-clip">
              Web design is the art and science of creating visually appealing
              and user-friendly websites. It involves the arrangement of
              elements such as layout, colors, graphics, and typography to
              deliver an engaging and effective user experience. Effective web
              design considers both aesthetics and functionality, ensuring that
              the website not only looks good but also performs well across
              various devices and browsers. It encompasses skills in HTML, CSS,
              and often incorporates aspects of user experience (UX) design and
              user interface (UI) design to create seamless interactions between
              users and the digital environment. Ultimately, web design aims to
              captivate visitors, communicate information efficiently, and drive
              desired actions, whether it's making a purchase, signing up for a
              newsletter, or simply exploring content.
            </p>
          </div>
        </div> */}

        <div data-aos="flip-right">
          <div className="h-[500px] max-w-sm hover:bg-gray-900 overflow-hidden overflow-ellipsis">
            <h1 className="text-center p-2 bg-indigo-600 text-2xl font-semibold">
              Web Development
            </h1>
            {/* <img
              className="max-w-60 h-56 mx-auto"
              src={webdevelopment}
              alt=""
            /> */}
          
          </div>
        </div>
        <div data-aos="flip-up">
          <div className="h-[500px] max-w-sm hover:bg-gray-900 overflow-hidden overflow-ellipsis">
            <h1 className="text-center p-2 bg-indigo-600 text-2xl font-semibold">
              Responsive Design
            </h1>
            <img className="max-w-60 h-60 mx-auto" src={responsive} alt="" />
         
          </div>
        </div>
      
        <div data-aos="zoom-in">
          <div className="h-[500px] max-w-sm hover:bg-gray-900 overflow-hidden overflow-ellipsis">
            <h1 className="text-center p-2 bg-indigo-600 text-2xl font-semibold">
              Bug Fixing
            </h1>
            <img className="max-w-60 h-60  mx-auto" src={bugfixing} alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
