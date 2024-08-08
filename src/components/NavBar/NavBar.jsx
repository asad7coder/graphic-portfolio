import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.jpg";
import verified_tick from "../../assets/verified-tick.png";
import menu_icon from "../../assets/menu-icon.png";
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" className="logo_img" />
          <span>Muhammad Asad</span>
          <img src={verified_tick} alt="" className="verified-tick" />
        </div>
        <ul className={menu ? "" : "hide-mobile"}>
          <li>
            <NavLink
              to="collection"
              className={({ isActive }) =>
                `${isActive ? "active-link" : "noActive-link"}`
              }
            >
              Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="poster"
              className={({ isActive }) =>
                `${isActive ? "active-link" : "noActive-link"}`
              }
            >
              Poster
            </NavLink>
          </li>
        </ul>
        <img
          src={menu_icon}
          alt=""
          className="menu-icon"
          onClick={toggleMenu}
        />
      </nav>
    </>
  );
};

export default NavBar;
