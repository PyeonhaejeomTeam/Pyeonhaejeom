import { results } from "@/app/assets/data/results";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const results = {
    comfort: {
      title: "편안함 추구형",
      description: "당신은 편안하고 안정적인 맛을 선호하는 스타일입니다.",
      recommendations: [
        {
          name: "삼각김밥 + 우동",
          description: "클래식한 조합으로 포근한 한 끼",
        },
        {
          name: "도시락 + 컵라면",
          description: "든든하고 따뜻한 식사",
        },
      ],
    },
    adventure: {
      title: "모험 추구형",
      description:
        "당신은 새롭고 독특한 맛을 탐험하기를 좋아하는 스타일입니다.",
      recommendations: [
        {
          name: "매운 과자 + 아이스크림",
          description: "달콤하고 매운 극과 극의 만남",
        },
        {
          name: "새우깡 + 초콜릿",
          description: "짭짤달달한 특별한 조합",
        },
      ],
    },
  };

  return Response.json({ result: results[type] || results.comfort });
}
