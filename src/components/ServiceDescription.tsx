import React from "react";
import { ServiceEnum } from "../enum/services";
import Card from "react-bootstrap/Card";

export default function ServiceDescription(props: any) {
  return (
    <>
      {/* {props.service === ServiceEnum.Commercial && <p>Commercial</p>}
      {props.service === ServiceEnum.Industrial && <p>Industrial</p>}
      {props.service === ServiceEnum.Domestic && <p>Domestic</p>} */}

      <Card style={{ width: "80%" }}>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{" "}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
