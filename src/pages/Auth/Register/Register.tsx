import React from "react";
import { RegisterIcon, ShackwiseLogo } from "../../../config/Images";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-lg-12 text-center">
          <div className="login">
            <div className="login-header text-left p-4">
              <img
                src={ShackwiseLogo}
                style={{ width: "20%" }}
                className="logo-left"
                alt="Shackwise Logo"
              />
            </div>
            <div className="login-form col-lg-6 col-sm-12 mt-2">
              <div className="login-logo">
                <img src={RegisterIcon} className="logo" alt="Register Icon" />
              </div>
              <h3>
                Full Name <span>*</span>
              </h3>
              <input
                type="text"
                className="error-field"
                placeholder="Username"
              />
              <p className="error-txt">Please enter your fullname</p>
              <br />
              <h3>Phone Number (Optional)</h3>
              <input type="text" placeholder="Phone Number" />
              <br />
              <h3>
                Email address <span>*</span>
              </h3>
              <input type="text" placeholder="Email" />
              <br />
              <div className="d-flex justify-content-between align-items-center forgot-wrap">
                <h3>
                  Create Password <span>*</span>
                </h3>
              </div>
              <input
                type="password"
                className="password-input"
                placeholder="Password"
              />
              <br />
              <input
                type="button"
                value="Sign Up"
                className="login-button mb-3"
                onClick={() => {
                  navigate("/login");
                }}
              />
              <br />
              <Link to="/login" className="login-button-text">
                Login
              </Link>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
