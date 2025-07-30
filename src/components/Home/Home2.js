import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my-image.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
     
      <Row>
      <h1 style={{ fontSize: "2.6em", color:"white", marginTop:90 }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
        <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid tilt-image" alt="avatar" width={300}  />
          </Tilt>
        </Col>
        
        <Col md={8} className="home-about-description">
        
          <p className="home-about-body">
            I’m a passionate Full Stack Developer who thrives on turning complex challenges into innovative solutions. My love for technology drives me to create seamless and intuitive digital experiences.
            <br />
            <br />
            Graduated in 2023 from <i><b className="purple">Government College of Engineering, Jalgaon</b></i>, I’ve built a strong foundation in frontend and backend development, blending skills in 
            <i>
              <b className="purple"> HTML, CSS, JavaScript, ReactJS, Java, MySQL, and Spring Boot</b>
            </i>. My daily work involves crafting user-friendly interfaces, optimizing backend processes, and continually learning new technologies to stay ahead in this fast-evolving field.
            <br />
            <br />
            Beyond coding, I’m a tech enthusiast who enjoys exploring new trends, solving intricate problems, and experimenting with creative projects. I also actively participate in organizing tech events and workshops, which fuels my drive to contribute to the tech community.
            <br />
            <br />
            I’m excited about the endless possibilities that technology offers and eager to connect with like-minded individuals. Feel free to explore my work and reach out if you’d like to collaborate or chat about tech!
          </p>
        </Col>
        
      </Row>

        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
