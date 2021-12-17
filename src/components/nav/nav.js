import React from "react";
import './nav.css';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
  return (
    <ReactBootStrap.Navbar expand="lg" className="navigation-bar nav-pos">
      <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="#home">
          <img className="logo" src="images/axonifylogo.png" />
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Nav className="justify-content-end" activeKey="/home">
          <ReactBootStrap.Nav.Item className="nav-links">
            <ReactBootStrap.NavDropdown title="PRODUCTS" id="navbarScrollingDropdown">
              <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action5">
                Something else here
          </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav.Item>
          <ReactBootStrap.Nav.Item className="nav-links">
            <ReactBootStrap.NavDropdown title="SERVICES" id="navbarScrollingDropdown">
              <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action5">
                Something else here
          </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav.Item>
          <ReactBootStrap.Nav.Item className="nav-links">
            <ReactBootStrap.Nav.Link eventKey="link-1">ABOUT US</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav.Item>

          <ReactBootStrap.Nav.Item className="nav-links">
            <ReactBootStrap.Nav.Link eventKey="link-1">CAREERS</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav.Item>
          <ReactBootStrap.Nav.Item className="nav-links">
            <ReactBootStrap.Nav.Link eventKey="link-2">CONTACT US</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav.Item>
          <ReactBootStrap.Nav.Item className="nav-links">
            <ReactBootStrap.Nav.Link eventKey="link-2">GET IN TOUCH</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav.Item>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
}

export default NavBar;