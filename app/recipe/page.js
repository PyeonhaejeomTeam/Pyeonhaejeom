import RecipeCard from "@/components/RecipeCard";
import Link from "next/link";

export default async function RecipePage() {
  // API 호출 부분 임시 제거
  const mockRecipes = [
    {
      id: 1,
      title: "편의점 라면 업그레이드",
      ingredients: ["진라면", "계란", "파", "치즈"],
      steps: ["라면을 끓인다", "계란을 넣는다", "치즈를 올린다", "파를 뿌린다"],
      totalPrice: 3000,
      time: "5",
      difficulty: "쉬움",
    },
    {
      id: 2,
      title: "1000원의 행복",
      ingredients: ["삼각김밥", "단무지"],
      steps: ["삼각김밥을 데운다", "단무지와 함께 먹는다"],
      totalPrice: 1000,
      time: "1",
      difficulty: "쉬움",
    },
  ];

  const categories = [
    {
      title: "🤫 직원들의 비밀 레시피",
      description: "편의점 직원들이 몰래 만들어 먹는 특별한 레시피",
      link: "/recipe/secret",
      bgColor: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
    },
    {
      title: "💰 1000원의 행복",
      description: "천원으로 만드는 특별한 한 끼",
      link: "/recipe/budget",
      bgColor: "bg-green-100",
      hoverColor: "hover:bg-green-200",
    },
    {
      title: "🌟 인기 레시피",
      description: "많은 사람들이 좋아하는 편의점 꿀조합",
      link: "/recipe/popular",
      bgColor: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-200",
    },
    {
      title: "🔥 신규 레시피",
      description: "새롭게 등록된 편의점 레시피",
      link: "/recipe/new",
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        편의점 레시피 모음 👨‍🍳
      </h1>
      <p className="text-gray-600 text-center mb-8">
        다양한 편의점 레시피를 카테고리별로 확인해보세요!
      </p>

      {/* 카테고리 그리드 */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className={`p-6 ${category.bgColor} ${category.hoverColor} rounded-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <h2 className="text-xl font-bold mb-2">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>

      {/* 최근 추가된 레시피 미리보기 */}
      <h2 className="text-2xl font-bold mb-6">최근 추가된 레시피 ✨</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {mockRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>

      {/* 더 많은 레시피 버튼 */}
      <div className="text-center mt-8">
        <Link
          href="/recipe/all"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
        >
          더 많은 레시피 보기
        </Link>
      </div>
    </div>
  );
}
