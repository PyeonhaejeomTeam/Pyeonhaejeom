"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MBTIResultPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [result, setResult] = useState(null);

  const mbtiResults = {
    "EJ": {
      food: "불닭볶음면 + 치즈",
      description: "도전적이고 계획적인 당신! 매운맛도 체계적으로 즐기는 스타일"
    },
    "IP": {
      food: "삼각김밥 + 아이스커피",
      description: "혼자만의 시간을 즐기며 여유롭게 맛보는 것을 좋아하는 당신"
    },
    // 다른 MBTI 조합들...
  };

  useEffect(() => {
    if (type) {
      setResult(mbtiResults[type] || {
        food: "아무 편의점 음식",
        description: "어떤 음식이든 당신과 잘 어울려요!"
      });
    }
  }, [type]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        당신의 MBTI 맞춤 편의점 음식은?
      </h1>
      {result && (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            {result.food}
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {result.description}
          </p>
          <div className="text-center">
            <button
              onClick={() => window.location.href = "/test"}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
            >
              다른 테스트 하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 