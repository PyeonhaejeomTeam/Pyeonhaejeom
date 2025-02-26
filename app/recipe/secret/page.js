"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/components/recipe/budgetRecipe";
import SecretRecipe from "@/components/recipe/secretRecipe";

export default function SecretRecipePage() {
  return (
    <div className="recipe-page">
      <SecretRecipe />
    </div>
  );
}
