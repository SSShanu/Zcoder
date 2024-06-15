const Question = require('../models/question');
const User = require('../models/user');
const Comment = require('../models/comment');

// Create a new question
const createQuestion = async (req, res) => {
    try {
        const { topic, difficulty, link, platform, note } = req.body;
        const user = await User.findById(req.user); 
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const question = new Question({ topic, difficulty, link, platform, author: user._id, note });
        await question.save();
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



// Delete a question by ID (only if added by the user)
const deleteQuestion = async (req, res) => {
    try {
        const { questionId, userId } = req.params;
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        if (question.author.toString() !== userId) {
            return res.status(403).json({ error: 'User not authorized to delete this question' });
        }
        await question.remove();
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// View all questions
const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate('author', 'username');
        res.status(200).json(questions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// View a single question by ID
const getQuestion = async (req, res) => {
    const { id } = req.params;
    try {
        const question = await Question.findById(id).populate('author', 'username').populate('comments');
        if (!question) {
            return res.status(404).json({ error: 'No such question' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Add a comment to a question
const createComment = async (req, res) => {
    try {
        const { content, questionId } = req.body; // Receive questionId from the request body
        const user = await User.findById(req.user); // Get user ID from the token
        const question = await Question.findById(questionId);
        if (!user || !question) {
            return res.status(404).json({ error: 'User or Question not found' });
        }
        const comment = new Comment({ content, author: user._id, question: question._id });
        await comment.save();

        // Add the comment to the user and question
        question.comments.push(comment._id);
        await question.save();

        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getCommentsByQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        const comments = await Comment.find({ question: questionId }).populate('author', 'username');
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




module.exports = {
    createQuestion,
    deleteQuestion,
    getQuestions,
    getQuestion,
    createComment,
    getCommentsByQuestion,
};
