// routes/courseRoutes.js

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

//Route to get all questions
router.get('/', courseController.getCourses);

// Route to add a new course
router.post('/create', courseController.addCourse);

// Route to delete a course by ID
router.delete('/:courseId', courseController.deleteCourse);

module.exports = router;
