"use client";

import { useState } from "react";
import BalanceGame from "@/components/BalanceGame";

export default function BalanceGamePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "당신의 선택은?",
      option1: "매일 아침 삼각김밥만 먹기",
      option2: "매일 저녁 컵라면만 먹기",
    },
    {
      question: "둘 중 하나만 평생 먹을 수 있다면?",
      option1: "치킨맛 과자",
      option2: "피자맛 과자",
    },
    {
      question: "편의점에서 마지막 한 개 남았을 때",
      option1: "내가 먼저 봤지만 양보하기",
      option2: "먼저 본 사람이 임자! 득템하기",
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        편의점 밸런스 게임
      </h1>
      <div className="max-w-2xl mx-auto">
        <BalanceGame {...questions[currentQuestion]} />
        {currentQuestion < questions.length - 1 && (
          <div className="text-center mt-8">
            <button
              onClick={handleNext}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
            >
              다음 질문
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
