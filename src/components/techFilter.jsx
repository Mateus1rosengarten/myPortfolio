import { useContext } from "react";
import "../components/techFilter.css";
import { contextDarkMode } from "../context/contextDarkMode";
import { techs } from "../data/techsFiltersArray";

const TechFilter = ({ selectedTech, setSelectedTech, handleTechClick }) => {
  const { itsDark } = useContext(contextDarkMode);

  return (
    <ul className={`${!itsDark ? "select-techs" : "select-techs-dark"}`}>
      {techs.map((tech) => (
        <li
          key={tech}
          className={`fst-italic m-2 px-2 py-1 shadow ${
            selectedTech.includes(tech) ||
            (tech === "SHOW ALL" && selectedTech.length === 0)
              ? "li-tech-selected"
              : "li-tech"
          }`}
          style={{ transition: "0.3s", cursor: "pointer" }}
          onClick={() => handleTechClick(tech)}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default TechFilter;
