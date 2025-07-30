import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/../Assets/Vedant_Joshi.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Contact from "../Home/Contact/Contact";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, My Name is
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> VEDANT JOSHI</strong>
              </h1>
              <div style={{ paddingLeft: 50, textAlign: "left", display:"flex", gap:"20px" }}>
                <h1>I'm</h1><Type />
              </div>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px", marginLeft: 50, marginTop: 20 }}
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "100%" }}
              />
            </Col>
            
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Contact />
    </section>
  );
}

export default Home;
