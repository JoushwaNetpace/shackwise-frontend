import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";

export const MainLayout: React.FC = () => {
  const year = new Date().getFullYear();
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
          <p>Copyright © {year} Shackwise | All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
};
