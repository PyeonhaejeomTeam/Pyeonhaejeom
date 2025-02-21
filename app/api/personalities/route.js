import { personalities } from "@/app/assets/data/personalities";

export async function GET() {
  const personalities = {
    comfort: {
      type: "편안함 추구형",
      description: "안정적이고 검증된 맛을 선호하는 성향",
    },
    adventure: {
      type: "모험 추구형",
      description: "새롭고 독특한 맛을 탐험하기 좋아하는 성향",
    },
  };

  return Response.json({ personalities });
}
