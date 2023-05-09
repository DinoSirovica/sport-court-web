import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar bg="cyan" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="your-logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Your logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" exact activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link href="/activity" activeClassName="active">
            Activity
          </Nav.Link>
          <Nav.Link href="/about-us" activeClassName="active">
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;