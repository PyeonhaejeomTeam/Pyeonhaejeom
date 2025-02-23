"use client";

import { useState, useEffect } from "react";
import FoodCard from "@/components/FoodCard";

export default function TimeChallengePage() {
  const [timeLeft, setTimeLeft] = useState(180); // 3분 = 180초
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isStarted, timeLeft]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        3분 찰떡 조합 챌린지
      </h1>
      <div className="text-center mb-8">
        <div className="text-4xl font-bold mb-4">
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </div>
        {!isStarted ? (
          <button
            onClick={() => setIsStarted(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded-full"
          >
            시작하기
          </button>
        ) : (
          <p className="text-lg">최고의 조합을 찾아보세요!</p>
        )}
      </div>
    </div>
  );
}
