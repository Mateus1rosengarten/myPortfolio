import { useContext } from "react";
import { CloseButton, NavLink } from "react-bootstrap";
import { contextSideBar } from "../context/contextSideBar";
import "./sidebar.css";
import { contextDarkMode } from "../context/contextDarkMode";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { setIsSideBar } = useContext(contextSideBar);
  const { itsDark } = useContext(contextDarkMode);
  const navigate = useNavigate();

  const handleCloseSideBar = () => {
    setIsSideBar(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setTimeout(() => {
      handleCloseSideBar();
    }, 100);
  };
  return (
    <nav className={`pt-5 min-vh-100 ${itsDark ? "bg-dark" : "bg-white"}`}>
      <CloseButton
        className="ms-5"
        style={{ filter: itsDark ? "invert(1)" : "invert(0)" }}
        onClick={() => handleCloseSideBar()}
      />
      <ul className="d-flex flex-column justify-content-center align-items-center list-unstyled mt-4 gap-4 custom-sidebar">
        <li
          className={`mb-3 fw-normal mt-5 text-dark ${
            itsDark ? "text-white" : "text-dark"
          }`}
        >
          <NavLink
            className="text-decoration-none"
            to={"/"}
            onClick={() => handleNavigate("/")}
          >
            Home
          </NavLink>
        </li>
        <li className={`${itsDark ? "text-white" : "text-dark"}`}>
          <NavLink
            className="text-decoration-none"
            to={"/projects"}
            onClick={() => handleNavigate("/projects")}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
