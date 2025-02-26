"use client";

import { useState, useEffect } from "react";
import PopularRecipe from "@/components/recipe/popularRecipe";

export default function PopularRecipePage() {
  const popularRecipes = [
    {
      id: 1,
      title: "불닭볶음면 치즈 마요 꿀조합",
      ingredients: ["불닭볶음면", "체다치즈", "마요네즈", "파"],
      steps: [
        "불닭볶음면을 끓인다",
        "면이 거의 다 익을 때 체다치즈를 넣는다",
        "그릇에 옮기고 마요네즈를 뿌린다",
        "파를 송송 썰어 올린다",
      ],
      totalPrice: 4500,
      time: "10",
      difficulty: "보통",
    },
    {
      id: 2,
      title: "참치마요 삼각김밥",
      ingredients: ["삼각김밥", "참치캔", "마요네즈", "김가루"],
      steps: [
        "삼각김밥을 데운다",
        "참치와 마요네즈를 섞는다",
        "삼각김밥 위에 참치마요를 올린다",
        "김가루를 뿌린다",
      ],
      totalPrice: 3500,
      time: "5",
      difficulty: "쉬움",
    },
  ];

  return (
    <div className="recipe-page">
      <h1 className="text-3xl font-bold text-center mb-8">인기 레시피 🌟</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {popularRecipes.map((recipe) => (
          <PopularRecipe key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
