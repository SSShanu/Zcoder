import React, { useState, useEffect } from 'react';
import axios from 'axios';

const rowStyles = {
  borderBottom: '1px solid #444',
  padding: '10px',
};

const cellStyles = {
  padding: '10px',
};

const iconStyles = {
  width: '24px',
  height: '24px',
  cursor: 'pointer',
};

const buttonStyles = {
  backgroundColor: '#444',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
};

const notePopupStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  color: '#000',
  padding: '20px',
  borderRadius: '10px',
  zIndex: 1000,
};

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
};

const QuestionCard = ({ question }) => {
  const [isNotePopupOpen, setNotePopupOpen] = useState(false);
  const [isCommentsPopupOpen, setCommentsPopupOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const handleNoteClick = () => {
    setNotePopupOpen(true);
  };

  const handleCommentsClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/questions/${question._id}/comments`);
      setComments(response.data);
      setCommentsPopupOpen(true);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const closePopups = () => {
    setNotePopupOpen(false);
    setCommentsPopupOpen(false);
  };

  return (
    <>
      <tr style={rowStyles}>
        <td style={cellStyles}>{question.title}</td>
        <td style={cellStyles}>
          <a href={question.articleLink} target="_blank" rel="noopener noreferrer">
            <img src="/icons/article-icon.png" alt="Article" style={iconStyles} />
          </a>
        </td>
        <td style={cellStyles}>
          <a href={question.youtubeLink} target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube-icon.png" alt="YouTube" style={iconStyles} />
          </a>
        </td>
        <td style={cellStyles}>
          <a href={question.practiceLink} target="_blank" rel="noopener noreferrer">
            <img src="/icons/practice-icon.png" alt="Practice" style={iconStyles} />
          </a>
        </td>
        <td style={cellStyles}>
          <button style={buttonStyles} onClick={handleNoteClick}>+</button>
          <button style={buttonStyles} onClick={handleCommentsClick}>Comments</button>
        </td>
        <td style={cellStyles}>{question.difficulty}</td>
      </tr>

      {isNotePopupOpen && (
        <>
          <div style={overlayStyles} onClick={closePopups}></div>
          <div style={notePopupStyles}>
            <h2>Note</h2>
            <p>{question.note}</p>
            <button style={buttonStyles} onClick={closePopups}>Close</button>
          </div>
        </>
      )}

      {isCommentsPopupOpen && (
        <>
          <div style={overlayStyles} onClick={closePopups}></div>
          <div style={notePopupStyles}>
            <h2>Comments</h2>
            <ul>
              {comments.map(comment => (
                <li key={comment._id}>{comment.content}</li>
              ))}
            </ul>
            <button style={buttonStyles} onClick={closePopups}>Close</button>
          </div>
        </>
      )}
    </>
  );
};

export default QuestionCard;
