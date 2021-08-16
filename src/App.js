import React from 'react';
import './App.css';
import {Navbar} from './Navbar';
import {Bottom} from './Bottom';
import {Characters} from './Characters';
import {Episodes} from './Episodes';
import {Locations} from './Locations';
import {Character} from './Character';
import {Location} from './Location';
import { Episode } from './Episode';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  
  return (
    <Router>
      <Navbar />
      <h1 className="title" id="title">Consuming the Rick and Morty API</h1>
      <Switch>
      <Route path="/character/:id">
        <Character />
      </Route>
      <Route path="/location/:id">
        <Location />
      </Route>
      <Route path="/episode/:id">
        <Episode />
      </Route>
      <Route path="/locations">
        <Locations />
      </Route>
      <Route path="/episodes">
        <Episodes />
      </Route>
      <Route path="/">
        <Characters />
      </Route>
      </Switch>
      <Bottom />      
    </Router>
  );
}

export default App;
