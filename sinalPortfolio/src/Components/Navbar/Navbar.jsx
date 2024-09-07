import React from "react";
import "./Navbar.css";
import { PiMoon } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/media/logo/sbLogo.png";

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
        <NavLink to={"/#about-me"} style={{ color: "white" }}>
          About
        </NavLink>

        <NavLink to={"/projects"} style={{ color: "white" }}>
          Projects
        </NavLink>
        <NavLink to={"/#skills"} style={{ color: "white" }}>
          Skills
        </NavLink>
        <div style={{ color: "white" }}>Contact</div>
      </div>
      <div className="Navbar-icon">
        <PiMoon size={22} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
