import { Card } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClose, faCloseBu } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ImgCarousel from "./carousel";
import { useContext } from "react";
import { contextDarkMode } from "../context/contextDarkMode";

const ProjectCard = ({
  title,
  text,
  techs,
  image,
  images,
  gitLink,
  imgLoading,
  isModal,
  openModal,
  onCloseModal,
}) => {
  const { itsDark } = useContext(contextDarkMode);

  return (
    <Card
      className={`${!itsDark ? "card" : "card-black-mode"} ${
        isModal && "modal-card"
      }`}
      onClick={openModal}
      key={title}
    >
      {openModal ? (
        <img
          className={`img-custom w-100 rounded`}
          src={image}
          alt="Project ScreenShot"
        ></img>
      ) : (
        <ImgCarousel
          images={images}
          imgCustom={"img-custom"}
          imgLoading={imgLoading}
        />
      )}
      <Card.Body className="position-relative">
        <Card.Title className="d-flex justify-content-between align-items-center text-center mt-2 mb-3 text-decoration-underline">
          <div className="d-flex align-items-center mx-auto">
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
          </div>
          {isModal && (
            <FontAwesomeIcon
              icon={faClose}
              className="position-absolute top-0 end-0 mt-1 mt-md-5 me-1 me-md-5 cursor-pointer text-danger fs-2 fs-md-3"
              onClick={onCloseModal}
            />
          )}
        </Card.Title>
        <Card.Text
          style={{ fontFamily: "Montserrat" }}
          className="px-1 px-sm-2 px-md-3 px-lg-4 text-left"
        >
          {text}
          <ul className="ul-techs pt-3 list-unstyled text-center">
            {techs.map((tech, index) => (
              <li className="fst-italic m-2 px-2 py-1 shadow">{tech}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
