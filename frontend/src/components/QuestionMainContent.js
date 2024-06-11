import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard';

const mainContentStyles = {
  flex: 1,
  padding: '20px',
  backgroundColor: '#1c1c1c',
  color: '#fff',
};

const tableStyles = {
  width: '100%',
  borderCollapse: 'collapse',
};

const headerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'left',
  borderBottom: '2px solid #444',
};

const QuestionMainContent = ({ selectedTopic }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const filteredQuestions = selectedTopic
    ? questions.filter(question => question.topic === selectedTopic)
    : questions;

  return (
    <div style={mainContentStyles}>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={headerStyles}>Problem</th>
            <th style={headerStyles}>Article</th>
            <th style={headerStyles}>YouTube</th>
            <th style={headerStyles}>Practice</th>
            <th style={headerStyles}>Note</th>
            <th style={headerStyles}>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuestions.map(question => (
            <QuestionCard key={question._id} question={question} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionMainContent;
