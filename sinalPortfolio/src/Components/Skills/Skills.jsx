import React from "react";
import "./Skills.css";
import dsmax from "../../assets/media/skills/3dsMax.png";
import zbrush from "../../assets/media/skills/zBrush.png";
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAutodeskmaya,
  SiCplusplus,
  SiCsharp,
  SiUnity,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiDotnet } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills">
      <div className="Skills-Center">
        <div className="Skills-Parent">
          <div className="My-Skills">My Skills</div>
          <div className="Skills-Main">
            <div className="x">
              <SiAdobeaftereffects
                size={100}
                color="#00005b"
                aria-label="Adobe After Effects"
              />
            </div>
            <div>
              <SiAdobephotoshop
                size={100}
                color="#001e36"
                aria-label="Adobe Photoshop"
              />
            </div>
            <div>
              <img src={dsmax} alt="3ds Max" />
            </div>
            <div>
              <SiAutodeskmaya
                size={100}
                color="#52a5c7"
                aria-label="Autodesk Maya"
              />
            </div>
            <div>
              <SiUnity size={100} color="black" alt="Unity" />
            </div>
            <div>
              <VscVscode size={100} color="#007ec1" aria-label="Vs Code" />
            </div>
            <div>
              <FaHtml5 size={100} color="orange" aria-label="HTML5" />
            </div>
            <div>
              <FaCss3Alt size={100} color="#264de4" aria-label="CSS" />
            </div>
            <div>
              <SiCplusplus size={100} color="#00599c" aria-label="C++" />
            </div>
            <div>
              <SiCsharp size={100} color="#00599c" alt="C#" />
            </div>
            <div>
              <DiDotnet size={100} color="#007ec1" aria-label="WPF" />
            </div>
            <div>
              <AiOutlineDotNet size={100} color="black" aria-label=".NET" />
            </div>
            <div>
              <img src={zbrush} alt="zBrush" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
