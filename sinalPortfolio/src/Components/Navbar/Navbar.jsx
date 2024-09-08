import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { PiMoon } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/media/logo/sbLogo.png";

const Navbar = () => {
  const location = useLocation();
  // const [nav, setNav] = useState("/");

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
        <NavLink to={"/#about-me"} className="Navbar-Items-Color">
          ABOUT
        </NavLink>
        <NavLink to={"/#homeProjects"} className="Navbar-Items-Color">
          PROJECTS
        </NavLink>
        <NavLink to={"/#skills"} className="Navbar-Items-Color">
          SKILLS
        </NavLink>
        <NavLink to={"/#contact-me"} className="Navbar-Items-Color">
          CONTACT
        </NavLink>
      </div>
      <div className="Navbar-icon">
        <PiMoon size={30} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
