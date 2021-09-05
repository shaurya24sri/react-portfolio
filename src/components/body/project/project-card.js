import React from 'react'

import "./project-card.css";
function ProjectCard({project}) {
    return  <div className="project-card">
        <div className="project-info"> 
        <label className="project-title">{project.title}</label>
              <div className="project-links">
              {project.demo&& (
                  <a className="project-link" href={project.demo}>
               <div className="link-button">
               <i class="fi-rr-file-check"></i>Demo
               </div>
               </a>
               )}
               
               {project.github&& (
                  <a className="project-link" href={project.github}>
               <div className="link-button">
               <i class="devicon-github-original"></i>Github
               </div>
               </a>
               )}

              </div>


              <p>{project.about}</p>
              
        </div>
            <img src={project.image} className="project-photo" alt="imgs"/>
        </div>;
    
}

export default ProjectCard;
