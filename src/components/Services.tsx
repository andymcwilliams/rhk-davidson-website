import React, { useState } from "react";
import ServiceThumbnail from "./serviceThumbnail";
import { ServiceEnum } from "../enum/services";
import ServiceDescription from "./ServiceDescription";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Services() {
  const [service, setService] = useState(ServiceEnum.Commercial);

  function serviceApplied(service: ServiceEnum) {
    setService(service);
  }

  return (
    <div style={{ paddingTop: "15px" }}>
      <Container>
        <ServiceThumbnail serviceApplied={serviceApplied} />
        <ServiceDescription service={service} />
      </Container>
    </div>
  );
}
