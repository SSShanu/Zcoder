import React, { useState, useEffect } from 'react';
import axios from 'axios';

const modalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  zIndex: 1000,
  width: '400px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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

const CommentsModal = ({ question, closeModal }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/questions/${question._id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.post(`http://localhost:8000/questions/${question._id}/comments`, 
        { content: newComment, questionId: question._id }, 
        config
      );
      setNewComment('');
      fetchComments();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <>
      <div style={overlayStyles} onClick={closeModal}></div>
      <div style={modalStyles}>
        <h2>Comments</h2>
        <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '10px' }}>
          {comments.map(comment => (
            <div key={comment._id} style={{ background: '#f9f9f9', padding: '5px', marginBottom: '5px', borderRadius: '3px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
              {comment.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleAddComment}>
          <textarea 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)} 
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }} 
          />
          <button type="submit">Add Comment</button>
          <button type="button" onClick={closeModal}>Close</button>
        </form>
      </div>
    </>
  );
};

export default CommentsModal;
