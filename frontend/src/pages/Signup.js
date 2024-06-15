// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';
import NavBar from '../components/Navbar';
import logo from '../logo1.jpg';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/auth/signup', { username, email, password });
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className='SSS'>
<NavBar />
    <form onSubmit={handleSubmit}>
      <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <img src={logo} alt="Zcoder Logo" className="brand-logo" />
        </div>
        <div className="welcome-text">
          <h1>Welcome.</h1>
          <p>To keep connected, please login with your personal info</p>
          <button className="login-btn" onClick={() => handleNavigation('/login')}>SIGN IN</button>
        </div>
      </div>
      <div className="login-right">
        <h2>Create Account</h2>
        <p> use your email for registration:</p>
        <form className="login-form">
        <div className="form-group">
            <label htmlFor="name">Username</label>
            <input type="text" id="name" name="name" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          
          <button type="submit" className="signup-btn" >SIGN UP</button>
        </form>
      </div>
    </div>
    </form>
    </div>
  );
};

export default Signup;
    /*<form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Signup</button>
    </form>*/