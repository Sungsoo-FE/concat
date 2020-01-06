import React from 'react';
import logo from '../../img/logo.png';
import './nav.css';
import { Link } from "react-router-dom";

const Header=() => {
    return (
        <div>
            <header className="main-header">
                <nav className="topnav">
                    <Link to ="/">
                    <img src={ logo } className="App-logo" alt="logo"/></Link>
                    <Link to ="/magazine" className="App-Nav">MAGAZINE</Link>
                    <Link to ="/" className="nav-active">HOME</Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;