import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="Layout-Main-Container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
