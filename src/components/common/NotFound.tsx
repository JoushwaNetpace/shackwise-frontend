// src/components/common/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";
import { PageNotFoundAnimationIcon, ShackwiseLogo } from "../../config/Images";
import LottieAnimation from "../Shared/LottieAnimation";

const NotFound: React.FC = () => {
  return (
    <div className="col-lg-12 text-center">
      <div className="login">
        <div className="login-header p-4">
          <img
            src={ShackwiseLogo}
            style={{ width: "20%" }}
            className="logo-left"
            alt="Shackwise Logo"
          />
        </div>
        <div className="login-form col-lg-6 col-sm-12 mt-2">
          <div className="d-flex justify-content-center align-center">
            <LottieAnimation
              animationData={PageNotFoundAnimationIcon}
              width={250}
              height={250}
            />
          </div>
          <h1 className="text-danger">404 - Page Not Found</h1>
          <p className="mt-3">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to="/" className="login-button-text mt-3">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
