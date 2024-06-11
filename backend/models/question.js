const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    note:{
        type: String,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, { timestamps: true });

const Question = mongoose.model('Questions', questionSchema);

module.exports = Question;
