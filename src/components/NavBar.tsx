import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo.png";

export default function NavBar(props: any) {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="warning"
      variant="dark"
      sticky="top"
    >
      <img
        className="logo"
        src={logo}
        width="350px"
        style={{ marginTop: "-80px", marginBottom: "-90px" }}
        alt="RHK Davidson Logo"
      />

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div>
          <Nav variant="pills" className="mr-auto" defaultActiveKey="#Home">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
