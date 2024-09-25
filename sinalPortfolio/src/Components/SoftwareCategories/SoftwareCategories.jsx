import React from "react";
import "./SoftwareCategories.css";
// import dsmax from "../../assets/media/skills/3dsMax.png";
// import zbrush from "../../assets/media/skills/zBrush.png";
import categories from "../../assets/data/SoftwareCategories.json";
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAutodeskmaya,
  SiUnity,
} from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiDotnet } from "react-icons/di";
import { NavLink } from "react-router-dom";

const iconMap = {
  SiAdobeaftereffects: SiAdobeaftereffects,
  SiAdobephotoshop: SiAdobephotoshop,
  SiAutodeskmaya: SiAutodeskmaya,
  SiUnity: SiUnity,
  AiOutlineDotNet: AiOutlineDotNet,
  DiDotnet: DiDotnet,
};

const SoftwareCategories = () => {
  return (
    <div className="soft-cat-main">
      {categories.map((category, index) => (
        <NavLink key={index} to={`projects/${category.id}`}>
          <div className="single-software">
            <div>
              {React.createElement(iconMap[category.icon], {
                size: 350,
                color: category.color,
              })}
            </div>
            <div className="soft-cat-name">
              {category.name} | {category.count} Projects
            </div>
          </div>
        </NavLink>
      ))}
      {/* <div className="single-software">
        <div>
          <img src={zbrush} alt="zBrush" />
        </div>
        <div>Z Brush | 1 Project</div>
      </div>
      <div>
        <img src={dsmax} alt="3ds Max" />
      </div> */}
    </div>
  );
};

export default SoftwareCategories;
