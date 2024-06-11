import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>Learning Resources</h3>
          <ul>
            <li><a href="#">Learning courses</a></li>
            <li><a href="#">Practice Problems</a></li>
            
            
          </ul>
        </div>
        <div className="footer-section">
          <h3>Programming Tools</h3>
          <ul>
            <li><a href="#">Online IDE</a></li>
            <li><a href="#">Practice Problems</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>More</h3>
          <ul>
            <li><a href="#"></a>FAQ's</li>
            
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Code Of Conduct</a></li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h3>Usage Policy</h3>
          <ul>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Other Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>www.zcoder.com</p>
        <div className="social-icons">
          <a href="#"><img src="path/to/google-icon.png" alt="Google" /></a>
          <a href="#"><img src="path/to/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="path/to/twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="" alt="Instagram" /></a>
          <a href="#"><img src="path/to/youtube-icon.png" alt="YouTube" /></a>
          <a href="#"><img src="path/to/linkedin-icon.png" alt="LinkedIn" /></a>
        </div>
        <p>Follow Us</p>
      </div>
    </footer>
  );
}

export default Footer;
