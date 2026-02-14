import { Container, Row, Col } from "react-bootstrap";
import { icons } from "../data/techsFiltersArray";
import TechCard from "./techCard";

const TechStack = () => {
  return (
    <Container className="my-5 pt-5">
      <Row>
        {icons.map((tech) => (
          <Col key={tech.name} xs={6} md={4} lg={2} className="mb-4">
            <TechCard iconClass={tech.icon} name={tech.name} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TechStack;
