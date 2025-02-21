import { questions } from "@/data/questions";

export async function GET() {
  try {
    return Response.json({ questions });
  } catch (error) {
    return Response.json(
      { error: "질문을 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { answers } = await request.json();
    // 답변을 처리하고 결과 타입을 계산하는 로직
    const resultType = calculateResult(answers);
    return Response.json({ resultType });
  } catch (error) {
    return Response.json(
      { error: "답변 처리에 실패했습니다." },
      { status: 500 }
    );
  }
}

function calculateResult(answers) {
  // 답변을 분석하여 결과 타입을 결정하는 로직
  // 예시로 comfort 타입 반환
  return "comfort";
}
