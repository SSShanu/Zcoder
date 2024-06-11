// components/CourseSideBar.js
import React from 'react';

const sidebarStyles = {
  width: '200px',
  height: '100vh',
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRight: '1px solid #ccc',
  overflowY: 'auto',
};

const CourseSideBar = ({ setTopic }) => {
  const topics = ['All Courses', 'Python', 'Java', 'C Programming', 'C++','Machine Learning', 'Web development', 'App development', 'Competitive Programming']; // Add more topics as needed

  return (
    <div className="sidebar" style={sidebarStyles}>
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
