import React from 'react';
import './LeftSection.css';
import { useNavigate } from 'react-router-dom';


const HomePageComponent = () => {

    const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

    return (
        <div className="homepage-container">
            <div className="content">
                <div className="text-container">
                    <h1>Use the In-built Code-Editor.</h1>
                    <p>Solve coding problems collaboratively in our development friendly environment with your friends and colleagues.</p>
                    <button className="cta-button" onClick={() => handleNavigation('/Room')}>Use our Code-Editor →</button>
                </div>
                <div className="image-container">
                    <img src="https://th.bing.com/th/id/R.6bf341683642c2257a7ca6bb5c9e81f4?rik=OXWTg8M4RIlGFA&pid=ImgRaw&r=0" alt="Desc" />
                </div>
            </div>
            <div className="content">
                <div className="text-container">
                    <h1>Use the In-built Code-Editor.</h1>
                    <p>Solve coding problems collaboratively in our development friendly environment with your friends and colleagues.</p>
                    <button className="cta-button" onClick={() => handleNavigation('/Room')}>Use our Code-Editor →</button>
                </div>
                <div className="image-container">
                    <img src="https://th.bing.com/th/id/R.6bf341683642c2257a7ca6bb5c9e81f4?rik=OXWTg8M4RIlGFA&pid=ImgRaw&r=0" alt="Desc" />
                </div>
            </div>
            <div className="content">
                <div className="text-container">
                    <h1>Use the In-built Code-Editor.</h1>
                    <p>Solve coding problems collaboratively in our development friendly environment with your friends and colleagues.</p>
                    <button className="cta-button">Use our Code-Editor →</button>
                </div>
                <div className="image-container" onClick={() => handleNavigation('/Room')}>
                    <img src="https://th.bing.com/th/id/R.6bf341683642c2257a7ca6bb5c9e81f4?rik=OXWTg8M4RIlGFA&pid=ImgRaw&r=0" alt="Desc" />
                </div>
            </div>
        </div>
        
    );
}

export default HomePageComponent;
