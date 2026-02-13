import { Modal } from "react-bootstrap";
import ProjectCard from "./card";

const CardModal = ({ show, handleClose, project }) => {
  if (!project) return null;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      dialogClassName="card-modal-dialog"
      contentClassName="card-modal-content"
    >
      <ProjectCard
        title={project.title}
        text={project.text}
        techs={project.techs}
        github={project.github}
        images={project.carousel}
        imgLoading={project.imgLoading}
        closeModal={handleClose}
        isModal={true}
      />
    </Modal>
  );
};

export default CardModal;
