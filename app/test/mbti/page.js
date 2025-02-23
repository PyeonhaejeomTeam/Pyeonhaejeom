"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MBTITestPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const questions = [
    {
      question: "배고플 때 편의점에서 나는?",
      options: [
        { text: "계획했던 메뉴를 찾아본다", value: "J" },
        { text: "그때그때 끌리는 걸 고른다", value: "P" },
      ],
    },
    {
      question: "편의점 음식을 고를 때",
      options: [
        { text: "혼자만의 시간을 즐기며 천천히", value: "I" },
        { text: "친구들과 함께 수다떨며", value: "E" },
      ],
    },
    // 더 많은 MBTI 관련 질문들...
  ];

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (newAnswers.length === questions.length) {
      // 결과 페이지로 이동
      router.push(`/test/mbti/result?type=${newAnswers.join("")}`);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        MBTI별 찰떡 편의점 음식 찾기
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
