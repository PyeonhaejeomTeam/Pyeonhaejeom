import TestCard from "@/components/TestCard";

export default function TestPage() {
  const tests = [
    {
      title: "MBTI별 찰떡 편의점 음식",
      description: "당신의 MBTI와 가장 잘 어울리는 편의점 음식을 찾아보세요!",
      link: "/test/mbti",
      imageUrl: "/images/mbti-test.jpg",
    },
    {
      title: "연애 스타일 테스트",
      description: "편의점 음식 선택으로 알아보는 당신의 연애 스타일",
      link: "/test/love",
      imageUrl: "/images/love-test.jpg",
    },
    {
      title: "편의점 밸런스 게임",
      description: "당신의 선택은? 재미있는 편의점 밸런스 게임!",
      link: "/test/balance",
      imageUrl: "/images/balance-test.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        편의점 심리테스트 🎮
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test, index) => (
          <TestCard key={index} {...test} />
        ))}
      </div>
    </div>
  );
}
