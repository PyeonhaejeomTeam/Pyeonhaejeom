"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/components/recipe/RecipeCard";

export default function SecretRecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSecretRecipes = async () => {
      try {
        const response = await fetch("/api/getRecipes");
        const data = await response.json();
        // 직원들의 비밀 레시피만 필터링 (예시로 모든 레시피를 보여줍니다)
        setRecipes(data.recipes);
      } catch (error) {
        console.error("레시피를 가져오는데 실패했습니다:", error);
      }
      setIsLoading(false);
    };

    fetchSecretRecipes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        🤫 직원들의 비밀 레시피
      </h1>
      <p className="text-center text-gray-600 mb-8">
        편의점 직원들이 몰래 만들어 먹는 특별한 레시피를 공개합니다!
      </p>
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
