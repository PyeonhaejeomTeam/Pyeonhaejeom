import { personalities } from "@/data/personalities";

export async function GET() {
  try {
    return Response.json({ personalities });
  } catch (error) {
    return Response.json(
      { error: "성향 데이터를 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
} 