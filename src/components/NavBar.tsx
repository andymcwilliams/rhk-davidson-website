import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo.png";
import * as Routes from "../appRoutes";

export default function NavBar(props: any) {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="warning"
      variant="dark"
      sticky="top"
      style={{ borderBottom: "5px solid #1a1f86" }}
    >
      <a href="#Home" onClick={() => props.tabSelected(Routes.HOME)}>
        <img
          className="logo"
          src={logo}
          width="550px"
          style={{ marginRight: "25px" }}
          alt="RHK Davidson Logo"
        />
      </a>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div>
          <Nav variant="pills" className="mr-auto" activeKey={props.activeTab}>
            <Nav.Link
              onClick={() => props.tabSelected(Routes.HOME)}
              href="#Home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => props.tabSelected(Routes.SERVICES)}
              href="#Services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => props.tabSelected(Routes.CONTACT)}
              href="#Contact"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
