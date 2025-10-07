import { useContext } from "react";
import { Card } from "react-bootstrap";
import ImgCarousel from "./carousel";
import "../components/card.css";
import { contextDarkMode } from "../context/contextDarkMode";
import CardContent from "./cardContent";

function ProjectCard({
  title,
  images = [],
  text,
  techs = [],
  gitLink,
  imgLoading,
  openModal,
}) {
  const { itsDark } = useContext(contextDarkMode);
  return (
    <Card
      className={`${!itsDark ? "card" : "card-black-mode"}`}
      onClick={openModal}
      key={title}
    >
      <ImgCarousel
        images={images}
        imgCustom={"img-custom"}
        imgLoading={imgLoading}
      />
      <CardContent title={title} text={text} techs={techs} gitLink={gitLink} />
    </Card>
  );
}

export default ProjectCard;
