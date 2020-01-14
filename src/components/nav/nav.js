import React from 'react';
import logo from '../../img/logo.png';
import './nav.css';
import { Link, NavLink } from "react-router-dom";

const Header=() => {
    return (
        <div className = "header-wrapper">
            <div className="main-header">
                <nav className="topnav">
                    <Link to ="/">
                    <img src={ logo } className="App-logo" alt="logo"/></Link>
                    <NavLink to ="/magazine" className="App-Nav" activeStyle = {{ color: 'blue'}}>MAGAZINE</NavLink>
                    <NavLink exact to ="/" className="App-Nav" activeStyle = {{ color: 'blue'}}>HOME</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;