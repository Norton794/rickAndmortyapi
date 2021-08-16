import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className="navbar">
        <ul>
          <li><NavLink exact  to="/">characters</NavLink> </li>
          <li><NavLink exact  to="/locations">locations</NavLink></li>
          <li><NavLink exact  to="/episodes">episodes</NavLink></li>
        </ul>
      </nav>
    );
}