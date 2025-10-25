import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { CertificationType } from "../types/sections";
import useTilt from "../hooks/useTilt";

const CertificationCard = ({ title, issuer, date, description, image, link }: CertificationType) => {
    const ref = useTilt(true) as any;
    return (
        <div className="tilt-wrapper" ref={ref}>
            <Card className="shadow-lg--hover shadow my-4 h-100 tilt-card">
                <CardBody className="d-flex flex-column">
                    {image ? (
                        <div className="text-center mb-3">
                            <img src={image} alt={`${title} badge`} className="cert-badge" />
                        </div>
                    ) : null}
                    <CardTitle tag="h5">{title}</CardTitle>
                    {issuer ? <h6 className="text-muted">{issuer} {date ? `• ${date}` : null}</h6> : null}
                    {description ? <p className="mt-2" style={{ flex: 1 }}>{description}</p> : null}
                    {link ? (
                        <div className="mt-auto">
                            <Button color="primary" href={link} target="_blank" rel="noopener noreferrer">
                                View Certificate
                            </Button>
                        </div>
                    ) : null}
                </CardBody>
            </Card>
        </div>
    );
};

export default CertificationCard;
