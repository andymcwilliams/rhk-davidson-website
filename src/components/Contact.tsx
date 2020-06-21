import React from "react";
import phone from "../images/phone.png";
import email from "../images/email.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Contact() {
  return (
    <>
      <CardGroup>
        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Body>
            <img src={phone} alt="phone" width="100" />
            <Card.Text>
              <a style={{ fontSize: "40px" }} href="tel:02870342281">
                02870342281
              </a>
            </Card.Text>
            <Button href="tel:02870342281" variant="primary">
              Call us now!
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Open Mon-Fri 8:30AM-5:00PM</small>
          </Card.Footer>
        </Card>
        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Body>
            <img src={email} alt="mail" width="100" />
            <Card.Text>
              <a
                href="mailto:rhkdavidson@aol.com"
                style={{ marginRight: "30px", fontSize: "40px" }}
              >
                rhkdavidson@aol.com
              </a>
            </Card.Text>
            <Button href="mailto:rhkdavidson@aol.com" variant="primary">
              Email us with any queries!
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <Card>
        <Card.Header>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            If you prefer, fill out this form and we will get back to you as
            soon as possible.
          </p>
        </Card.Header>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type="tel" placeholder="Home Phone Number" />
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
}
