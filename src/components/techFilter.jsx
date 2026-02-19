import { useContext } from "react";
import { contextDarkMode } from "../context/contextDarkMode";
import { techs } from "../data/techsFiltersArray";

const TechFilter = ({ selectedTech, handleTechClick }) => {
  const { itsDark } = useContext(contextDarkMode);

  return (
    <>
      <div className="d-sm-none mt-4 mb-5 px-3">
        <div className="d-flex gap-4 overflow-auto pb-2">
          {techs.map((tech) => (
            <div
              key={tech}
              onClick={() => handleTechClick(tech)}
              className={`px-3 py-2 rounded-pill small text-nowrap ${
                selectedTech.includes(tech) ||
                (tech === "SHOW ALL" && selectedTech.length === 0)
                  ? "bg-brand"
                  : itsDark
                  ? "bg-dark text-white border border-secondary"
                  : "bg-light text-dark border"
              }`}
              style={{ cursor: "pointer", flex: "0 0 auto" }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <ul className="d-none d-sm-flex sm-block d-flex flex-wrap justify-content-center align-items-center gap-2 gap-sm-0 mt-4 px-3 mx-auto list-unstyled">
        {techs.map((tech) => (
          <li
            key={tech}
            onClick={() => handleTechClick(tech)}
            className={`px-3 py-1 rounded-pill small text-nowrap cursor-pointer transition ${
              selectedTech.includes(tech) ||
              (tech === "SHOW ALL" && selectedTech.length === 0)
                ? "bg-brand text-dark border-0"
                : ""
            }
  `}
          >
            {tech}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TechFilter;
