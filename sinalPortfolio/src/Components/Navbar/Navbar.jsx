import React from "react";
import "./Navbar.css";
import { PiMoon } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavBar-Main-Container">
      <div className="Navbar-Logo">
        <NavLink to={"/"} style={{ color: "black" }}>
          SINAL
        </NavLink>
      </div>
      <div className="Navbar-Items">
        <div>About</div>
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
