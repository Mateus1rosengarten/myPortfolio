import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import "../components/navbar.css";
import { contextDarkMode } from "../context/contextDarkMode";
import { contextSideBar } from "../context/contextSideBar";

function NavBar() {
  const { itsDark, setItsDark, setCreateAnimation } =
    useContext(contextDarkMode);
  const { setIsSideBar } = useContext(contextSideBar);

  const handleSideBar = () => {
    setIsSideBar(true);
  };

  const handleToggleDarkMode = () => {
    setItsDark(!itsDark);
    setCreateAnimation(true);
  };

  const getNavLinkClass = (isActive) => {
    return `nav-link ${!itsDark ? "text-light" : "text-dark"} ${
      isActive ? "navbar-link-active" : "navbar-link"
    }`;
  };

  return (
    <>
      <Navbar bg={!itsDark ? "dark" : "white"} data-bs-theme="dark">
        <Container>
          <Nav className="gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Projects
            </NavLink>
          </Nav>
          <Button
            className="sidebar-toggle"
            style={{ backgroundColor: itsDark ? "black" : "white" }}
            variant="none"
            onClick={() => handleSideBar()}
          >
            <FontAwesomeIcon
              icon={faBars}
              color={!itsDark ? "black" : "white"}
            />
          </Button>
          <Form className="toggle">
            <Form.Check
              type="switch"
              onChange={() => handleToggleDarkMode()}
              checked={itsDark}
            />
            <FontAwesomeIcon
              className="icon-custom"
              icon={itsDark ? faMoon : faSun}
              color={!itsDark ? "white" : "black"}
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
