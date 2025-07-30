import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function AboutCard() {
  const handleDownload = () => {
    // This should be the URL to your resume file
    const resumeUrl = "https://drive.google.com/file/d/1zDBnybRzygXc4pWpkpxet3H-3giqQCMt/view?usp=drive_link";
    window.open(resumeUrl, "_blank");
  };
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Hello! I’m <span className="purple">Vedant Joshi</span>, a dedicated Full Stack Developer based in <span className="purple"> Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra.</span><br></br>
              I graduated in 2023 from <span className="purple">Government College of Engineering, Jalgaon</span> with a B.Tech in Electronics and Telecommunications Engineering. 
              <br></br>
              I am currently seeking new job opportunities where I can apply my skills and grow professionally. Outside of coding, I enjoy exploring tech trends and working on creative projects.
          </p>
        </blockquote>
      </Card.Body>
      <Button
        variant="primary"
        onClick={handleDownload}
        style={{ marginTop: 20, cursor: 'pointer' }}
      >
        Download Resume
      </Button>
    </Card>
  );
}

export default AboutCard;
