/*import React from "react";
import './About.css'
import Aboutcard from "./Aboutcard";
const About =() =>{
    return(
        <div className="about">
            <div className="container">
                <h2>Made by</h2>
                <p>The Ultimate Online Code Editor with Integrated Courses and Challenges to Elevate Your Coding Skills</p>
                <div className="card-container">
                    <div className="card">
                        <Aboutcard name="Prajpati vivek" education="2nd Year Btech" college="IIT Guwahati " loaction="Ahmedabad ,Gujarat"/>
                    </div>
                    <div className="card">
                        <Aboutcard name="Prajpati vivek" education="2nd Year Btech" college="IIT Guwahati " loaction="Ahmedabad ,Gujarat" />
                    </div>
                    <div className="card">
                        <Aboutcard name="Prajpati vivek" education="2nd Year Btech" college="IIT Guwahati " loaction="Ahmedabad ,Gujarat" />
                    </div>
                    <div className="card">
                        <Aboutcard name="Prajpati vivek" education="2nd Year Btech" college="IIT Guwahati " loaction="Ahmedabad ,Gujarat" />
                    </div>
                </div>
            </div>
        
        </div>
    );
}
export default About;*/
import React from "react";
import './About.css';

import logo from '../assests/vivek2.jpg';
import logo1 from '../assests/Shanu.jpg';
import logo2 from '../assests/wow.jpg';
import logo3 from '../assests/Hari.jpg';
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <h2>Made by</h2>
                <p>Crafting Excellence with Passion and Precision</p>
                <div className="card-container">
                    <div className="card">
                    <div>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <h3>Prajpati Vivek</h3>
            <ul>
                <li>2nd Year Btech</li>
                <li>IIT Guwahati</li>
                <li>+917016990353</li>
                <li><a href='https://www.linkedin.com/in/vivek-prajapati-4a4b20261'>LinkedIn</a></li>
            </ul>
        </div>
                       
                    </div>
                    <div className="card">
                    <div>
            <div className="logo">
                <img src={logo2} alt="Logo" />
            </div>
            <h3>Prashurjya Bhagwati</h3>
            <ul>
                <li>2nd Year Btech</li>
                <li>IIT Guwahati</li>
                <li>+917637952281</li>
                <li><a href='https://www.linkedin.com/in/prashurjya-bhagawati-b67770215/"'>LinkedIn</a></li>
            </ul>
        </div>
                        
                    </div>
                    <div className="card">
                    <div>
            <div className="logo">
                <img src={logo1} alt="Logo" />
            </div>
            <h3>Shanu Singh Sengar</h3>
            <ul>
                <li>2nd Year Btech</li>
                <li>IIT Guwahati</li>
                <li>+918602271108</li>
                <li><a href='https://www.linkedin.com/in/shanu-sengar-226b59261/'>LinkedIn</a></li>
            </ul>
        </div>
                        
                    </div>
                    <div className="card">
                    <div>
            <div className="logo">
                <img src={logo3} alt="Logo" />
            </div>
            <h3>Harishankar Yadav</h3>
            <ul>
                <li>2nd Year Btech</li>
                <li>IIT Guwahati</li>
                <li>+917067817996</li>
                <li><a href='https://www.linkedin.com/in/harishankar-yadav-7386a1280/'>LinkedIn</a></li>
            </ul>
        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
