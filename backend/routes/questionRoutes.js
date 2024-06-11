// routes/questions.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    createQuestion,
    deleteQuestion,
    getQuestions,
    getQuestion,
    createComment,
    getCommentsByQuestion
} = require('../controllers/questionController');

router.post('/', auth, createQuestion);  
router.get('/', getQuestions); 
router.get('/:id', getQuestion); 
router.delete('/:questionId/:userId', auth, deleteQuestion);  
router.post('/:id/comments', auth, createComment);  
router.get('/:questionId/comments', getCommentsByQuestion);

module.exports = router;
