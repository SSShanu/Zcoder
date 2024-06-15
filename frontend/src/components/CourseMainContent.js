import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import './CourseMainContent.css';

const CourseMainContent = ({ selectedTopic }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = selectedTopic
    ? courses.filter(course => course.topic === selectedTopic)
    : courses;

  return (
    <div className="main-content">
      <h1>All Courses Catalog</h1>
      <input type="text" placeholder="Browse Courses" className="search-bar" />
      <div className="courses-grid">
        {filteredCourses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseMainContent;
  