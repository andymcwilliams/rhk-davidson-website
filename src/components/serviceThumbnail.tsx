import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import nic from "../images/nic-eic.png";
import { ServiceEnum } from "../enum/services";

export default function ServiceThumbnail(props: any) {
  return (
    <div style={{ padding: "15px" }}>
      <Container>
        <Row>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={nic} />
              <Card.Body>
                <Card.Title>Domestic</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  onClick={() => props.serviceApplied(ServiceEnum.Domestic)}
                  variant="primary"
                >
                  Click for more info
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={nic} />
              <Card.Body>
                <Card.Title>Commercial</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  onClick={() => props.serviceApplied(ServiceEnum.Commercial)}
                  variant="primary"
                >
                  Click for more info
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={nic} />
              <Card.Body>
                <Card.Title>Industrial</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  onClick={() => props.serviceApplied(ServiceEnum.Industrial)}
                  variant="primary"
                >
                  Click for more info
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
