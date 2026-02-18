import { useContext } from "react";
import "../components/techFilter.css";
import { contextDarkMode } from "../context/contextDarkMode";
import { techs } from "../data/techsFiltersArray";

const TechFilter = ({ selectedTech, handleTechClick }) => {
  const { itsDark } = useContext(contextDarkMode);

  return (
    <ul
      className={`d-flex flex-wrap justify-content-center align-items-center gap-2 mt-4 px-3 mx-auto list-unstyled ${
        itsDark ? "dark" : ""
      }`}
    >
      {techs.map((tech) => (
        <li
          key={tech}
          onClick={() => handleTechClick(tech)}
          className={`
    px-3 py-1
    rounded-pill
    small
    text-nowrap
    cursor-pointer
    transition
    ${
      selectedTech.includes(tech) ||
      (tech === "SHOW ALL" && selectedTech.length === 0)
        ? "bg-warning text-dark border-0"
        : ""
    }
  `}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default TechFilter;
