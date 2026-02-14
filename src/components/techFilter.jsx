import { useContext } from "react";
import "../components/techFilter.css";
import { contextDarkMode } from "../context/contextDarkMode";
import { techs } from "../data/techsFiltersArray";

const TechFilter = ({ selectedTech, handleTechClick }) => {
  const { itsDark } = useContext(contextDarkMode);

  return (
    <ul
      className={`d-flex gap-2 mt-4 px-4 p-3 rounded-pill border mx-auto overflow-auto list-unstyled tech-filter-container ${
        itsDark ? "dark" : ""
      }`}
    >
      {techs.map((tech) => (
        <li
          key={tech}
          className={`position-relative px-2 tech-pill ${
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
