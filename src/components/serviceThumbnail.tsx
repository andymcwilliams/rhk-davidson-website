import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import nic from "../images/nic-eic.png";
import { ServiceEnum } from "../enum/services";
import CardGroup from "react-bootstrap/CardGroup";

export default function ServiceThumbnail(props: any) {
  return (
    <Row>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={nic} />
          <Card.Body>
            <Card.Title>Domestic</Card.Title>
            <Button
              onClick={() => props.serviceApplied(ServiceEnum.Domestic)}
              variant="warning"
            >
              Click for more info
            </Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={nic} />
          <Card.Body>
            <Card.Title>Commercial</Card.Title>
            <Button
              onClick={() => props.serviceApplied(ServiceEnum.Commercial)}
              variant="warning"
            >
              Click for more info
            </Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={nic} />
          <Card.Body>
            <Card.Title>Maintenance</Card.Title>
            <Button
              onClick={() => props.serviceApplied(ServiceEnum.Maintenance)}
              variant="warning"
            >
              Click for more info
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Row>
  );
}
