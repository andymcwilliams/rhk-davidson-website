import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import nic from "../images/nic-eic.png";
import phone from "../images/phone.jpg";
import clock from "../images/clock.png";
import email from "../images/email.png";

export default function Contact() {
  // return (
  //   <>
  //     <div>
  //       <img
  //         style={{ marginBottom: "4px" }}
  //         src={phone}
  //         alt="phone"
  //         width="20"
  //       />
  //       <a style={{ marginRight: "30px" }} href="tel:+02870342281">
  //         02870342281
  //       </a>
  //       <img
  //         style={{ marginBottom: "3px" }}
  //         src={clock}
  //         alt="clock"
  //         width="20"
  //       />
  //       <a style={{ marginRight: "30px" }}> Mon-Fri 8:30AM-5:30PM</a>
  //       <img
  //         style={{ marginBottom: "3px", marginRight: "2px" }}
  //         src={email}
  //         alt="mail"
  //         width="20"
  //       />
  //       <a href="mailto:rhkdavidson@aol.com">rhkdavidson@aol.com</a>
  //     </div>
  //   </>
  // );

  return (
    <div>
      <Row className="align-items-center">
        <Card style={{ width: "40%" }}>
          <Card.Header>Phone</Card.Header>
          <Card.Body>
            <img
              style={{ marginRight: "30px" }}
              src={phone}
              alt="phone"
              width="100"
            />
            <a style={{ fontSize: "50px" }} href="tel:+02870342281">
              02870342281
            </a>
          </Card.Body>
        </Card>
      </Row>
      <Row className="align-items-center">
        <Card style={{ width: "40%" }}>
          <Card.Header>Email</Card.Header>
          <Card.Body>
            <img
              style={{ marginRight: "30px" }}
              src={email}
              alt="mail"
              width="100"
            />
            <a
              href="mailto:rhkdavidson@aol.com"
              style={{ marginRight: "30px", fontSize: "50px" }}
            >
              rhkdavidson@aol.com
            </a>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}
