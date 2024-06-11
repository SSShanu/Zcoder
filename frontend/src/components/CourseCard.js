// components/CourseCard.js
import React from 'react';

const courseCardStyles = {
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'transform 0.2s',
};

const courseCardHoverStyles = {
  transform: 'scale(1.05)',
};

const CourseCard = ({ course }) => {
  return (
    <div 
      className="course-card"
      style={courseCardStyles}
      onClick={() => window.open(course.link, '_blank')}
      onMouseOver={e => e.currentTarget.style.transform = courseCardHoverStyles.transform}
      onMouseOut={e => e.currentTarget.style.transform = 'none'}
    >
      <h3>{course.title}</h3>
      <p>{course.topic}</p>
      <p>{course.company}</p>
    </div>
  );
}

export default CourseCard;
