import React, { useState } from 'react';
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

const AddQuestionModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    topic: '',
    difficulty: '',
    link: '',
    platform: '',
    note: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post('http://localhost:8000/questions', formData, config);
      closeModal();
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <>
      <div style={overlayStyles} onClick={closeModal}></div>
      <div style={modalStyles}>
        <h2>Add New Question</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Topic</label>
            <input type="text" name="topic" value={formData.topic} onChange={handleChange} required />
          </div>
          <div>
            <label>Difficulty</label>
            <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange} required />
          </div>
          <div>
            <label>Link</label>
            <input type="text" name="link" value={formData.link} onChange={handleChange} required />
          </div>
          <div>
            <label>Platform</label>
            <input type="text" name="platform" value={formData.platform} onChange={handleChange} required />
          </div>
          <div>
            <label>Note</label>
            <textarea name="note" value={formData.note} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Add Question</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </>
  );
};

export default AddQuestionModal;
