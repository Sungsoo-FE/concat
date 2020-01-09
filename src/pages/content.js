import React from "react";
import con_logo from "../img/content1/con_logo.png";
import mainimg from "../img/content1/mainimg.png";
import "./content.css";


const Content = () => {
    return (
        <div className = "con-title">
            <h1>미국 FA들이 답한 비법! </h1>
            <div className = "con-logo">
                <img src = { con_logo } alt = "con_logo"/>
                <a className = "con-text">보험플래너 <br/>
                <a className = "con-date">2019.12.26</a>
                </a>
            </div>
            <div className = "box-wrapper">
                <a className = "con-box"># 포함</a>
                <a className = "con-box"># 미국 FA</a>
            </div>
            <img src = { mainimg } className = "con-img" alt = "mainimg"/>
            <div>
            <a className = "con-main-text">
                <p>돈으로 사는 리크루팅 등 영업현장서 실적 제일주의 판쳐
                    과정 중시하고 장시 성과 통한 인사평가시스템 전환 절실
                </p>
                <p>
                    [한국보험신문=류상만 기자]2019년 한 해가 저물고 있다. 한국보험신문은 지난 1년 동안 '보험업계의 불
                    합리한 관행부터 걷어내자' 기획 시리즈를 통해 보험산업 신뢰와 장기적 발전을 저해하고 있는 잘못된 관
                    행을 짚어보고 개선 방안을 모색하는 기회를 가졌다.
                </p>
                <p>
                    기획 기사 가운데 가장 많이 언급된 부분은 판매 과정에서 나타나는 잘못된 관행에 대한 문제 제기였다. 실
                    적 우선주의에서 비롯된 부작용을 방지하기 위한 방안으로 제시한 매출 위주로 시상하는 보험왕 선발 제도
                    개선, 선지급 수당 분급 형태 전환 등은 시행에 들어간 보험사가 갈수록 늘고 있고 금융당국도 적극저으로
                    추진하고 있다.
                </p>
                <p>
                    폐해가 많은 리크루팅 관행도 거듭지적했다. '먹튀설계사' 사고가 잇따르고 있는 것은 경력직 스카우트 과
                    당경쟁이 원인이라는 점에서 신입 설계사 자체 육성시스템 구축과 50대 은퇴자 리크루팅시장 개방 등을
                    개선책으로 제시해 영업현장의 호평을 받았다.
                </p>
                <p>
                    보험상품 자체보다는 경품을 통해 보험상품을 반매하는 관행도 근본적으로 보험의 경쟁력을 떨어뜨릴 수
                    있다고 보고 업계에 개선 노력을 주문했다.
                </p>
            </a>
            </div>
        </div>
    );
};
export default Content;