import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import ProjectSections from "../Projects/ProjectSections";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        < ProjectSections/> 

      </Container>
    </Container>
  );
}

export default Projects;
