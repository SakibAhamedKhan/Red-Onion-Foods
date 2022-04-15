import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiShoppingCart } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import Loading from "../Loading/Loading";

const Header = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  
  if(user){
    // console.log(user.displayName);
  }
  
  // if(loading){
  //   return <Loading></Loading>;
  // }

  const handleNavigateLogin = () => {
    navigate('/login');
  }
  const handleNavigateSignup = () => {
    navigate('/signup');
  }
  const handleSignout = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img height={40} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-2 border-danger" />

          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="ms-auto">
              <button className="btn text-light fw-bold d-block mx-auto me-lg-4 my-1 my-lg-0">
                <FiShoppingCart></FiShoppingCart>
              </button>
              {
                user?
                <p className="text-light my-auto text-center mx-2">{user.displayName}</p>
                :
                ''
              }
              {
                user ?
                <button onClick={handleSignout} className="btn text-light d-block mx-auto me-lg-2 my-1 my-lg-0">Sign  out</button>
                :
                <>
                  <button onClick={handleNavigateLogin} className="btn text-light d-block mx-auto me-lg-2 my-1 my-lg-0">Login</button>
                  <button onClick={handleNavigateSignup} className="btn btn-danger d-block mx-auto px-3 my-1 my-lg-0 rounded-pill">Signup</button>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
	  
    </div>
  );
};

export default Header;
