import React from "react";
import { ServiceEnum } from "../enum/services";

export default function ServiceDescription(props: any) {
  return (
    <>
      {props.service === ServiceEnum.Commercial && <p>Commercial</p>}
      {props.service === ServiceEnum.Industrial && <p>Industrial</p>}
      {props.service === ServiceEnum.Domestic && <p>Domestic</p>}
    </>
  );
}
