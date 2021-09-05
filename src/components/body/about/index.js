import React from 'react';
import "./about.css";
function About() {
    return (
        <div className="about">
        <div className="about-top">
        <div className="about-info">
        Welcome to my portfolio<br></br>
        Hi! I am <span className="name">Shuarya Srivastava</span><br/>  Looking to expand my portfolio.
        <br/><br/>
        <div className="text">
       <div className="static">
          I'm a
       </div>
       <ul className="dynamic">  
       <li><span>Developer</span></li>
       

       </ul>
        </div>
        </div>

        <div className="about-photo">
            <img src={require('../../../assets/code.png').default} className="pic" alt="img"></img>
        </div>


        </div>
            
        </div>
    )
}

export default About;
