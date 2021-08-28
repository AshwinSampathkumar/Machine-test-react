// Packages
import React from "react";
import { useHistory } from "react-router-dom";

// components
import { Button } from "../Components";

// icons
import Logo from "../assets/logo/logo.PNG";
import DashboardIcon from "../assets/icon-png/dashboard.png";
import Plus from "../assets/icon-png/add.png";
import User from "../assets/icon-png/user.png";
import Priority from "../assets/icon-png/priority.png";
import Stopgo from "../assets/icon-png/stopgo.png";

const Layout = ({ children }) => {
  const history = useHistory();

  const navigateTo = (value) => {
    history.push(value);
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="full-width">
          <div className="logo-container">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <ul className="sidebar-items">
            <li
              className={`sidebar-item ${
                history.location.pathname === "/" ? "selected-sidebar-item" : ""
              }`}
              onClick={() => navigateTo("/")}
            >
              <label className="item-content">
                <span>
                  <img
                    className="item-logo"
                    src={DashboardIcon}
                    alt="dashboard"
                  />
                </span>
                Dashboard
              </label>
            </li>
            <li className="sidebar-item">
              <label className="item-content">
                <span>
                  <img className="item-logo" src={Plus} alt="add" />
                </span>
                Create Order
              </label>
            </li>
            <li
              className={`sidebar-item ${
                history.location.pathname === "/client-management"
                  ? "selected-sidebar-item"
                  : ""
              }`}
              onClick={() => navigateTo("/client-management")}
            >
              <label className="item-content">
                <span>
                  <img className="item-logo" src={User} alt="user" />
                </span>
                Client Management{history.location.path}
              </label>
            </li>
            <li className="sidebar-item">
              <label className="item-content">
                <span>
                  <img className="item-logo" src={Priority} alt="priority" />
                </span>
                Priority
              </label>
            </li>
            <li className="sidebar-item">
              <label className="item-content">
                <span>
                  <img className="item-logo" src={Stopgo} alt="stop-go" />
                </span>
                Stop & Go
              </label>
            </li>
          </ul>
        </div>
        <div className="sign-out">
          <Button label="Sign Out" type="secondary" width="90%" />
        </div>
      </div>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
