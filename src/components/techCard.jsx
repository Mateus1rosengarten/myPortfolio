import { Card } from "react-bootstrap";

const TechCard = ({ iconClass, name }) => {
  return (
    <Card className="tech-card d-flex align-items-center justify-content-center">
      <Card.Body>
        <i className={`${iconClass} tech-icon mb-3 fs-1`}></i>
        <Card.Text className="fw-semibold small">{name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TechCard;
