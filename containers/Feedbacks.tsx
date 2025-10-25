import { feedbacks, certifications } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import CertificationCard from "../components/CertificationCard";
import Fade from "react-reveal/Fade";

const Feedbacks = () => {
  return (
    feedbacks && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="fa fa-star text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Achievements & Certifications</h4>
              </div>
            </div>
            {certifications && (
              <Row className="g-3">
                {certifications.map((data, i) => (
                  <Col key={i} lg={4}>
                    <CertificationCard {...data} />
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Feedbacks;
