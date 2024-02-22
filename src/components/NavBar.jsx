import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/talent-forge-logo.png";

function NavBar() {
  const [headerFixed, setheaderFixed] = useState(false);

  //add event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setheaderFixed(true);
    } else {
      setheaderFixed(false);
    }
  });
  return (
    <Navbar
      expand="lg"
      className={`navbar-light bg-tertiary py-3 shadow-sm ${
        headerFixed ? "sticky-top bg-white" : ""
      }`}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="fs-2 fw-bold d-flex align-items-center"
        >
          <img src={Logo} alt="" width={25} className="me-2" />
          Talent Forge
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="fw-medium fs-6">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="fw-medium fs-6">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="fw-medium fs-6">
              Our Services
            </Nav.Link>
            <Nav.Link href="#link" className="fw-medium fs-6">
              Model
            </Nav.Link>
            <Nav.Link href="#link" className="fw-medium fs-6">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
