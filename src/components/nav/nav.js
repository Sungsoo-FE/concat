import React from 'react';
import logo from '../../img/logo.png';
import './nav.css';
import Magazine from '../magazine/magazine';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../../App';

const Header=() => {
    return (
        <div>
            <header className="main-header">
                <nav className="topnav">
                    <img src={ logo } className="App-logo" alt="logo"/>
                    <a className="App-Nav" href="#MAGAZINE">MAGAZINE</a>
                    <a className="nav-active" href="#HOME">HOME</a>
                </nav>
            </header>
        </div>

        /*<div>
            <header className="main-header">
                <nav className="topnav">
                    <img src={ logo } className="App-logo" alt="logo"/>
                    <Link to="/magazine" className="App-Nav">MAGAZINE</Link>
                    <Link to="/" className="nav-active">HOME</Link>
                </nav>
            </header>
        </div>*/
    );
};

export default Header;