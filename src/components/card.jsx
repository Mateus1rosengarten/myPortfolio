import { Card } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgCarousel from "./carousel";

const ProjectCard = ({ images, title, github, text, techs, loading }) => {
  return (
    <Card
      className="shadow-lg cursor-pointer w-100 h-100 card-motion"
      key={title}
    >
      <ImgCarousel images={images} loading={loading} />

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
