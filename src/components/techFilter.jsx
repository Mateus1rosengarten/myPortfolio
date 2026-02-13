import { useContext } from "react";
import "../components/techFilter.css";
import { contextDarkMode } from "../context/contextDarkMode";
import { techs } from "../data/techsFiltersArray";

const TechFilter = ({ selectedTech, handleTechClick }) => {
  const { itsDark } = useContext(contextDarkMode);

  return (
    <ul
      className={`align-self-center ${
        !itsDark ? "select-techs" : "select-techs-dark"
      }`}
    >
      {techs.map((tech) => (
        <li
          key={tech}
          className={`fst-italic m-2 px-2 py-1 shadow rounded ${
            selectedTech.includes(tech) ||
            (tech === "SHOW ALL" && selectedTech.length === 0)
              ? "bg-alt"
              : "li-tech"
          }`}
          style={{ transition: "0.1s", cursor: "pointer" }}
          onClick={() => handleTechClick(tech)}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default TechFilter;
