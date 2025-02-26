"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import questions from "@/assets/data/questionsData";

export default function QuestionsContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      localStorage.setItem("surveyAnswers", JSON.stringify(newAnswers));
      router.push("/result");
    }
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center px-4">
      {/* 진행 상태 표시 */}
      <div className="text-[#6366F1] text-xl font-medium mb-16">
        {currentQuestion + 1} / {questions.length}
      </div>

      {/* 질문 제목 */}
      <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-[#7c3aed] to-[#10b981] text-transparent bg-clip-text mb-20">
        {currentQuestionData.question}
      </h2>

      {/* 선택지 */}
      <div className="w-full max-w-xl space-y-6">
        {currentQuestionData.options.map((option, index) => (
          <button
            key={index}
            className="w-full p-8 text-xl text-left bg-white rounded-3xl shadow-sm hover:shadow-md transition-all"
            onClick={() => handleAnswer(option.value)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
