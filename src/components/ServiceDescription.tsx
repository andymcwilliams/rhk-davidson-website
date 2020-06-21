import React from "react";
import { ServiceEnum } from "../enum/services";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import suffitLighting from "../images/under-suffit-lighting.jpeg";
import ledLighting from "../images/led-lighting.jpeg";

export default function ServiceDescription(props: any) {
  let serviceDescription;
  let serviceHeader;

  if (props.service === ServiceEnum.Commercial) {
    serviceHeader = "Commercial & Industrial Work";
    serviceDescription =
      "We are NICEIC approved contractors and all our details can be found on construction line site. " +
      "services we offer include new build/rewiring existing upgradeing installation, fire alarms, security lighting, led " +
      "lighting, intruder alarms, nurse call systems etc.";
  } else if (props.service === ServiceEnum.Maintenance) {
    serviceHeader = "Full Maintenance Service";
    serviceDescription = (
      <ul style={{ textAlign: "left" }}>
        <li>Portable appliance testing/certificate printout listing</li>
        <li>Periodic inspection/certificate</li>
        <li>Fire alarm inspection/certificate</li>
        <li>Emergency lighing inspection/certificate</li>
      </ul>
    );
  } else if (props.service === ServiceEnum.Domestic) {
    serviceHeader = "Domestic Electrical Services";
    serviceDescription =
      "No job is too small! The services we offer can be anything from a full " +
      "rewire to supply/install/replacement of all electrical accessories, " +
      "outside security lighting, interior lighting, window/wall/sweep fans, " +
      "electric showers/water heaters. intruder alarms/fire alarms/ door bells etc.";
  }

  return (
    <>
      <Card>
        <Card.Header>{serviceHeader}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{serviceDescription}</p>
          </blockquote>
        </Card.Body>
      </Card>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={suffitLighting}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Under Suffit Lighting</h3>
            <p>Domestic</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ledLighting} alt="Second slide" />

          <Carousel.Caption>
            <h3>LED Lighting</h3>
            <p>Domestic.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
    </>
  );
}
