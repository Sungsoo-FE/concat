import React, { Component } from 'react';
import logo from '../../img/logo.png';
import './nav.css';
import Magazine from '../magazine/magazine';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Magazine } from './pages';

const Header=() => {
    return (
        <div>
            <header className="main-header">
                <nav className="topnav">
                <img src={ logo } className="App-logo" alt="logo"/>
                <Link to="/Magazine" className="App-Nav">MAGAZINE</Link>
                <Link to="/Home" className="nav-active">HOME</Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;