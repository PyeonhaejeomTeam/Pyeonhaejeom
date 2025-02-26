"use client";

import Image from "next/image";

export default function RecipeCard({
  title,
  ingredients,
  steps,
  totalPrice,
  time,
  difficulty,
  imageUrl,
}) {
  // 이미지 URL이 '//'로 시작하면 'https:'를 추가
  const processedImageUrl = imageUrl?.startsWith("//")
    ? `https:${imageUrl}`
    : imageUrl || "/images/default-recipe.jpg";

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={processedImageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex space-x-4 mb-4 text-sm text-gray-600">
          <span>💰 {totalPrice}원</span>
          <span>⏰ {time}분</span>
          <span>난이도: {difficulty}</span>
        </div>
        <div className="mb-4">
          <h4 className="font-bold mb-2">준비물</h4>
          <ul className="list-disc list-inside text-gray-600">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">만드는 방법</h4>
          <ol className="list-decimal list-inside text-gray-600">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
