import { Card } from "react-bootstrap";

const InfoCard = ({ title, description, className = "" }) => {
  return (
    <Card
      className={`h-100 border-0 shadow-sm border-end border-bottom border-brand border-2 ${className}`}
    >
      <Card.Body>
        <h6 className="fw-bold mb-2 font-primary">{title}</h6>
        <p className="text-secondary small mb-0 font-secondary">
          {description}
        </p>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
