import { useContext } from "react";
import { Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { contextDarkMode } from "../context/contextDarkMode";
import myPicture from "../images/mypic-dark.png";
import sunglass from "../images/sunglass.png";
import "../components/myinfo.css";

function MyInfo() {
  const { itsDark, createAnimation } = useContext(contextDarkMode);

  const handleOpeningCV = () => {
    const googleDriveLink =
      "https://drive.google.com/drive/u/0/folders/1VY7VFaGHs6ZdmrGvfAEkpOVt1HvDpMWK";
    window.open(googleDriveLink, "_blank");
  };

  return (
    <div className={`py-5 text-center ${itsDark && "bg-dark"}`}>
      <div className="mb-5">
        <div className="container-images">
          <img
            className="profile-pic rounded-circle z-3"
            src={myPicture}
            alt="Foto de perfil de Mateus Rosengarten Mauricio"
          />
          <img
            className={`profile-sunglasses ${
              itsDark ? (createAnimation ? "animation" : "visible") : "hidden"
            }`}
            src={sunglass}
            loading="eager"
            alt="Óculos escuros animados sobrepostos à foto"
          />
        </div>
        <h1 className={`hero-title ${itsDark && "text-white"}`}>
          Mateus Rosengarten Mauricio
        </h1>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h2 className={`ms-5 hero-subtitle ${itsDark && "text-white"}`}>
          Front End Developer
        </h2>
        <h3
          className={`w-50 fs-6 fst-italic ${
            itsDark ? "text-white-50" : "text-muted"
          }`}
        >
          #html #css #javascript #typescript #react #redux/toolkit #NextJS
          #node.js #express #RestAPI #MongoDB #PostgreSQL #firebase #webDesign
          #figma #bootstrap #tailwind #MUI #StyledComponents #git/github
        </h3>
        <div className="d-flex gap-4">
          <Button
            variant="none"
            onClick={handleOpeningCV}
            className={`mt-3  ${
              itsDark ? "btn-custom-light" : "btn-custom-dark"
            }`}
          >
            MY CV
          </Button>
          <Button
            variant="none"
            as="a"
            href="mailto:matrosen.developer@gmail.com"
            className={`mt-3  ${
              itsDark ? "btn-custom-light" : "btn-custom-dark"
            }`}
          >
            HIRE ME
          </Button>
        </div>
      </div>

      <div className="d-flex justify-content-center p-5 gap-4 container-social-icons">
        <SocialIcon
          target="_blank"
          rel="noopener noreferrer"
          className="social-icons"
          url="https://www.linkedin.com/in/mateus-rosengarten-mauricio/"
        />
        <SocialIcon
          target="_blank"
          rel="noopener noreferrer"
          className="social-icons"
          fgColor={itsDark ? "black" : "white"}
          bgColor={itsDark ? "white" : "black"}
          url="https://github.com/Mateus1rosengarten"
        />
        <SocialIcon
          target="_blank"
          rel="noopener noreferrer"
          className="social-icons"
          url="https://wa.me/9720534715942"
        />
      </div>
    </div>
  );
}

export default MyInfo;
