import React, { useState } from 'react';
import CategoryProjects from './CategoryProjects';

const PlatformAchievements = () => {
  const [selectedProject, setSelectedProject] = useState('all');

  const renderContent = () => {
    return <CategoryProjects category={selectedProject} />;
  };

  return (
    <div className="platform-achievements">
      <nav className="navigation">
        <ul>
          <li>
            <button onClick={() => setSelectedProject('all')} className={selectedProject === 'all' ? 'active' : ''}>All Projects</button>
          </li>
          <li>
            <button onClick={() => setSelectedProject('html')} className={selectedProject === 'html' ? 'active' : ''}>HTML & CSS</button>
          </li>
          <li>
            <button onClick={() => setSelectedProject('js')} className={selectedProject === 'js' ? 'active' : ''}>JavaScript</button>
          </li>
          <li>
            <button onClick={() => setSelectedProject('java')} className={selectedProject === 'java' ? 'active' : ''}>Java</button>
          </li>
          <li>
            <button onClick={() => setSelectedProject('spring')} className={selectedProject === 'spring' ? 'active' : ''}>Spring Boot</button>
          </li>
        </ul>
      </nav>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default PlatformAchievements;
