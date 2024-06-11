// components/CourseMainContent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';

const mainContentStyles = {
  flex: 1,
  padding: '20px',
};

const searchBarStyles = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  fontSize: '16px',
};

const coursesGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '20px',
};

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
    <div className="main-content" style={mainContentStyles}>
      <h1>All Courses Catalog</h1>
      <input type="text" placeholder="Browse Courses" style={searchBarStyles} />
      <div className="courses-grid" style={coursesGridStyles}>
        {filteredCourses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseMainContent;
