import React from 'react';

const QuestionSideBar = ({ onTopicSelect }) => {
  const topics = ['All', 'array', 'Tree', 'Graph', 'Dynamic Programming', 'String'];

  return (
    <div style={{ width: '20%', background: '#f0f0f0', padding: '10px' }}>
      {topics.map(topic => (
        <button key={topic} onClick={() => onTopicSelect(topic)} style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', background: '#ddd', border: 'none', cursor: 'pointer' }}>
          {topic}
        </button>
      ))}
    </div>
  );
};

export default QuestionSideBar;
