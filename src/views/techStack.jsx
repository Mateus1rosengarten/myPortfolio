import { Row, Col } from "react-bootstrap";
import { icons } from "../data/techsFiltersArray";
import TechCard from "../components/techCard";

const TechStack = () => {
  return (
    <section
      id="techs"
      className="w-full py-5 px-sm-4 ps-sm-5 bg-surface text-main"
    >
      <h2
        data-aos="fade-up"
        data-aos-duration="800"
        className="fw-bold mb-5 font-primary border-start border-4 mt-4 ms-4 ps-2 ps-sm-4 border-brand mb-5"
      >
        Tech Stack I'm Confortable to Work
      </h2>
      <Row className="gx-0 gy-sm-3 ms-4 ms-sm-0 mt-5 px-sm-5">
        {icons.map((tech, index) => (
          <Col
            key={tech.name}
            xs={4}
            md={4}
            lg={2}
            data-aos="fade-up"
            className="mb-4"
          >
            <TechCard iconClass={tech.icon} name={tech.name} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default TechStack;
