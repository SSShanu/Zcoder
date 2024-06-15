// controllers/courseController.js

const Course = require('../models/course');

// Controller function to add a new course
const addCourse = async (req, res) => {
    try {
        const { title, company, link } = req.body;
        const course = new Course({ title, company, link });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to delete a course by ID
const deleteCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        await course.remove();
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getCourses = async (req, res) => {
    try {
      const courses = await Course.find(); // Find all courses
      res.status(200).json(courses); // Send list of courses in response
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  };

module.exports = {
    addCourse,
    deleteCourse,
    getCourses
};
