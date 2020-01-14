import React from 'react';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import styled from 'styled-components';
import Media from '../../lib/utils/mediaquery';

const StyledRootDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .innerDiv3 {
        width : 46.875%;
        ${Media.small`width: 91.6%;`}
        display: flex;
        flex-wrap: wrap;
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
        }
        .pick-text{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
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

            height: auto;
            font-size: 25px;
            overflow: hidden;
        }
        .img-text-content {
            font-size: 20px;
        }
        .img-sub-text {
            width: 270px;
            height: auto;
        }
        

    }
`;

const Pick = () => {
    return (
        <StyledRootDiv>
            <div className="innerDiv3">
                <div></div>
                <h2 className="pick-text">보험플래너 PICK! 👈</h2>
                <div className="left-wrapper">
                    <span className="pick-left">
                        <img src= { img1 } className="img1" alt="img1"></img>
                        <h2 className="img-text">제목은 여기에 써요</h2>
                        <div className="img-text-content">투자자의 성향에 맞게 상품군 3가지를 추천해 드릴게요! 여기에도 미리 보기를 쓰시면 됩니다.</div>
                    </span>
                </div>
                <div className="right-wrapper">
                    <span className="pick">
                        <img src= { img2 } className="sub-img" alt="img2"></img>
                        <span className="img-sub-text">
                            <h2 className="img-text">케이뱅크 vs 카카오뱅크</h2>
                            <div className="img-text-content">블로그 글 내용 일부를 여기에 쓰면 됩니다. 미리보기</div>
                        </span>
                    </span>
                    <span className="pick">
                        <img src= { img3 } className="sub-img" alt="img3"></img>
                        <span className="img-sub-text">
                            <h2 className="img-text">제목은 여기에 써요</h2>
                            <div className="img-text-content">블로그 글 내용의 일부를 여기에 쓰면 됩니다. 미리보기</div> 
                        </span>
                    </span>
                    <span className="pick">
                        <img src= { img4 } className="sub-img" alt="img4"></img>
                        <span className="img-sub-text">
                            <h2 className="img-text">케이뱅크 vs 카카오뱅크</h2>
                            <div className="img-text-content">블로그 글 내용 일부를 여기에 쓰면 됩니다. 미리보기</div>
                        </span>
                    </span>
                </div> 
            </div>
        </StyledRootDiv>
       
    );
};

export default Pick;