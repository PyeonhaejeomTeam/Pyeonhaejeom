export const questions = [
  {
    id: 1,
    question: "배가 고픈 당신, 편의점에서 가장 먼저 보는 곳은?",
    choices: [
      {
        id: "A",
        text: "도시락 코너",
        type: "meal_lover",
        tags: ["healthy", "filling"]
      },
      {
        id: "B",
        text: "과자 코너",
        type: "snack_lover",
        tags: ["sweet", "quick"]
      },
      {
        id: "C",
        text: "음료 냉장고",
        type: "drink_lover",
        tags: ["refresh", "light"]
      },
      {
        id: "D",
        text: "라면 코너",
        type: "ramen_lover",
        tags: ["hot", "comfort"]
      }
    ]
  },
  {
    id: 2,
    question: "오늘 편의점에서 음식을 고르는 당신의 상황은?",
    choices: [
      {
        id: "A",
        text: "든든하게 배를 채우고 싶어요",
        type: "meal_lover",
        tags: ["filling", "value"]
      },
      {
        id: "B",
        text: "달달한 게 당기네요",
        type: "snack_lover",
        tags: ["sweet", "mood"]
      },
      {
        id: "C",
        text: "가볍게 먹고 싶어요",
        type: "drink_lover",
        tags: ["light", "healthy"]
      },
      {
        id: "D",
        text: "따뜻한 게 먹고 싶어요",
        type: "ramen_lover",
        tags: ["hot", "comfort"]
      }
    ]
  },
  {
    id: 3,
    question: "편의점 음식을 고를 때 가장 중요하게 생각하는 것은?",
    choices: [
      {
        id: "A",
        text: "가성비가 좋아야죠",
        type: "value_seeker",
        tags: ["value", "filling"]
      },
      {
        id: "B",
        text: "맛있으면 가격은 상관없어요",
        type: "gourmet",
        tags: ["taste", "quality"]
      },
      {
        id: "C",
        text: "칼로리를 꼭 체크해요",
        type: "health_conscious",
        tags: ["healthy", "light"]
      },
      {
        id: "D",
        text: "양이 많아야 해요",
        type: "big_portion",
        tags: ["filling", "value"]
      }
    ]
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
