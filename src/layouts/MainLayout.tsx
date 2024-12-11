import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";

export const MainLayout: React.FC = () => {
  // useEffect(() => {
  //   // Create the script element
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
  //   script.async = true;
  //   script.onload = () => console.log("Bootstrap script loaded!");

  //   // Append the script to the body
  //   document.body.appendChild(script);

  //   // Cleanup the script when the component is unmounted
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="body-inner">
      <Header />
      <div className="container-fluid main-wrapper p-0 h-100">
        {/* Render the routed child components here */}
        <Outlet />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container-fluid footer text-center">
          <p>Copyright © 2024 Shackwise | All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
};
