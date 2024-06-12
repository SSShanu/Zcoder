import React from 'react';
import Mainvideo from '../assests/video.mp4';
import './Hero.css'; // Import the CSS file for styling

const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={Mainvideo} type='video/mp4' />
        </video>
        <div className='hero-text'>
            <h1>Welcome To</h1>
            <h1>
                <span className='zcoder'>Zcoder</span> <span className='code-editor'>code editor</span>
            </h1>
            <p>The Ultimate Online Code Editor with Integrated Courses and Challenges to Elevate Your Coding Skills</p>
            <div className='btn-group'>
                <button className='btn'>Login</button>
                <button className='btn btn-outline'>Sign up</button>
            </div>
        </div>
    </div>
  );
};

export default Hero;
