import React from "react";
import { ShackwiseLogo } from "../../../config/Images";
import { Link } from "react-router-dom";

// Define the component as a TypeScript functional component
const ChooseRole: React.FC = () => {
  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-lg-12 text-center">
          <div
            className="login"
            style={{ height: `calc(100vh - 200px)` }} // Corrected inline style
          >
            <div className="login-form">
              <div className="login-logo mt-5">
                <img src={ShackwiseLogo} className="logo" />
              </div>

              <div className="choose-role-btns-wrap">
                <Link to="/register/HOME_AGENT" className="btn-round">
                  I am an Agent
                </Link>
                <Link to="/register/HOME_BUYER" className="btn-round">
                  I am a Home Buyer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
