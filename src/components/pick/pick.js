import React from 'react';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import './pick.css';

const Pick = () => {
    return (
        <div className="pick-wrapper">
            <h2 className="pick-text">보험플래너 PICK! 👈</h2>
            <div className="left-wrapper">
                <span className="pick-left">
                    <img src= { img1 } className="img1" alt="img1"></img>
                    <h2 className="pick-left">제목은 여기에 써요</h2>
                    <h4 className="pick-left">투자자의 성향에 맞게 상품군 3가지를 추천해 드릴게요! 여기에도 미리 보기를 쓰시면 됩니다.</h4>
                </span>
            </div>
            <div className="right-wrapper">
                <span className="pick">
                    <img src= { img2 } className="sub-img" alt="img2"></img>
                    <span className="img-sub-text">
                        <h2 className="img-text">케이뱅크 vs 카카오뱅크</h2>
                        <h4 className="img-text">블로그 글 내용 일부를 여기에 쓰면 됩니다. 미리보기</h4>
                    </span>
                </span>
                <span className="pick">
                    <img src= { img3 } className="sub-img" alt="img3"></img>
                    <span className="img-sub-text">
                        <h2 className="img-text">제목은 여기에 써요</h2>
                        <h4 className="img-text">블로그 글 내용의 일부를 여기에 쓰면 됩니다. 미리보기</h4> 
                    </span>
                </span>
                <span className="pick">
                    <img src= { img4 } className="sub-img" alt="img4"></img>
                    <span className="img-sub-text">
                        <h2 className="img-text">케이뱅크 vs 카카오뱅크</h2>
                        <h4 className="img-text">블로그 글 내용 일부를 여기에 쓰면 됩니다. 미리보기</h4>
                    </span>
                </span>
            </div> 
        </div>
    );
};

export default Pick;