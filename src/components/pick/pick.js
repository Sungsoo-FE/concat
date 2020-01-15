import React from 'react';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import styled from 'styled-components';
import Media from '../../lib/utils/mediaquery';
import pick_img from '../../img/pick-s-img.png';

const StyledRootDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #f5f5f5; 
    padding-top: 59px;
    padding-bottom: 94px;
    margin-bottom: 70px;
    ${Media.small`
        padding-top: 23px;
        padding-bottom: 35px;
        margin-bottom: 26px;
    `}
    .innerDiv3 {
        width : 900px;
        
        display: flex;
        flex-wrap: wrap;
        ${Media.small`
            width: 91.6%;
            flex-wrap: no-wrap;
            flex-direction: column;
            align-items: center;
        `}
        justify-content: space-between;
        .right-wrapper {
            width: 436px;
            height: 620px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 36px;
        }
        .left-wrapper {
            width: 318px;
            align-self: flex-end;
            ${Media.small`
                align-self: center;
                margin-bottom: 69px;
            `}  
        }
        .pick-text{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            margin-bottom: 78px;
            font-weight: 900;
            font-size: 30px;
            ${Media.small`
                margin-bottom: 47px;
            `}  
        }

        .pick-left {
            width: 318px;
            height: auto;
            overflow: hidden;
        }

        .pick {
            height: auto;
            overflow: hidden;
            display: flex;

        }

        .img1 {
            display: flex;
            overflow: hidden;
            height: auto;
            margin-bottom: 25px;
        }

        .sub-img {
            width: 149px;
            height: 149px;
            border: lightgray;
            clear: both;
            overflow: hidden;
            margin-right: 17px;
        }

        .img-text {
            font-size: 25px;
            font-weight: bold;
        }
        .img-text-content {
            font-size: 20px;
        }
        .img-sub-text {
            width: 270px;
            height: auto;
        }
        .i-t-wrapper {
            display: flex;
            flex-direction: row;
            color: #707070;
            font-size: 18px;
            margin-top: 26px;
        }
        .i-t-wrapper2 {
            display: flex;
            flex-direction: row;
            color: #707070;
            font-size: 18px;
            margin-top: 24px;    
        }
    }
`;

const Pick = () => {
    return (
        <StyledRootDiv>
            <div className="innerDiv3">
                <div></div>
                <div className="pick-text">보험플래너 PICK! 👈</div>
                <div className="left-wrapper">
                    <span className="pick-left">
                        <img src= { img1 } className="img1" alt="img1"></img>
                        <div className="img-text">제목은 여기에 써요</div>
                        <div className="img-text-content">투자자의 성향에 맞게 상품군 3가지를 추천해 드릴게요! 여기에도 미리 보기를 쓰시면 됩니다.</div>
                        <div className = "i-t-wrapper"><img src = {pick_img} alt = "pickimg"/>  보험플래너 금융매거진</div>
                    </span>
                </div>
                <div className="right-wrapper">
                    <span className="pick">
                        <img src= { img2 } className="sub-img" alt="img2"></img>
                        <span className="img-sub-text">
                            <div className="img-text">케이뱅크 vs 카카오뱅크</div>
                            <div className="img-text-content">블로그 글 내용 일부를 여기에 쓰면 됩니다. 미리보기</div>
                        <div className = "i-t-wrapper2"><img src = {pick_img} alt = "pickimg"/>애디터 이름</div>
                        </span>
                    </span>
                    <span className="pick">
                        <img src= { img3 } className="sub-img" alt="img3"></img>
                        <span className="img-sub-text">
                            <div className="img-text">제목은 여기에 써요</div>
                            <div className="img-text-content">블로그 글 내용의 일부를 여기에 쓰면 됩니다. 미리보기</div> 
                        <div className = "i-t-wrapper2"><img src = {pick_img} alt = "pickimg"/>애디터 이름</div>
                        </span>
                    </span>
                    <span className="pick">
                        <img src= { img4 } className="sub-img" alt="img4"></img>
                        <span className="img-sub-text">
                            <div className="img-text">케이뱅크 vs 카카오뱅크</div>
                            <div className="img-text-content">블로그 글 내용 일부를 여기에 쓰면 됩니다. 미리보기</div>
                        <div className = "i-t-wrapper2"><img src = {pick_img} alt = "pickimg"/>에디터 이름</div>
                        </span>
                    </span>
                </div> 
            </div>
        </StyledRootDiv>
       
    );
};

export default Pick;