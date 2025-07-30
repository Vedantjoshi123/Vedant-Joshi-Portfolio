import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCards from '../Projects/ProjectCards';

const truncateText = (text, maxLength) => {
  return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
};

const AllProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/project.json')   
      .then(response => response.json())
      .then(data => setProjects(data.projects))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      {projects.map((project, index) => (
        <Col md={4} className="project-card" key={index}>
          <ProjectCards
            imgPath={`/Assets/Projects/${project.imgPath}`} // Adjust path as needed
            isBlog={false}
            title={project.title}
            description={truncateText(project.description, 120)}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
          />
        </Col>
      ))}
    </Row>
  );
};

export default AllProject;
