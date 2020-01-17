import React from 'react';
import './foot.css';
import styled from 'styled-components';
import Media from '../../lib/utils/mediaquery';

// const FootWrapper = styled.div`
//     width: 100%;
//     .foot-wrapper {
//         background-color: #f9f9f9;
//         display: flex;
//         justify-content: center;
//         width: 100%;
//         ${Media.small`
//             margin-left: 36px;
//             margin-right: 36px;
//         `}
//     }
// `;

const Foot = () => {
    return (
        <div className="foot-wrapper">
            <div className = "foot-wrapper2">
                <div className="foot1">
                    <h1 className = "footer-main">안내</h1>
                    <h4 className = "foot-sub-col">서비스 이용약관</h4>
                    <h4 className = "foot-sub-col">개인정보 취급방침</h4>
                    <h4 className = "foot-sub-col">위치기반서비스 이용약관</h4>
                </div>
                <div className="foot2">
                    <h1 className = "footer-main">CONCAT</h1>
                    <h4 className = "foot-sub-col">콘캣주식회사 | 사업자 등록번호:460-86-01068 | 대표:김재엽</h4>
                    <h4 className = "foot-sub-col">서울시 서대문구 연세로50,공학원212A호 (우편번호:03722)</h4>
                    <h4 className = "foot-sub-col">통신판매신고번호:2008-서울서대문-0943</h4>
                </div>
            </div>
         </div>
    )
}

export default Foot;