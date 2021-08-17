import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className="navbar">
        <ul>
          <li><NavLink exact  to="rickAndmortyapi/">characters</NavLink> </li>
          <li><NavLink exact  to="rickAndmortyapi/locations">locations</NavLink></li>
          <li><NavLink exact  to="rickAndmortyapi/episodes">episodes</NavLink></li>
        </ul>
      </nav>
    );
}