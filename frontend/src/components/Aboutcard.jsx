/*import React from "react";
import logo from '../logo1.jpg';
import './About.css'
const Aboutcard =(props) =>{
    return(
        <div>
         <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <h3>{props.name}</h3>
        <ul>
            <li>{props.education}</li>
            <li>{props.College}</li>
            <li>{props.location}</li>
            
        </ul>


        </div>
    );
}
export default Aboutcard;*/
import React from "react";
import logo from '../assests/vivek2.jpg';
import './About.css';

const Aboutcard = (props) => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <h3>{props.name}</h3>
            <ul>
                <li>{props.education}</li>
                <li>{props.college}</li>
                <li>{props.location}</li>
            </ul>
        </div>
    );
}

export default Aboutcard;
