import { Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import me from "../images/me.jpg";
import sunglass from "../images/sunglass.png"
import "../components/myinfo.css";
import { useContext, useEffect, useState } from "react";
import { contextBgColor } from "../contextBgColor";

function MyInfo() {

  const {itsDark,createAnimation} = useContext(contextBgColor);



  const handleOpeningCV = () => {
    const googleDriveLink =
      "https://docs.google.com/document/d/1py4nb4vXJ78LS4XZ1nELXzAPILiiDI-JrElO4HIdWiM"; 
    window.open(googleDriveLink, "_blank");
  };

  return (
    <div className={`my-infos text-center ${itsDark && 'bg-dark'} min-vh-100`}>
      <div
        className="my-name-pic mb-5 bg-image hover-zoom"
      
      >
        <img className="my-pic" src={me} alt="mateus-pic" />
        <img className={`my-sunglasses ${
          itsDark ? createAnimation ? "animation" : "visible" : "hidden"}`} 
        src={sunglass}
        loading="eager"
        alt="my-sunglasses" />
        <h1 className={`h1-text mt-2 ${itsDark && 'text-white'}`}>Mateus Rosengarten Mauricio</h1>
      </div>
      <div className="div-my-skills">
        <h1 className={`ms-5 h1-second-text ${itsDark && 'text-white'}`}>Full Stack Developer</h1>
        <h6 className={`my-skills ${itsDark && 'text-white'}`}>
          #html #css #javascript #typescript #react #nextJS #node.js #express #RestAPI
          #mongoDB #PostgreSQL #firebase #bootstrap #tailwind #git/github
        </h6>
        <div className="div-buttons">
          <Button
            onClick={handleOpeningCV}
            className="mt-3 border border-primary btn-custom"
            variant={`${itsDark ? "light" : "dark"}`}
          >
            <span className={`${!itsDark ? "text-white" : "text-dark"} text-button`}>
            MY CV
            </span>
          </Button>
          <Button className="mt-3 border border-primary btn-custom"  variant={`${itsDark ? "light" : "dark"}`}>
            <a
       style={{ textDecoration: "none", color: !itsDark ? "white" : "black" }}
       className="text-button"
       href="mailto:matrosen.developer@gmail.com"
            >
              HIRE ME
            </a>
          </Button>
        </div>
      </div>

      <div className="div-contact-me">
        <SocialIcon
          className="social-icons"
          url="https://www.linkedin.com/in/mateus-rosengarten-mauricio/"
        />
        <SocialIcon
          className="social-icons"
          style={{ marginLeft: "2vh", marginRight: "2vh"}}
          fgColor={itsDark ? "black" : "white"} 
          bgColor={itsDark ? "white" : "black"}


          url="https://github.com/Mateus1rosengarten"
        />
        <SocialIcon
          className="social-icons"
          url="https://wa.me/9720534715942"
        />
      </div>
    </div>
  );
}

export default MyInfo;
