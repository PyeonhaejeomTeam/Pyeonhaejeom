import RecipeCard from "@/components/RecipeCard";
import Link from "next/link";

export default async function RecipePage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getRecipes`
  );
  const data = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        편의점 레시피 모음 👨‍🍳
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link
          href="/recipe/secret"
          className="p-4 bg-purple-100 rounded-lg hover:bg-purple-200"
        >
          🤫 직원들의 비밀 레시피
        </Link>
        <Link
          href="/recipe/budget"
          className="p-4 bg-green-100 rounded-lg hover:bg-green-200"
        >
          💰 1000원의 행복
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {data.recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
