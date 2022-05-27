import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import Toggle from './Toggle/Toggle';

export default props => {
return (
<Menu>
 <a className="menu-item" href="/MyProfile">
 My Profile
</a>
<a className="menu-item" href="/eDiary">
 eDiary
 </a>
<a className="menu-item" href="/Education">
Education</a>
<a className="menu-item" href="/motivational">
Motivational
</a>



</Menu>

  );

};