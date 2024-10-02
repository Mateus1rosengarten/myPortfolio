import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../components/navbar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="nav-bar">
        <Container className="container-navbar">
          <Nav className="navlinks-div">
            <NavLink to={"/"} className="nav-link text-light  navbar-link ">
              Home
            </NavLink>
            <NavLink
              to={"/projects"}
              className="nav-link text-light navbar-link"
            >
              Projects
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
