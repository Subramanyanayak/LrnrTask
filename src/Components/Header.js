import React from 'react'
import '../../src/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserPlus, faBell, faUserCircle  } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
      <div className="maincontainer">
          <h1 className="icon">&#9776;</h1>
        <div className="box">
            <FontAwesomeIcon icon={faSearch} className="searchicon"/>
            <input type="text" name="" className="search" placeholder="dfin"></input>
        </div>
        <div className="rightmenus">
        <FontAwesomeIcon icon={faUserPlus} className=""/>
        <button type="button" className="invitebtn">INVITE TEAM MEMBER</button>
        <FontAwesomeIcon icon={faBell} className=""/>
        <FontAwesomeIcon icon={faUserCircle} className="fausercircle"/>
        </div>
      </div>
    );
  }
  
  export default Header;