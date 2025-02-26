import { NextResponse } from "next/server";

export async function GET() {
  // 임시 데이터
  const cuProducts = [
    {
      상품명: "도시락1",
      가격: 4500,
      이미지URL: "/placeholder.png",
      카테고리: "도시락",
    },
    {
      상품명: "김밥1",
      가격: 3000,
      이미지URL: "/placeholder.png",
      카테고리: "김밥",
    },
    {
      상품명: "샌드위치1",
      가격: 3500,
      이미지URL: "/placeholder.png",
      카테고리: "샌드위치",
    },
    {
      상품명: "샐러드1",
      가격: 4000,
      이미지URL: "/placeholder.png",
      카테고리: "샐러드",
    },
    {
      상품명: "컵라면1",
      가격: 1500,
      이미지URL: "/placeholder.png",
      카테고리: "면류",
    },
    {
      상품명: "과자1",
      가격: 2000,
      이미지URL: "/placeholder.png",
      카테고리: "과자",
    },
  ];

  return NextResponse.json(cuProducts);
}
