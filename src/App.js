import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Magazine from './components/magazine/magazine';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path ='/' component = { Home }/>
          <Route path = '/magazine' component = { Magazine }/>
        </div>
      </Router>
    )
  }
}

export default App;
