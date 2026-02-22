import { Container, Row, Col } from "react-bootstrap";
import SocialMediaIcon from "../components/socialIcon";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-surface text-main">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="fw-bold mb-3 font-primary text-brand">
              Let’s Connect
            </h2>

            <p className="text-surface sm:fs-5 mb-4 font-secondary">
              I’m always open to discussing new projects, creative ideas, or
              opportunities.
            </p>

            <p className="fw-semibold fs-5 mb-2 font-primary">
              matrosen.developer@gmail.com
            </p>

            <p className="text-surface mb-4 font-secondary">
              WhatsApp: +972 0534715942
            </p>

            <div className="d-flex justify-content-center gap-4 mt-3 mb-5">
              <SocialMediaIcon
                url={"https://www.linkedin.com/in/mateus-rosengarten-mauricio/"}
              />
              <SocialMediaIcon url={"https://github.com/Mateus1rosengarten"} />
              <SocialMediaIcon
                url={"https://api.whatsapp.com/send?phone=9720534715942"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
