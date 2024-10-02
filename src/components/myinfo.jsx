import { Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import me from "../images/me.jpg";
import "../components/myinfo.css";

function MyInfo() {
  const handleOpeningCV = () => {
    const googleDriveLink =
      "https://docs.google.com/document/d/1py4nb4vXJ78LS4XZ1nELXzAPILiiDI-JrElO4HIdWiM"; // Replace with your actual Google Drive link
    window.open(googleDriveLink, "_blank");
  };

  return (
    <div className="my-infos text-center">
      <div
        className="my-name-pic mb-5 bg-image hover-zoom"
        style={{ top: "12vh", left: "28vw" }}
      >
        <img className="my-pic" src={me} alt="mateus=pic" />
        <h1 className="h1-text mt-2">Mateus Rosengarten Mauricio</h1>
      </div>
      <div className="div-my-skills">
        <h1 className="ms-5 h1-second-text">Full Stack Developer</h1>
        <h6 className="my-skills">
          #html #css #javascript #typescript #react #nextJS #node.js #express
          #mongoDB #PostgreSQL #firebase #bootstrap #tailwind #git/github
        </h6>
        <div className="div-buttons">
          <Button
            onClick={handleOpeningCV}
            className="mt-3 btn-custom"
            variant="dark"
          >
            MY CV
          </Button>
          <Button className="mt-3 btn-custom" variant="dark">
            <a
              style={{ textDecoration: "none", color: "white" }}
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
          style={{ marginLeft: "2vh", marginRight: "2vh" }}
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
