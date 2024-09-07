import React from "react";
import "./Skills.css";
import afterEffects from "../../assets/media/skills/afterEffectsLogo.png";
import dsMax from "../../assets/media/skills/3dsMaxLogo.png";
import phnx from "../../assets/media/skills/phoenix3dsLogo.png";
import wpfLogo from "../../assets/media/skills/wpfLogo.png";
import vsCode from "../../assets/media/skills/vsCodeLogo.png";
import mayaLogo from "../../assets/media/skills/mayaLogo.png";
import zBrushLogo from "../../assets/media/skills/zBrushLogo.jpg";
import adobePsLogo from "../../assets/media/skills/3dsPs.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="Skills-Parent">
        <div className="My-Skills">My Skills</div>
        <div className="Skills-Main">
          <div className="Skill-logo">
            <img
              src={afterEffects}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="Skill-logo">
            <img
              src={mayaLogo}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="Skill-logo">
            <img
              src={adobePsLogo}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="Skill-logo">
            <img src={phnx} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="Skill-logo">
            <img
              src={zBrushLogo}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="Skill-logo">
            <img
              src={wpfLogo}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="Skill-logo">
            <img
              src={vsCode}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
