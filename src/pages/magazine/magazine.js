import React from 'react';
import "./magazine.css";
import { Link } from "react-router-dom";

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
        <div className = "rootDiv">
            <div className = "mag_logo">
                <img className="mag_logo_img" src= { mag_logo } alt = "mag_logo"/>    
            </div>
            <div className = "main-wrap-wrapper">
                <div className = "main-wrapper">
                    <h2 className = "main-text">당신을 위한 매거진 🗒</h2>
                    <div className = "txt-wrapper"></div>
                    <input className="searchbar" name="keyword" placeholder = "매거진 검색하기"/>  
                </div>
            </div>
            <div className = "mag-wrapper">
                <div className= "maga">
                    <div className = "divChild">
                        <a className = "cate-box">보험</a>
                        <Link to = "/content" ><img src = { mag_img1 } className = "m-img" alt = "mag_img1"></img></Link>
                    </div>
                    <div className = "divChild">
                        <a className = "cate-box2">보험</a>
                        <Link to = "/content"><img src = { mag_img2} className = "m-img2" alt = "mag_img2"></img></Link> 
                    </div>
                </div>
                <div/>
                <div className = "maga">
                    <div className= "divChild">
                        <a className = "cate-box">주식</a>
                        <Link to = "/content" ><img src = { mag_img3 } className = "m-img" alt = "mag_img3"></img></Link> 
                    </div>
                    <div className= "divChild">
                        <a className = "cate-box2">가상화폐</a>
                        <Link to = "/content"><img src = { mag_img4 } className = "m-img2" alt = "mag_img4"></img></Link> 
                    </div>
                </div>
                <div/>
                <div className = "maga">
                    <div className = "divChild">
                        <a className = "cate-box">가상화폐</a>
                        <Link to = "/content"><img src = { mag_img5 } className = "m-img" alt = "mag_img5"></img></Link> 
                    </div>
                    <div className = "divChild">
                        <a className = "cate-box2">가상화폐</a>
                        <Link to = "/content"><img src = { mag_img6 } className = "m-img2" alt = "mag_img6"></img></Link> 
                    </div>
                </div>
                <div/>
                <div className = "maga">
                    <div className = "divChild">
                        <a className = "cate-box">가상화폐</a>
                        <Link to ="/content"><img src = { mag_img7 } className = "m-img" alt = "mag_img7"></img></Link> 
                    </div>
                    <div className = "divChild">
                        <a className = "cate-box2">가상화폐</a>
                        <Link to ="/content"><img src = { mag_img8 } className = "m-img2" alt = "mag_img8"></img></Link> 
                    </div>
                </div>
                <div/>
            </div>
        </div>
    );
}

export default Magazine;