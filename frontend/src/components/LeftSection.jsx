import React from 'react';
import './LeftSection.css'; // Import the CSS file for styling

const HomePageComponent = () => {
    return (
        <div className="homepage-container">
            <div className="content">
                <div className="text-container">
                    <h1>Leave the binary tree behind.</h1>
                    <p>Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job.</p>
                    <button className="cta-button">Start free trial →</button>
                </div>
                <div className="image-container">
                    <img src="https://th.bing.com/th/id/R.6bf341683642c2257a7ca6bb5c9e81f4?rik=OXWTg8M4RIlGFA&pid=ImgRaw&r=0" alt="Desc" />
                </div>
            </div>
        </div>
    );
}

export default HomePageComponent;
