import React, { useState } from "react";
import ServiceThumbnail from "./serviceThumbnail";
import { ServiceEnum } from "../enum/services";
import ServiceDescription from "./ServiceDescription";
import Container from "react-bootstrap/Container";

export default function Services() {
  const [service, setService] = useState(ServiceEnum.Domestic);

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
