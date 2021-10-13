import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/index';
import { Bottom } from './components/Bottom/index';
import {Characters} from './components/Characters/index';
import {Episodes} from './components/Episodes/index';
import {Locations} from './components/Locations/index';
import {Character} from './components/Character/index';
import {Location} from './components/Location/index';
import { Episode } from './components/Episode/index';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router basename="/rickAndmortyapi">
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
