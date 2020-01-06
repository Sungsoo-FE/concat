import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../../App';
import Magazine from '../../pages/magazine/magazine';
import Header from '../nav/nav';

export default () => (
    <Router>
        <Header />
        <Route path = "/" component = { App } />
        <Route path = "/magazine" component = { Magazine } />
    </Router>
)