import { Card, Carousel, Modal } from "react-bootstrap";
import "./card.css";
import CardContent from "./cardContent";

const CardModal = ({ show, handleClose, project, images, imgLoading }) => {
  if (!project) return null;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      dialogClassName="card-modal-dialog"
      contentClassName="card-modal-content"
    >
      <Card className="modal-card">
        <Carousel>
          <Carousel.Item></Carousel.Item>
        </Carousel>
        <CardContent
          title={project.title}
          text={project.text}
          techs={project.techs}
          gitLink={project.gitLink}
          images={project.images}
          imgLoading={project.imgLoading}
        />
      </Card>
    </Modal>
  );
};

export default CardModal;
