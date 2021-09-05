import React from 'react';
import "./project.css";
import {ProjectData} from "../../../data/project";
import ProjectCard from "./project-card";
function Project() {
    const data=ProjectData;
    return (
    <div className="projects">
    <h1 className="section-title">Project</h1>
            <label className="project-title"></label>
            <div>
              {data.map((project)=>{
              return <ProjectCard project={project}/>;
              })}
            </div>
        </div>
    );
}

export default Project;
