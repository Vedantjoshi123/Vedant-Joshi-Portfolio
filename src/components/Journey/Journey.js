import React from 'react';
import timelineElements from '../../timelineElements'; // Ensure correct path
import WorkIcon from '../../Assets/work.gif';
import SchoolIcon from '../../Assets/school.gif';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './journey.css';

function Journey() {
  let workIconStyles = { background: '#06D6A0' };
  let schoolIconStyles = { background: '#F9C74F' };

  return (
    <div className='journey-section'>
      <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === 'work';
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== '';
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName='date'
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={<img className='icon' src={isWorkIcon ? WorkIcon : SchoolIcon} alt={isWorkIcon ? 'Work Icon' : 'School Icon'} />}
            >
              <h3 className='vertical-timeline-element-title'>{element.title}</h3>
              <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
              <p id='description'>{element.description}</p>
              {showButton && (
                <a
                  className={`button ${isWorkIcon ? 'workButton' : 'schoolButton'}`}
                  href= {element.link} target='_blank' rel="noreferrer"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Journey;
