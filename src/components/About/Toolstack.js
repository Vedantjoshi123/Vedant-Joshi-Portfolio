import React from "react";
import { Col, Row } from "react-bootstrap";
import vscodeImg from "../../Assets/tools-logo/VSCode.svg";
import eclipseImg from "../../Assets/tools-logo/Eclipse IDE.svg";
import figmaImg from "../../Assets/tools-logo/Figma.svg";
import gitImg from "../../Assets/tools-logo/Git.svg";
import postmanImg from "../../Assets/tools-logo/Postman.svg";
import slackImg from "../../Assets/tools-logo/Slack.svg";
import stsImg from "../../Assets/tools-logo/sts.png";
import intellijImg from "../../Assets/tools-logo/IntelliJ IDEA.svg";
import devcppImg from "../../Assets/tools-logo/devcpp.png";
import xamppImg from "../../Assets/tools-logo/xampp.png";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
          <img src={vscodeImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.bloodshed.net/" target="_blank" rel="noreferrer">
          <img src={devcppImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <img src={figmaImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://slack.com/intl/en-in" target="_blank" rel="noreferrer">
          <img src={slackImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.apachefriends.org/" target="_blank" rel="noreferrer">
          <img src={xamppImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://spring.io/tools" target="_blank" rel="noreferrer">
          <img src={gitImg} 
            alt="sts" width="80" height="80" />
        </a>   
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
          <img src={githubImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://eclipseide.org/" target="_blank" rel="noreferrer">
          <img src={eclipseImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noreferrer">
          <img src={intellijImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://spring.io/tools" target="_blank" rel="noreferrer">
          <img src={stsImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
          <img src={postmanImg} 
            alt="sts" width="80" height="80" />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
