import React, { Component } from 'react';
import Nav from '../nav/nav';
import "./magazine.css";

import mag_logo from '../../img/magazine/mag_logo.png';
import logoimg from '../../img/magazine/logoimg.png';

function Magazine() {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <img src = { mag_logo } className="mag_logo" alt="mag_logo">
                    <h3>당신의 앞서가는 금융생활을 위한</h3>
                    <h3>보험플래너의 똑똑한 매거진!</h3>
                    <img src = { logoimg } className="logoimg" alt="logoimg"></img>
                </img>
            </div>
            <div>
                당신을 위한 매거진 <span>🗒</span> 
            </div>
        </div>
    )
}

export default Magazine;