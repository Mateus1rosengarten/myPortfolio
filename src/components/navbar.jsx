import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon,faSun } from "@fortawesome/free-solid-svg-icons";

import "../components/navbar.css";
import { contextBgColor } from "../contextBgColor";

function NavBar() {

  const [isHome,setIsHome] = useState(true);
  const {itsDark,setItsDark} = useContext(contextBgColor);

  const handleProjectsPageActive = () => {
    setIsHome(false)
  }

  const handleHomePageActive = () => {
    setIsHome(true)
  }
  return (
    <>
      <Navbar bg={!itsDark ? "dark" : "white"} data-bs-theme="dark" className="nav-bar">
        <Container className="container-navbar">
          <Nav className="container-navbar">
            <NavLink to={"/"}
            onClick={() => handleHomePageActive()}
             className={`nav-link ${!itsDark ? "text-light" : "text-dark"} ${isHome ? "navbar-link-active" : "navbar-link" }`}>
              Home
            </NavLink>
            <NavLink
              to={"/projects"}
              onClick={() => handleProjectsPageActive()}
              className={`nav-link ${!itsDark ? "text-light" : "text-dark"}  ${!isHome ? "navbar-link-active" : "navbar-link" }`}
            >
              Projects
            </NavLink>
          
          </Nav>
          <Form>
      <Form.Check 
        type="switch"
        onChange={() => setItsDark(!itsDark)}
        className="toggle"
      />
      <FontAwesomeIcon icon={itsDark ? faMoon : faSun} color={!itsDark ? "white" : "black"}/>
    </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
