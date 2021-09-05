import React,{useState} from 'react'
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";

function Header() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className="header">
        <div className="title">
            Portfolio
        </div>
        <div className="menu">
        <div className="web-menu">
            <Web/>

        </div>
        <div className="mobile-menu">
        <div onClick={() => setisOpen(!isOpen)}>
        <i class="fi-rr-settings-sliders"></i>
            
        </div>
        {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen} />}
        </div>
        </div>
        </div>
    );
}

export default Header;
