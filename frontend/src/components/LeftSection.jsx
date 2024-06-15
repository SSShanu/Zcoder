import React from 'react';
import './LeftSection.css'; // Import the CSS file for styling
import img1 from '../pages/CodeEditor.jpg';
import img2 from '../pages/Courses.jpg';
import img3 from '../pages/Questions.jpg';

const HomePageComponent = () => {
    return (
        <div className="homepage-container">
            <div className="content">
                <div className="text-container">
                    <h1>Use the In-built Code-Editor</h1>
                    <p>Solve coding problems collaboratively in our development friendly environment with your friends and colleagues.</p>
                    <button className="cta-button">Use our Code-Editor →</button>
                </div>
                <div className="image-container">
                    <img src= {img1} alt="Desc" />
                </div>
            </div>
            <div className="content">
                <div className="text-container">
                    <h1>Find the Best Courses</h1>
                    <p>Explore and discover, top-rated courses and best learning resources from various platforms and subject areas.</p>
                    <button className="cta-button"> Explore Best courses  →</button>
                </div>
                <div className="image-container">
                    <img src= {img2} alt="Desc" />
                </div>
            </div>
            <div className="content">
                <div className="text-container">
                    <h1>Practice Problems</h1>
                    <p>Sharpen your skills by practicing a wide range of problems categorized based on difficulty levels and other factors.</p>
                    <button className="cta-button">Practise Problems here  →</button>
                </div>
                <div className="image-container">
                    <img src= {img3} alt="Desc" />
                </div>
            </div>
        </div>
        
    );
}

export default HomePageComponent;
