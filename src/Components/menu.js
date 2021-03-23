import React from 'react'
import '../../src/menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

function Menu() {
  return (
    <div className="menu">
        <nav>
            <ul>
                <li><a href="#" id="all">All</a></li>
                <li><a href="#">Board</a></li>
                <li><a href="#">Graph</a></li>
                <li><a href="#">Recent</a></li>
            </ul>
        </nav>
        <div className="menucontainer">
        <div className="addmenu">
        <input type="text" placeholder="DFIN" className="menuinput"></input>
        <FontAwesomeIcon icon={faPlus} className="faplus"/>
        <FontAwesomeIcon icon={faExpand} className="faexpand"/>
        <FontAwesomeIcon icon={faArrowLeft} className="faarrowleft"/>
        </div>
        </div>
    </div>
  );
}

export default Menu;