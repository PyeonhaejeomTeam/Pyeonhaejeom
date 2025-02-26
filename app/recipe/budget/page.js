"use client";

import { useState, useEffect } from "react";
import BudgetRecipe from "@/components/recipe/budgetRecipe";

export default function BudgetRecipePage() {
  const budgetRecipes = [
    {
      id: 1,
      title: "천원의 행복 세트",
      ingredients: ["삼각김밥", "컵라면"],
      steps: [
        "컵라면에 뜨거운 물을 붓는다",
        "3분간 기다린다",
        "삼각김밥을 데운다",
        "함께 먹는다",
      ],
      totalPrice: 1000,
      time: "3",
      difficulty: "쉬움",
    },
    {
      id: 2,
      title: "알뜰 도시락",
      ingredients: ["삼각김밥 2개", "계란", "단무지"],
      steps: [
        "삼각김밥을 데운다",
        "계란을 삶는다",
        "단무지를 곁들인다",
        "맛있게 먹는다",
      ],
      totalPrice: 2000,
      time: "5",
      difficulty: "쉬움",
    },
  ];

  return (
    <div className="recipe-page">
      <h1 className="text-3xl font-bold text-center mb-8">1000원의 행복 💰</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {budgetRecipes.map((recipe) => (
          <BudgetRecipe key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
