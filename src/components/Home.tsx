import React, { useState } from "react";
import ServiceThumbnail from "./serviceThumbnail";
import { ServiceEnum } from "../enum/services";
import ServiceDescription from "./ServiceDescription";

export default function Home() {
  const [service, setService] = useState(ServiceEnum.Commercial);

  function serviceApplied(service: ServiceEnum) {
    setService(service);
  }

  return (
    <>
      <ServiceThumbnail serviceApplied={serviceApplied} />
      <ServiceDescription service={service} />
    </>
  );
}
