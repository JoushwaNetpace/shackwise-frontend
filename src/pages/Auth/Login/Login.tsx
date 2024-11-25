import React from "react";
import { LoginIcon, ShackwiseLogo } from "../../../config/Images";
import { Link, useNavigate } from "react-router-dom";

// Define the component as a TypeScript functional component
const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row m-0 ">
        <div className="col-lg-12 text-center ">
          <div className="login">
            <div className="login-header text-left p-4">
              <img
                src={ShackwiseLogo}
                style={{ width: "20%" }}
                className="logo-left"
              />
            </div>
            <div className="login-form col-lg-6 col-sm-12 mt-2">
              <div className="login-logo">
                <img src={LoginIcon} className="logo" />
              </div>
              <h3>User Name</h3>
              <input type="text" placeholder="Username" />
              <br />
              <div className="d-flex justify-content-between align-items-center forgot-wrap">
                <h3>Password:</h3>
                {/* <!-- <a href="#" className="forgot-text">Forgot Password?</a> --> */}
              </div>
              <input
                type="password"
                className="password-input"
                placeholder="Password"
              />
              <br />
              {/* <!-- <label className="checkbox checkbox-wrap">
              <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Keep me signed in
            </label> --> */}
              <br />

              <input
                type="button"
                value="Login"
                className="login-button mb-3"
                onClick={() => {
                  navigate("/menu");
                }}
              />
              <br />
              <Link to="/register" className="login-button-text">
                Register
              </Link>

              <br />
              <br />
              <br />
              <br />
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

export default Login;
