"use client";

import { useState, useEffect } from "react";
import SecretRecipe from "@/components/recipe/secretRecipe";

export default function SecretRecipePage() {
  const secretRecipes = [
    {
      id: 1,
      title: "직원들의 비밀 라면 레시피",
      ingredients: ["진라면", "삼각김밥", "치즈", "계란", "김가루"],
      steps: [
        "라면을 끓이다가 면이 반쯤 익었을 때 삼각김밥을 넣는다",
        "치즈를 넣고 계란을 풀어 넣는다",
        "김가루를 뿌린다",
        "2분간 더 끓인다",
      ],
      totalPrice: 5500,
      time: "7",
      difficulty: "보통",
    },
    {
      id: 2,
      title: "숨겨진 디저트 꿀조합",
      ingredients: ["초코파이", "바닐라 아이스크림", "초코시럽", "아몬드"],
      steps: [
        "초코파이를 전자레인지에 10초간 데운다",
        "따뜻한 초코파이 위에 아이스크림을 올린다",
        "초코시럽을 뿌린다",
        "잘게 부순 아몬드를 올린다",
      ],
      totalPrice: 4000,
      time: "3",
      difficulty: "쉬움",
    },
  ];

  return (
    <div className="recipe-page">
      <h1 className="text-3xl font-bold text-center mb-8">
        직원들의 비밀 레시피 🤫
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {secretRecipes.map((recipe) => (
          <SecretRecipe key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
