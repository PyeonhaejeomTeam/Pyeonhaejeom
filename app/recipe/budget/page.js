"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/components/recipe/budgetRecipe";
import BudgetRecipe from "@/components/recipe/budgetRecipe";

export default function BudgetRecipePage() {
  return (
    <div className="recipe-page">
      <BudgetRecipe />
    </div>
  );
}
