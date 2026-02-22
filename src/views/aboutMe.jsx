import { Row, Col, Card } from "react-bootstrap";
import InfoCard from "../components/infoCard";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-5 px-4 px-sm-5 bg-main bg-section text-main py-1"
    >
      <Row className="py-sm-3 mb-3 mb-sm-5 ms-sm-3">
        <Col lg={8}>
          <h2 className="fw-bold mb-4 font-primary border-start border-4 ps-2 ps-sm-4 border-brand">
            About Mateus
          </h2>

          <p className="text-secondary fs-5 font-secondary">
            I have experience in developing modern web applications using React,
            TypeScript, and component-based architecture.
          </p>
        </Col>
      </Row>

      <Row className="g-4 align-items-stretch font-secondary ms-sm-3">
        <Col md={6} className="g-4 mt-sm-4">
          <p className="text-secondary">
            I’ve worked on real-world projects from responsive landing
            pages,refactoring and improving existing codebases and create
            e-commerce UI interface, collaborating with designers and
            contributing to production-ready applications.I also leverage modern
            AI-assisted development tools to improve efficiency, accelerate
            delivery, and enhance code quality and security.
          </p>

          <p className="text-secondary mt-sm-5">
            My experience includes translating design systems into structured
            components, improving existing codebases by fixing bugs and
            refactoring poorly written code, and integrating front-end
            applications with backend services (APIs, etc.). I prioritize
            writing clean, maintainable code that supports long-term product
            growth and smooth team collaboration.
          </p>
        </Col>

        <Col md={6}>
          <Row className="g-3">
            <Col sm={6}>
              <InfoCard
                title="What You Can Expect"
                description="Well-structured and reliable work, delivered with clear communication, strong work ethic, and attention to detail."
              />
            </Col>

            <Col sm={6}>
              <InfoCard
                title="Preferred Stack"
                description="React, TypeScript and Tailwind are my core technologies, while I’m also able to work with other tools, including backend development."
              />
            </Col>

            <Col sm={12}>
              <InfoCard
                title="Background"
                description="Completed a hybrid full-stack development program (on-site and remote) in Tel Aviv, Israel (2022-2023), followed by a mentored React internship at the end of the course, gaining hands-on experience in real projects and professional workflows."
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default AboutMe;
