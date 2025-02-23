import Link from "next/link";

export default function TestPage() {
  const testCategories = [
    {
      title: "MBTI별 찰떡 편의점 음식",
      description: "당신의 MBTI와 가장 잘 어울리는 편의점 음식을 찾아보세요!",
      link: "/test/mbti",
      bgColor: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
      emoji: "🎯",
    },
    {
      title: "연애 스타일 테스트",
      description: "편의점 음식 선택으로 알아보는 당신의 연애 스타일",
      link: "/test/love",
      bgColor: "bg-pink-100",
      hoverColor: "hover:bg-pink-200",
      emoji: "💝",
    },
    {
      title: "편의점 밸런스 게임",
      description: "당신의 선택은? 재미있는 편의점 밸런스 게임!",
      link: "/test/balance",
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      emoji: "⚖️",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        편의점 심리테스트 🎮
      </h1>
      <p className="text-gray-600 text-center mb-8">
        재미있는 편의점 테스트로 나의 성향을 알아보세요!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testCategories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className={`p-6 ${category.bgColor} ${category.hoverColor} rounded-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="text-4xl mb-4">{category.emoji}</div>
            <h2 className="text-xl font-bold mb-2">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500">매주 새로운 테스트가 업데이트됩니다!</p>
      </div>
    </div>
  );
}
