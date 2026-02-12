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
import NavLinkItem from "./navLink";

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

  return (
    <>
      <Navbar
        className="py-3"
        bg={itsDark ? "white" : "dark"}
        data-bs-theme="dark"
      >
        <Container>
          <Nav className="gap-5">
            <NavLinkItem to="/">Home</NavLinkItem>
            <NavLinkItem to="/projects">Projects</NavLinkItem>
          </Nav>
          <Button
            className="d-lg-none ms-2"
            style={{ backgroundColor: itsDark ? "black" : "white" }}
            variant="none"
            onClick={() => handleSideBar()}
          >
            <FontAwesomeIcon
              icon={faBars}
              color={!itsDark ? "black" : "white"}
            />
          </Button>
          <Form className="cursor-pointer">
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
