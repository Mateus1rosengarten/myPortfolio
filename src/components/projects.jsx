import { useContext, useEffect } from "react";
import "../components/projects.css";
import { contextDarkMode } from "../context/contextDarkMode";
import ProjectCard from "./card";
import projects from "../data/projectsArray";

function Projects() {
  const { itsDark, setCreateAnimation } = useContext(contextDarkMode);

  useEffect(() => {
    setCreateAnimation(false);
  }, [setCreateAnimation]);

  return (
    <div className={`projects-container mb-5 py-5  ${itsDark && "bg-dark"}`}>
      {projects.map((project, index) => (
        <ProjectCard
          title={project.title}
          images={project.images}
          text={project.text}
          techs={project.techs}
          gitLink={project.gitLink}
          imgLoading={project.imgLoading}
        />
      ))}
    </div>
  );
}

export default Projects;
