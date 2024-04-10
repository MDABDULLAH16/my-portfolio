import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../shared/Navbar/Navbar";
import About from "../pages/About/About/About";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
};

export default Main;
