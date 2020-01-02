import React, { Component } from 'react';
import '../App.css';
import '../components/nav/nav.css';
import Header from '../components/nav/nav';
import News from '../components/news/news';
import Pick from '../components/pick/pick';
import Foot from '../components/footer/foot';
import main from '../img/main.png';

const Home = () => {
    return (
      <div>
        <Header/>
        <span>
          <img src= { main } className="main-logo" alt="main"></img>
        </span>
        <div>
          <h2 className="main-text">읽어봐야할 NEWS <span>📄</span></h2>
        </div>
        <div>
          <News />
        </div>
        <div>
          <Pick />
        </div>
        <div>
          <Foot />
        </div>
      </div>
    );
}

export default Home;
