import React, { useState, useEffect } from 'react';
import './App.css';
import {Navbar} from './Navbar';
import {Bottom} from './Bottom';
import {Characters} from './Characters';
import {Episodes} from './Episodes';
import {Locations} from './Locations.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  
  return (
    <Router>
      <Navbar />
      <h1 className="title" id="title">Consuming the Rick and Morty API</h1>
      <Route path="/">
        <Characters />
      </Route>
      <Route path="/locations">
        <Locations />
      </Route>
      <Route path="/episodes">
        <Episodes />
      </Route>
      <Bottom />      
    </Router>
  );
}

export default App;
