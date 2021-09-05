import React from 'react'
import "./body.css";
import About from "./about/index";
import Project from "./project/index";
import Skills from "./skills/index";
import Contact from "./contact/index";
import Work from "./work/index";
function Body() {
    return (
    
        <div className="body">
            <section id="about">
                <About/>
            </section>
            <section id="project">
                <Project/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            <section id="work">
                <Work/>
            </section>
            <section id="Contact">
                <Contact/>
            </section>
        </div>
        
    );
}

export default Body;
