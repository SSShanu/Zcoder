import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import CourseSideBar from '../components/CourseSideBar';
import CourseMainContent from '../components/CourseMainContent';
import './Courses.css';

const Courses = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  return (
    <div className="courses-container">
      <NavBar />
      <div className="content-container">
        <CourseSideBar setTopic={setSelectedTopic} />
        <CourseMainContent selectedTopic={selectedTopic} />
      </div>
    </div>
  );
}

export default Courses;
