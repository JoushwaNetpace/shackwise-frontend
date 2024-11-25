import React from "react";
import { ShackwiseLogo } from "../../../config/Images";
import { Link } from "react-router-dom";

const HowShackWiseWork: React.FC = () => {
  return (
    <div className="container">
      <div className="row m-0 ">
        <div className="col-lg-12 text-center ">
          <div className="login ">
            <div className="login-form col-lg-6 col-sm-12 mt-2 d-flex justify-content-center align-items-center flex-column">
              <div className="login-logo mt-5">
                <img src={ShackwiseLogo} className="logo" />
              </div>

              <div className="menu-btns-wrap col-lg-8">
                <Link to="#" className="btn-round">
                  Set your priorities first
                </Link>
                <Link to="#" className="btn-round">
                  See How ShackWise Works
                </Link>
                <Link to="#" className="btn-round ">
                  Rate a Home
                </Link>
                <Link to="#" className="btn-round ">
                  View the Leaderboard
                </Link>
                <Link to="#" className="btn-round       ">
                  Connect with Partner / Agent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowShackWiseWork;
