import { useContext } from "react";
import { CloseButton, NavLink } from "react-bootstrap";
import { contextSideBar } from "../contextSideBar";
import './sidebar.css'
import { contextBgColor } from "../contextBgColor";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const {setIsSideBar} = useContext(contextSideBar)
    const {itsDark} = useContext(contextBgColor)
    const navigate = useNavigate();

    const handleCloseSideBar = () => {
        setIsSideBar(false);
    }

    const handleNavigate = (path) => {
        navigate(path);
        setTimeout(() => {
                handleCloseSideBar();
        },100);
    }
    return(
        <nav className={`pt-5 ${itsDark ? "bg-dark" : "bg-white"}` }
        style={{ height: "100vh" }}>
            <CloseButton className={`ms-5 ${itsDark && "bg-white"}` }
            onClick={() => handleCloseSideBar()} />
            <ul className="d-flex flex-column justify-content-center align-items-center list-unstyled mt-4 custom-sidebar">
                <li className={`mb-3 ${itsDark ? "text-white" : "text-dark"}` }>
                    <NavLink className="text-decoration-none"
                    to={"/"}
                    onClick={() => handleNavigate('/')} >
                    Home
                    </NavLink>
                </li>
                <li className={`${itsDark ? "text-white" : "text-dark"}` }>
                <NavLink className="text-decoration-none"
                 to={"/projects"}
                 onClick={() => handleNavigate('/projects')} >
                    Projects
                    </NavLink>
                </li>
            </ul>
        </nav>

    );

};

export default SideBar;