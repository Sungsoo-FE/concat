import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/nav/nav';
import News from './components/news/news';
import Pick from './components/pick/pick';
import Foot from './components/footer/foot';
import Magazine from './components/magazine/magazine';

import main from './img/main.png';

{/*<Router>
  <Route exact path="/" component={ Home } />
  <Route path="/magazine" component={ Magazine } />
</Router> */}


function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <span>
        <img src= { main } className="main-logo" alt="main"></img>
      </span>
      <div>
        <h2 className="main-text">읽어봐야할 NEWS <span>📄</span></h2>
      </div>
      <div>
        <News />
      </div>
      <div>
        <Pick />
      </div>
      <div>
        <Foot />
      </div>
    </div>
  );
}

export default App;
