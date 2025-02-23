export async function GET() {
  const recipes = [
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

  return Response.json({ recipes });
}
