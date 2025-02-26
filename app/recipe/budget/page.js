"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/components/recipe/RecipeCard";

export default function BudgetRecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBudgetRecipes = async () => {
      try {
        const response = await fetch("/api/getRecipes");
        const data = await response.json();
        // 1000원 이하의 레시피만 필터링
        const budgetRecipes = data.recipes.filter(
          (recipe) => recipe.totalPrice <= 1000
        );
        setRecipes(budgetRecipes);
      } catch (error) {
        console.error("레시피를 가져오는데 실패했습니다:", error);
      }
      setIsLoading(false);
    };

    fetchBudgetRecipes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">💰 1000원의 행복</h1>
      <p className="text-center text-gray-600 mb-8">
        천원으로 만드는 특별한 한 끼! 알뜰하게 즐기는 꿀조합을 소개합니다.
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
