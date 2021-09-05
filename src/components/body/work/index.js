import React from 'react'
import { Workdata } from '../../../data/work';
import WorkCard from './work-card';
import "./work.css";
function Work() {
    const data=Workdata;
    return (
        <div className="work">
            <label className="section-title">Work</label>
            <div className="work-list">
              {data.map((item)=>{
                 return(
                    <WorkCard item={item} />
                 );

              })}
            </div>
        </div>
    );
}

export default Work;
