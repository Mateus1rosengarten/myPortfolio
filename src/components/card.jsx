import { Card } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faClose,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgCarousel from "./carousel";

const ProjectCard = ({
  image,
  title,
  github,
  text,
  techs,
  images,
  imgLoading,
  isModal,
  openModal,
  closeModal,
}) => {
  return (
    <Card
      className="shadow-lg cursor-pointer w-100 h-100 card-motion"
      onClick={openModal}
      key={title}
    >
      {openModal ? (
        <img
          className="img-custom w-100 rounded"
          src={image}
          alt="Project ScreenShot"
        ></img>
      ) : (
        <ImgCarousel images={images} imgLoading={imgLoading} />
      )}
      <Card.Body className="d-flex flex-column gap-2 gap-sm-3 position-relative">
        <Card.Title className="text-center text-decoration-underline">
          <Card.Link className="card-link fw-bold fs-3 color-brand">
            {title}
            {github && (
              <Card.Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="ms-2 fs-5 text-info"
                  href={github}
                />
              </Card.Link>
            )}
          </Card.Link>
          {isModal ? (
            <FontAwesomeIcon
              icon={faClose}
              className="position-absolute top-0 mt-2 end-0 me-1 me-md-3 cursor-pointer text-warning fs-3 fs-md-3"
              onClick={closeModal}
            />
          ) : (
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="position-absolute bottom-0 mb-3 end-0 me-1 me-md-4 cursor-pointer color-brand fs-3 fs-md-3"
              onClick={openModal}
            />
          )}
        </Card.Title>
        <Card.Text className="px-1 px-sm-2 px-lg-3 text-left">{text}</Card.Text>
        <ul className="d-flex flex-wrap mx-auto font-primary list-unstyled ps-lg-4">
          {techs.map((tech, index) => (
            <li className="fst-italic mx-3 my-1 m-sm-2 px-3 py-2 shadow-lg rounded">
              {tech}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
