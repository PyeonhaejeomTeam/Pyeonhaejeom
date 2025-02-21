export async function GET() {
  const menuItems = [
    { name: "삼각김밥", description: "간편한 한 끼" },
    { name: "도시락", description: "든든한 식사" },
    { name: "컵라면", description: "따뜻한 국물" },
    { name: "샌드위치", description: "신선한 간식" },
    { name: "김밥", description: "영양만점 식사" },
    { name: "버거", description: "든든한 간식" }
  ];

  return Response.json({ menuItems });
} 