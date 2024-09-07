import React from "react";
import "./Skills.css";
import afterEffects from "../../assets/media/skills/afterEffectsLogo.png";
import dsmax from "../../assets/media/skills/01.png";
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
                color="purple"
                aria-label="Adobe After Effects"
              />
            </div>
            <div>
              <SiAdobephotoshop size={100} aria-label="Adobe Photoshop" />
            </div>
            <div>
              <img src={dsmax} alt="3ds Max" />
            </div>
            <div>
              <SiAutodeskmaya size={100} aria-label="Adobe Photoshop" />
            </div>
            <div>
              <VscVscode size={100} aria-label="Vs Code" />
            </div>
            <div>
              <FaHtml5 size={100} color="orange" aria-label="HTML5" />
            </div>
            <div>
              <FaCss3Alt size={100} aria-label="CSS" />
            </div>
            <div>
              <SiCplusplus size={100} aria-label="C++" />
            </div>
            <div>
              <SiCsharp size={100} alt="C#" />
            </div>
            <div>
              <AiOutlineDotNet size={100} />
            </div>
            <div>
              <DiDotnet size={100} />
            </div>
            <div>
              <SiUnity size={100} alt="Unity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
