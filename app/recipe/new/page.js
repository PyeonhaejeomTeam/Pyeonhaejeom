"use client";

import { useState, useEffect } from "react";
import NewRecipe from "@/components/recipe/newRecipe";

export default function NewRecipePage() {
  const newRecipes = [
    {
      id: 1,
      title: "아이스크림 샌드위치 라면",
      ingredients: ["진라면", "바닐라 아이스크림", "체다치즈", "후추"],
      steps: [
        "라면을 끓인다",
        "면이 익으면 스프를 넣고 체다치즈를 올린다",
        "그릇에 옮기고 가운데 바닐라 아이스크림을 올린다",
        "후추를 살짝 뿌린다",
      ],
      totalPrice: 5000,
      time: "8",
      difficulty: "어려움",
    },
    {
      id: 2,
      title: "과자 크러스트 치킨",
      ingredients: ["치킨너겟", "포카칩", "케찹", "마요네즈"],
      steps: [
        "포카칩을 곱게 부순다",
        "치킨너겟을 전자레인지에 데운다",
        "치킨너겟에 케찹과 마요네즈를 바른다",
        "부순 포카칩을 골고루 묻힌다",
      ],
      totalPrice: 4500,
      time: "5",
      difficulty: "보통",
    },
  ];

  return (
    <div className="recipe-page">
      <h1 className="text-3xl font-bold text-center mb-8">신규 레시피 🔥</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {newRecipes.map((recipe) => (
          <NewRecipe key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
