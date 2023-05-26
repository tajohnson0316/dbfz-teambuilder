import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="/" className="fs-3">
            TeamZ
          </Navbar.Brand>
          <Nav className="me-auto">
            <div className="vr"></div>
            <Nav.Link href="/">Home</Nav.Link>
            <div className="vr"></div>
            <Nav.Link href="/">Locker Room</Nav.Link>
            <div className="vr"></div>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
