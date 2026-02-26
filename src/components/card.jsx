import { Card, Collapse } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgCarousel from "./carousel";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons/faChevronCircleDown";
import { useState } from "react";

const ProjectCard = ({
  images,
  title,
  github,
  website,
  text,
  techs,
  loading,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className="shadow-lg cursor-pointer w-100 h-100 card-motion"
      key={title}
      href={website}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ImgCarousel images={images} loading={loading} />

      <Card.Body className="d-flex flex-column gap-2 gap-sm-3 position-relative">
        <Card.Title className="text-center text-decoration-underline font-primary">
          <Card.Link
            className="card-link fw-bold fs-3 text-black"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
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
        </Card.Title>
        <div className="d-md-none text-start ms-2">
          <FontAwesomeIcon
            icon={!isExpanded ? faChevronCircleDown : faChevronCircleUp}
            size="lg"
            className="cursor-pointer text-brand"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </div>
        <Card.Text className="d-none d-md-block px-1 px-sm-2 px-lg-3 text-left font-secondary">
          {text}
        </Card.Text>
        <Collapse in={isExpanded}>
          <Card.Text className="d-md-none px-1 px-sm-2 px-lg-3 text-left font-secondary">
            {text}
          </Card.Text>
        </Collapse>
        <ul className="d-flex flex-wrap justify-content-center font-primary gap-3 list-unstyled ps-lg-4">
          {techs.map((tech, index) => (
            <li className="fst-italic my-2 px-3 py-2 shadow-lg tech-card rounded">
              {tech}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
