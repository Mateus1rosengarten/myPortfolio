import { useContext, useEffect, useState } from "react";
import { contextDarkMode } from "../context/contextDarkMode";
import projects from "../data/projectsArray";
import TechFilter from "../components/techFilter";
import OrderFilter from "../components/orderFilter";
import { Button } from "react-bootstrap";
import ProjectCard from "../components/card";
import SectionIntro from "../components/sectionIntro";

function Projects() {
  const { setCreateAnimation } = useContext(contextDarkMode);
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("Most Recent");

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
    <section id="projects" className="py-5 px-4 px-sm-5 bg-surface text-main">
      <SectionIntro
        title={"Some of my Projects"}
        text={
          "A showcase of some of the projects I’ve built throughout my journey so far."
        }
      />

      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="d-flex flex-column"
      >
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
        <div className="p-5 d-flex justify-content-center align-items-center flex-column min-vh-75">
          <p className="no-results-text fs-3 font-primary">
            Nenhum projeto corresponde a combinação de filtros selecionados.
          </p>
          <Button
            className="mt-3 bg-brand border-0 font-secondary"
            onClick={() => {
              setSelectedTech([]);
              setSelectedOrder("Mais Recentes");
            }}
          >
            Mostrar todos os Projetos
          </Button>
        </div>
      ) : (
        <div className="container-fluid px-0 px-sm-4 py-sm-5 p-xl-1 px-xl-4 max-width-xl">
          <div className="row gx-xl-1 gy-5 py-5 justify-content-between !mx-n4 mx-sm-0">
            {FilterProjects.map((project, index) => (
              <div
                data-aos="fade-up"
                className="col-12 col-sm-10 col-md-6 col-lg-5"
              >
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
    </section>
  );
}

export default Projects;
