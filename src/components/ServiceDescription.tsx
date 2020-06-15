import React from "react";
import { ServiceEnum } from "../enum/services";
import Card from "react-bootstrap/Card";

export default function ServiceDescription(props: any) {
  let service;

  if (props.service === ServiceEnum.Commercial) {
    service = "commercial";
  } else if (props.service === ServiceEnum.Industrial) {
    service = "industrial";
  } else if (props.service === ServiceEnum.Domestic) {
    service = "domestic";
  }

  return (
    <>
      <Card style={{ width: "100%" }}>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{service}</p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
