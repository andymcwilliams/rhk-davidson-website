import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo-yellow.png";

export default function NavBar(props: any) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.colour}
      variant={props.colour}
      sticky="top"
    >
      <Navbar.Brand href="/" style={{ paddingLeft: "18%", margin: "-80px" }}>
        <img src={logo} height="230" alt="React Bootstrap logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#Services">Services</Nav.Link>
          <Nav.Link href="#Contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
