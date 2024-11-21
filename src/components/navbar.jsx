import { useContext } from "react";
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

  const {itsDark,setItsDark} = useContext(contextBgColor);
  return (
    <>
      <Navbar bg={!itsDark ? "dark" : "white"} data-bs-theme="dark" className="nav-bar">
        <Container className="container-navbar">
          <Nav className="navlinks-div">
            <NavLink to={"/"} className={`nav-link ${!itsDark ? "text-light" : "text-dark"}  navbar-link`}>
              Home
            </NavLink>
            <NavLink
              to={"/projects"}
              className={`nav-link ${!itsDark ? "text-light" : "text-dark"}  navbar-link`}
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
