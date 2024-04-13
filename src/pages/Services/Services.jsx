import React from "react";
import TitleSection from "../../components/TitleSection/TitileSection";
import webdesign from "../../assets/services/webdesign.png";
import webdevelopment from "../../assets/services/webdevelopment.png";
import responsive from "../../assets/services/responsive.png";
import onepage from "../../assets/services/onepage.png";
import bugfixing from "../../assets/services/bugfixing.png";
import { MotionAnimate } from "react-motion-animate";

const Services = () => {
  return (
    <div className="bg-[#010313] text-white min-h-screen">
      <TitleSection
        header={"My"}
        optional={"Services"}
        helmet={"services"}
      ></TitleSection>
      <div className="grid grid-cols-2 place-items-center gap-4  ">
        <div data-aos="flip-left">
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
        </div>

        <div data-aos="flip-right">
          <div className="h-[500px] max-w-sm hover:bg-gray-900 overflow-hidden overflow-ellipsis">
            <h1 className="text-center p-2 bg-indigo-600 text-2xl font-semibold">
              Web Development
            </h1>
            <img
              className="max-w-60 h-56 mx-auto"
              src={webdevelopment}
              alt=""
            />
            <p className="overflow-ellipsis">
              Web development is the process of building and maintaining
              websites or web applications. It involves coding and programming
              to create the functionality and features that users interact with.
              Web developers use languages such as HTML, CSS, and JavaScript to
              structure and style web pages, as well as backend technologies
              like Python, PHP, or Node.js to handle server-side logic and
              database management. Additionally, frameworks and libraries such
              as React, Angular, or Vue.js are often employed to streamline
              development and enhance functionality. Web development encompasses
              a range of skills, including front-end development for user
              interface and experience, back-end development for server-side
              operations, and full-stack development which combines both
              aspects. The goal of web development is to create dynamic,
              responsive, and interactive web experiences that meet the needs of
              users and achieve the objectives of the website or application.
            </p>
          </div>
        </div>
        <div data-aos="flip-up">
          <div className="h-[500px] max-w-sm hover:bg-gray-900 overflow-hidden overflow-ellipsis">
            <h1 className="text-center p-2 bg-indigo-600 text-2xl font-semibold">
              Responsive Design
            </h1>
            <img className="max-w-60 h-60 mx-auto" src={responsive} alt="" />
            <p className="p-4 overflow-ellipsis overflow-hidden">
              A responsive web page is designed to adapt and adjust its layout
              and content to fit different screen sizes and devices, providing
              an optimal viewing experience for users across desktops, tablets,
              and smartphones. Responsive design uses flexible grids, layouts,
              and media queries to dynamically resize and rearrange elements
              based on the device's screen size and orientation. This approach
              ensures that the web page maintains its usability and readability
              regardless of the device used to access it, eliminating the need
              for separate mobile and desktop versions. By embracing responsive
              design principles, websites can improve accessibility, reach a
              broader audience, and enhance user satisfaction by delivering a
              consistent and visually appealing experience across all devices.
            </p>
          </div>
        </div>
        <div data-aos="flip-down">
          <div className="h-[500px] max-w-sm hover:bg-gray-900 overflow-hidden overflow-ellipsis">
            <h1 className="text-center p-2 bg-indigo-600 text-2xl font-semibold">
              One Page Web APP
            </h1>
            <img className="max-w-60 h-60 mx-auto" src={onepage} alt="" />
            <p className="p-4">
              A one-page app, also known as a single-page application (SPA), is
              a web application or website that operates within a single HTML
              page. Unlike traditional websites where each interaction with the
              server requires loading a new page, SPAs dynamically update
              content on the same page without needing to reload. This is
              achieved through JavaScript frameworks like React, Angular, or
              Vue.js, which handle the rendering and updating of content. SPAs
              offer a seamless and responsive user experience similar to that of
              a desktop application, as they can fetch data from the server
              asynchronously and update the page without interruption. They are
              well-suited for building interactive and dynamic web applications,
              such as social media platforms, online collaboration tools, or
              productivity apps, where users expect fast and fluid interactions.
              Additionally, SPAs can improve performance by reducing the amount
              of data transferred between the client and server, resulting in
              faster load times and smoother user experiences.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="h-[500px] max-w-sm hover:bg-gray-900 overflow-hidden overflow-ellipsis">
            <h1 className="text-center p-2 bg-indigo-600 text-2xl font-semibold">
              Bug Fixing
            </h1>
            <img className="max-w-60 h-60  mx-auto" src={bugfixing} alt="" />
            <p className="p-4">
              Bug fixing is the process of identifying, addressing, and
              resolving issues or errors in software code. These bugs can range
              from minor glitches to critical malfunctions that affect the
              functionality or performance of the software. Bug fixing typically
              involves steps such as reproducing the issue, isolating the cause,
              and implementing a solution, which may include modifying the code,
              configuration, or environment. It requires careful analysis and
              testing to ensure that the fix resolves the problem without
              introducing new issues. Bug fixing is an essential part of the
              software development lifecycle, as it helps improve the quality
              and reliability of the software, leading to a better user
              experience and higher customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
