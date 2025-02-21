export const questions = [
  {
    id: 1,
    question: "배가 고픈 당신, 편의점에서 고르는 음식은?",
    choices: [
      {
        id: "A",
        text: "따뜻한 도시락이나 라면",
        type: "comfort",
      },
      {
        id: "B",
        text: "샌드위치나 삼각김밥",
        type: "practical",
      },
    ],
  },
  {
    question: "편의점에서 야식을 고를 때 당신은?",
    choices: [
      { text: "이미 먹어본 믿을 수 있는 메뉴", value: "stable" },
      { text: "새로 나온 신상 메뉴", value: "adventurous" },
    ],
  },
  {
    question: "라면을 끓일 때 당신은?",
    choices: [
      { text: "정확한 계량과 순서대로", value: "precise" },
      { text: "내 입맛대로 자유롭게", value: "creative" },
    ],
  },
  {
    question: "편의점 음식을 먹을 때 당신은?",
    choices: [
      { text: "따뜻하게 데워 먹는다", value: "warm" },
      { text: "차갑게 먹는다", value: "cool" },
    ],
  },
  {
    question: "과자를 고를 때 당신은?",
    choices: [
      { text: "한 봉지를 끝까지 먹는다", value: "persistent" },
      { text: "조금씩 여러 개를 먹는다", value: "diverse" },
    ],
  },
];
