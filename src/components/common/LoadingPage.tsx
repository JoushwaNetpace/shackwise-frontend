import React from "react";
import { ShackwiseLogo } from "../../config/Images";

const LoadingPage: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
      <img
        src={ShackwiseLogo}
        alt="Shackwise Logo"
        className="img-fluid mb-3"
        style={{ maxWidth: "200px" }}
      />
      {/* Bootstrap Spinner with custom color */}
      <div
        className="spinner-border"
        style={{ color: "#007bff" }} // Custom color for the spinner
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
