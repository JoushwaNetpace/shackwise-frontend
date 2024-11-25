import React from "react";
import {
  BellIcon,
  MenuIcon,
  ShackwiseLogo,
  UserPic,
} from "../../config/Images";

export const Header: React.FC = () => {
  return (
    <>
      {/* <!-- Pushy Menu --> */}
      <nav className="pushy pushy-left" data-focus="#first-link">
        <div className="pushy-content">
          <ul>
            <li className="pushy-link">
              <a href="#" className="menu-notification relative">
                <div className="user-profile">
                  JD
                  {/* <!-- <span>3</span> --> */}
                </div>

                <div className="profile-name-mobile">
                  Hi Daniels
                  {/* <!-- <div className="profile-category">
                Admin
              </div> --> */}
                </div>
              </a>
            </li>

            <li className="pushy-submenu pushy-link">
              <a href="#">
                <div className="menu-img dashbord-icon"></div>
                <div>Leaderboard</div>
              </a>
              {/* <!-- <button id="first-link">Dashboard</button> -->
            <!-- <ul>
                  <li className="pushy-submenu">
                      <button>Sub-Submenu 1</button>
                      <ul>
                          <li className="pushy-link"><a href="#">Item 1</a></li>
                          <li className="pushy-link"><a href="#">Item 2</a></li>
                      </ul>
                  </li>
                  <li className="pushy-submenu">
                      <button>Sub-Submenu 2</button>
                      <ul>
                          <li className="pushy-link"><a href="#">Item 1</a></li>
                          <li className="pushy-link"><a href="#">Item 2</a></li>
                      </ul>
                  </li>
                  <li className="pushy-link"><a href="#">Item 1</a></li>
                  <li className="pushy-link"><a href="#">Item 2</a></li>
              </ul> --> */}
            </li>

            <li className="pushy-link">
              <a href="#">
                <div className="menu-img devices-icon"></div>
                <div>Rate home</div>
              </a>
            </li>
            <li className="pushy-link">
              <a href="#">
                <div className="menu-img users-icon"></div>
                <div>Priorities</div>
              </a>
            </li>
            <li className="pushy-link">
              <a href="#">
                <div className="menu-img policy-icon"></div>
                <div>invite/connect</div>
              </a>
            </li>
            <li className="pushy-link">
              <a href="#">
                <div className="menu-img connectors-icon"></div>

                <div className="">share/compare</div>
              </a>
            </li>
            <li className="pushy-link">
              <a href="#">
                <div className="menu-img reports-icon"></div>
                <div>how it works</div>
              </a>
            </li>

            <div className="mobile-menu-bottom">
              <a href="#">
                <div className="position-relative">
                  <img src={BellIcon} />
                  <span className="notification-red-circle">3</span>
                </div>
                <div className="ml-3">Notifications</div>
              </a>
              {/* <!-- <a href="#">
            <div className="menu-img help-icon"></div>
            <div>
              Help
            </div>
          </a>

          <a href="#">
            <div className="menu-img settings-icon"></div>

            <div>
              Settings
            </div>
          </a> --> */}
            </div>
          </ul>
        </div>
      </nav>

      {/* <!-- Site Overlay --> */}
      {/* <div className="site-overlay"></div> */}

      <div className="container-fluid p-0 header-wrap">
        <div className="container">
          <header>
            <div className="menu-trigger" style={{ display: "none" }}>
              <img src={MenuIcon} />
            </div>

            <div className="header-logo">
              <img src={ShackwiseLogo} className="logo" />
            </div>

            <div className="top-menu header-menu">
              <ul className="p-0">
                <li>
                  <div className="menu-img dashbord-icon"></div>

                  <a href="#" className="active-link">
                    Leaderboard
                  </a>
                  {/* <!-- <ul className="header-submenu">
              <li><a href="#">SubMenu 2</a></li>
              <li><a href="#">SubMenu 3</a></li>
              <li><a href="#">SubMenu 4</a></li>
              <li><a href="#">SubMenu 5</a></li>
            </ul> --> */}
                </li>
                <li>
                  <div className="menu-img devices-icon"></div>
                  <a href="#">Rate home</a>
                </li>
                <li>
                  <div className="menu-img users-icon"></div>
                  <a href="#">priorities</a>
                </li>
                <li>
                  <div className="menu-img policy-icon"></div>
                  <a href="#">invite/connect</a>
                </li>
                <li>
                  <div className="menu-img connectors-icon"></div>
                  <a href="#" className="">
                    share/compare
                  </a>
                </li>
                <li>
                  <div className="menu-img reports-icon"></div>
                  <a href="#">how it works</a>
                </li>
              </ul>
            </div>

            <div className="header-icons">
              <div className="d-flex align-items-center">
                <div className="username-box mr-2">
                  <div className="username">Hi Daniel</div>
                </div>
                <div className="user-profile">JD</div>
              </div>

              <div className="dropdown ml-2">
                <a
                  href="#"
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={BellIcon} />
                  <span className="notification-red-circle">3</span>
                </a>

                <div
                  className="dropdown-menu notification-dropdow-div"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="dropdown-menu1">
                    <div className="head text-light">
                      <div className="row">
                        <div className="col-lg-12 col-sm-12 col-12">
                          <span>
                            <strong>Notifications</strong>
                          </span>
                          {/* <!-- <a href="" className="float-right text-light">View All</a> --> */}
                        </div>
                      </div>
                    </div>

                    <ul id="scroll" className="notifi-scroll p-0">
                      <div>
                        <li className="notification-box">
                          <div className="row-info">
                            <div className="text-left">
                              {/* <!-- <div className="c-red-notification">&nbsp;</div> --> */}
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
                              {/* <!-- <div className="subline-text">
                            Lorem ipsum dolor sit amet, consectetur
                          </div> --> */}
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

            <button className="menu-btn">
              <img src={MenuIcon} />
            </button>
          </header>
        </div>
      </div>
    </>
  );
};
