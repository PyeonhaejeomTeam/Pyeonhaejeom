"use client";

import { useState } from "react";
import QuestionPage from "@/components/QuestionsContent";
import MBTITest from "@/components/MBTITestContent";

export default function TestPage() {
  const [currentTest, setCurrentTest] = useState("food");

  return (
    <div className="test-page">
      <div className="test-container">
        {/* 페이지 타이틀 */}
        <h1 className="test-title">나에게 맞는 테스트</h1>
        <p className="test-description">
          당신의 성향을 파악하고 맞춤형 추천을 받아보세요
        </p>

        {/* 테스트 선택 버튼 */}
        <div className="test-selection">
          <div className="test-buttons">
            <button
              onClick={() => setCurrentTest("food")}
              className={`test-button ${
                currentTest === "food" ? "test-button-active" : ""
              }`}
            >
              <div className="test-button-title">편의점 음식 추천</div>
              <div className="test-button-subtitle">
                {currentTest === "food" ? "진행 중" : "나에게 맞는 음식 찾기"}
              </div>
            </button>
            <button
              onClick={() => setCurrentTest("mbti")}
              className={`test-button ${
                currentTest === "mbti" ? "test-button-active" : ""
              }`}
            >
              <div className="test-button-title">MBTI 테스트</div>
              <div className="test-button-subtitle">
                {currentTest === "mbti" ? "진행 중" : "나의 MBTI 알아보기"}
              </div>
            </button>
          </div>

          {/* 선택된 테스트 설명 */}
          <div className="selected-test-info">
            <h2 className="selected-test-title">
              {currentTest === "food"
                ? "편의점 음식 추천 테스트"
                : "MBTI 성향 테스트"}
            </h2>
            <p className="selected-test-description">
              {currentTest === "food"
                ? "당신의 취향과 선호도를 바탕으로 최적의 편의점 음식을 추천해드립니다."
                : "12가지 질문을 통해 당신의 MBTI 유형과 그에 맞는 추천 메뉴를 알아보세요."}
            </p>
          </div>

          {/* 테스트 컨텐츠 */}
          <div className="test-content">
            {currentTest === "food" ? <QuestionPage /> : <MBTITest />}
          </div>
        </div>
      </div>
    </div>
  );
}
