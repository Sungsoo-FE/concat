import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Magazine from './pages/magazine/magazine';
import Content from './pages/content';
import Header from './components/nav/nav';
import Foot from './components/footer/foot';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <div>
          <Route exact path ='/' component = { Home }/>
          <Route path = '/magazine' component = { Magazine }/>
          <Route path = "/content" component = { Content }/>
        </div>
        <Foot/>
      </Router>
    )
  }
}

export default App;
