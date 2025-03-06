import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import routes from "./routes/routes.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { HelmetProvider } from "react-helmet-async";
// ..
AOS.init();
const helmetContext = {};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={routes}>
        <Main></Main>
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);
