"use client";

import { useState, useEffect } from "react";
import FoodCard from "@/components/FoodCard";

export default function RandomChallengePage() {
  const [randomFood, setRandomFood] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomFood = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/getFood");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.foods.length);
      setRandomFood(data.foods[randomIndex]);
    } catch (error) {
      console.error("음식 데이터를 가져오는데 실패했습니다:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">랜덤 음식 도전 🎲</h1>
      <div className="text-center mb-8">
        <button
          onClick={getRandomFood}
          disabled={isLoading}
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
        >
          {isLoading ? "선택 중..." : "랜덤 음식 뽑기"}
        </button>
      </div>
      {randomFood && (
        <div className="max-w-md mx-auto">
          <FoodCard {...randomFood} />
        </div>
      )}
    </div>
  );
}
