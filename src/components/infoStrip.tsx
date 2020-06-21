import React from "react";
import phone from "../images/phone.png";
import clock from "../images/clock.png";
import email from "../images/email.png";
import Row from "react-bootstrap/Row";

export default function InfoStrip(props: any) {
  return (
    <div style={{ paddingTop: "5px", backgroundColor: "#ffc107" }}>
      <Row className="infoStrip" id="test">
        <span
          style={{
            borderRadius: "5px",
            paddingBottom: "3px",
            paddingRight: "3px",
            paddingLeft: "3px",
            borderTop: "3px",
          }}
        >
          <img
            style={{ marginBottom: "4px", marginRight: "4px" }}
            src={phone}
            alt="phone"
            width="19"
          />
          <a style={{ marginRight: "30px" }} href="tel:+02870342281">
            02870342281
          </a>
          <img
            style={{ marginBottom: "3px" }}
            src={clock}
            alt="clock"
            width="22"
          />
          <a style={{ marginRight: "30px" }}> Mon-Fri 8:30AM-5:00PM</a>
          <img
            style={{ marginBottom: "3px", marginRight: "4px" }}
            src={email}
            alt="mail"
            width="20"
          />
          <a href="mailto:rhkdavidson@aol.com">rhkdavidson@aol.com</a>
        </span>
      </Row>
    </div>
  );
}
