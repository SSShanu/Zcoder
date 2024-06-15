/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionSideBar from '../components/QuestionSideBar';
import NavBar from '../components/Navbar';
import AddQuestionModal from '../components/AddQuestionModal';
import CommentsModal from '../components/CommentsModal';

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:8000/questions');
      setQuestions(response.data);
      setFilteredQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    if (topic === 'All') {
      setFilteredQuestions(questions);
    } else {
      setFilteredQuestions(questions.filter(q => q.topic === topic));
    }
  };

  const handleAddQuestion = () => {
    setShowAddModal(true);
  };

  const handleShowComments = (question) => {
    setCurrentQuestion(question);
    setShowCommentsModal(true);
  };

  return (
    <div>
        <NavBar/>
    <div style={{ display: 'flex' }}>
      <QuestionSideBar onTopicSelect={handleTopicSelect} />
      <div style={{ width: '80%', padding: '10px' }}>
        <button onClick={handleAddQuestion}>Add Question</button>
        {filteredQuestions.map(question => (
          <div key={question._id} style={{ background: '#fff', padding: '10px', marginBottom: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <p>Topic: {question.topic}</p>
            <p>Difficulty: {question.difficulty}</p>
            <p>Link: <a href={question.link} target="_blank" rel="noopener noreferrer">{question.link}</a></p>
            <p>Platform: {question.platform}</p>
            <p>Note: {question.note}</p>
            <button onClick={() => handleShowComments(question)}>Comments</button>
          </div>
        ))}
      </div>
      {showAddModal && <AddQuestionModal closeModal={() => setShowAddModal(false)} />}
      {showCommentsModal && <CommentsModal question={currentQuestion} closeModal={() => setShowCommentsModal(false)} />}
    </div>
    </div>
  );
};

export default QuestionsPage;
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionSideBar from '../components/QuestionSideBar';
import NavBar from '../components/Navbar';
import AddQuestionModal from '../components/AddQuestionModal';
import CommentsModal from '../components/CommentsModal';
import './Questions.css';
const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.get('http://localhost:8000/questions', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setQuestions(response.data);
      setFilteredQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    if (topic === 'All') {
      setFilteredQuestions(questions);
    } else {
      setFilteredQuestions(questions.filter(q => q.topic === topic));
    }
  };

  const handleAddQuestion = () => {
    setShowAddModal(true);
  };

  const handleShowComments = (question) => {
    setCurrentQuestion(question);
    setShowCommentsModal(true);
  };

  return (
    <div className="questions-page">
      <NavBar />
      <div className="questions-container" >
        <QuestionSideBar onTopicSelect={handleTopicSelect} />
        <div className="questions-content">
          <button   className="add-question-btn" onClick={handleAddQuestion}>Add Question</button>
          {filteredQuestions.map(question => (
            <div key={question._id} className="question-card" >
              <p>Topic: {question.topic}</p>
              <p>Difficulty: {question.difficulty}</p>
              <p>Link: <a href={question.link} target="_blank" rel="noopener noreferrer">{question.link}</a></p>
              <p>Platform: {question.platform}</p>
              <p>Note: {question.note}</p>
              <button  className="comments-btn" onClick={() => handleShowComments(question)}>Comments</button>
            </div>
          ))}
        </div>
        {showAddModal && <AddQuestionModal closeModal={() => setShowAddModal(false)} />}
        {showCommentsModal && <CommentsModal question={currentQuestion} closeModal={() => setShowCommentsModal(false)} />}
      </div>
    </div>
  );
};

export default QuestionsPage;
 