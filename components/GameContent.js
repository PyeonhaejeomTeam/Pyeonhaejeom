"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GameContent({ questions = [] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  // questions 데이터 유효성 검사
  if (!Array.isArray(questions) || questions.length === 0) {
    return <div className="loading">질문을 불러오는 중...</div>;
  }

  const question = questions[currentQuestion];
  if (!question) {
    return <div className="loading">질문을 준비하는 중...</div>;
  }

  // 결과 계산 함수
  const calculateResult = (answers) => {
    // 답변 결과에 따라 성향 타입 결정
    const answerCounts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    // 가장 많이 선택된 답변 찾기
    let maxCount = 0;
    let resultType = 'default';

    Object.entries(answerCounts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        resultType = type;
      }
    });

    return resultType;
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const resultType = calculateResult(newAnswers);
      router.push(`/result?type=${resultType}`);
    }
  };

  return (
    <div className="game_container">
      <div className="question_header">
        <span className="question_counter">
          {currentQuestion + 1} / {questions.length}
        </span>
        <h2 className="question_title">{question.text}</h2>
      </div>

      <div className="choices_container">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            className="choice_button"
            onClick={() => handleAnswer(choice.value)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
} 