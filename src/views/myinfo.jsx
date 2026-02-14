import { useContext } from "react";
import { contextDarkMode } from "../context/contextDarkMode";
import myPicture from "../images/mypic-dark.png";
import sunglass from "../images/sunglass.png";
import "../views/myinfo.css";
import AppButton from "../components/button";
import SocialMediaIcon from "../components/socialIcon";
import TechStack from "../components/techStack";

function MyInfo() {
  const { itsDark } = useContext(contextDarkMode);

  const handleOpeningCV = () => {
    const googleDriveLink =
      "https://drive.google.com/drive/u/0/folders/1VY7VFaGHs6ZdmrGvfAEkpOVt1HvDpMWK";
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section className={`py-5 text-center ${itsDark && "bg-dark"}`}>
      <div className="container mb-5">
        <div className="position-relative d-inline-block">
          <img
            className="rounded-circle img-fluid w-sm-50 w-80"
            style={{ maxWidth: "275px" }}
            src={myPicture}
            alt="Foto de perfil de Mateus Rosengarten Mauricio"
          />
          <img
            src={sunglass}
            alt="Óculos"
            className={`sunglasses ${itsDark ? "drop" : "rise"}`}
          />
        </div>
        <h1 className={`font-primary fs-2  ${itsDark && "text-white"}`}>
          I'm Mateus Rosengarten
        </h1>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h2
          className={`font-primary fs-1 text-bold fw-bold ${
            itsDark && "text-white"
          }`}
        >
          Front End Developer
        </h2>
        <div className="d-flex gap-4 justify-content-center">
          <AppButton children={"MY CV"} onClick={handleOpeningCV} />

          <AppButton
            children={"WRITE ME"}
            href={"mailto:matrosen.developer@gmail.com"}
          />
        </div>
        {/* <h3
          className={`w-75 sm:w-50 fs-6 fst-italic ${
            itsDark ? "text-white-50" : "text-muted"
          }`}
        >
          #html #css #javascript #typescript #react #redux/toolkit #NextJS
          #NodeJS #express #RestAPI #MongoDB #PostgreSQL #firebase #webDesign
          #figma #bootstrap #tailwind #MUI #StyledComponents #git/github
        </h3> */}
        <TechStack></TechStack>
      </div>

      <div className="d-flex justify-content-center p-5 gap-4">
        <SocialMediaIcon
          url={"https://www.linkedin.com/in/mateus-rosengarten-mauricio/"}
          itsDark={itsDark}
        />
        <SocialMediaIcon
          url={"https://github.com/Mateus1rosengarten"}
          itsDark={itsDark}
        />
        <SocialMediaIcon
          url={"https://wa.me/9720534715942"}
          itsDark={itsDark}
        />
      </div>
    </section>
  );
}

export default MyInfo;
