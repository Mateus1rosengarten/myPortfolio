import { Row, Col } from "react-bootstrap";
import { icons } from "../data/techsFiltersArray";
import TechCard from "../components/techCard";
import SectionIntro from "../components/sectionIntro";

const TechStack = () => {
  return (
    <section id="techs" className="py-5 px-4 px-sm-5 bg-main text-main">
      <SectionIntro
        title={"Tech Stack I'm Confortable to Work"}
        text={
          "Here are some of the web technologies I’ve worked with across different kind of projects."
        }
      />

      <Row className="gx-0 gy-sm-3 mt-2 px-sm-4 justify-content-center">
        {icons.map((tech, index) => (
          <Col
            key={tech.name}
            xs={4}
            md={4}
            lg={2}
            data-aos="fade-up"
            className="mb-4 d-flex justify-content-center"
          >
            <TechCard iconClass={tech.icon} name={tech.name} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default TechStack;
