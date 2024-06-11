// pages/Courses.js
import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import CourseSideBar from '../components/CourseSideBar';
import CourseMainContent from '../components/CourseMainContent';

const containerStyles = {
  display: 'flex',
};

const Courses = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  return (
    <div>
      <NavBar />
      <div style={containerStyles}>
        <div style = {{width : 300}}>
        <CourseSideBar setTopic={setSelectedTopic} />
        </div>
     
        <CourseMainContent selectedTopic={selectedTopic} />
      </div>
    </div>
  );
}

export default Courses;
