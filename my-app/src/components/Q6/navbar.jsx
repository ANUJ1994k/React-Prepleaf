
import fontawesom from"https://kit.fontawesome.com/7a92fe9f24.js" 
import "./navbar.css"
import { useState } from "react";
import Gallery from "./gallery";
export function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return(
<div id="container">
<button className="hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul className={`nav-list ${isOpen ? 'show' : ''}`}>
                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                <li><a href="#"><i className="fas fa-images"></i> Gallery</a></li>
                <li><a href="#"><i className="fas fa-envelope"></i> Contact</a></li>
                <li><a href="#"><i className="fas fa-info-circle"></i> About</a></li>
            </ul>
            
              </div>

    )
}
