import { Card } from "react-bootstrap";

const TechCard = ({ iconClass, name }) => {
  return (
    <Card className="tech-card position-relative font-secondary w-75 bg-white rounded-4 text-center overflow-hidden border-0 shadow-sm">
      <Card.Body className="py-3 px-2">
        <i className={`${iconClass} tech-icon mb-2 fs-4`}></i>
        <Card.Text className="fw-semibold small mb-0">{name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TechCard;
