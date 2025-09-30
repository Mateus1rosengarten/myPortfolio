import { useContext, useEffect, useState } from "react";
import "../components/projects.css";
import { contextDarkMode } from "../context/contextDarkMode";
import ProjectCard from "./card";
import projects from "../data/projectsArray";
import TechFilter from "./techFilter";
import OrderFilter from "./orderFilter";
import { Button } from "react-bootstrap";

function Projects() {
  const { itsDark, setCreateAnimation } = useContext(contextDarkMode);
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("Mais Recentes");

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
      if (selectedOrder === "Projetos para Clientes") {
        return project.ProjectKind === "Costumer";
      } else if (selectedOrder === "Projetos Academicos") {
        return project.ProjectKind === "Academic";
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      switch (selectedOrder) {
        case "Mais Recentes":
          return b.creationOrder - a.creationOrder;
        case "Mais Antigos":
          return a.creationOrder - b.creationOrder;
        case "Maior Desafio":
          return a.challangeOrder - b.challangeOrder;
        case "Maior Aprendizado":
          return a.apprenticeshipOrder - b.apprenticeshipOrder; // corrigido typo
        default:
          return 0;
      }
    });

  return (
    <div className={`pt-2 mx-1 ${itsDark ? "bg-dark" : ""}`}>
      {/* Filtros */}
      <div className="d-flex flex-column justify-content-between">
        <TechFilter
          selectedTech={selectedTech}
          handleTechClick={handleTechClick}
        />
        <OrderFilter
          order={selectedOrder}
          handleOrderChange={setSelectedOrder}
        />
      </div>

      {/* Projetos filtrados */}
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
          className={`projects-container mb-5 py-5 ${itsDark ? "bg-dark" : ""}`}
        >
          {FilterProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              images={project.images}
              text={project.text}
              techs={project.techs}
              gitLink={project.gitLink}
              imgLoading={project.imgLoading}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
