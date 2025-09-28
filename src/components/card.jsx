import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import ImgCarousel from "./carousel";
import "../components/card.css";
import { contextDarkMode } from "../context/contextDarkMode";

function ProjectCard({
  title,
  images = [],
  text,
  techs = [],
  gitLink,
  imgLoading,
}) {
  const { itsDark } = useContext(contextDarkMode);
  return (
    <Card className={`${!itsDark ? "card" : "card-black-mode"}`}>
      <ImgCarousel
        images={images}
        imgCustom={"img-custom"}
        imgLoading={imgLoading}
      />
      <Card.Body>
        <Card.Title className="text-center mt-2 mb-5 text-decoration-underline">
          <Card.Link className="card-link text-decoration-none text-black fw-bold">
            {title}
            {gitLink && (
              <Card.Link
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="github-icon"
                  href={gitLink}
                />
              </Card.Link>
            )}
          </Card.Link>
        </Card.Title>

        <Card.Text style={{ fontFamily: "Montserrat" }} className="text-center">
          {text}
          <ul className="ul-techs pt-3 list-unstyled">
            {techs.map((tech, index) => (
              <li className="fst-italic m-2 px-2 py-1 shadow">{tech}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
