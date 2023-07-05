import React, { Children } from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaRegLaugh,
  FaRegImage,
  FaComment,
  FaBars,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import "./sidebar.css";

const Sidebar = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItem = [
    { path: "/", name: "Homepage", icon: <FaHome /> },
    { path: "/about", name: "About", icon: <FaRegLaugh /> },
    { path: "/gallery", name: "Gallery", icon: <FaRegImage /> },
    { path: "/contact", name: "Contact", icon: <FaComment /> },
  ];

  const socialMediaItem = [
    {
      url: "https://github.com/JohnFromJovy",
      name: "Github",
      icon: <FaGithub />,
    },
    {
      url: "https://www.instagram.com/jovy_studio/",
      name: "Instagram",
      icon: <FaInstagram />,
    },
  ];

  return (
    <div className="sidebarContainer">
      <div
        style={{ width: isCollapsed ? "250px" : "50px" }}
        className="sidebar"
      >
        <div className="topSection">
          <h1
            style={{ display: isCollapsed ? "block" : "none" }}
            className="logo"
          >
            JOVY
          </h1>
          <div
            style={{ marginLeft: isCollapsed ? "80px" : "0" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isCollapsed ? "block" : "none" }}
              className="linkText"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <div className="linkSection"></div>
        {socialMediaItem.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            alt={item.name}
            className="linkIcon"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
