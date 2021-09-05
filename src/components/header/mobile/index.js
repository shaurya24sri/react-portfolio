import React from 'react'
import "./mobile.css";
function Mobile({isOpen,setisOpen}) {
    return (
        <div className="mobile">
        <div className="close-icon" onClick={ () =>setisOpen(!isOpen)}>
            <i class="fi-rr-cross-circle"></i>
            </div>
<div className="mobile-options">
            <div className="mobile-option">
            <a href="#project">
            Project
            </a>
        </div>
        <div className="mobile-option">
            <a href="#skill">
             Skills
            </a>
        </div>
        <div className="mobile-option">
            <a href="#work">
             Work
            </a>
        </div>
        <div className="mobile-option">
            <a href="#contact">
             Contact
            </a>
        </div>
         
</div>
      
        </div>
    )
}

export default Mobile;
