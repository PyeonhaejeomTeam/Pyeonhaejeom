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
  const progress = calculateProgress(currentQuestionIndex);

  return (
    <div className="question-container">
      {/* 진행 상태 표시 */}
      <div className="question-progress">
        {currentQuestionIndex + 1} / {mbtiQuestions.length}
      </div>

      {/* 질문 제목 */}
      <h2 className="question-title">{question.question}</h2>

      {/* 선택지 */}
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswer(option.value)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
