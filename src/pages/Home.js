import React from 'react';
import '../App.css';
import '../components/nav/nav.css';
import News from '../components/news/news';
import Pick from '../components/pick/pick';
import main from '../img/main.png';

const Home = () => {
    return (
      <div>
        <div>
          <img src= { main } className="main-logo" alt="main"></img>
        </div>
        <div className = "text-wrapper">
          <h2 className="main-news-text">읽어봐야할 NEWS 📄</h2>
        </div>
        <News />
        <Pick />
      </div>
    );
}

export default Home;
