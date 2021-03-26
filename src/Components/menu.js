import React from 'react'
import '../../src/menu.css';
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';

function Menu() {

  const [menu,setMenu] = useState([]);
  const [items,setItems] = useState({key: '', value: ''});
  const [submenu,setsubmenu] = useState([]);
  const [submenuitems,setSubmenuitems] = useState({key: '', value: ''})
  const [clickid,setClickid] = useState('');
  const [subclickid,setSubclickid] = useState('');

  let handleChange = (e) => {
    setItems({ ...items, value: e.target.value})
  }

  let handleChange2 = (e) => {
    setSubmenuitems({ ...submenuitems, value: e.target.value})
  }

  let handleClick = () => {
   var id = uuid();
    setItems({ ...items, key: id});
    setMenu([ ...menu, items]);
    console.log(menu);
  }

  let handleClick2 = (id) => {
   setSubclickid(id);
    setSubmenuitems({ ...submenuitems, key: id});
    setsubmenu([ ...submenu, submenuitems]);
    console.log(submenu);
    console.log(subclickid);
  }

let viewMore = (id) => {
  setClickid(id);
}

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
          <input type="text" onChange={handleChange2}></input>
        <div className="addmenu">
        <input type="text" onChange={handleChange} placeholder="DFIN" className="menuinput"></input>
        <FontAwesomeIcon icon={faPlus} className="faplus" onClick={handleClick}/>
        <FontAwesomeIcon icon={faExpand} className="faexpand"/>
        <FontAwesomeIcon icon={faArrowLeft} className="faarrowleft"/>
        </div>
        <ul>
        {menu.map(obj => (
          <div className="container">
          <li className="eachrow"><a href="#" onClick={viewMore.bind(this, obj.key)}>{obj.value}</a></li> 
        {obj.key == subclickid? 
        submenu.map(obj2 => (
           subclickid == obj2.key ?
            <li className="value">{obj2.value}</li> : null 
        )): null }
          <FontAwesomeIcon icon={faPlus} className="faplus2" onClick={handleClick2.bind(this, obj.key)}/>
        </div>
        ))}
        </ul>
        </div>
    </div>
  );
}

export default Menu;