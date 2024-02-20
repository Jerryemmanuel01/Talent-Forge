import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-light nav--sec py-4">
      <Container>
        <Navbar.Brand href="#home" className="text-light fs-2 fw-bold">
          Talent Forge
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-light fw-medium fs-5">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-light fw-medium fs-5">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="text-light fw-medium fs-5">
              Our Services
            </Nav.Link>
            <Nav.Link href="#link" className="text-light fw-medium fs-5">
              Model
            </Nav.Link>
            <Nav.Link href="#link" className="text-light fw-medium fs-5">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
