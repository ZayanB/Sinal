import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about-me">
      <div className="About-Main-Container">
        <div className="About-hello">
          <div style={{ fontSize: "20px" }}>Hello! I'm</div>
          <div
            style={{ fontSize: "40px", fontWeight: "bold", color: "#6d7d8d" }}
          >
            SINAL BREICHE
          </div>
        </div>
        <div className="About-Description">
 Skills
          <div
            className="About-Me"
            style={{ fontSize: "145px", textAlign: "right", color: "black" }}
          >
            ABOUT
            <div style={{ margin: "-80px 0 0 0" }}> ME </div>
          </div>
          <div
            style={{
              width: "66.667%",
              fontSize: "20px",
              paddingTop: "6rem",
              color: "black",
            }}
 main
          >
            I'm a computer graphics and animation professional with a passion
            for bringing ideas to life. With a string background in 3D modeling,
            animation, and game development, I work with tools like 3ds Max,
            Autodesk Maya, ZBrush, and Unity. I also enjoy creating dynamin
            visual content using Adobe After Effects and Photoshop. In addition
            to my creative work, I develop user-friendly appications with WPF,
            blending design and functionality seamlessly. I'm always eager to
            tackle new challenges and collaborate on projects that push creative
            boundaries.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
