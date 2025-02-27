"use client";

import { useState } from "react";
 import QuestionPage from "@/components/QuestionsContent";
import MBTITest from "@/components/MBTITest";
import questions from "@/assets/data/questionsData";  //questions.js 파일에서 질문들을 가져옵니다

export default function TestPage() {
  const [currentTest, setCurrentTest] = useState("food"); // 'food' 또는 'mbti'

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      {/* 테스트 선택 버튼 */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setCurrentTest("food")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentTest === "food"
                ? "bg-[#6366F1] text-white"
                : "bg-white text-[#6366F1] hover:bg-[#6366F1] hover:text-white"
            }`}
          >
            편의점 음식 추천
          </button>
          <button
            onClick={() => setCurrentTest("mbti")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentTest === "mbti"
                ? "bg-[#6366F1] text-white"
                : "bg-white text-[#6366F1] hover:bg-[#6366F1] hover:text-white"
            }`}
          >
            MBTI 테스트
          </button>
        </div>

        {/* 선택된 테스트 표시 */}
        {currentTest === "food" ? (
          <QuestionPage questions={questions} />
        ) : (
          <MBTITest />
        )}
      </div>
    </div>
  );
}
