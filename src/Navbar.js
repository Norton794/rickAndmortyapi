import React from 'react';
import './App.css';

export const Navbar = () =>{
    return(
        <nav className="navbar">
        <ul>
          <li><a href="#" className="active">characters</a> </li>
          <li><a href="#">locations</a></li>
          <li><a href="#">episodes</a></li>
        </ul>
      </nav>
    );
}