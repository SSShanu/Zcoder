// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';
import NavBar from '../components/Navbar';
import logo from '../logo1.jpg';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
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
          <button className="login-btn" onClick={() => handleNavigation('/signup')}>SIGN UP</button>
        </div>
      </div>
      <div className="login-right">
        <h2>Welcome Back!</h2>
        <p>Login to your account</p>
        <form className="login-form">
       

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          
          <button type="submit" className="signup-btn">SIGN IN</button>
        </form>
      </div>
    </div>
    </form>
    </div>
  );
};

export default Login;
/*<div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <img src={logo} alt="Zcoder Logo" className="brand-logo" />
        </div>
        <div className="welcome-text">
          <h1>Welcome.</h1>
          <p>To keep connected, please login with your personal info</p>
          <button className="login-btn">SIGN IN</button>
        </div>
      </div>
      <div className="login-right">
        <h2>Create Account</h2>
        <p>or use your email for registration:</p>
        <form className="login-form">
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="signup-btn">SIGN UP</button>
        </form>
      </div>
    </div> */
/* <form onSubmit={handleSubmit}>
   <div className="login-container">
      <div className="title-container">
        <h1 className="welcome-text">Welcome.</h1>
      </div>
      <div className="login-form-container">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" value={email} id="username" name="username" placeholder="Enter your username" onChange={(e) => setEmail(e.target.value)}  required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>
      </div>
    </div>
    </form>
    <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
*/
