import React, { Component } from 'react';
import Header from '../nav/nav';
import "./magazine.css";
import Foot from '../footer/foot';

import mag_logo from '../../img/magazine/mag_logo.png';
import mag_img1 from '../../img/magazine/img1.png';
import mag_img2 from '../../img/magazine/img2.png';
import mag_img3 from '../../img/magazine/img3.png';
import mag_img4 from '../../img/magazine/img4.png';
import mag_img5 from '../../img/magazine/img5.png';
import mag_img6 from '../../img/magazine/img6.png';
import mag_img7 from '../../img/magazine/img7.png';
import mag_img8 from '../../img/magazine/img8.png';

const Magazine = () => {
    return (
        <div>
            <Header />
            <div>
                <img src = { mag_logo } className="mag_logo" alt="mag_logo">
                </img>
            </div>
            <div>
                <h2 className = "main-text">당신을 위한 매거진 <span>🗒</span></h2>
                <input className="searchbar" name="keyword" placeholder = "Search"/>  
            </div>
            <div>
                <div className = "maga">
                    <div>
                        <a className = "cate-box">보험</a><br/>
                        <img src = { mag_img1 } className = "m-img" alt = "mag_img1"></img>  
                    </div>
                    <div>
                        <a className = "cate-box">보험</a>
                        <img src = { mag_img2} className = "m-img" alt = "mag_img2"></img>
                    </div>
                </div>
                <div className = "maga">
                    <div>
                        <a className = "cate-box">주식</a>
                        <img src = { mag_img3 } className = "m-img" alt = "mag_img3"></img>
                    </div>
                    <div>
                        <a className = "cate-box">가상화폐</a>
                        <img src = { mag_img4 } className = "m-img" alt = "mag_img4"></img>
                    </div>
                </div>
                <div className = "maga">
                    <div>
                        <a className = "cate-box">가상화폐</a>
                        <img src = { mag_img5 } className = "m-img" alt = "mag_img5"></img>
                    </div>
                    <div>
                        <a className = "cate-box">가상화폐</a>
                        <img src = { mag_img6 } className = "m-img" alt = "mag_img6"></img>
                    </div>
                </div>
                <div className = "maga">
                    <div>
                        <a className = "cate-box">가상화폐</a>
                        <img src = { mag_img7 } className = "m-img" alt = "mag_img7"></img>
                    </div>
                    <div>
                        <a className = "cate-box">가상화폐</a>
                        <img src = { mag_img8 } className = "m-img" alt = "mag_img8"></img>
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    );
}

export default Magazine;