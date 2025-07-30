import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import logo from "../Assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
      <Col md="3" className="footer-copywright">
        <img src={logo} width={25} alt="logo"/>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>Designed and Developed by <a href="mailto:vedantjoshi4406@gmail.com" className="link-none" target="_blank" rel="noopener noreferrer"><span className="purple"> Vedant Joshi</span></a> </h3>
        </Col>
        
        <Col md="3" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Vedantjoshi123"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >    
                <AiFillGithub />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/joshivedant/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ved_joshi_4406?igsh=dWt3cWlycnFyY3Fx"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
