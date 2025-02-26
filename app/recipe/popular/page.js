"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/components/recipe/budgetRecipe";
import PopularRecipe from "@/components/recipe/popularRecipe";

export default function PopularRecipePage() {
  return (
    <div className="recipe-page">
      <PopularRecipe />
    </div>
  );
}
