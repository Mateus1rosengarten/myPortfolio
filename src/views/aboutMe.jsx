import { Container, Row, Col, Card } from "react-bootstrap";

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
            I am experienced in developing modern web applications using React,
            TypeScript, and component-based architecture.
          </p>
        </Col>
      </Row>

      <Row className="g-4 align-items-stretch font-secondary ms-sm-3">
        <Col md={6}>
          <p className="text-secondary">
            I’ve worked on real-world projects ranging from responsive landing
            pages to e-commerce interfaces, collaborating with designers and
            contributing to production-ready React applications.
          </p>

          <p className="text-secondary">
            My experience includes translating design systems into structured
            components and improving existing codebases
          </p>
        </Col>

        <Col md={6}>
          <Row className="g-3">
            <Col sm={6}>
              <Card className="h-100 border-0 shadow-sm border-end border-brand border-2">
                <Card.Body>
                  <h6 className="fw-bold  mb-2 font-primary">
                    What You Can Expect
                  </h6>
                  <p className="text-muted small mb-0 font-secondary">
                    Well-structured and reliable work, delivered with clear
                    communication, strong work ethic, and attention to detail.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6}>
              <Card className="h-100 border-0 shadow-sm border-end border-brand  border-2">
                <Card.Body>
                  <h6 className="fw-bold mb-2 font-primary">Preferred Stack</h6>
                  <p className="text-muted small mb-0 font-secondary">
                    React, TypeScript and Tailwind are my core technologies,
                    while I’m also comfortable working with other tools
                    ,including backend development.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12}>
              <Card className="h-100 border-0 shadow-sm border-sm-bottom border-end border-brand border-2 ">
                <Card.Body>
                  <h6 className="fw-bold mb-2 font-primary">User Experience</h6>
                  <p className="text-muted small mb-0 font-secondary">
                    Completed a full-stack development program with a mentored
                    internship (Tel Aviv - Israel), gaining practical experience
                    in real projects and professional workflows.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default AboutMe;
