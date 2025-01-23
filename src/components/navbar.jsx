import { useContext, useState,} from "react";
import { Button, Container} from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { NavLink , useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon,faSun,faBars } from "@fortawesome/free-solid-svg-icons";
import "../components/navbar.css";
import { contextBgColor } from "../contextBgColor";
import ContextSideBar, { contextSideBar } from "../contextSideBar";

function NavBar() {
  const location = useLocation();
  const homePage = location.pathname === '/';
  const [isHome,setIsHome] = useState(homePage);
  const {itsDark,setItsDark,setCreateAnimation} = useContext(contextBgColor);
  const {isSideBar,setIsSideBar} = useContext(contextSideBar);


  const handleProjectsPageActive = () => {
    setIsHome(false)
  }

  const handleHomePageActive = () => {
    setIsHome(true)
  }

  const handleSideBar = () => {
    setIsSideBar(true)
  }

  const handleToggleDarkMode = () => {
    setItsDark(!itsDark);
    setCreateAnimation(true);
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
         <Button className="sidebar-toggle" style={{backgroundColor: itsDark ? "black" : "white"}}
         onClick={() => handleSideBar()} >
        <FontAwesomeIcon icon={faBars} color={!itsDark ? "black" : "white"} />
        </Button>        
          <Form className="toggle-color">
      <Form.Check 
        type="switch"
        onChange={() => handleToggleDarkMode()}
        className="toggle"
        checked={itsDark}
      />
      <FontAwesomeIcon className="icon-custom" icon={itsDark ? faMoon : faSun} color={!itsDark ? "white" : "black"}/>
    </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
