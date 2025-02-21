import { questions } from "@/app/assets/data/questions";

export async function GET() {
  const questions = [
    {
      text: "배가 고플 때 당신은?",
      choices: [
        { text: "익숙한 메뉴로 안전하게", value: "comfort" },
        { text: "새로운 메뉴에 도전!", value: "adventure" },
      ],
    },
    {
      text: "편의점에서 고민할 때",
      choices: [
        { text: "항상 먹던 메뉴 선택", value: "comfort" },
        { text: "새로 나온 메뉴 시도", value: "adventure" },
      ],
    },
    {
      text: "음식 조합을 고를 때",
      choices: [
        { text: "검증된 조합만 선택", value: "comfort" },
        { text: "이색적인 조합 시도", value: "adventure" },
      ],
    },
  ];

  return Response.json({ questions });
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
