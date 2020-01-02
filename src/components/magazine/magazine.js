import React, { Component } from 'react';
import Header from '../nav/nav';
import "./magazine.css";

import mag_logo from '../../img/magazine/mag_logo.png';
import logoimg from '../../img/magazine/logoimg.png';

const Magazine = () => {
    return (
        <div>
            <Header />
            <div>
                <img src = { mag_logo } className="mag_logo" alt="mag_logo">
                </img>
            </div>
            <div>
                <h2 className = "main-text">당신을 위한 매거진 <span>🗒</span> </h2>  
            </div>
        </div>
    );
}

export default Magazine;