import React from "react";
import { ShackwiseLogo } from "../../../config/Images";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import {
  changeHowItWorksModalAction,
  changeInviteConnectModalAction,
} from "../../../store/slices/modal/modalActions";

const Menu: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="container">
        <div className="row m-0 ">
          <div className="col-lg-12 text-center ">
            <div className="login ">
              <div className="login-form col-lg-6 col-sm-12 mt-2 d-flex justify-content-center align-items-center flex-column">
                <div className="login-logo mt-5">
                  <img
                    src={ShackwiseLogo}
                    className="logo"
                    alt="Shackwise Logo"
                  />
                </div>

                <div className="menu-btns-wrap col-lg-8">
                  <Link to="/menu/set-priorities" className="btn-round">
                    Set My Priorities
                  </Link>
                  <Link
                    to="#"
                    className="btn-round"
                    onClick={() => dispatch(changeHowItWorksModalAction(true))}
                  >
                    See How ShackWise Works
                  </Link>
                  <Link to="/home/search-property" className="btn-round ">
                    Rate a Home
                  </Link>
                  <Link to="/home/leaderboard" className="btn-round ">
                    View the Leaderboard
                  </Link>
                  {/* Button to open the modal */}
                  <Link
                    to="#"
                    className="btn-round"
                    onClick={() =>
                      dispatch(changeInviteConnectModalAction(true))
                    }
                  >
                    Invite Partner / Agent
                  </Link>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional rendering of the invite connect overlay modal */}
    </>
  );
};

export default Menu;
