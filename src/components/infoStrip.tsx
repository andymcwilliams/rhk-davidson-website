import React from "react";
import phone from "../images/phone.jpg";
import clock from "../images/clock.png";
import email from "../images/email.png";
import Container from "react-bootstrap/Container";

export default function InfoStrip(props: any) {
  return (
    <Container>
      <span style={{ float: "right" }}>
        <img
          style={{ marginBottom: "4px" }}
          src={phone}
          alt="phone"
          width="20"
          height="10%"
        />
        <a style={{ marginRight: "10px" }} href="tel:+02870342281">
          02870342281
        </a>
        <img
          style={{ marginBottom: "3px" }}
          src={clock}
          alt="clock"
          width="20"
          height="10%"
        />
        <a style={{ marginRight: "10px" }}> Mon-Fri 8:30AM-5:30PM</a>
        <img
          style={{ marginBottom: "3px", marginRight: "2px" }}
          src={email}
          alt="mail"
          width="20"
          height="10%"
        />
        <a href="mailto:rhkdavidson@aol.com">rhkdavidson@aol.com</a>
      </span>
    </Container>
  );
}
