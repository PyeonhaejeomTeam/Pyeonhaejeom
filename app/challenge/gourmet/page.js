"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/components/RecipeCard";

export default function GourmetChallengePage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/getRecipes");
        const data = await response.json();
        // 5000원 이하의 레시피만 필터링
        const gourmetRecipes = data.recipes.filter(
          (recipe) => recipe.totalPrice <= 5000
        );
        setRecipes(gourmetRecipes);
      } catch (error) {
        console.error("레시피를 가져오는데 실패했습니다:", error);
      }
      setIsLoading(false);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        5천원으로 호캉스 🍽️
      </h1>
      {isLoading ? (
        <div className="text-center">로딩 중...</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
