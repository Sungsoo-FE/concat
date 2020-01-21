import React from 'react';
import './news.css';
import styled from 'styled-components';
import Media from '../../lib/utils/mediaquery';

const NewsWrapper = styled.div`
    width: 100%;
    .cate-wrapper {
        width: 100%;
        ${Media.small`
            margin-left: 36px;
            margin-right: 36px;
        `}
    }
`;
const News = ()=> {
    return (        
        <NewsWrapper>
            <div className = "cate-wrapper">
                <div className="categ-box" id="font-family1">보험</div>
                <tr className="text-box">
                    <a className = "news-deco" href="#"><td href="#news1" className="news-text">메리츠금융그룹, 내년부터 새로운 CI 도입</td></a>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news2" className="news-text">현대해상, 이대서울병원에 '힐리정글' 오픈</td></a>
                    </tr>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news3" className="news-text">KB생명, 해외 빈곤계층 아동 위한 '사랑의 책가방' 만들기…</td></a>
                    </tr>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news4" className="news-text">푸본현대생명, '어울림축제'에서 연말 '나눔의 정' 펼쳐</td></a>
                    </tr>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news5" className="news-text">생명보험사회공헌재단, 크리스마스 기념 영상 메세지 공개</td></a>
                    </tr>
                </tr>
            </div>
            <div className = "cate-wrapper">
                <div className="categ-box">금융</div>
                <tr className="text-box">
                    <a className = "news-deco" href="#"><td href="#news1" className="news-text">메리츠금융그룹, 내년부터 새로운 CI 도입</td></a>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news2" className="news-text">현대해상, 이대서울병원에 '힐리정글' 오픈</td></a>
                    </tr>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news3" className="news-text">KB생명, 해외 빈곤계층 아동 위한 '사랑의 책가방' 만들기…</td></a>
                    </tr>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news4" className="news-text">푸본현대생명, '어울림축제'에서 연말 '나눔의 정' 펼쳐</td></a>
                    </tr>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news5" className="news-text">생명보험사회공헌재단, 크리스마스 기념 영상 메세지 공개</td></a>
                    </tr>
                </tr>
            </div>
            <div className = "cate-wrapper">
                <div className="categ-box">핀테크</div>
                <tr className="text-box">
                    <a className = "news-deco" href="#"><td href="#news1" className="news-text">메리츠금융그룹, 내년부터 새로운 CI 도입</td></a>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news2" className="news-text">현대해상, 이대서울병원에 '힐리정글' 오픈</td></a>
                    </tr>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news3" className="news-text">KB생명, 해외 빈곤계층 아동 위한 '사랑의 책가방' 만들기…</td></a>
                    </tr>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news4" className="news-text">푸본현대생명, '어울림축제'에서 연말 '나눔의 정' 펼쳐</td></a>
                    </tr>
                    <tr>
                        <a className = "news-deco" href="#"><td href="#news5" className="news-text">생명보험사회공헌재단, 크리스마스 기념 영상 메세지 공개</td></a>
                    </tr>
                </tr>
            </div>
        </NewsWrapper>
    );
};

export default News;