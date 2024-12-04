import React, { useEffect, useRef, useState } from "react";
import {
  BellIcon,
  MenuIcon,
  ShackwiseLogo,
  UserPic,
} from "../../config/Images";
import useClickOutside from "../../hooks/useClickOutside";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth/authActions";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/user/userSelectors";
export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  // State to track dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  const [showPushyNavMenu, setshowPushyNavMenu] = useState(false);

  // Ref to detect click outside the dropdown
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Use the custom hook to handle click outside the dropdown
  const { handleEvent } = useClickOutside(dropdownRef, (isOutside, event) => {
    if (isOutside) {
      setShowDropdown(false); // Close dropdown when click outside
    }
  });
  // Use the custom hook to handle click outside the dropdown
  const { handleEvent: handleEventPushyNav } = useClickOutside(
    mobileNavRef,
    (isOutside, event) => {
      if (isOutside) {
        setshowPushyNavMenu(false); // Close dropdown when click outside
      }
    }
  );

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
  };
  useEffect(() => {
    const handleEvent = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleEvent);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, []);

  return (
    <>
      {/* <!-- Pushy Menu Mobile--> */}
      <nav
        className={`pushy  ${
          showPushyNavMenu ? "pushy-open-left" : "pushy-left"
        } `}
        data-focus="#first-link"
        ref={mobileNavRef}
      >
        <div className="pushy-content">
          <ul>
            <li className="pushy-link">
              <Link to="#" className="menu-notification relative">
                <div className="user-profile">JD</div>
                <div className="profile-name-mobile">Hi Daniels</div>
              </Link>
            </li>

            <li className="pushy-submenu pushy-link">
              <Link to="/home/leaderboard">
                <div className="menu-img dashbord-icon"></div>
                <div>Leaderboard</div>
              </Link>
            </li>

            <li className="pushy-link">
              <Link to="/home/search-property">
                <div className="menu-img devices-icon"></div>
                <div>Rate home</div>
              </Link>
            </li>
            <li className="pushy-link">
              <Link to="/home/priorites">
                <div className="menu-img users-icon"></div>
                <div>Priorities</div>
              </Link>
            </li>
            <li className="pushy-link">
              <Link to="#">
                <div className="menu-img policy-icon"></div>
                <div>invite/connect</div>
              </Link>
            </li>
            <li className="pushy-link">
              <Link to="#">
                <div className="menu-img connectors-icon"></div>
                <div className="">share/compare</div>
              </Link>
            </li>
            <li className="pushy-link">
              <Link to="#">
                <div className="menu-img reports-icon"></div>
                <div>how it works</div>
              </Link>
            </li>

            <div className="mobile-menu-bottom">
              <Link to="#">
                <div className="position-relative">
                  <img src={BellIcon} />
                  <span className="notification-red-circle">3</span>
                </div>
                <div className="ml-3">Notifications</div>
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0 header-wrap">
        <div className="container">
          <header>
            <div className="menu-trigger" style={{ display: "none" }}>
              <img src={MenuIcon} />
            </div>

            <div className="header-logo">
              <Link to="/home">
                <img src={ShackwiseLogo} className="logo" />
              </Link>
            </div>

            <div className="top-menu header-menu">
              <ul className="p-0">
                <li>
                  <div className="menu-img dashbord-icon"></div>
                  <Link to="/home/leaderboard" className="active-link">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <div className="menu-img devices-icon"></div>
                  <Link to="/home/search-property">Rate home</Link>
                </li>
                <li>
                  <div className="menu-img users-icon"></div>
                  <Link to="/home/priorites">priorities</Link>
                </li>
                <li>
                  <div className="menu-img policy-icon"></div>
                  <Link to="#">invite/connect</Link>
                </li>
                <li>
                  <div className="menu-img connectors-icon"></div>
                  <Link to="#" className="">
                    share/compare
                  </Link>
                </li>
                <li>
                  <div className="menu-img reports-icon"></div>
                  <Link to="#">how it works</Link>
                </li>
              </ul>
            </div>

            <div className="header-icons">
              <div className="d-flex align-items-center">
                <div className="username-box mr-2">
                  <div className="username">
                    Hi {userData ? userData?.name : "User"}
                  </div>
                </div>

                <div className="user-profile" onClick={handleLogout}>
                  JD
                </div>
              </div>

              <div className="dropdown ml-2" ref={dropdownRef}>
                <a
                  href="#"
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={showDropdown ? "true" : "false"}
                  onClick={handleDropdownToggle}
                >
                  <img src={BellIcon} />
                  <span className="notification-red-circle">3</span>
                </a>

                <div
                  className={`dropdown-menu notification-dropdow-div ${
                    showDropdown ? "show" : ""
                  }`}
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="dropdown-menu1">
                    <div className="head text-light">
                      <div className="row">
                        <div className="col-lg-12 col-sm-12 col-12">
                          <span>
                            <strong>Notifications</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul id="scroll" className="notifi-scroll p-0">
                      <div>
                        <li className="notification-box">
                          <div className="row-info">
                            <div className="text-left">
                              <div className="userpic-wrap">
                                <img
                                  src={UserPic}
                                  className="w-100 rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-1">
                              <strong className="text-info">
                                Rony sent you a Share request
                              </strong>
                            </div>
                            <div>
                              <a href="" className="accept-text">
                                Accept
                              </a>
                            </div>
                          </div>
                        </li>

                        <br />
                      </div>
                      <li className="footer bg-dark text-center">
                        <a href="" className="view-details-link">
                          View All Notifications
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="menu-btn"
              onClick={() => setshowPushyNavMenu(!showPushyNavMenu)}
            >
              <img src={MenuIcon} />
            </button>
          </header>
        </div>
        {/*  Share and compare mode section */}
        {/* <div className="main-container">
          <div className="announcement-wrap">
            Share mode with Rony
            <div className="userpic-wrap ">
              <img src={UserPic} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
