import React from 'react';
import './foot.css';

const Foot = () => {
    return (
        <div className="foot-wrapper">
            <span className="foot1">
                <h1 className = "footer-main">안내</h1>
                <h4 className = "footer-main">서비스 이용약관</h4>
                <h4 className = "footer-main">개인정보 취급방침</h4>
                <h4 className = "footer-main">위치기반서비스 이용약관</h4>
            </span>
            <span className="foot2">
                <h1 className = "footer-main">CONCAT</h1>
                <h4 className = "footer-main">콘캣주식회사 | 사업자 등록번호:460-86-01068 | 대표:김재엽</h4>
                <h4 className = "footer-main">서울시 서대문구 연세로50,공학원212A호 (우편번호:03722)</h4>
                <h4 className = "footer-main">통신판매신고번호:2008-서울서대문-0943</h4>
            </span>
         </div>
    )
}

export default Foot;