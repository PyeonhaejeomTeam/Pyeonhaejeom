"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/components/recipe/budgetRecipe";
import NewRecipe from "@/components/recipe/newRecipe";

export default function NewRecipePage() {
  return (
    <div className="recipe-page">
      <NewRecipe />
    </div>
  );
}
