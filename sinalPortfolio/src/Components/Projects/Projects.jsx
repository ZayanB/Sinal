import React from "react";
import "./Projects.css";
import projects from "../../assets/data/HomeProjects.json";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <section id="homeProjects">
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
          <NavLink to="/softwareCategories">
            <button className="view-projects-btn">
              View All Projects
              <BsArrowRight style={{ transform: "translateY(3px)" }} />
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Projects;
