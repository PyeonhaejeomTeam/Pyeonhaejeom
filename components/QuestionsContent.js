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
    <div className="question-container">
      {/* 진행 상태 표시 */}
      <div className="question-progress">
        {currentQuestion + 1} / {questions.length}
      </div>

      {/* 질문 제목 */}
      <h2 className="question-title">{currentQuestionData.question}</h2>

      {/* 선택지 */}
      <div className="options-container">
        {currentQuestionData.options.map((option, index) => (
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
