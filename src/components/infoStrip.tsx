import React from "react";
import phone from "../images/phone.jpg";
import clock from "../images/clock.png";

export default function InfoStrip(props: any) {
  return (
    <span>
      <img src={phone} alt="phone" width="20" height="10%" />
      <a style={{ marginRight: "25px" }} href="tel:+02870342281">
        02870342281
      </a>
      <img
        src={clock}
        style={{
          paddingBottom: "3px",
          marginLeft: "10px",
          marginRight: "5px",
        }}
        alt="clock"
        width="20"
        height="10%"
      />
      <a>MON-FRI 8:30AM-5:30PM</a>
      <a
        style={{
          marginLeft: "25px",
        }}
        href="mailto:rhkdavidson@aol.com"
      >
        rhkdavidson@aol.com
      </a>
    </span>
  );
}
