import { Card } from "react-bootstrap";
import ImgCarousel from "./carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "../components/card.css";

function ProjectCard({
  cardTitle,
  cardImage,
  cardImage2,
  cardImage3,
  cardText,
  tec1,
  tec2,
  tec3,
  tec4,
  tec5,
  tec6,
  tec7,
  tec8,
  gitLink,
  siteLink,
}) {
  return (
    <>
      <div className="custom-card">
        <Card className="the-card">
          <Card.Link className="the-card-link" href={gitLink}></Card.Link>

          <ImgCarousel
            img1={cardImage}
            img2={cardImage2}
            img3={cardImage3}
            imgCustom={"img-custom"}
          />

          <Card.Body>
            <Card.Title className="text-center mt-2 mb-5 card-title">
              <Card.Link className="the-card-link">
                {cardTitle}
                {gitLink && (
                  <Card.Link href={gitLink}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="github-icon"
                      href={gitLink}
                    />
                  </Card.Link>
                )}
                {siteLink && (
                  <Card.Link href={siteLink}>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      size="sm"
                      className="site-icon"
                    />
                  </Card.Link>
                )}
              </Card.Link>
            </Card.Title>

            <Card.Text
              style={{ fontFamily: "Montserrat" }}
              className="text-center"
            >
              {" "}
              {cardText}
              <ul className="ul-technologies">
                <li>{tec1}</li>
                <li>{tec2}</li>
                <li>{tec3}</li>
                <li>{tec4}</li>
                {tec5 && <li>{tec5}</li>}
                {tec6 && <li>{tec6}</li>}
                {tec7 && <li>{tec7}</li>}
                {tec8 && <li>{tec8}</li>}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ProjectCard;
