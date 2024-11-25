import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="container-fluid main-wrapper p-0">
      {/* Render the routed child components here */}
      <Outlet />

      <br />
      <br />
      <br />

      <div className="container-fluid footer text-center">
        <p>Copyright © 2024 Shackwise | All Rights Reserved </p>
      </div>
    </div>
  );
};

export default AuthLayout;
