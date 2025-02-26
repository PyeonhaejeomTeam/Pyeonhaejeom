"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import questions from "@/questions";

export default function QuestionPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // 모든 답변을 로컬 스토리지에 저장
      localStorage.setItem('surveyAnswers', JSON.stringify(newAnswers));
      // 결과 페이지로 이동
      router.push('/result');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center px-4">
      {/* 질문 번호 */}
      <div className="text-[#6366F1] text-xl font-medium mb-16">
        {currentQuestion + 1} / 10
      </div>
      
      {/* 질문 제목 */}
      <h2 className="text-[#6366F1] text-3xl font-bold text-center mb-20">
        {questions[currentQuestion].question}
      </h2>

      {/* 선택지 */}
      <div className="w-full max-w-xl space-y-6">
        {questions[currentQuestion].options.map((option, index) => (
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