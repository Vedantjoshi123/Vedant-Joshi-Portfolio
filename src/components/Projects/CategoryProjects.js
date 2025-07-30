import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCards from '../Projects/ProjectCards';

const CategoryProjects = ({ category }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/project.json')
      .then(response => response.json())
      .then(data => {
        if (category === 'all') {
          setProjects(data.projects);
        } else {
          setProjects(data.projects.filter(project => project.category === category));
        }
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, [category]);

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      {projects.length > 0 ? (
        projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
            <ProjectCards
              imgPath={project.imgPath}
              isBlog={false}
              title={project.title}
              description={truncateText(project.description, 120)}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
            />
          </Col>
        ))
      ) : (
        <Col md={12}>
          <p>No projects available for this category.</p>
        </Col>
      )}
    </Row>
  );
};

const truncateText = (text, maxLength) => {
  return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
};

export default CategoryProjects;
