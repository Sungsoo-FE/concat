import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Magazine from './pages/magazine/magazine';
import Content from './pages/content';
import Header from './components/nav/nav';
import Foot from './components/footer/foot';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';


const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  .innerDiv {
    width: 100%;
  }
`;
class App extends Component {
  render() {
    return (
      <Router>
        <StyledWrapper>
          <div className="innerDiv">
            <Header/>
            <Route exact path ='/' component = { Home }/>
            <Route path = '/magazine' component = { Magazine }/>
            <Route path = "/content" component = { Content }/>
            <Foot/>
          </div>
        </StyledWrapper>
      </Router>
    )
  }
}

export default App;
