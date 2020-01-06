import React from 'react';
import "./magazine.css";
import { Link } from "react-router-dom";

import mag_logo from '../../img/magazine/mag_logo.png';
import logo_img from '../../img/magazine/logoimg.png';
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
            <div class="mag_logo">
                <img src= { mag_logo } alt = "mag_logo"/>
                <div className = "text">
                    <h1> 당신의 앞서가는 금융생활을 위한 <br/> 보험플래너의 똑똑한 매거진! </h1>
                </div>
                <div className="logoimg"><img src= { logo_img } alt = "logoimg"/></div>
            </div>
            <div className = "main-wrapper">
                <h2 className = "main-text">당신을 위한 매거진 <span>🗒</span></h2>
                <input className="searchbar" name="keyword" placeholder = "매거진 검색하기"/>  
            </div>
            <div className = "mag-wrapper">
                <div className = "maga">
                    <div className = "cate-wrapper">
                        <a className = "cate-box">보험</a>
                        <Link to = "/content" ><img src = { mag_img1 } className = "m-img" alt = "mag_img1"></img></Link>
                    </div>
                    <div>
                        <a className = "cate-box2">보험</a>
                        <Link to = "/content"><img src = { mag_img2} className = "m-img2" alt = "mag_img2"></img></Link> 
                    </div>
                </div>
                <div className = "maga">
                    <div>
                        <a className = "cate-box">주식</a>
                        <Link to = "/content" ><img src = { mag_img3 } className = "m-img" alt = "mag_img3"></img></Link> 
                    </div>
                    <div>
                        <a className = "cate-box2">가상화폐</a>
                        <Link to = "/content"><img src = { mag_img4 } className = "m-img2" alt = "mag_img4"></img></Link> 
                    </div>
                </div>
                <div className = "maga">
                    <div>
                        <a className = "cate-box">가상화폐</a>
                        <Link to = "/content"><img src = { mag_img5 } className = "m-img" alt = "mag_img5"></img></Link> 
                    </div>
                    <div>
                        <a className = "cate-box2">가상화폐</a>
                        <Link to = "/content"><img src = { mag_img6 } className = "m-img2" alt = "mag_img6"></img></Link> 
                    </div>
                </div>
                <div className = "maga">
                    <div>
                        <a className = "cate-box">가상화폐</a>
                        <Link to ="/content"><img src = { mag_img7 } className = "m-img" alt = "mag_img7"></img></Link> 
                    </div>
                    <div>
                        <a className = "cate-box2">가상화폐</a>
                        <Link to ="/content"><img src = { mag_img8 } className = "m-img2" alt = "mag_img8"></img></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Magazine;