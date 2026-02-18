import { useContext, useEffect, useState } from "react";
import "../views/projects.css";
import { contextDarkMode } from "../context/contextDarkMode";
import projects from "../data/projectsArray";
import TechFilter from "../components/techFilter";
import OrderFilter from "../components/orderFilter";
import { Button } from "react-bootstrap";

import ProjectCard from "../components/card";

function Projects() {
  const { itsDark, setCreateAnimation } = useContext(contextDarkMode);
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("Most Recent");
  const [selectedProject, setSelectedProject] = useState(null);
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    setCreateAnimation(false);
  }, [setCreateAnimation]);

  const handleTechClick = (tech) => {
    if (tech === "SHOW ALL") {
      setSelectedTech([]);
    } else {
      setSelectedTech((prev) =>
        prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
      );
    }
  };

  const FilterProjects = projects
    .filter((project) =>
      selectedTech.length === 0
        ? true
        : selectedTech.some((tech) => project.techs.includes(tech))
    )
    .filter((project) => {
      if (selectedOrder === "Client Projects") {
        return project.ProjectKind === "Costumer";
      } else if (selectedOrder === "Academic Projects") {
        return project.ProjectKind === "Academic";
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      switch (selectedOrder) {
        case "Most Recent":
          return b.creationOrder - a.creationOrder;
        case "Oldest":
          return a.creationOrder - b.creationOrder;
        case "Biggest Challenge":
          return a.challangeOrder - b.challangeOrder;
        case "Greatest Learning":
          return a.apprenticeshipOrder - b.apprenticeshipOrder;
        default:
          return 0;
      }
    });

  return (
    <div className={`pt-2 mx-1 ${itsDark ? "bg-dark" : ""}`}>
      <div className="d-flex flex-column">
        <TechFilter
          selectedTech={selectedTech}
          handleTechClick={handleTechClick}
        />
        <OrderFilter
          order={selectedOrder}
          handleOrderChange={setSelectedOrder}
        />
      </div>

      {FilterProjects.length === 0 ? (
        <div className="text-center no-projects-container">
          <p
            className={`${
              itsDark ? "text-white" : "text-black"
            } no-results-text`}
          >
            Nenhum projeto corresponde a combinação de filtros selecionados
          </p>
          <Button
            className={`mt-3 ${
              itsDark ? "btn-custom-light" : "btn-custom-dark"
            }`}
            onClick={() => {
              setSelectedTech([]);
              setSelectedOrder("Mais Recentes");
            }}
          >
            Mostrar todos os Projetos
          </Button>
        </div>
      ) : (
        <div
          className={`container mx-auto mb-5 py-5 p-xl-5 px-xxl-0  ${
            itsDark ? "bg-dark" : ""
          }`}
        >
          <div className="row gx-xl-1 gy-5 py-5 justify-content-between">
            {FilterProjects.map((project) => (
              <div className="col-12 col-sm-10 col-md-6 col-lg-5">
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  images={project.carousel}
                  text={project.text}
                  techs={project.techs}
                  github={project.github}
                  loading={project.loading}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
