import React from 'react';
import './Footer.css';
import google from '../assests/google.jpg';
import facebook from '../assests/facebook.jpg';
import Instagram from '../assests/instagram.jpg';
import linkedin from '../assests/linkedin.jpg';
import youtube from '../assests/youtube.jpg';
import twitter from '../assests/twitter.jpg';
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
          <a ><img src={google} alt="Google" /></a>
          <a ><img src={facebook} alt="Facebook" /></a>
          <a ><img src={twitter} alt="Twitter" /></a>
          <a ><img src={Instagram} alt="Instagram" /></a>
          <a ><img src={youtube} alt="YouTube" /></a>
          <a ><img src={linkedin} alt="LinkedIn" /></a>
        </div>
        <p>Follow Us</p>
      </div>
    </footer>
  );
}

export default Footer;
