import React from "react";
import "./Projects.css";
import projects from "../../assets/data/HomeProjects.json";
import { PiArrowRightLight } from "react-icons/pi";

const Projects = () => {
  return (
    <div className="Projects-Home-Main">
      <div className="my-projects">MY PROJECTS</div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="home-project-image">
              <img
                src={project.URL}
                alt={project.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "scale(1)",
                }}
              />
            </div>
            <div className="project-name">{project.projectName}</div>
            <div className="software">{project.software}</div>
          </div>
        ))}
      </div>
      <div style={{ alignSelf: "center" }}>
        <button className="view-projects-btn">
          View All Projects{" "}
          <PiArrowRightLight
            // size={22}
            style={{ transform: "translateY(3px)" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Projects;
