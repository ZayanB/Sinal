import React from "react";
import "./Navbar.css";
import { PiMoon } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/media/logo/sbLogoBlack.png";

const Navbar = () => {
  return (
    <div className="NavBar-Main-Container">
      <div className="Navbar-Logo">
        <NavLink to={"/"} style={{ color: "white" }}>
          <img
            style={{
              transform: "scale(1.6)",
              width: "100%",
              paddingLeft: "1rem",
              paddingTop: "0.5rem",
            }}
            src={logo}
            alt=""
          />
        </NavLink>
      </div>
      <div className="Navbar-Items">
        <NavLink to={"/#about-me"} style={{ color: "black" }}>
          About
        </NavLink>

        <NavLink to={"/projects"} style={{ color: "black" }}>
          Projects
        </NavLink>
        <div>Skills</div>
        <div>Contact</div>
      </div>
      <div className="Navbar-icon">
        <PiMoon size={22} />
      </div>
    </div>
  );
};

export default Navbar;
