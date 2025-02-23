"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoveTestPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const questions = [
    {
      question: "데이트 중 편의점에 들어갔을 때 나는?",
      options: [
        { text: "상대방이 좋아할 만한 걸 고른다", value: "caring" },
        { text: "내가 먹고 싶은 걸 고른다", value: "honest" },
      ],
    },
    {
      question: "편의점 음식을 골랐는데 상대방이 별로라고 한다면?",
      options: [
        { text: "다른 걸 골라준다", value: "flexible" },
        { text: "내 선택을 설득한다", value: "determined" },
      ],
    },
    {
      question: "편의점 데이트를 제안받았을 때 나는?",
      options: [
        { text: "소소한 데이트도 좋다", value: "simple" },
        { text: "좀 더 특별한 곳을 제안한다", value: "romantic" },
      ],
    },
  ];

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (newAnswers.length === questions.length) {
      router.push(`/test/love/result?type=${newAnswers.join("")}`);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        편의점 음식으로 보는 연애 스타일
      </h1>
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-center">
          <div className="text-sm text-gray-600">
            {step + 1} / {questions.length}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6 text-center">
            {questions[step].question}
          </h2>
          <div className="space-y-4">
            {questions[step].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-purple-600 transition"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
