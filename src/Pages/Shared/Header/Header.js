import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img height={40} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-1 border-warning" />

          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="ms-auto">
              <button className="btn text-light fw-bold d-block mx-auto me-lg-4 my-1 my-lg-0">
                <FiShoppingCart></FiShoppingCart>
              </button>
		  	  <button className="btn text-light d-block mx-auto me-lg-2 my-1 my-lg-0">Login</button>
		  	  <button className="btn btn-warning d-block mx-auto px-3 my-1 my-lg-0 rounded-pill">Signup</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
