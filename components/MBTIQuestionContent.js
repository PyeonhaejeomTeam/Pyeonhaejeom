import React, { useState } from "react";
import { calculateProgress } from "@/utils/mbtiUtils";
import mbtiQuestions from "@/assets/data/mbtiQuestionsData";

export default function MBTIQuestionContent({ onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestionIndex < mbtiQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const question = mbtiQuestions[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto">
      {/* 진행 상태 바 */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#6366F1] h-2 rounded-full transition-all duration-300"
            style={{ width: `${calculateProgress(currentQuestionIndex)}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-600 mt-2">
          {currentQuestionIndex + 1} / {mbtiQuestions.length}
        </p>
      </div>

      {/* 질문 */}
      <div className="bg-white rounded-[28px] p-8 shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          {question.question}
        </h2>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-6 text-left bg-white border-2 border-gray-200 rounded-[20px] hover:border-[#6366F1] hover:bg-[#F8F9FF] transition-all duration-200"
            >
              <span className="text-lg font-medium">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
