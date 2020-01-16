import React from 'react';
import '../App.css';
import '../components/nav/nav.css';
import News from '../components/news/news';
import Pick from '../components/pick/pick';
import main from '../img/main.png';
import styled from 'styled-components';
import Media from '../lib/utils/mediaquery';


const StyledRootDiv = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
  .main-logo {
    width: 100%;
    display: flex;
    overflow: hidden;
    height: auto;
    margin-bottom: 80px;
  }
  .innerDiv2 {
    width : 900px;
    ${Media.small`width: 91.6%;`}
    .text-wrapper {
      width: 100%;
    }
  }
`;

const Home = () => {
    return (
      <StyledRootDiv>
        <img src= { main } className="main-logo" alt="main"/>
        
        <div className="innerDiv2">
          <div className="text-wrapper">
           <div className="main-news-text">읽어봐야할 NEWS 📄</div>
          </div>
          <News />
        </div>
        <Pick />
      </StyledRootDiv>
    );
}

export default Home;
