import { results } from "@/data/results";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (!type) {
      return Response.json(
        { error: "결과 타입이 지정되지 않았습니다." },
        { status: 400 }
      );
    }

    const result = results[type];
    if (!result) {
      return Response.json(
        { error: "해당 타입의 결과를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return Response.json({ result });
  } catch (error) {
    return Response.json(
      { error: "결과를 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
}
