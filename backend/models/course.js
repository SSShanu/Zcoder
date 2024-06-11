

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    topic: { 
        type: String,
        required: true
      }
  });
  

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
