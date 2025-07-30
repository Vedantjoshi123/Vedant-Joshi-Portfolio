import React from "react";
import { Col, Row } from "react-bootstrap";
import hibernateImg from "../../Assets/tech-logo/Hibernate.svg";
import bootstrapImg from "../../Assets/tech-logo/Bootstrap.svg";
import javaImg from "../../Assets/tech-logo/Java.svg";
import reactImg from "../../Assets/tech-logo/React.svg";
import springbootImg from "../../Assets/tech-logo/springboot.png";
import dsaImg from "../../Assets/tech-logo/The Algorithms.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "60px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" 
            alt="c" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="cplusplus" width="80" height="80" />
        </a> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/dsa/dsa_intro.php" target="_blank" rel="noreferrer">
          <img src={dsaImg} 
            alt="dsa" width="80" height="80" />
        </a> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5" width="80" height="80" /> 
        </a> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3" width="80" height="80" /> 
        </a>  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          <img src={bootstrapImg}
            alt="bootstrap" width="80" height="80" color="#fff"/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
          <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
            alt="tailwind" width="80" height="80" /> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript" width="80" height="80" /> 
        </a> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactImg} 
            alt="react" width="80" height="80" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql" width="80" height="80" /> 
        </a> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.java.com" target="_blank" rel="noreferrer">
          <img src={javaImg}
            alt="java" width="80" height="80" /> 
        </a> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://hibernate.org/" target="_blank" rel="noreferrer">
          <img src={hibernateImg} 
            alt="hibernate" width="80" height="80" />
        </a> 
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://spring.io/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" 
            alt="spring" width="80" height="80" />
        </a> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer">
          <img src={springbootImg} 
            alt="springboot" width="80" height="80" />
        </a> 
      </Col>
    </Row>
  );
}

export default Techstack;
