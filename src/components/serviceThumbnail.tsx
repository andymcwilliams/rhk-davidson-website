import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import nic from "../images/nic-eic.png";
import { ServiceEnum } from "../enum/services";
import Col from "react-bootstrap/Col";

export default function ServiceThumbnail(props: any) {
  return (
    <Row>
      <Col>
        <Card style={{ width: "18rem" }}>
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
      </Col>

      <Col>
        <Card style={{ width: "18rem" }}>
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
      </Col>

      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={nic} />
          <Card.Body>
            <Card.Title>Industrial</Card.Title>
            <Button
              onClick={() => props.serviceApplied(ServiceEnum.Industrial)}
              variant="warning"
            >
              Click for more info
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
