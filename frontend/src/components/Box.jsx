import React from 'react';
import './Box.css'; // Import the CSS file for styling

const Box = () => {
    return (
        <div className="homepage-container">
            <div className="content">
                <div className="text-container">
                    <h1>Leave the binary tree behind.</h1>
                    <p>Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job.</p>
                    <button className="cta-button">Start free trial →</button>
                </div>
                <div className="image-container">
                    <img src="https://th.bing.com/th/id/OIP.a_NBaDZCwiV6fKa7XJ6B9AHaEK?rs=1&pid=ImgDetMain" alt="Sample" />
                </div>
            </div>
        </div>
    );
}

export default Box;