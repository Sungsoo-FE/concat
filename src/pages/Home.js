import React from 'react';
import '../App.css';
import '../components/nav/nav.css';
import News from '../components/news/news';
import Pick from '../components/pick/pick';
import main from '../img/main.png';

const Home = () => {
    return (
      <div>
        <span>
          <img src= { main } className="main-logo" alt="main"></img>
        </span>
        <h2 className="main-text">읽어봐야할 NEWS <span>📄</span></h2>
        <News />
        <Pick />
      </div>
    );
}

export default Home;
