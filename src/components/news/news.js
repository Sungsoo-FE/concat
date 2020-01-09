import React from 'react';
import './news.css';

const News = ()=> {
    return (        
        <div>
            <div>
                <a className="categ-box">보험</a>
                <tr className="text-box">
                    <a href="#"><td href="#news1" className="news-text">news1</td></a>
                    <tr>
                        <a href="#"><td href="#news2" className="news-text">news2</td></a>
                    </tr>
                    <tr>
                        <a href="#"><td href="#news3" className="news-text">news3</td></a>
                    </tr>
                    <tr>
                        <a href="#"><td href="#news4" className="news-text">news4</td></a>
                    </tr>
                </tr>
            </div>
            <div>
                <a className="categ-box">금융</a>
                <tr className="text-box">
                    <a href="#"><td href="#news1" className="news-text">news1</td></a>
                    <tr>
                        <a href="#"><td href="#news2" className="news-text">news2</td></a>
                    </tr>
                    <tr>
                        <a href="#"><td href="#news3" className="news-text">news3</td></a>
                    </tr>
                    <tr>
                        <a href="#"><td href="#news4" className="news-text">news4</td></a>
                    </tr>
                </tr>
            </div>
            <div>
                <a className="categ-box">핀테크</a>
                <tr className="text-box">
                    <a href="#"><td href="#news1" className="news-text">news1</td></a>
                    <tr>
                        <a href="#"><td href="#news2" className="news-text">news2</td></a>
                    </tr>
                    <tr>
                        <a href="#"><td href="#news3" className="news-text">news3</td></a>
                    </tr>
                    <tr>
                        <a href="#"><td href="#news4" className="news-text">news4</td></a>
                    </tr>
                </tr>
            </div>
        </div>
    );
};

export default News;