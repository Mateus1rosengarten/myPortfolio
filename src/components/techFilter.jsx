import { useContext } from "react";
import "../components/techFilter.css";
import { contextDarkMode } from "../context/contextDarkMode";
import { techs } from "../data/techsFiltersArray";

const TechFilter = ({ selectedTech, handleTechClick }) => {
  const { itsDark } = useContext(contextDarkMode);

  return (
    <ul
      className={`d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center gap-2 mt-4 px-3 mx-auto list-unstyled ${
        itsDark ? "dark" : ""
      }`}
    >
      {techs.map((tech) => (
        <li
          key={tech}
          className={`tech-pill ${
            selectedTech.includes(tech) ||
            (tech === "SHOW ALL" && selectedTech.length === 0)
              ? "active"
              : ""
          }`}
          onClick={() => handleTechClick(tech)}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default TechFilter;
