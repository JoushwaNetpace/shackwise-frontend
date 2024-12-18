import React, { useEffect, useRef, useState } from "react";
import {
  BellIcon,
  MenuIcon,
  ShackwiseLogo,
  UserPic,
} from "../../config/Images";
import useClickOutside from "../../hooks/useClickOutside";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth/authActions";
import { useSelector } from "react-redux";
import {
  selectAcceptInvite,
  selectRatingMode,
  selectUser,
  selectUserNotifications,
} from "../../store/slices/user/userSelectors";
import { removeTokenFromCookie } from "../../utils/CookieUtils";
import {
  changeHowItWorksModalAction,
  changeInviteConnectModalAction,
  changeShareCompareModalAction,
} from "../../store/slices/modal/modalActions";
import {
  fetchUserNotifications,
  setAcceptInvite,
  setRatingModeAction,
} from "../../store/slices/user/userActions";
import { AppDispatch } from "../../store/store";
import { getInitials } from "../../utils/commonUtils";
import NotificationItem from "../Shared/NotificationItem";
import { INotificationDocument } from "../../types/types";
import socketInstance from "../../config/socketInstance";

export const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const userData = useSelector(selectUser);
  const userNotifications = useSelector(selectUserNotifications);
  const acceptInvite = useSelector(selectAcceptInvite);
  const RatingMode = useSelector(selectRatingMode);

  // State to track dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  const [showPushyNavMenu, setshowPushyNavMenu] = useState(false);

  // Ref to detect click outside the dropdown
  const dropdownRef = useRef<any>(null);
  const mobileNavRef = useRef<any>(null);

  // Use the custom hook to handle click outside the dropdown
  useClickOutside(dropdownRef, (isOutside) => {
    if (isOutside) {
      setShowDropdown(false); // Close dropdown when click outside
    }
  });
  // Use the custom hook to handle click outside the dropdown
  useClickOutside(mobileNavRef, (isOutside) => {
    if (isOutside) {
      setshowPushyNavMenu(false); // Close dropdown when click outside
    }
  });

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleLogout = async () => {
    try {
      // Dispatch the logout action
      dispatch(logout()).unwrap();
      // await removeTokenFromCookie();
      dispatch(setAcceptInvite(false)).unwrap();
      dispatch(setRatingModeAction("")).unwrap();
    } catch (error) {
      console.log("error>>", error);
    }
  };
  useEffect(() => {
    const handleEvent = (event: MouseEvent) => {
      if (
        dropdownRef?.current &&
        !dropdownRef?.current.contains(event.target as Node)
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
  const navigateTo = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    socketInstance.connect();

    socketInstance.on("connect", () => {
      console.log("socketInstance connected:", socketInstance.id);
      socketInstance.emit("join", userData?._id);

      socketInstance.on("new-notification", (payload) => {
        console.log("payload>>", payload);
        dispatch(fetchUserNotifications()).unwrap();
      });
    });

    socketInstance.on("disconnect", () => {
      console.log("socketInstance disconnected");
    });

    // Cleanup function to disconnect the socketInstance
    return () => {
      socketInstance.disconnect();
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
                <div className="user-profile" onClick={handleLogout}>
                  {getInitials(userData ? userData?.name : "User Name")}
                </div>
                <div className="profile-name-mobile">
                  Hi {userData ? userData?.name : "User"}
                </div>
              </Link>
            </li>

            <li className="pushy-submenu pushy-link">
              <Link
                to="/home/leaderboard"
                onClick={() => {
                  setshowPushyNavMenu(false);
                }}
              >
                <div className="menu-img dashbord-icon"></div>
                <div>Leaderboard</div>
              </Link>
            </li>

            <li className="pushy-link">
              <Link
                to="/home/search-property"
                onClick={() => {
                  setshowPushyNavMenu(false);
                }}
              >
                <div className="menu-img devices-icon"></div>
                <div>Rate home</div>
              </Link>
            </li>
            <li className="pushy-link">
              <Link
                to="/home/priorites"
                onClick={() => {
                  setshowPushyNavMenu(false);
                }}
              >
                <div className="menu-img users-icon"></div>
                <div>Priorities</div>
              </Link>
            </li>
            <li className="pushy-link">
              <Link
                to="#"
                onClick={() => {
                  setshowPushyNavMenu(false);
                  dispatch(changeInviteConnectModalAction(true));
                }}
              >
                <div className="menu-img policy-icon"></div>
                <div>invite/connect</div>
              </Link>
            </li>
            <li className="pushy-link">
              <Link
                to="#"
                onClick={() => {
                  setshowPushyNavMenu(false);
                  dispatch(changeShareCompareModalAction(true));
                }}
              >
                <div className="menu-img connectors-icon"></div>
                <div className="">share/compare</div>
              </Link>
            </li>
            <li className="pushy-link">
              <Link
                to="#"
                onClick={() => {
                  setshowPushyNavMenu(false);
                  dispatch(changeHowItWorksModalAction(true));
                }}
              >
                <div className="menu-img reports-icon"></div>
                <div>how it works</div>
              </Link>
            </li>

            <div className="mobile-menu-bottom">
              <Link to="#">
                <div className="position-relative">
                  <img src={BellIcon} />
                  {userNotifications?.length !== 0 && (
                    <span className="notification-red-circle">
                      {userNotifications?.length}
                    </span>
                  )}
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
                <li onClick={() => navigateTo("/home/leaderboard")}>
                  <div className="menu-img dashbord-icon"></div>
                  <Link
                    to="/home/leaderboard"
                    className={
                      pathname == "/home/leaderboard" ? "active-link" : ""
                    }
                  >
                    Leaderboard
                  </Link>
                </li>
                <li onClick={() => navigateTo("/home/search-property")}>
                  <div className="menu-img devices-icon"></div>
                  <Link
                    to="/home/search-property"
                    className={
                      pathname == "/home/search-property" ? "active-link" : ""
                    }
                  >
                    Rate home
                  </Link>
                </li>
                <li onClick={() => navigateTo("/home/priorites")}>
                  <div className="menu-img users-icon"></div>
                  <Link
                    to="/home/priorites"
                    className={
                      pathname == "/home/priorites" ? "active-link" : ""
                    }
                  >
                    priorities
                  </Link>
                </li>
                <li
                  onClick={() => dispatch(changeInviteConnectModalAction(true))}
                >
                  <div className="menu-img policy-icon"></div>
                  <Link to="#">invite/connect</Link>
                </li>
                <li
                  onClick={() => dispatch(changeShareCompareModalAction(true))}
                >
                  <div className="menu-img connectors-icon"></div>
                  <Link to="#" className="">
                    share/compare
                  </Link>
                </li>
                <li onClick={() => dispatch(changeHowItWorksModalAction(true))}>
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

                <button
                  className="user-profile cursor-pointer"
                  onClick={handleLogout}
                >
                  {getInitials(userData ? userData?.name : "User Name")}
                </button>
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
                  {userNotifications?.length !== 0 && (
                    <span className="notification-red-circle">
                      {userNotifications?.length}
                    </span>
                  )}
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
                      {userNotifications?.length !== 0 ? (
                        <>
                          {userNotifications?.map(
                            ({ ...props }: INotificationDocument) => (
                              <NotificationItem {...props} />
                            )
                          )}
                          <li className="footer bg-dark text-center">
                            <a href="" className="view-details-link">
                              View All Notifications
                            </a>
                          </li>
                        </>
                      ) : (
                        <div className="flex-1 text-center">
                          <strong className="text-info">
                            No Notifications!
                          </strong>
                        </div>
                      )}
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
        {acceptInvite && (
          <div className="main-container">
            <div className="announcement-wrap">
              {RatingMode == "SHARE" ? "Share" : "Compare"} mode with Rony
              <div className="userpic-wrap ">
                <img src={UserPic} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
