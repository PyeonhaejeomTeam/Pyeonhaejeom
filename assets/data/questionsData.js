const questions = [
  {
    id: 1,
    question: "현재 예산이 어느 정도인가요?",
    options: [
      { text: "3,000원 이하", value: "low" },
      { text: "3,000원 ~ 5,000원", value: "medium" },
      { text: "5,000원 ~ 8,000원", value: "high" },
      { text: "8,000원 이상", value: "premium" }
    ]
  },
  {
    id: 2,
    question: "어떤 종류의 식사를 원하시나요?",
    options: [
      { text: "한식 (도시락, 김밥류)", value: "korean" },
      { text: "양식 (버거, 샌드위치류)", value: "western" },
      { text: "중식 (중화풍)", value: "chinese" },
      { text: "일식 (초밥, 우동류)", value: "japanese" }
    ]
  },
  {
    id: 3,
    question: "선호하는 맛의 강도는?",
    options: [
      { text: "매운맛", value: "spicy" },
      { text: "달콤한맛", value: "sweet" },
      { text: "담백한맛", value: "plain" },
      { text: "짭짤한맛", value: "salty" }
    ]
  },
  {
    id: 4,
    question: "식사량은 어느 정도가 좋으신가요?",
    options: [
      { text: "가볍게 한 끼", value: "light" },
      { text: "적당한 양", value: "medium" },
      { text: "든든하게", value: "heavy" },
      { text: "아주 배부르게", value: "extra" }
    ]
  },
  {
    id: 5,
    question: "주 재료는 무엇을 선호하시나요?",
    options: [
      { text: "육류 (닭고기, 돼지고기)", value: "meat" },
      { text: "해산물 (참치, 새우)", value: "seafood" },
      { text: "채소 위주", value: "vegetable" },
      { text: "가리지 않음", value: "any" }
    ]
  },
  {
    id: 6,
    question: "식사 시간은 얼마나 있으신가요?",
    options: [
      { text: "바로 먹을 수 있는 것", value: "instant" },
      { text: "1-2분 데우면 되는 것", value: "quick" },
      { text: "3-5분 조리 가능", value: "cook" },
      { text: "시간 여유 있음", value: "plenty" }
    ]
  },
  {
    id: 7,
    question: "건강을 고려하시나요?",
    options: [
      { text: "칼로리를 중요하게 생각함", value: "calorie" },
      { text: "영양가를 고려함", value: "nutrition" },
      { text: "맛있으면 상관없음", value: "taste" },
      { text: "가성비가 중요함", value: "value" }
    ]
  },
  {
    id: 8,
    question: "식사 후 디저트도 필요하신가요?",
    options: [
      { text: "달콤한 디저트 필수", value: "dessert_needed" },
      { text: "음료만 있어도 됨", value: "drink_only" },
      { text: "필요없음", value: "no_dessert" },
      { text: "상황에 따라", value: "depends" }
    ]
  },
  {
    id: 9,
    question: "현재 날씨/계절에 맞는 음식을 고르신다면?",
    options: [
      { text: "시원한 음식", value: "cold" },
      { text: "따뜻한 음식", value: "hot" },
      { text: "상관없음", value: "any_temp" },
      { text: "실온 음식", value: "room_temp" }
    ]
  },
  {
    id: 10,
    question: "새로운 메뉴에 대한 도전 의향이 있으신가요?",
    options: [
      { text: "익숙한 메뉴가 좋음", value: "safe" },
      { text: "가끔 새로운 메뉴 시도", value: "moderate" },
      { text: "새로운 메뉴 환영", value: "adventurous" },
      { text: "항상 새로운 메뉴 찾음", value: "explorer" }
    ]
  }
];

export default questions; 