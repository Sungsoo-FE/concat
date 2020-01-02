import React, { Component }from 'react';
import './news.css';

const News = ()=> {
    return (        
        <div>
            <div>
                <a className="cate-box">보험</a>
                <span className="text-box">
                    <a href="#news1">news1</a><br/>
                    <a href="#news2">news2</a><br/>
                    <a href="#news3">news3</a><br/>
                    <a href="#news4">news4</a>
                </span>
            </div>
            <div>
                <a className="cate-box">금융</a>
                <span className="text-box">
                    <a href="#news1">news1</a><br/>
                    <a href="#news2">news2</a><br/>
                    <a href="#news3">news3</a><br/>
                    <a href="#news4">news4</a><br/>
                </span>
            </div>
            <div>
                <a className="cate-box">핀테크</a>
                <span className="text-box">
                    <a href="#news1">news1</a><br/>
                    <a href="#news2">news2</a><br/>
                    <a href="#news3">news3</a><br/>
                    <a href="#news4">news4</a><br/>
                </span>
            </div>
        </div>
    );
};

export default News;