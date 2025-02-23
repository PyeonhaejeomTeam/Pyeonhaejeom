import { questions } from "@/assets/data/questions";

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
    {
      text: "새로운 식당을 발견했을 때",
      choices: [
        { text: "리뷰를 꼼꼼히 확인하고 결정", value: "comfort" },
        { text: "일단 도전해보고 판단", value: "adventure" },
      ],
    },
    {
      text: "메뉴 추천을 받았을 때",
      choices: [
        { text: "내가 좋아하는 맛인지 확인", value: "comfort" },
        { text: "일단 믿고 시도해보기", value: "adventure" },
      ],
    },
    {
      text: "해외여행 시 식사 선택",
      choices: [
        { text: "한식당이나 익숙한 음식점 찾기", value: "comfort" },
        { text: "현지 길거리 음식 도전", value: "adventure" },
      ],
    },
    {
      text: "친구들과 식사 장소 고를 때",
      choices: [
        { text: "자주 가던 단골집으로", value: "comfort" },
        { text: "새로 오픈한 맛집 탐방", value: "adventure" },
      ],
    },
    {
      text: "배달 음식 고를 때",
      choices: [
        { text: "늘 시키던 메뉴로 주문", value: "comfort" },
        { text: "새로운 가게 메뉴 도전", value: "adventure" },
      ],
    },
    {
      text: "식당 메뉴판을 볼 때",
      choices: [
        { text: "이전에 먹어본 메뉴 선택", value: "comfort" },
        { text: "처음 보는 메뉴에 도전", value: "adventure" },
      ],
    },
    {
      text: "새로운 음식 트렌드를 접했을 때",
      choices: [
        { text: "유행이 검증될 때까지 관망", value: "comfort" },
        { text: "남들보다 먼저 경험해보기", value: "adventure" },
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
