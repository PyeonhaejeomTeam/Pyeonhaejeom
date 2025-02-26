import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "assets/data/cuData.csv");
    const fileContent = await fs.readFile(filePath, "utf-8");

    // CSV 파싱 (BOM 제거 및 올바른 줄바꿈 처리)
    const rows = fileContent
      .replace(/^\uFEFF/, "") // BOM 제거
      .split("\n")
      .filter((row) => row.trim()); // 빈 줄 제거

    // 헤더 제거
    const dataRows = rows.slice(1);

    // 데이터 파싱
    const products = dataRows
      .map((row) => {
        // 쉼표로 분리하되, 따옴표로 묶인 부분은 하나의 값으로 처리
        const matches = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
        if (!matches) return null;

        const [카테고리, 상품명, 가격, 이미지URL] = matches.map(
          (item) => item.replace(/^"|"$/g, "").trim() // 따옴표 제거 및 공백 제거
        );

        // 이미지 URL 수정
        let processedImageUrl = 이미지URL;
        if (이미지URL.startsWith("//")) {
          processedImageUrl = `https:${이미지URL}`;
        } else if (!이미지URL.startsWith("http")) {
          processedImageUrl = `https://${이미지URL}`;
        }

        return {
          카테고리,
          상품명,
          가격: 가격.includes("원") ? 가격 : `${가격}원`,
          이미지URL: processedImageUrl,
        };
      })
      .filter(Boolean); // null 값 제거

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error reading products:", error);
    return NextResponse.json(
      { error: "제품 데이터를 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
}
