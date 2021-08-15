import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className="navbar">
        <ul>
          <li><NavLink to="/">characters</NavLink> </li>
          <li><NavLink to="/locations">locations</NavLink></li>
          <li><NavLink to="/episodes">episodes</NavLink></li>
        </ul>
      </nav>
    );
}