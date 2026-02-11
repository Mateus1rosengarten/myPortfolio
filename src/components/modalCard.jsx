import { Card, Modal } from "react-bootstrap";
import "./card.css";
import ProjectCard from "./card";

const CardModal = ({ show, handleClose, project }) => {
  if (!project) return null;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      dialogClassName="card-modal-dialog"
      contentClassName="card-modal-content"
    >
      <ProjectCard
        title={project.title}
        text={project.text}
        techs={project.techs}
        gitLink={project.gitLink}
        images={project.carousel}
        imgLoading={project.imgLoading}
        isModal={true}
        onCloseModal={handleClose}
      />
    </Modal>
  );
};

export default CardModal;
