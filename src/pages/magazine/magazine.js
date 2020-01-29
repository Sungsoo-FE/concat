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
                    <div className = "main-text">당신을 위한 매거진 🗒</div>
                    <input className="searchbar" name="keyword" placeholder = "매거진 검색하기"/>  
                </div>
            </div>
            <div className = "mag-wrapper">
                <div className= "maga">
                    <div className = "divChild">
                        <a className = "cate-box">해킹</a>
                        <a href = 'http://now.rememberapp.co.kr/2020/01/29/6536/' ><img src = { mag_img1 } className = "m-img" alt = "mag_img1"></img></a>
                    </div>
                    <div className = "divChild">
                        <a className = "cate-box2">콘텐츠</a>
                        <a href = 'http://now.rememberapp.co.kr/2020/01/28/6517/'><img src = { mag_img2} className = "m-img2" alt = "mag_img2"></img></a> 
                    </div>
                </div>
                <div/>
                <div className = "maga">
                    <div className= "divChild">
                        <a className = "cate-box">갭투자</a>
                        <a href = 'http://now.rememberapp.co.kr/2020/01/28/6508/' ><img src = { mag_img3 } className = "m-img" alt = "mag_img3"></img></a> 
                    </div>
                    <div className= "divChild">
                        <a className = "cate-box2">경제성장</a>
                        <a href = 'http://now.rememberapp.co.kr/2020/01/23/6501/'><img src = { mag_img4 } className = "m-img2" alt = "mag_img4"></img></a> 
                    </div>
                </div>
                <div/>
                <div className = "maga">
                    <div className = "divChild">
                        <a className = "cate-box">재테크</a>
                        <a href = 'http://now.rememberapp.co.kr/2020/01/22/6479/'><img src = { mag_img5 } className = "m-img" alt = "mag_img5"></img></a> 
                    </div>
                    <div className = "divChild">
                        <a className = "cate-box2">가상화폐</a>
                        <a href = "/content"><img src = { mag_img6 } className = "m-img2" alt = "mag_img6"></img></a> 
                    </div>
                </div>
                <div/>
                <div className = "maga">
                    <div className = "divChild">
                        <a className = "cate-box">가상화폐</a>
                        <a href ="/content"><img src = { mag_img7 } className = "m-img" alt = "mag_img7"></img></a> 
                    </div>
                    <div className = "divChild">
                        <a className = "cate-box2">가상화폐</a>
                        <a href ="/content"><img src = { mag_img8 } className = "m-img2" alt = "mag_img8"></img></a> 
                    </div>
                </div>
                <div/>
            </div>
        </div>
    );
}

export default Magazine;