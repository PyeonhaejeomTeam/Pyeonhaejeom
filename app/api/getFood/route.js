export async function GET() {
  const foods = [
    {
      id: 1,
      name: "불닭볶음면 + 치즈",
      price: 3000,
      description: "매운맛 러버들의 인기 조합",
      imageUrl: "/foods/buldak.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "삼각김밥 + 참치마요",
      price: 1500,
      description: "언제 먹어도 실패없는 조합",
      imageUrl: "/foods/triangle.jpg",
      rating: 4.0,
    },
    {
      id: 3,
      name: "컵라면 + 삼각김밥",
      price: 2500,
      description: "한국인의 소울푸드",
      imageUrl: "/foods/ramen.jpg",
      rating: 4.2,
    },
  ];

  return Response.json({ foods });
}
