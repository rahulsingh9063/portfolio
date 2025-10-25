import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";
import useTilt from "../hooks/useTilt";

const isSvg = (src?: string) => {
  if (!src) return false;
  return src.trim().toLowerCase().endsWith(".svg");
};

const ProjectsCard = ({ name, desc, github, link, image }: ProjectType) => {
  const svg = isSvg(image);
  const ref = useTilt(true) as any;

  return (
    <Col lg="6" className="mb-4 d-flex">
      <div className="tilt-wrapper" style={{ width: "100%" }} ref={ref}>
        <Card className="shadow-lg--hover shadow mt-4 flex-fill tilt-card">
          <CardBody className="d-flex flex-column p-3" style={{ height: "100%" }}>
            {image ? (
              <div className="projects-image mb-3">
                <img
                  src={image}
                  alt={`${name} screenshot`}
                  loading="lazy"
                  className={svg ? "svg" : ""}
                  style={{ borderRadius: 8 }}
                />
              </div>
            ) : null}

            <div className="d-flex px-3" style={{ flex: 1 }}>
              <div className="pl-4 flex-grow-1 d-flex flex-column">
                <div>
                  <h3>{name}</h3>
                  <p className="description mt-3">{desc}</p>
                </div>

                <div className="mt-auto">
                  {github ? (
                    <Button
                      className="btn-icon mr-2"
                      color="github"
                      href={github}
                      target="_blank"
                      rel="noopener"
                      aria-label="Github"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                      </span>
                    </Button>
                  ) : null}
                  {link ? (
                    <Button
                      className="btn-icon"
                      color="success"
                      href={link}
                      target="_blank"
                      rel="noopener"
                      aria-label="Demo"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Demo</span>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default ProjectsCard;
