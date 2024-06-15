import React from 'react';
import './CourseSideBar.css';

const CourseSideBar = ({ setTopic }) => {
  const topics = ['All Courses', 'Python', 'Java', 'C Programming', 'C++', 'Machine Learning', 'Web development', 'App development', 'Competitive Programming'];

  return (
    <div className="sidebar">
      <h2>Courses</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic} onClick={() => setTopic(topic === 'All Courses' ? '' : topic)}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseSideBar;
