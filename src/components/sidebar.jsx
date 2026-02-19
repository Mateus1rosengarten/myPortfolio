import { useContext } from "react";
import { CloseButton, NavLink } from "react-bootstrap";
import { contextSideBar } from "../context/contextSideBar";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { setIsSideBar } = useContext(contextSideBar);
  const navigate = useNavigate();

  const handleNavigate = (path, to = null) => {
    navigate(path);

    if (to) {
      setTimeout(() => {
        const section = document.getElementById(to);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    setIsSideBar(false);
  };

  return (
    <nav className="pt-5 min-vh-100 bg-main text-main">
      <CloseButton className="ms-4" onClick={() => setIsSideBar(false)} />

      <ul className="d-flex flex-column align-items-center list-unstyled mt-5 gap-5 fs-1 font-primary">
        <li>
          <NavLink
            className="text-decoration-none text-main"
            onClick={() => handleNavigate("/")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className="text-decoration-none text-main"
            onClick={() => handleNavigate("/", "about")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-decoration-none text-main"
            onClick={() => handleNavigate("/", "techs")}
          >
            Techs
          </NavLink>
        </li>

        <li>
          <NavLink
            className="text-decoration-none text-main"
            onClick={() => handleNavigate("/", "projects")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-decoration-none text-main"
            onClick={() => handleNavigate("/", "contact")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
