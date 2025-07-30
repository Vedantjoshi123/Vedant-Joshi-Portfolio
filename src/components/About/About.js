import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.gif";
import Toolstack from "./Toolstack";
import GitHubPage from "./PlatformPages/GitHubPage";
import PlatformInfo from "./PlatformInfo";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", alignItems:"center"}}>
          <Col
            md={5}
            style={{
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.2em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={6}
            style={{ paddingTop: "100px", paddingBottom: "100px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>


        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        
        <h1 className="project-heading">
          My <strong className="purple">Platform Achievements</strong>
        </h1>
        <PlatformInfo />

        <h1 className="project-heading">
          <strong className="purple">My</strong> Coding Journey
        </h1> 
        <GitHubPage />
      </Container>
    </Container>
  );
}

export default About;
