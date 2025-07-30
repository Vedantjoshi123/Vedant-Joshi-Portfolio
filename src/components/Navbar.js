import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { GiJourney } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub, FaPhoneSquareAlt, FaInstagram, FaFacebook } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/journey"
                onClick={() => updateExpanded(false)}
              >
                <GiJourney 
                  style={{ marginBottom: "2px" }}
                />{" "}
                Journey
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
      
            <Nav.Item className="d-md-none">
            <div className="social-icons-toggle">
              <div className="social-component">
                <p><a href="mailto:vedantjoshi4406@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer"> <IoIosMail color="#cd5ff8" size={18} /></a></p>
              </div>
              <div className="social-component">
                <p><a href="tel:8788615689" className="social-link" target="_blank" rel="noopener noreferrer"> <FaPhoneSquareAlt color="#cd5ff8" size={18} /></a></p>
              </div>
              <div className="social-component">
                <p><a href="https://www.linkedin.com/in/joshivedant/" className="social-link" target="_blank" rel="noopener noreferrer"> <FaLinkedin color="#cd5ff8" size={18} /></a></p>
              </div>
              <div className="social-component">
                <p><a href="https://github.com/Vedantjoshi123" className="social-link" target="_blank" rel="noopener noreferrer"> <FaGithub color="#cd5ff8" size={18} /></a></p>
              </div>
              <div className="social-component">
                <p><a href="https://www.instagram.com/ved_joshi_4406?igsh=dWt3cWlycnFyY3Fx" className="social-link" target="_blank" rel="noopener noreferrer"> <FaInstagram color="#cd5ff8" size={18} /></a></p>
              </div>
              <div className="social-component">
                <p><a href="https://www.facebook.com/vedant.joshi.39566905/" className="social-link" target="_blank" rel="noopener noreferrer"> <FaFacebook color="#cd5ff8" size={18} /></a></p>
              </div>
            </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
   <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
  );
}

export default NavBar;
