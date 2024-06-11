
/*import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
      <li style={styles.li} onClick={() => handleNavigation('/')}>
          Home
        </li>
        <li style={styles.li} onClick={() => handleNavigation('/Room')}>
         Code Editor Room
        </li>
        <li style={styles.li} onClick={() => handleNavigation('/questions')}>
          Questions
        </li>
        <li style={styles.li} onClick={() => handleNavigation('/courses')}>
          Courses
        </li>
        <li style={styles.li} onClick={() => handleNavigation('/profile')}>
          Profile
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#333',
    padding: '10px',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  li: {
    margin: '0 10px',
    cursor: 'pointer',
    color: '#fff',
  },
};

export default NavBar;*/
// Navbar.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import logo from '../logo1.jpg';

  
const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a  onClick={() => handleNavigation('/')}>Home</a></li>
          <li><a  onClick={() => handleNavigation('/Room')}>Code Editor Room</a></li>
          <li><a  onClick={() => handleNavigation('/questions')} >Questions</a></li>
          <li><a  onClick={() => handleNavigation('/courses')}>Courses</a></li>
          <li><a  onClick={() => handleNavigation('/profile')}>Profile</a></li>
          <li><a className='login' onClick={() => handleNavigation('/login')} >Login</a></li>
          <li><a className='login' onClick={() => handleNavigation('/signup')} >Signup</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;