import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import nic from "../images/nic-eic.png";

export default function Home() {
  return (
    <div style={{ padding: "15px" }}>
      <Col>
        <Row>
          <Card>
            <Card.Header>About the Business</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  We have been in the electrical business located in Coleraine
                  since 1959 and have been working within the North West area
                  for over 50 years. We have a large number of repeat customers
                  due to our friendly customer service and high standard of
                  workmanship, with premises at{" "}
                  <a href="https://maps.google.com/?q=33-35+Bushmills+Rd,+Coleraine+BT52+2BP">
                    35 Bushmills Road Coleraine
                  </a>{" "}
                  we can be easily located. For all your electrical needs please
                  phone today where we will be happy to assist you.{" "}
                </p>
              </blockquote>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Electrical Contractors</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  We are NICEIC Approved Contractors who are assessed to the
                  highest standards covering all types of electrical contractors
                  and installations. To view all the service we provide please
                  visit our services page.{" "}
                </p>
              </blockquote>
            </Card.Body>
            <Card.Img
              style={{
                width: "25%",
                margin: "10px",
              }}
              variant="top"
              src={nic}
            />
          </Card>
        </Row>
      </Col>
    </div>
  );
}
