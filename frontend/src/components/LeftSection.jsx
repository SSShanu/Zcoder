import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the 'useNavigate' hook
import './LeftSection.css'; // Import the CSS file for styling
import img1 from '../assests/CE.jpg';
import img2 from '../assests/Courses.jpg';
import img3 from '../assests/questionPage.jpg';

const HomePageComponent = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="homepage-container">
            <div className="content">
                <div className="text-container">
                    <h1>Use the In-built Code-Editor</h1>
                    <p>Solve coding problems collaboratively in our development-friendly environment with your friends and colleagues.</p>
                    <button className="cta-button" onClick={() => handleNavigation('/Room')}>Use our Code-Editor →</button>
                </div>
                <div className="image-container">
                    <img src={img1} alt="Description1" />
                </div>
            </div>
            <div className="content">
                <div className="text-container">
                    <h1>Find the Best Courses</h1>
                    <p>Explore and discover top-rated courses and best learning resources from various platforms and subject areas.</p>
                    <button className="cta-button" onClick={() => handleNavigation('/courses')}>Explore Best courses →</button>
                </div>
                <div className="image-container">
                    <img src={img2} alt="Description2" />
                </div>
            </div>
            <div className="content">
                <div className="text-container">
                    <h1>Practice Problems</h1>
                    <p>Sharpen your skills by practicing a wide range of problems categorized based on difficulty levels and other factors.</p>
                    <button className="cta-button" onClick={() => handleNavigation('/practice')}>Practise Problems here →</button>
                </div>
                <div className="image-container">
                    <img src={img3} alt="Description3" />
                </div>
            </div>
        </div>
    );
};

export default HomePageComponent;
