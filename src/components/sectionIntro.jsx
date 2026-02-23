import { Row, Col } from "react-bootstrap";

const SectionIntro = ({ title, text, colLg = 8 }) => {
  return (
    <Row className="py-sm-3 mb-3 mb-sm-3 ms-sm-3">
      <Col lg={colLg}>
        <h2 className="fw-bold mb-4 font-primary border-start border-4 ps-2 ps-sm-4 border-brand">
          {title}
        </h2>

        <p className="fs-5 text-surface font-secondary ">{text}</p>
      </Col>
    </Row>
  );
};

export default SectionIntro;
